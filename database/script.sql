CREATE SCHEMA IF NOT EXISTS "public";

CREATE TABLE "public"."USERS" (
    "id" BIGSERIAL,
    "Login" text NOT NULL,
    "Email" text NOT NULL UNIQUE,
    "password" text NOT NULL,
    "status" text,
    "Gotten Tasks" integer DEFAULT 0,
    "Image" text,
    "try" integer DEFAULT 0,
    CONSTRAINT "pk_USERS_id" PRIMARY KEY ("id")
);

CREATE TABLE "public"."Tasks" (
    "id" BIGSERIAL,
    "title" text NOT NULL,
    "description" text,
    "Image" text,
    CONSTRAINT "pk_Tasks_id" PRIMARY KEY ("id")
);

CREATE TABLE "public"."Ataks" (
    "id" BIGSERIAL,
    "Questions" text NOT NULL,
    "attack_type_id" integer,
    CONSTRAINT "pk_Ataks_id" PRIMARY KEY ("id")
);

CREATE TABLE "public"."Solved" (
    "id" BIGSERIAL,
    "user_id" bigint,
    "task_id" bigint,
    "Answers" json NOT NULL,
    "is_correct" boolean NOT NULL,
    CONSTRAINT "pk_Solved_id" PRIMARY KEY ("id")
);

CREATE TABLE "Attack_Types" (
    "id" SERIAL,
    "name" text NOT NULL,
    "explanation" text,
    CONSTRAINT "pk_Attack_Types_id" PRIMARY KEY ("id")
);

CREATE TABLE "Ratings" (
    "id" SERIAL,
    "user_id" bigint UNIQUE,
    "score" integer DEFAULT 0,
    "league" text DEFAULT 'Bronze',
    CONSTRAINT "pk_Ratings_id" PRIMARY KEY ("id")
);

-- Foreign key constraints
-- Schema: public
ALTER TABLE "Attack_Types" ADD CONSTRAINT "fk_Attack_Types_id_Ataks_attack_type_id" FOREIGN KEY("id") REFERENCES "public"."Ataks"("attack_type_id");
ALTER TABLE "Ratings" ADD CONSTRAINT "fk_Ratings_user_id_USERS_id" FOREIGN KEY("user_id") REFERENCES "public"."USERS"("id");
ALTER TABLE "public"."Tasks" ADD CONSTRAINT "fk_Tasks_id_Solved_task_id" FOREIGN KEY("id") REFERENCES "public"."Solved"("task_id");
ALTER TABLE "public"."USERS" ADD CONSTRAINT "fk_USERS_id_Solved_user_id" FOREIGN KEY("id") REFERENCES "public"."Solved"("user_id");