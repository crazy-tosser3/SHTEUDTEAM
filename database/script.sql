CREATE SCHEMA IF NOT EXISTS "public";

CREATE TABLE "public"."Tasks" (
    "id" bigint,
    "title" text,
    "description" text,
    "Image" text,
    CONSTRAINT "pk_Tasks_id" PRIMARY KEY ("id")
);

CREATE TABLE "public"."Solved" (
    "id" bigint,
    "user_id" bigint,
    "task_id" bigint,
    "Answers" json,
    "is_correct" boolean,
    CONSTRAINT "pk_Solved_id" PRIMARY KEY ("id")
);

CREATE TABLE "public"."USERS" (
    "id" bigint,
    "status" text,
    "Login" text,
    "Email" text,
    "Gotten Tasks" integer,
    "Image" text,
    "try" integer,
    "password" bigint,
    CONSTRAINT "pk_USERS_id" PRIMARY KEY ("id")
);

CREATE TABLE "public"."Ataks" (
    "id" bigint,
    "Questions" text,
    "attack_type_id" integer,
    CONSTRAINT "pk_Ataks_id" PRIMARY KEY ("id")
);

CREATE TABLE "Ratings" (
    "id" integer,
    "user_id" bigint,
    "score" integer,
    "league" text,
    CONSTRAINT "pk_Ratings_id" PRIMARY KEY ("id")
);

CREATE TABLE "Attack_Types" (
    "id" integer,
    "name" text,
    "explanation" text,
    CONSTRAINT "pk_Attack_Types_id" PRIMARY KEY ("id")
);

-- Foreign key constraints
-- Schema: public
ALTER TABLE "public"."Ataks" ADD CONSTRAINT "fk_Ataks_attack_type_id_Attack_Types_id" FOREIGN KEY("attack_type_id") REFERENCES "Attack_Types"("id");
ALTER TABLE "Ratings" ADD CONSTRAINT "fk_Ratings_user_id_USERS_id" FOREIGN KEY("user_id") REFERENCES "public"."USERS"("id");
ALTER TABLE "public"."Solved" ADD CONSTRAINT "fk_Solved_task_id_Tasks_id" FOREIGN KEY("task_id") REFERENCES "public"."Tasks"("id");
ALTER TABLE "public"."Solved" ADD CONSTRAINT "fk_Solved_user_id_USERS_id" FOREIGN KEY("user_id") REFERENCES "public"."USERS"("id");