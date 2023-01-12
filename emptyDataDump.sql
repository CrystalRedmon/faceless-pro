--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: application; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.application (
    id integer NOT NULL,
    candidate_id integer,
    job_post_id integer,
    random_identifier character varying NOT NULL,
    "time" timestamp without time zone DEFAULT now() NOT NULL,
    status character varying(255) DEFAULT 'pending'::character varying
);


ALTER TABLE public.application OWNER TO daniel;

--
-- Name: application_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.application_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.application_id_seq OWNER TO daniel;

--
-- Name: application_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.application_id_seq OWNED BY public.application.id;


--
-- Name: candidate; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.candidate (
    id integer NOT NULL,
    user_id integer,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    linkedin_link character varying(255),
    resume_path character varying(255),
    cover_letter_path character varying(255)
);


ALTER TABLE public.candidate OWNER TO daniel;

--
-- Name: candidate_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.candidate_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.candidate_id_seq OWNER TO daniel;

--
-- Name: candidate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.candidate_id_seq OWNED BY public.candidate.id;


--
-- Name: education; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.education (
    id integer NOT NULL,
    candidate_id integer,
    school character varying(255) NOT NULL,
    qualification character varying(255) NOT NULL,
    dates character varying(255) NOT NULL,
    note character varying
);


ALTER TABLE public.education OWNER TO daniel;

--
-- Name: education_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.education_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.education_id_seq OWNER TO daniel;

--
-- Name: education_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.education_id_seq OWNED BY public.education.id;


--
-- Name: employer; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.employer (
    id integer NOT NULL,
    user_id integer,
    company_name character varying(255) NOT NULL,
    company_address character varying(255) NOT NULL,
    company_phone character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    company_description character varying NOT NULL,
    company_link character varying(255) NOT NULL
);


ALTER TABLE public.employer OWNER TO daniel;

--
-- Name: employer_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.employer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employer_id_seq OWNER TO daniel;

--
-- Name: employer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.employer_id_seq OWNED BY public.employer.id;


--
-- Name: experience; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.experience (
    id integer NOT NULL,
    candidate_id integer,
    employer character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    dates character varying(255) NOT NULL,
    job_duties character varying NOT NULL
);


ALTER TABLE public.experience OWNER TO daniel;

--
-- Name: experience_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.experience_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.experience_id_seq OWNER TO daniel;

--
-- Name: experience_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.experience_id_seq OWNED BY public.experience.id;


--
-- Name: hyperlink; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.hyperlink (
    id integer NOT NULL,
    candidate_id integer,
    link character varying NOT NULL
);


ALTER TABLE public.hyperlink OWNER TO daniel;

--
-- Name: hyperlink_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.hyperlink_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hyperlink_id_seq OWNER TO daniel;

--
-- Name: hyperlink_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.hyperlink_id_seq OWNED BY public.hyperlink.id;


--
-- Name: job_post; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.job_post (
    id integer NOT NULL,
    employer_id integer,
    title character varying(255) NOT NULL,
    description character varying NOT NULL
);


ALTER TABLE public.job_post OWNER TO daniel;

--
-- Name: job_post_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.job_post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.job_post_id_seq OWNER TO daniel;

--
-- Name: job_post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.job_post_id_seq OWNED BY public.job_post.id;


--
-- Name: message; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.message (
    id integer NOT NULL,
    application_id integer,
    content character varying,
    "time" timestamp without time zone DEFAULT now() NOT NULL,
    is_from_candidate boolean DEFAULT false
);


ALTER TABLE public.message OWNER TO daniel;

--
-- Name: message_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.message_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.message_id_seq OWNER TO daniel;

--
-- Name: message_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.message_id_seq OWNED BY public.message.id;


--
-- Name: saved_jobs; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.saved_jobs (
    id integer NOT NULL,
    candidate_id integer,
    job_post_id integer
);


ALTER TABLE public.saved_jobs OWNER TO daniel;

--
-- Name: saved_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.saved_jobs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.saved_jobs_id_seq OWNER TO daniel;

--
-- Name: saved_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.saved_jobs_id_seq OWNED BY public.saved_jobs.id;


--
-- Name: skill; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public.skill (
    id integer NOT NULL,
    candidate_id integer,
    skill_name character varying(255) NOT NULL
);


ALTER TABLE public.skill OWNER TO daniel;

--
-- Name: skill_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.skill_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skill_id_seq OWNER TO daniel;

--
-- Name: skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.skill_id_seq OWNED BY public.skill.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: daniel
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL,
    user_type character varying(255)
);


ALTER TABLE public."user" OWNER TO daniel;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: daniel
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO daniel;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: daniel
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: application id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.application ALTER COLUMN id SET DEFAULT nextval('public.application_id_seq'::regclass);


--
-- Name: candidate id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.candidate ALTER COLUMN id SET DEFAULT nextval('public.candidate_id_seq'::regclass);


--
-- Name: education id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.education ALTER COLUMN id SET DEFAULT nextval('public.education_id_seq'::regclass);


--
-- Name: employer id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.employer ALTER COLUMN id SET DEFAULT nextval('public.employer_id_seq'::regclass);


--
-- Name: experience id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.experience ALTER COLUMN id SET DEFAULT nextval('public.experience_id_seq'::regclass);


--
-- Name: hyperlink id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.hyperlink ALTER COLUMN id SET DEFAULT nextval('public.hyperlink_id_seq'::regclass);


