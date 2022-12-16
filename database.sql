-- database name: faceless_pro
-- drop table commands are in order
-- create table commands are in order

DROP TABLE "message";
DROP TABLE "application";
DROP TABLE "saved_jobs";
DROP TABLE "job_post";
DROP TABLE "hyperlink";
DROP TABLE "skill";
DROP TABLE "experience";
DROP TABLE "education";
DROP TABLE "candidate";
DROP TABLE "employer";
DROP TABLE "user";

CREATE TABLE "user" (
	"id" serial PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"user_type" VARCHAR(255)
);
	
CREATE TABLE "employer" (
	"id" serial PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"company_name" VARCHAR(255) NOT NULL,
	"company_address" VARCHAR(255) NOT NULL,
	"company_phone" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"logo_path" VARCHAR(255) NOT NULL,
	"company_description" VARCHAR NOT NULL,
	"company_link" VARCHAR(255) NOT NULL
);

CREATE TABLE "candidate" (
	"id" serial PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"linkedin_link" VARCHAR(255),
	"resume_path" VARCHAR(255),
	"cover_letter_path" VARCHAR(255)
);

CREATE TABLE "education" (
	"id" serial PRIMARY KEY,
	"candidate_id" INT REFERENCES "candidate",
	"school" VARCHAR(255) NOT NULL,
	"qualification" VARCHAR(255) NOT NULL,
	"dates" VARCHAR(255) NOT NULL,
	"note" VARCHAR
);

CREATE TABLE "experience" (
	"id" serial PRIMARY KEY,
	"candidate_id" INT REFERENCES "candidate",
	"employer" VARCHAR(255) NOT NULL,
	"title" VARCHAR(255) NOT NULL,
	"dates" VARCHAR(255) NOT NULL,
	"job_duties" VARCHAR NOT NULL
);

CREATE TABLE "skill" (
	"id" serial PRIMARY KEY,
	"candidate_id" INT REFERENCES "candidate",
	"skill_name" VARCHAR(255) NOT NULL
);

CREATE TABLE "hyperlink" (
	"id" serial PRIMARY KEY,
	"candidate_id" INT REFERENCES "candidate",
	"link" VARCHAR NOT NULL
);

CREATE TABLE "job_post" (
	"id" serial PRIMARY KEY,
	"employer_id" INT REFERENCES "employer",
	"title" VARCHAR(255) NOT NULL,
	"description" VARCHAR NOT NULL
);

CREATE TABLE "application" (
	"id" serial PRIMARY KEY,
	"candidate_id" INT REFERENCES "candidate",
	"job_post_id" INT REFERENCES "job_post",
	"status" VARCHAR(255) DEFAULT 'pending'
);

CREATE TABLE "message" (
	"id" serial PRIMARY KEY,
	"application_id" INT REFERENCES "application",
	"content" VARCHAR NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
	"is_from_candidate" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "saved_jobs" (
	"id" serial PRIMARY KEY,
	"candidate_id" INT REFERENCES "candidate",
	"job_post_id" INT REFERENCES "job_post"
);