import psycopg2
from psycopg2.extras import RealDictCursor
import json

class DBManager:
    def __init__(self):
        self.connection = psycopg2.connect(
            dbname="project",
            user="postgres",
            password="93953",
            host="localhost",
            port="5432"
        )

    def init_db(self, script_path):
        try:
            with open(script_path, 'r', encoding='utf-8') as f:
                sql_script = f.read()
            
            with self.connection.cursor() as cur:
                cur.execute(sql_script)
                self.connection.commit()
        except FileNotFoundError:
            print(f"файла с скриптом нет")
        except Exception as e:
            print(f"ошибка скрипта")
            self.conn.rollback()

    def authenticate(self, email, password):
        query = 'SELECT * FROM "public"."USERS" WHERE "status" = %s AND "password" = %s'
        with self.connection.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(query, (email, password))
            return cursor.fetchone()

    def register(self, email, password, login):
        with self.connection.cursor() as cursor:
            cursor.execute('SELECT COALESCE(MAX(id), 0) + 1 FROM "public"."USERS"')
            new_id = cursor.fetchone()[0]
            
            user_query = """
                INSERT INTO "public"."USERS" ("id", "status", "password", "Login", "Gotten Tasks") 
                VALUES (%s, %s, %s, %s, 0) 
                RETURNING id
            """
            cursor.execute(user_query, (new_id, email, password, login))
            
            rating_query = 'INSERT INTO "Ratings" ("id", "user_id", "score", "league") VALUES (%s, %s, 0, %s)'
            cursor.execute(rating_query, (new_id, new_id, "Bronze"))
            
            self.connection.commit()
            return new_id

    def update_user(self, current_email, login, photo, email, password):
        query = """
            UPDATE "public"."USERS" 
            SET 
                "Login" = COALESCE(%s, "Login"), 
                "image" = COALESCE(%s, "image"),
                "status" = COALESCE(%s, "status"),
                "password" = COALESCE(%s, "password")
            WHERE "status" = %s
        """
        with self.connection.cursor() as cursor:
            cursor.execute(query, (login, photo, email, password, current_email))
            self.connection.commit()

    def get_user_stats(self, login):
        query = """
            SELECT 
                u."id", u."Login", u."Gotten Tasks", u."image",
                r.score, r.league,
                COUNT(s.id) as total_tries,
                COUNT(CASE WHEN s.is_correct = TRUE THEN 1 END) as success_tries
            FROM "public"."USERS" u
            LEFT JOIN "Ratings" r ON u.id = r.user_id
            LEFT JOIN "public"."Solved" s ON u.id = s.user_id
            WHERE u."Login" = %s
            GROUP BY u.id, r.score, r.league
        """
        with self.connection.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(query, (login,))
            stats = cursor.fetchone()
            
            if stats:
                total = stats['total_tries']
                success = stats['success_tries']
                stats['winrate'] = round((success / total * 100), 1) if total > 0 else 0
                
            return stats

    def get_tasks_range(self, start, count):
        query = 'SELECT * FROM "public"."Tasks" WHERE id >= %s LIMIT %s'
        with self.connection.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(query, (start, count))
            return cursor.fetchall()

    def get_task_by_id(self, task_id):
        query = 'SELECT * FROM "public"."Tasks" WHERE id = %s'
        with self.connection.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(query, (task_id,))
            return cursor.fetchone()

    def get_attack_details(self, attack_id):
        query = """
            SELECT a."Questions", t.name, t.explanation 
            FROM "public"."Ataks" a
            JOIN "Attack_Types" t ON a.attack_type_id = t.id
            WHERE a.id = %s
        """
        with self.connection.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute(query, (attack_id,))
            return cursor.fetchone()

    def save_report(self, email, answers):
        is_correct = all(answers) if isinstance(answers, list) else False
        
        with self.connection.cursor() as cursor:
            cursor.execute('SELECT id FROM "public"."USERS" WHERE "status" = %s', (email,))
            user_row = cursor.fetchone()
            
            if not user_row:
                return None
                
            user_id = user_row[0]

            cursor.execute('SELECT COALESCE(MAX(id), 0) + 1 FROM "public"."Solved"')
            solved_id = cursor.fetchone()[0]

            query = """
                INSERT INTO "public"."Solved" ("id", "user_id", "task_id", "Answers", "is_correct")
                VALUES (%s, %s, 1, %s, %s)
            """
            cursor.execute(query, (solved_id, user_id, json.dumps(answers), is_correct))
            self.connection.commit()

    def close(self):
        if self.connection:
            self.connection.close()

db = DBManager()