--
-- Name: job_post id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.job_post ALTER COLUMN id SET DEFAULT nextval('public.job_post_id_seq'::regclass);


--
-- Name: message id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.message ALTER COLUMN id SET DEFAULT nextval('public.message_id_seq'::regclass);


--
-- Name: saved_jobs id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.saved_jobs ALTER COLUMN id SET DEFAULT nextval('public.saved_jobs_id_seq'::regclass);


--
-- Name: skill id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.skill ALTER COLUMN id SET DEFAULT nextval('public.skill_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: application; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.application (id, candidate_id, job_post_id, random_identifier, "time", status) FROM stdin;
\.


--
-- Data for Name: candidate; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.candidate (id, user_id, first_name, last_name, email, linkedin_link, resume_path, cover_letter_path) FROM stdin;
\.


--
-- Data for Name: education; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.education (id, candidate_id, school, qualification, dates, note) FROM stdin;
\.


--
-- Data for Name: employer; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.employer (id, user_id, company_name, company_address, company_phone, email, company_description, company_link) FROM stdin;
\.


--
-- Data for Name: experience; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.experience (id, candidate_id, employer, title, dates, job_duties) FROM stdin;
\.


--
-- Data for Name: hyperlink; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.hyperlink (id, candidate_id, link) FROM stdin;
\.


--
-- Data for Name: job_post; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.job_post (id, employer_id, title, description) FROM stdin;
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.message (id, application_id, content, "time", is_from_candidate) FROM stdin;
\.


--
-- Data for Name: saved_jobs; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.saved_jobs (id, candidate_id, job_post_id) FROM stdin;
\.


--
-- Data for Name: skill; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.skill (id, candidate_id, skill_name) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public."user" (id, username, password, user_type) FROM stdin;
\.


--
-- Name: application_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.application_id_seq', 1, false);


--
-- Name: candidate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.candidate_id_seq', 1, false);


--
-- Name: education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.education_id_seq', 1, false);


--
-- Name: employer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.employer_id_seq', 1, false);


--
-- Name: experience_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.experience_id_seq', 1, false);


--
-- Name: hyperlink_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.hyperlink_id_seq', 1, false);


--
-- Name: job_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.job_post_id_seq', 1, false);


--
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.message_id_seq', 1, false);


--
-- Name: saved_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.saved_jobs_id_seq', 1, false);


--
-- Name: skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.skill_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.user_id_seq', 1, false);


--
-- Name: application application_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_pkey PRIMARY KEY (id);


--
-- Name: candidate candidate_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.candidate
    ADD CONSTRAINT candidate_pkey PRIMARY KEY (id);


--
-- Name: education education_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT education_pkey PRIMARY KEY (id);


--
-- Name: employer employer_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.employer
    ADD CONSTRAINT employer_pkey PRIMARY KEY (id);


--
-- Name: experience experience_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.experience
    ADD CONSTRAINT experience_pkey PRIMARY KEY (id);


--
-- Name: hyperlink hyperlink_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.hyperlink
    ADD CONSTRAINT hyperlink_pkey PRIMARY KEY (id);


--
-- Name: job_post job_post_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.job_post
    ADD CONSTRAINT job_post_pkey PRIMARY KEY (id);


--
-- Name: message message_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);


--
-- Name: saved_jobs saved_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.saved_jobs
    ADD CONSTRAINT saved_jobs_pkey PRIMARY KEY (id);


--
-- Name: skill skill_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- Name: application application_candidate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_candidate_id_fkey FOREIGN KEY (candidate_id) REFERENCES public.candidate(id);


--
-- Name: application application_job_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.application
    ADD CONSTRAINT application_job_post_id_fkey FOREIGN KEY (job_post_id) REFERENCES public.job_post(id) ON DELETE CASCADE;


--
-- Name: candidate candidate_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.candidate
    ADD CONSTRAINT candidate_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: education education_candidate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT education_candidate_id_fkey FOREIGN KEY (candidate_id) REFERENCES public.candidate(id);


--
-- Name: employer employer_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.employer
    ADD CONSTRAINT employer_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: experience experience_candidate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.experience
    ADD CONSTRAINT experience_candidate_id_fkey FOREIGN KEY (candidate_id) REFERENCES public.candidate(id);


--
-- Name: hyperlink hyperlink_candidate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.hyperlink
    ADD CONSTRAINT hyperlink_candidate_id_fkey FOREIGN KEY (candidate_id) REFERENCES public.candidate(id);


--
-- Name: job_post job_post_employer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.job_post
    ADD CONSTRAINT job_post_employer_id_fkey FOREIGN KEY (employer_id) REFERENCES public.employer(id);


--
-- Name: message message_application_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.application(id) ON DELETE CASCADE;


--
-- Name: saved_jobs saved_jobs_candidate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.saved_jobs
    ADD CONSTRAINT saved_jobs_candidate_id_fkey FOREIGN KEY (candidate_id) REFERENCES public.candidate(id);


--
-- Name: saved_jobs saved_jobs_job_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.saved_jobs
    ADD CONSTRAINT saved_jobs_job_post_id_fkey FOREIGN KEY (job_post_id) REFERENCES public.job_post(id) ON DELETE CASCADE;


--
-- Name: skill skill_candidate_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: daniel
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_candidate_id_fkey FOREIGN KEY (candidate_id) REFERENCES public.candidate(id);


--
-- PostgreSQL database dump complete
--

