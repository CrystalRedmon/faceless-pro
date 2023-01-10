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
    logo_path character varying(255) NOT NULL,
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
    content character varying DEFAULT 'We reviewed your application and would like to schedule and interview.'::character varying,
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
1	1	13	lemur chalk	2023-01-09 08:40:21.741555	pending
2	1	16	springbok cookie jar	2023-01-09 08:40:33.89506	pending
4	1	26	guanaco deodorant 	2023-01-09 08:41:20.727514	pending
5	1	27	bear chair	2023-01-09 08:41:23.576199	pending
6	1	26	ground hog chocolate	2023-01-09 08:41:25.941192	pending
11	4	16	elephant chalk	2023-01-09 11:10:54.9816	pending
10	4	21	tiger lamp shade	2023-01-09 11:10:46.91506	pending
9	1	21	ermine perfume	2023-01-09 09:13:37.850062	pending
3	1	21	wombat grid paper	2023-01-09 08:41:15.768264	not_shared
7	1	21	beaver box	2023-01-09 08:42:04.540155	not_shared
\.


--
-- Data for Name: candidate; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.candidate (id, user_id, first_name, last_name, email, linkedin_link, resume_path, cover_letter_path) FROM stdin;
1	8	Daniel	Pathammavong	patha037@umn.edu	www.linkedin.com/danielpatha	files/resume-8.pdf	files/cover-letter-8.pdf
3	8	Emily 	Hoang	emgail@gmail.com	linkedin.com/ehoang	files/resume-8.pdf	files/cover-letter-8.pdf
2	9	George	Mohamed	gmohamed@google.com	linkedin.com/gmohamed	files/resume-8.pdf	files/cover-letter-8.pdf
4	11	Faduma	Siyad	fsiyad@google.com	linkedin.com/faduma-siyad	files/resume-11.pdf	files/cover-letter-11.pdf
5	12	Faduma	Siyad	fsiyad@google.com	linkedin.com/faduma-siyad	files/resume-12.pdf	files/cover-letter-12.pdf
6	13	Faduma	Siyad	fsiyad@google.com	linkedin.com/faduma-siyad	files/resume-13.pdf	files/cover-letter-13.pdf
\.


--
-- Data for Name: education; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.education (id, candidate_id, school, qualification, dates, note) FROM stdin;
1	1	Normandale Community College		2018-2020	Studied Generals
3	1	Prime Digital Academy	Full Stack Engineer Certificate	8/2022 - 1/2023	An accelerated full stack program covering technologies including JavaScript, React, Node.js, and Express
2	1	University of St.Thomas	Bachelor's of Science	2020-2024	Majoring in Computer Science
4	4	Prime Digital Academy	Full Stack Engineer Certificate	8/2022 - 1/2023	An accelerated full stack program covering technologies including JavaScript, React, Node.js, and Express
5	5				
6	6	Prime Digital Academy	Full Stack Engineer Certificate	8/2022 - 1/2023	An accelerated full stack program covering technologies including JavaScript, React, Node.js, and Express
\.


--
-- Data for Name: employer; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.employer (id, user_id, company_name, company_address, company_phone, email, logo_path, company_description, company_link) FROM stdin;
1	1	Prime Digital Academy	301 S 4th Ave #577, Minneapolis, MN 55415	1	1	1	1	1
2	2	Honeywell	1433 NE Stinson Blvd, Minneapolis, MN 55413	1	1	1	1	1
3	3	Target	Target Plaza South, 1000 Nicollet Mall, Minneapolis, MN 55403	1	1	1	1	1
4	4	U.S Bank	800 Nicollet Mall Fl 2, Minneapolis, MN 55402	1	1	1	1	1
5	5	United Health Group	12700 Whitewater Dr, Minnetonka, MN 55343	1	1	1	1	1
6	6	Sensata Technologies	5775 W Old Shakopee Rd Suite 100, Bloomington, MN 55437	1	1	1	1	1
7	7	Best Buy	7601 Penn Ave S, Minneapolis, MN 55423	1	1	1	1	1
\.


--
-- Data for Name: experience; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.experience (id, candidate_id, employer, title, dates, job_duties) FROM stdin;
1	1	Target	Service & Engagement Team Leader	2018-2019	Follow-up and audit the scheduling allocation and guidelines to support peak traffic times, key holiday events and weekends\n• Assess the front of store experience and anticipate and/or react with urgency to any scheduling needs based on fluctuations in guest traffic and sales\n• Expect and enable your team to stay up-to-date on upcoming major promotions, brand launches and events\n• Evaluate and recommend candidates for open positions and develop a guest-centric team\n• Close knowledge and skill gaps through training and experiences
3	1	Target	Cashier	2017-2018	• Processing sales transactions.\n•  Assisting customers.\n• Handling money.
2	1	Minneapolis Public Schools	Assistant Teacher for Coding & Robotics - Grade 3	2020-2023	• Effectively manage a classroom with children age between 4 yrs to 12 yrs old.\n• Engage students in fun and relevant lessons based on established curriculum and specific classroom needs\n• Maintain a positive relationship with all students, families and staff\n•Present oneself and one's ideas with clarity, confidence, and poise
4	1	Starbucks	Barista	3/2019- 7/2022	Promotes coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies.\n\nWelcomes customers by determining their coffee interests and needs.\n\nEducates customers by presenting and explaining the coffee drink menu; answering questions.
5	4	Starbucks	Barista	3/2019- 7/2022	Promotes coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies.\n\nWelcomes customers by determining their coffee interests and needs.\n\nEducates customers by presenting and explaining the coffee drink menu; answering questions.
6	6	Starbucks	Barista	3/2019- 7/2022	Promotes coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies.\n\nWelcomes customers by determining their coffee interests and needs.\n\nEducates customers by presenting and explaining the coffee drink menu; answering questions.
\.


--
-- Data for Name: hyperlink; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.hyperlink (id, candidate_id, link) FROM stdin;
1	1	www.github.com/coolcoder632
2	1	github.com/ccoder
4	6	
\.


--
-- Data for Name: job_post; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.job_post (id, employer_id, title, description) FROM stdin;
1	1	UX Cohort Instructor	Location: Minneapolis, MN\n\nFormat: In-person, Full-time (40 hrs/week)\n\nOn-campus presence during weekdays, with opportunities for planned/unplanned flexibility. May include ~2-3 hours of on-campus work in the evenings every 3 months on a rotating schedule with other UX staff members.  \nPrime’s immersion programs engage adult learners in the full spectrum of UX activities, from user research to prototyping, iterative design and evaluation, and development and maintenance phases. Our instructional team brings a variety of experiences in each of these components of the practice. Good-fit hires are experienced practitioners who are passionate about education and mentorship. Through experience, empathy, and modeling the practice in the classroom, you'll be helping others learn the practice of user experience research and design in a hands-on, supportive environment.\n\nThe UX Cohort Instructor is the primary facilitator of the cohort’s learning experience, providing structure, consistency, and supporting positive outcomes for their students at Prime. They work closely with the UX Support Instructor, the full UX Instruction team, and Prime support staff in order to maintain the cohort’s progress.\n\nYou'll be joining a nimble company with a passionate and dedicated team. We offer competitive salary and benefits including a generous PTO program, medical, dental, and vision benefits as well as a 401K plan with a company match.\n\nTypical Duties and Responsibilities\nLead the delivery of programmatic coursework and content via provided curriculum, including lectures, demonstrations, and discussions\nServe as the primary facilitator for and engage students in hands-on UX practice activities (eg., critiques, research sessions, group synthesis, client kick-off meetings)\nManage student motivation during rigorous coursework\nModerate class discussion to balance input and participation\nCollaborate with the UX Support Instructor to evaluate student progress and identify gaps in work/outcomes that may impede their timely completion of the program\nProvide verbal and written evaluations of student work\nSchedule and lead 1:1 check-in sessions with students at planned moments throughout their program\nProvide prompt and values-based correspondence to current students through Slack\nCollaborate with the UX support instructor and cohort advisor(s) in order to ensure timely and values-based responses to student needs\nDeliver guest lectures on specific UX topics (within and outside of the UX program)\nCollaborate and work independently with the UX Instruction team and other Prime staff to make progress on key programmatic goals (e.g., curriculum revisions, company initiatives)\nEducation and Experience\n3+ years of experience in user experience\nTeaching and/or mentoring experience\nRequirements\nFamiliar with common UX research methods (e.g., contextual inquiry, concept evaluations, usability testing, synthesis strategies)\nComfortable with a variety of prototyping methods and tools, including paper, digital, remote, and mobile\nAble to explain visual design principles, provide feedback on visual designs, and make recommendations for improvement\nSelf-motivated, goal-oriented, and well-organized\nAble to work independently, prioritize, and reprioritize in a dynamic environment\nCommunicative and collaborative\nComfort with managing difficult or emotional situations, responding promptly to requests for service and assistance\nDemonstrated skills in leadership/management, supporting/leading teamwork, and/or collaborative problem solving\nExperience with industry-standard design tools like Sketch, Invision, Figma, Adobe XD, AxureRP\nNice-to-haves\nExperience lecturing and/or delivering talks on UX design and related subjects\nExperience executing along the entire UX design process, from generative research, prototyping and evaluative research through to design and development\nBasic understanding of modern software engineering technologies, tools, and techniques, and literate in HTML/CSS\nDemonstrated specialties in: agile, scrum, lean design, accessibility, mobile app development, service/experience design\n
2	1	Student Life Coordinator	Location: Minneapolis, MN\n\nFormat: In Person, Full time (40 hours/week)\n\nStudent Life Coordinators advise and train students, and support day-to-day operations at Prime. Through experience, empathy, and authority they work to meet student learning outcomes and industry standards, enforce policy and manage student experiences through admissions to graduation.\n\nAccountability\nStudent Life Coordinators at the Academy are accountable for:\n\nAdmissions communication and first review of applications \nManaging student onboarding processes \nEffective instruction of professional skills curriculum\nEngaging students in classroom discussions \nEffective student escalation and issue resolution\nAssisting or leading student support conversations\nManaging student cohort experience\nCollaborating with the team to create and implement quarterly objectives  \nRegularly reporting on students’ progress \nMaintaining a presence in the classroom through direct observation\nTypical Duties and Responsibilities\nResponsibilities include:\n\nScoring incoming candidate applications and managing admission communications\nLecturing on Professional Skills curriculum and conducting sessions with cohorts \nLeading bi-monthly Professional Skills practice \nConducting regular instructor 1:1s\nAssist in the academic and personal advising of current students \nDocumenting notes related to students' progress \nCollaborating with instructors on student or cohort needs\nConducting interviews, documenting insights, and sharing recommendations \nReporting Relationships\nCoordinators are directly supervised by the Director of Student Affairs\nCoordinators are mentored and trained by Student Life Managers or Sr. Student Life Managers\nCoordinators collaborate with other members of the Prime team\nSkills and Qualifications\nExpertise in customer service, learning and development\nExpertise in education, coaching or student development\nExperience lecturing and delivering talks on non-technical topics\nExperience mentoring and training \nExcellent written and verbal communication skills\nIndependent, self-motivated, and success- driven\nManage difficult or emotional situations, responding promptly to requests for service and assistance\nProven leadership and teamwork skills and collaborative group problem solving \nOrganized, detail-oriented, and great at follow-through\nMust have the ability to multitask in a fast-paced and dynamic environment\nFamiliarity with tech industry terminology and developments (design and software development)\nEducation and Experience\n2 or more years of experience in education or related field \n2 or more years of experience leading projects and initiatives \nWorking Conditions\nGeneral office setting—no hazardous chemicals or manufacturing equipment/production lines/machinery, however, noise levels fluctuate with open office environment\nMinimal travel\nSitting\\standing (75%) of the day at meetings and at desk
3	1	Marketing Content Designer	Location: Minneapolis, MN (Can be remote following a brief period of on-site onboarding)\n\nFormat: Full-time (40 hrs/week) 6-month contract, with the possibility to extend\n\nYou will have the choice to work in-person at our Downtown Minneapolis office, hybrid, or remotely following a brief period of required on-site onboarding. Regardless of location, you are expected to be responsive within the hours of 10am-4pm CST. You may adjust your schedule with your manager to meet your deadlines and work an average of 8 hours each day.\n\nThe Marketing Content Designer is responsible for the production and maintenance of Prime’s content and collateral across our primary digital platforms: website (via Hubspot), email campaigns (via Hubspot), and social media (e.g., Instagram, Facebook, LinkedIn). Your work will support the earliest and returning phases of our customer journey: from recruitment materials focused on potential and incoming students to outreach materials targeting our alumni and employer network. You may also contribute to a variety of internal communication design needs, such as onboarding materials, campus signage/documentation, and business graphics. In this role, you will be responsible for understanding the vision set forth by internal stakeholders and translating that into tangible design deliverables. You will report to and take collaborative direction from the Sr. Director of UX & Strategy.\n\nUltimately, we’re looking for an energetic, positive, self-starting individual who wants to contribute to meaningful work with a team that is passionate about what we do at Prime. We are looking for someone who is comfortable taking direction and translating it into compelling, meaningful, and accessible content across our digital channels, thus increasing our visibility and accessibility to a wider pool of potential students and employers. This work will play an integral role in achieving our mission of supporting diverse and driven problem-solvers in building meaningful tech careers.\n\nTypical Duties and Responsibilities\nProactively understand and gain knowledge of our organization, product offerings, and audiences in order to translate those insights into design materials\nEngage with business leaders and key stakeholders as needed to move design concepts forward\nCollaborate with the UX department in order to receive guidance and feedback on design directions\nDevelop creative ideas and concepts \nDesign and implement new website pages for program offerings (current and upcoming)\nRevise and manage email marketing campaigns and content (e.g. design, layout, and content)\nImplement best practices for social media (e.g., Instagram, Facebook, LinkedIn) postings, including establishing voice/tone guidelines, and creating visual templates for staff to leverage\nCreate and implement standard practices for maintaining and grooming existing digital content and assets\nEducation and Experience\nSocial media management experience\nWeb design and maintenance experience\nVisual communications experience\nRequirements\nAn understanding of or experience with Hubspot or similar content management tool, as this is the platform used to design and host Primeacademy.io.(Alternately, a demonstrated ability to learn and work within this platform will suffice)\nA flexible, goal-oriented individual who understands the big picture while being able to execute with finely tuned detail\nCurious about humans, the impact of your work on the user experience, and ways in which that experience can be optimized to meet user and business goals\nResourceful self-starter, able to explore and refine creative solutions\nAble to set, manage, and reset priorities based on circumstances, guidance, and direction\nAble to identify roadblocks and work to eliminate them with support and direction from your manager\nComfortable with giving and receiving feedback\nExcited to collaborate with internal stakeholders\nA solid understanding of social media, content, and relevant design trends\nExcellent verbal and written communication skills\nExcellent time management and organizational skills\nFluent in Adobe Suite, Sketch or similar visual design software programs\nNice-to-haves\nLiterate in basic HTML/CSS (with support of WSIWYG editor)
4	1	Fullstack Code Coach	Prime Academy is seeking several contract Program Coaches to help out Fullstack Engineering students with technical and coding support. Coaches will help students with debugging and conceptual guidance through dedicated office hours outside of regular class time. These sessions will be hosted using the Zoom platform. \n\nExpected interactions include students screen sharing their in-progress assignments and identifying challenges they are experiencing in completing them, helping students review/revisit concepts, and helping students succeed with assignments. Coaches help students approach and overcome the technical challenges (and mental blockers) that they are facing in their work by listening, reviewing their work, conducting ad-hoc debugging, identifying helpful resources, and morale support. Coaches may also help curate and create resources (e.g., tutorials, videos, etc) that the instruction team will use for students’ continued learning and growth.\n\nCode Coaches will work remotely and are expected to hold regular weekly office hours during which they will be available for student support in an on-demand capacity. We ask Program Coaches to commit to a 8-week period in which they’ll work around 2-5 hours per week, during weekday evenings (usually Wednesday and or Thursday between 6-9pm - Exact times negotiable).\n\nTo apply, send your resume to recruiting@primeacademy.io.\n\nTypical Duties and Responsibilities\nAbide by our Prime values when providing support and/or interacting with students. \nAssist instruction team with answering student questions about code, concepts, or debugging.\nTake direction and guidance from the instruction team to ensure that the role is being effectively utilized and supporting the cohort of students to the maximum ability. \nRespond to correspondence from current students through Slack messaging \nIdentify relevant and helpful resources for technical/software support (This may include planning and/or conducting live demos, creating and/or sharing recorded videos, and/or directing students to non-Prime support resources)\nCreate custom resources (e.g., demos, videos) for continued use within the FSE program \nReporting Relationships\nProgram Coaches are responsible for providing timely and empathetic guidance to students as they work through challenges in the required software programs. Program Coaches are directly supervised by the Director of Fullstack Instruction, while also providing updates to the cohort instructor(s).\n\nSkills and Qualifications\nInterest in directly mentoring or teaching others as a part of your career path\nProficiency in modern software engineering technology, tools and techniques\nProficiency in HTML, CSS and Javascript\nProficiency in Javascript-based frameworks and tools like Node, Express, ReactJS, Redux, Redux-Sagas, Git, GitHub\nProficiency with data structures in SQL databases\nProficiency in Mac OS platform\nSkill and excitement in problem-solving and trying new approaches to troubleshooting\nEmpathy and compassion for the adult-as-student experience\nExcellent written and verbal communication skills\nIndependent and self-motivated\nOrganized, detail-oriented, and great at follow-through\nAble to multitask in a fast-paced and dynamic environment\nEducation and Experience\nGraduate of Prime Digital Academy, Certificate of Software Engineering or 2+ years experience professional programming\nEquipment\nYou will need your own computer running macOS. Prime will not provide equipment.\nYou will need VSCode, a free IDE\nYou will need a Github account\nYou will be provided with a Zoom account, Slack Access, 
5	1	Fullstack Engineering: Teaching Assistant (TA)	Location: On Campus, Downtown Minneapolis\n\nFormat: On Site; Part-time (8-12 hours/week) for a minimum of 8 weeks\n\nPrime Academy is currently seeking a contract Teaching Assistant to help out the Fullstack  Instruction Staff on campus. This person will help students in the Prime Academy classrooms by providing support to and helping students one on one, or within small groups. Note that this is a 2 month contract position with the option to extend based on the needs of Prime.\n\nThis position is only available to Prime Academy graduates.\n\nTO APPLY:\nSend your resume and cover letter or statement of interest to recruiting@primeacademy.io  with TA-Application in the subject line.\n\nResearch shows that people who are part of historically excluded groups or are otherwise underrepresented are less likely to apply for a role if they feel they don't meet all the criteria. If you are hesitant to submit your materials for that reason, please apply anyway!\n\nTypical Duties and Responsibilities\nAbide by our Prime values when providing support and/or interacting with students. \nBe available to observe and answer questions from students during solo or group project activities.\nAssist instruction team with answering student questions about code, concepts, or debugging.\nTake direction and guidance from the instruction team to ensure that the role is being effectively utilized and supporting the cohort of students to the maximum ability. \nRespond to correspondence from current students through Slack messaging \nIdentify relevant and helpful resources for technical/software support (This may include planning and/or conducting live demos, creating and/or sharing recorded videos, and/or directing students to non-Prime support resources)\nCreate custom resources (e.g., demos, videos) for continued use within the FSE program \nReporting Relationships\nProgram Coaches are responsible for providing timely and empathetic guidance to students as they work through challenges in the required software programs. Program Coaches are directly supervised by the Director of Fullstack Instruction, while also providing updates to the cohort instructor(s).\n\nSkills and Qualifications\nInterest in directly mentoring or teaching others as a part of your career path\nProficiency in modern software engineering technology, tools and techniques\nProficiency in HTML, CSS and Javascript\nProficiency in Javascript-based frameworks and tools like Node, Express, ReactJS, Redux, Redux-Sagas, Git, GitHub\nProficiency with data structures in SQL databases\nProficiency in Mac OS platform\nSkill and excitement in problem-solving and trying new approaches to troubleshooting\nEmpathy and compassion for the adult-as-student experience\nExcellent written and verbal communication skills\nIndependent and self-motivated\nOrganized, detail-oriented, and great at follow-through\nAble to multitask in a fast-paced and dynamic environment\nEducation and Experience\nGraduate of Prime Digital Academy, Certificate of Software Engineering\nEquipment\nYou will need your own computer running macOS. Prime will not provide equipment.\nYou will need VSCode, a free IDE\nYou will need a Github account\nYou will be provided with a Zoom account, Slack Access, and typical office equipment.
6	2	Chemical Engineer	Qualifications\n•\nBachelors Degree in Chemical Engineering\n•\nAn understanding of engineering principles and mathematics\n•\nAn aptitude for, and interest in chemistry\n•\nProject management skills\n•\nResource management skills\n•\nOral and written communication skills\n•\nAnalytical and problem-solving ability\n•\nThe ability to work as part of a team\n•\nMust be a US Citizen due to contractual requirements\nResponsibilities\n•\nDevelop and design chemical manufacturing processes\n•\nYou will apply the principles of chemistry, biology, physics, and mathematics to solve problems that involve the production or use of chemicals, fuel, drugs, food, and many other products\n•\nYou will help run experiments and tests to aid in the development of improved manufacturing procedures and processes\n•\nPerform laboratory testing\n•\nAdjust and calibrate instruments\n•\nResearch new methods\n•\nDesign experiments\n•\nLead improvement iniatives\n•\nGather estimates of the cost of production\n•\nTest and monitor performance of processes throughout production\n•\nTroubleshoot problems with manufacturing processes\n•\nConduct analysis and prepare reports\nJob description\nJoin a team recognized for leadership, innovation and diversity\n\nDevelop and design chemical manufacturing processes. You will apply the principles of chemistry, biology, physics, and mathematics to solve problems that involve the production or use of chemicals, fuel, drugs, food, and many other products. You will help run experiments and tests to aid in the development of improved manufacturing procedures and processes.\n\nKey Responsibilities\n• Perform laboratory testing\n• Adjust and calibrate instruments\n• Research new methods\n• Design experiments\n• Lead improvement iniatives\n• Gather estimates of the cost of production\n• Test and monitor performance of processes throughout production\n• Troubleshoot problems with manufacturing processes\n• Conduct analysis and prepare reports\n\nYOU MUST HAVE\n• Bachelors Degree in Chemical Engineering\n\nWE VALUE\n• An understanding of engineering principles and mathematics\n• An aptitude for, and interest in chemistry\n• Project management skills\n• Resource management skills\n• Oral and written communication skills\n• Analytical and problem-solving ability\n• The ability to work as part of a team
7	2	Technician II	Qualifications\n•\nHigh School Diploma\n•\nMinimum 2 years experience R&D Lab/ field technician\n•\nU.S. citizenship required to obtain and maintain government security clearance\n•\nSome experience in test support\n•\nHave practical experience working with engineering equipment\n•\nBe able to find effective solutions based on root causes; and apply six sigma procedures\n5 more items\nResponsibilities\n•\nBe part of a team that design and develop test procedures and standards for highly complex products\n•\nYou will participate in the development and certification of environment test functionality across multiple products and applications\n3 more items\nBenefits\n•\nSalary Range $54K-$81K\n•\nFor benefits information, please visit https://careers.honeywell.com/us/en/honeywell-benefits\nMore job highlights\nJob description\nJoin a team recognized for leadership, innovation and diversity\n\nWhen you join Honeywell, you become a member of our global team of thinkers, innovators, dreamers and doers who make the things that make the future\n\nThat means changing the way we fly, fueling jets in an eco-friendly way, keeping buildings smart and safe and even making it possible to breathe on Mars.\n\nWorking at Honeywell isn’t just about developing cool things. That’s why all of our employees enjoy access to dynamic career opportunities across different fields and industries.\n\nAre you ready to help us make the future?\n\nBe part of a team that design and develop test procedures and standards for highly complex products. You will participate in the development and certification of environment test functionality across multiple products and applications. This will enable you to support new products, processes, standards or operational plans within the organization's business strategies, with a direct impact on the business results.\n\nKey Responsibilities\n• Create new methods, techniques, and processes\n• Perform testing\n\nYOU MUST HAVE\n• High School Diploma\n• Minimum 2 years experience R&D Lab/ field technician\n• U.S. citizenship required to obtain and maintain government security clearance\n\nWE VALUE\n• Some experience in test support\n• Have practical experience working with engineering equipment\n• Be able to find effective solutions based on root causes; and apply six sigma procedures.\n• Sound technical judgment and opinions.\n• Good interpersonal skills with ability to work effectively with other individuals in a team or project setting.\n• Individuals who are self-motivated and able to work with little supervision, who consistently take the initiative to get things done, do things before being asked by others or forced to by events.\n• Ability to consistently make timely decisions even in the face of complexity, balancing systematic analysis with decisiveness.\n\nCompensation & Benefits\n\nNon-Incentive\n\nSalary Range $54K-$81K\n\nFor benefits information, please visit https://careers.honeywell.com/us/en/honeywell-benefits. Current employees may visit HR Direct.
8	2	Talent Acquisition Manager	Qualifications\n•\nBachelor’s degree\n•\n5+ years of experience in corporate talent acquisition and/or human resources\n•\nU.S. Citizenship to obtain and maintain government security clearance\nResponsibilities\n•\nIn this role, you will be responsible for partnering with key stakeholders to identify current and future workforce needs, understand upcoming talent gaps and talent needs to develop and implement effective talent acquisition strategy roadmaps to support business goals across multiple locations and states\n•\nPartnering with HR and business leaders to coordinate with Honeywell’s Recruitment Process Outsourced (RPO) recruiters and talent acquisition COE points of contact to ensure strong pipelining of qualified and diverse candidates for highly technical positions\n•\nDeveloping and implementing talent acquisition strategies, tactics, and approaches to ensure niche skillset requisitions are filled in a timely manner\n•\nIdentifying and coordinating partnerships with national laboratories, universities, conferences, and trade organizations\n•\nManaging short and long cycle talent acquisition approaches and hiring plans\n•\nLeveraging data and analytics to provide strategic expertise by monitoring and staying abreast of competitive landscape, industry trends, best practices, legal developments, benchmark comparisons, functions as subject matter expert on all business unit recruitment activities\n•\nActing as ACST focal with corporate initiatives with University Relations, diversity conferences/initiatives, and other talent demand planning cycles\nBenefits\n•\nCompensation & Benefits\n•\nIncentive Eligible\n•\nSalary Range: Min to Max $103,000 - $155,000\n•\nFor benefits information, please visit https://careers.honeywell.com/us/en/honeywell-benefits\nJob description\nJoin a team recognized for leadership, innovation and diversity\n\nTHE BUSINESS\n\nHoneywell (www.honeywell.com) is a Fortune 100 technology company that delivers industry-specific solutions that include aerospace products and services; control technologies for buildings and industry; and performance materials globally. Our technologies help aircraft, buildings, manufacturing plants, supply chains, and workers become more connected to make our world smarter, safer, and more sustainable.\n\nHoneywell Aerospace products and services are found on virtually every commercial, defense and space aircraft in the world. With an unmatched heritage of innovation that spans more than a century, our aim is to solve the greatest challenges CEOs, pilots, operators, passengers, finance, maintenance and cabin crews face -- and transform the way we all fly. We deliver improved fuel-efficiency, more direct and on-time flights, safer and more comfortable travel and better flight planning and traffic management. We do this through one of the industry’s broadest and most advanced portfolios including world-class engines, cockpits, cabin design, wireless connectivity and enterprise performance management services – even for emerging market segments like flying taxies, while providing world-class customer service, repairs and technical support.\n\nAt Honeywell Aerospace Advanced Connected Sustainability Technologies (ACST), our outstanding team of scientists, engineers, and professionals develop groundbreaking technology by applying their expertise in complex hardware and software control systems, atomic physics, ultra-high vacuum environments, cryogenics, cyber security, and more.\n\nTHE POSITION\n\nHoneywell’s ACST team is seeking a Talent Acquisition Manager for our Broomfield, CO or Golden Valley, MN location. In this role, you will be responsible for partnering with key stakeholders to identify current and future workforce needs, understand upcoming talent gaps and talent needs to develop and implement effective talent acquisition strategy roadmaps to support business goals across multiple locations and states.\n\nKey Responsibilities\n• Partnering with HR and business leaders to coordinate with Honeywell’s Recruitment Process Outsourced (RPO) recruiters and talent acquisition COE points of contact to ensure strong pipelining of qualified and diverse candidates for highly technical positions\n• Developing and implementing talent acquisition strategies, tactics, and approaches to ensure niche skillset requisitions are filled in a timely manner\n• Identifying and coordinating partnerships with national laboratories, universities, conferences, and trade organizations\n• Managing short and long cycle talent acquisition approaches and hiring plans\n• Leveraging data and analytics to provide strategic expertise by monitoring and staying abreast of competitive landscape, industry trends, best practices, legal developments, benchmark comparisons, functions as subject matter expert on all business unit recruitment activities\n• Acting as ACST focal with corporate initiatives with University Relations, diversity conferences/initiatives, and other talent demand planning cycles\n\nBasic Qualifications\n• Bachelor’s degree\n• 5+ years of experience in corporate talent acquisition and/or human resources\n• U.S. Citizenship to obtain and maintain government security clearance\n\nPreferred\n• Master’s degree in human resources or a business-related field\n• 3+ years of technical and cyber security recruiter or recruitment experience\n• Ability to influence at varying levels across the organization\n• Ability to handle multiple priorities and navigate in a highly matrixed environment\n• Individuals who are self-motivated and able to work with little supervision, who consistently take the initiative to get things done, do things before being asked by others or forced to by events.\n\nCompensation & Benefits\n• Incentive Eligible\n• Salary Range: Min to Max $103,000 - $155,000\n• For benefits information, please visit https://careers.honeywell.com/us/en/honeywell-benefits\n• Current employees may visit HR Direct.\n• ACST 2022\n
9	2	Machine Operator - Level 1	Qualifications\n•\nHigh School Diploma\n•\nDemonstrated ability to set up and run CNC machines\n•\nAbility to analyze information and concepts\n•\nAbility to collaborate with others and work independently\n•\nAbility to identify key details\n•\nAbility to troubleshoot\n•\nCreative thinking and idea generation\n•\nSignificant CNC experience\n•\nAbility to communicate information clearly\n•\nDue to US export control laws, must be a US citizen, permanent resident or have protected status\nResponsibilities\n•\nProduce high quality products and services for our customers\n•\nYou will assemble and inspect product to ensure the highest quality product is provided to our customers\n•\nYou will be responsible for your work area to ensure the safe and efficient operation of the area\n•\nYou will set up and monitor the production of product in your area and participate in the continuous improvement process at the site to address safety, production and quality improvements\n•\n1st Shift and weekend shift available (Fri, Sat, and Sun 5am-530pm, work 36 hours but get paid for 40)\n•\nOperate assigned equipment\n•\nParticipate in continuous improvement activities\n•\nSupport the Honeywell Operating System\n•\nMaintain work area for operation and cleanliness\n•\nComply with all safety rules\n•\nRecord and report production data\n•\nAnalyze data and production reports\n•\nSet up and change over equipment\nJob description\nInnovate high-purity, high-performance chemicals and materials\n\nThe future is what you make it\n\nWhen you join Honeywell, you become a member of our global team of thinkers, innovators, dreamers and doers who make the things that make the future.\n\nAdvanced Materials is a global supplier of fluorine products, fine chemicals, additives, metals, films and fibers for products including pharmaceuticals, refrigeration, semiconductors and military protection. Advanced Materials is making the world safer, cleaner and enabling the modernization of a growing middle class by enhancing our customer offerings through a differentiated portfolio of chemistries, materials, value-added solutions and superior customer service. Our mission is to attract, retain and develop diverse and highly motivated, entrepreneurial employees striving to flawlessly deliver superior value to our customers every day.\n\nProduce high quality products and services for our customers. You will assemble and inspect product to ensure the highest quality product is provided to our customers. You will be responsible for your work area to ensure the safe and efficient operation of the area. You will set up and monitor the production of product in your area and participate in the continuous improvement process at the site to address safety, production and quality improvements.\n\n1st Shift and weekend shift available (Fri, Sat, and Sun 5am-530pm, work 36 hours but get paid for 40)\nKey Responsibilities\n• Operate assigned equipment.\n• Participate in continuous improvement activities.\n• Support the Honeywell Operating System\n• Maintain work area for operation and cleanliness\n• Comply with all safety rules.\n• Record and report production data.\n• Analyze data and production reports\n• Set up and change over equipment\n\nYOU MUST HAVE\n• High School Diploma\n\nWE VALUE\n• Demonstrated ability to set up and run CNC machines\n• Ability to analyze information and concepts\n• Ability to collaborate with others and work independently\n• Ability to identify key details\n• Ability to troubleshoot\n• Creative thinking and idea generation\n• Significant CNC experience\n• Ability to communicate information clearly\n
10	2	Assembler - Level 3	Job description\nInnovate to solve the world's most important challenges\n\nThe future is what you make it\n\nWhen you join Honeywell, you become a member of our global team of thinkers, innovators, dreamers and doers who make the things that make the future.\n\nThat means changing the way we fly, fueling jets in an eco-friendly way, keeping buildings smart and safe and even making it possible to breathe on Mars.\n\nWorking at Honeywell isn’t just about developing cool things. That’s why all of our employees enjoy access to dynamic career opportunities across different fields and industries.\n\nAre you ready to help us make the future?\n\nProduce high quality products and services for our customers. You will assemble and inspect product to ensure the highest quality product is provided to our customers. You will be responsible for your work area to ensure the safe and efficient operation of the area. You will set up and monitor the production of product in your area and participate in the continuous improvement process at the site to address safety, production and quality improvements.\n\nKey Responsibilities\n• Operate assigned equipment.\n• Participate in continuous improvement activities.\n• Support the Honeywell Operating System\n• Maintain work area for operation and cleanliness\n• Comply with all safety rules.\n• Record and report production data.\n• Analyze data and production reports\n• Set up and change over equipment\n\nWE VALUE\n• Ability toanalyze information and concepts\n• Ability to collaborate with others and work independently\n• Ability to identify key details\n• Ability to troubleshoot\n• Creative thinking and idea generation\n• Ability to communicate information clearly\n
11	3	Data Analyst	Qualifications\n•\nBachelor’s degree with strong academic performance in a quantitative field; or strong equivalent experience\n•\nIntermediate SQL experience writing complex queries\n•\nSolid problem solving, analytical skills, and data curiosity\n•\nSupport conclusions with a clear, understandable story that leverages descriptive statistics, basic inferential statistics, and data visualizations\n•\nWillingness to ask questions about business objectives and the measurement needs for a project workstream, and be able to measure objectives & key results\n•\nExcellent communication skills with the ability to speak to both business and technical teams, and translate ideas between them\n•\nKnowledge of AB Testing methods, including statistical analysis\n•\nExperience in analytics tools such as: SQL, Excel, Hadoop, Hive, Spark, Python, R, Domo, Adobe Analytics (or Google Analytics) and/or equivalent technologies\nResponsibilities\n•\nJoin Target’s Digital Product Analytics team where your goal will be to help the Digital Product team make impactful data-driven decisions\n•\nYou will do this by becoming a trusted advisor to your partners through thought leadership, data acumen and effective storytelling\n•\nDevelop impactful visualizations and insights and be able to communicate them to business partners in a clear, compelling manner\n•\nBuild expertise in Data function and integrate with business partners and other data teams to accelerate the product development lifecycle\n•\nSupport creation of problem statement, approach, and the metrics and measurement strategy, including success criteria, to determine and improve the value of your work through a deep understanding of the business, business process, data ecosystem and rapid data mining\n•\nBe self-directed and drive execution towards outcomes, learn business interdependencies, conduct detailed problem solving, use independent judgement and decision making to deliver as per product scope, provide inputs to establish product/ project timelines\n•\nMeasure success rate of how dashboard/analysis/insights are adapted into decision making, create feedback loops to enhance analysis\n•\nEngage with learning forums to help increase awareness and adoption of current technical topics relevant for Data Analyst competency e.g. BI tools and technologies; Descriptive & inferential analytics\n•\nJob duties may change at any time due to business needs\nJob description\nAbout us:\n\nTarget is an iconic brand, a Fortune 50 company and one of America’s leading retailers\n\nBehind one of the world’s best loved brands is a uniquely capable and brilliant team of analysts, scientists, product owners and engineers. The Target Data & Analytics team creates the tools and data products to sustainably educate and enable our business partners. Join Target’s Digital Product Analytics team where your goal will be to help the Digital Product team make impactful data-driven decisions. You will do this by becoming a trusted advisor to your partners through thought leadership, data acumen and effective storytelling. A role with Target’s Marketing and Digital Data Analytics team is a chance to help develop our in-house strength for getting the maximum value from Target’s many data assets. We see data as a product, and as an opportunity to refine our approach to the ever evolving retail landscape. Together, we create positive impact across Digital initiatives that require actionable insights, measurement, and analysis, to server our guests better.\n\nAbout this career:\n• This role is centered around data, analysis, metrics development, experimentation (A/B Testing) and its application to our websites and mobile apps\n• Develop impactful visualizations and insights and be able to communicate them to business partners in a clear, compelling manner\n• Build expertise in Data function and integrate with business partners and other data teams to accelerate the product development lifecycle\n• Support creation of problem statement, approach, and the metrics and measurement strategy, including success criteria, to determine and improve the value of your work through a deep understanding of the business, business process, data ecosystem and rapid data mining\n• Be self-directed and drive execution towards outcomes, learn business interdependencies, conduct detailed problem solving, use independent judgement and decision making to deliver as per product scope, provide inputs to establish product/ project timelines\n• Measure success rate of how dashboard/analysis/insights are adapted into decision making, create feedback loops to enhance analysis\n• Engage with learning forums to help increase awareness and adoption of current technical topics relevant for Data Analyst competency e.g. BI tools and technologies; Descriptive & inferential analytics\n\nJob duties may change at any time due to business needs.\n\nAbout you:\n• Bachelor’s degree with strong academic performance in a quantitative field; or strong equivalent experience\n• Intermediate SQL experience writing complex queries\n• Solid problem solving, analytical skills, and data curiosity\n• Support conclusions with a clear, understandable story that leverages descriptive statistics, basic inferential statistics, and data visualizations\n• Willingness to ask questions about business objectives and the measurement needs for a project workstream, and be able to measure objectives & key results\n• Excellent communication skills with the ability to speak to both business and technical teams, and translate ideas between them\n• Knowledge of AB Testing methods, including statistical analysis\n• Experience in analytics tools such as: SQL, Excel, Hadoop, Hive, Spark, Python, R, Domo, Adobe Analytics (or Google Analytics) and/or equivalent technologies\n\nAmericans with Disabilities Act (ADA)\n\nTarget will provide reasonable accommodations (such as a qualified sign language interpreter or other personal assistance) with the application process upon your request as required to comply with applicable laws. If you have a disability and require assistance in this application process, please visit your nearest Target store or Distribution Center or reach out to Guest Services at 1-800-440-0680 for additional information.
13	3	Senior software engineer	Qualifications\n•\nStrong listening and communications skills are also required to respond concisely and accurately to users' questions about the platform and to help upskill when needed\n•\n4-year degree or equivalent experience in a related field\n•\n4+ years of Splunk Enterprise Security experience, to include installation, configuration, administration and\n•\nExperience with Common Information Model (CIM)\n•\nExperience with various operating system, host-based and network-based security log sources\n•\nAbility to train, assist and answer questions for a broad customer base across the spectrum of technical ability\n4 more items\nMore job highlights\nJob description\nLocation: 7000 Target Pkwy N, Brooklyn Park, Minnesota, United States, 55445\n\nJOIN TARGET CYBERSECURITY AS A LEAD ENGINEER - SPLUNK SUPPORT\n\nAbout Us\n\nTarget is one of the world's most recognized brands and one of America's leading retailers. But behind the brand our guests love, is a culture of continual innovation - and right now, we are up to big things.\n\nThe Cyber Fusion Center is the heart of Target's security team and a place where innovation happens daily. Interested in a culture that combines invention and creative freedom, ongoing learning, engineering excellence, and stellar outcomes? We are, too - that's why we work here. Join our team to take new enterprise security solutions from concept to release, collaborating with both software & security engineers to innovate on helping defend Target's network using cutting-edge technologies.\n\nWe are looking for a seasoned Splunk engineer to coordinate with a number of disparate customer bases, understand their logging requirements and log sources, and ingest new data sources. An ideal candidate will have a deep technical understanding of SIEMs, structured and unstructured data along with an ability to create custom reports and dashboards using complex data elements. Strong listening and communications skills are also required to respond concisely and accurately to users' questions about the platform and to help upskill when needed.\n\nAbout You\n\n4-year degree or equivalent experience in a related field\n4+ years of Splunk Enterprise Security experience, to include installation, configuration, administration and\n\ntroubleshooting\n\nExperience with both on-prem and cloud Splunk environments\n\nDeep understanding of SIEM, log collection, parsing and onboarding new data sources\n\nExperience with Common Information Model (CIM)\n\nExperience with various operating system, host-based and network-based security log sources\n\nAbility to train, assist and answer questions for a broad customer base across the spectrum of technical ability\n\nAbility to maintain deep technical knowledge within areas of expertise\n\nDesired Qualifications\nSOAR experience\n\nScripting and coding knowledge\n\nExperience working in a highly collaborative cyber fusion center with cross-functional teams\n\nAmericans with Disabilities Act (ADA)\n\nTarget will provide reasonable accommodations (such as a qualified sign language interpreter or other personal assistance) with the application process upon your request as required to comply with applicable laws. If you have a disability and require assistance in this application process, please visit your nearest Target store or Distribution Center or reach out to Guest Services at 1-800-440-0680 for additional information
14	3	Supply Chain Safety Manager 	\nQualifications\n•\nIndustry expertise or related field with proven leadership \n•\nAble to manage complex operations within Safety\n•\nOSHA Standard knowledge, response, and business applicability\n•\nProven problem solving and analytical skills (root cause critical thinking) \n•\nExcellent relationship building and collaboration \n•\nOutstanding communication skills both written and verbal \n4 more items\nResponsibilities\n•\nYou’ll bring your unique point of view, experience and passion for the work to your team and internal clients\n•\nIn Finance, you’ll be an integral voice in discussions that lead to Target’s unparalleled shopping experience\n10 more items\nBenefits\n•\nYour contributions come to life in virtually every area of this dynamic enterprise\n•\nYou will grow and be challenged in your career while having a healthy balance with life outside of work\nMore job highlights\nJob description\nAbout us:  \n\nAs a Fortune 50 company with more than 350,000 team members worldwide, Target is an iconic brand and one of America's leading retailers.​\n\nWorking at Target means the opportunity to help all families discover the joy of everyday life. Caring for our communities is woven into who we are, and we invest in the places we collectively live, work and play. We prioritize relationships, fuel and develop talent by creating growth opportunities, and succeed as one Target team. At our core, our purpose is ingrained in who we are, what we value, and how we work. It’s how we care, grow, and win together.\n\nRight on pace with Target’s distinctive retail brand, in a role in Target Finance and Accounting, you will be a truly collaborative partner with a seat at the table. You’ll bring your unique point of view, experience and passion for the work to your team and internal clients. In Finance, you’ll be an integral voice in discussions that lead to Target’s unparalleled shopping experience. Your analysis and recommendations will be directly applied to critical business decisions, from sales to merchandising and beyond. Within Finance, you’ll enjoy the interesting challenges of the competitive retail space. Your contributions come to life in virtually every area of this dynamic enterprise. You will grow and be challenged in your career while having a healthy balance with life outside of work.\n\nWorking within Risk Management, your mission will be to leverage your expertise to balance proactive protection and real-time mitigation of risks. Our team, including Claims, Insurance, Finance, and Safety allows for a well-rounded approach to managing risk across all operations. We serve our organization and guests with solutions that create value, mitigate risk, influence and enable the business while ensuring compliance.\n\nAs a Supply Chain Safety Manager you will own and ensure execution of the assigned site safety program. Follow structured routines around data analysis, trend review, Leader Standard Work, hazard assessments and leadership communication. Ensure all risk and compliance obligations are met at the leadership and TM level and escalate to resolution. Work with leadership to influence on key safety priorities, to include establishing/sustaining a strong safety culture and identify hazards within site/network and work with appropriate partners to remediate. Develop a strategic site Safety action plan. Facilitate positive outcomes including vendor management of onsite (or other) medical representative in collaboration with onsite HR, Sedgwick and the HQ Claims team. Lead and manage all regulatory visits, such as OSHA/EPA/Fire, etc., including response and remediation. Supports more complex buildings based on prototype, such as RDC, FDC (including network technology), payroll exposure (500-2,000 TMs 30-100 injuries annually), and level of innovation and automation. This includes commensurate level of training, investigation, and communication of total site population.\n\nCore Responsibilities of this job are described within this job description. Job duties may change at any time due to the business needs\n\nAbout you:\n• Industry expertise or related field with proven leadership \n• Able to manage complex operations within Safety\n• OSHA Standard knowledge, response, and business applicability\n• Proven problem solving and analytical skills (root cause critical thinking) \n• Excellent relationship building and collaboration \n• Outstanding communication skills both written and verbal \n• Proven knowledge and use of Microsoft products\n• Ability to travel as required\n• Bachelor’s Degree B.A./B.S. or equivalent experience\n• Schedule: This role requires flexible working hours. Ideal hours will run Monday-Friday, 2pm - 10pm\n\nAmericans with Disabilities Act (ADA)\n\nTarget will provide reasonable accommodations (such as a qualified sign language interpreter or other personal assistance) with the application process upon your request as required to comply with applicable laws. If you have a disability and require assistance in this application process, please visit your nearest Target store or Distribution Center or reach out to Guest Services at 1-800-440-0680 for additional information
12	3	Senior Product Manager - Core Finance SAP	Qualifications\n•\n4-year college degree (or equivalent experience)\n•\n6+ years of product management working with SAP technologies in the Finance space with proven ability to facilitate communication between business and technology teams\n•\nExpert at working in the agile environment (e.g., user stories, iterative development, scrum teams, sprints, personas)\n•\nStrategic mindset and bias for action with strong ability for strategic planning, defining OKRs and driving business outcomes\n•\nExpert problem-solving, critical thinking, and data-driven decision-making skills\n•\nStrong stakeholder relationship management skills\nResponsibilities\n•\nYour analysis and recommendations will be directly applied to critical business decisions, from sales to merchandising and beyond\n•\nA role in Finance Capabilities means partnering with Finance, technology, data science and analytics leaders to co-create solutions that maximizes business value and enables key strategies that are critical to the enterprise and for the experiences we create for our guests.  Truly an owner and expert of your product and underlying processes, you will set the vision, align on the roadmap and mobilize teams to deliver needed outcomes\n•\nGiven most strategies have a Finance impact, you will also serve as a trusted resource to guide other enterprise partners in their solutions to ensure the success and integrity of end-to-end deliverables. \n•\nProduct Teams at Target Corporation are accountable for the delivery of business outcomes enabled through technology and analytic products that are easy to use, easily maintained and highly reliable.  Product teams have one shared backlog that is inclusive of all product, technology and design work to support the capabilities (people, process, and technology) assigned\n•\nAs a Senior Product Manager, you will work in the product model and will partner to develop a comprehensive product strategy, related roadmap, and set key business objectives (OKRs) for the Core Finance system – SAP S/4 HANA\n•\nYou will lead SAP S/4 HANA upgrade for your assigned capability in Finance and work in unison with engineers, data scientists and business partners to deliver the product\n•\nYou will be the “voice of the product” to key stakeholders to ensure that their needs are met, and that the product team is getting the direction and support that it needs to be successful\n•\nYou will develop and actively understand the market, maintain a product roadmap and backlog outlining the customer themes, epics, and stories while prioritizing the backlog to focus on the highest impact work for your team and stakeholders\n•\nYou will encourage the open exchange of information and viewpoints, as well as inspire others to achieve challenging goals and high standards of performance while committing to the organization's direction\n•\nYou will foster a sense of urgency to achieve goals and leverage resources to overcome unexpected obstacles, and partner with product teams across the organization to help them achieve their goals while pursuing and completing yours\nBenefits\n•\nAnd you’ll grow and be challenged in your career while having a healthy balance with life outside of work. \n•\nThe salary range is :$105,800.00 USD - $190,400.00 USD\n•\nPay is based on several factors which may include, but are not limited to education, work experience, certifications, labor markets, etc\n•\nIn addition to your salary, Target cares about and invests in you as a team member, so that you can take care of yourself and your family\n•\nFind competitive benefits from financial and education to well-being and beyond at https://corporate.target.com/careers/benefits
15	3	Associate Buyer - Mobile Accessories	Qualifications\n•\nA four-year degree or equivalent experience\n•\nStrong financial, strategic and planning skills\n•\nEntrepreneurial spirit with strong analytical, decision-making, and organization skills\n•\nA performance-driven individual who demonstrates strong initiative and has superior leadership skills\n•\nFlexibility and resiliency; comfortable working in “grey areas” that are constantly changing\n•\nComfortable taking risks, working through change and supporting creative chances\nResponsibilities\n•\nA role in Buying means working with several diverse vendors to choose the best product mix, both in-store and online\n•\nWe help determine where to localize, while calibrating market positioning and acting as brand managers\n•\nHere, you’ll own a wide SKU count so that your work is varied and challenging\n•\nThrough cross-functional collaboration, instinct and creativity, you will be the expert on the guest, the market and the competition\n•\nAs an Associate Buyer, you’ll execute advertising plans and strategies for your category via ad item selection, space allocation planning, pricing, ad volume forecasting and productivity analysis\n•\nYou’ll watch market trends, evaluate competitors, plan assortments and coordinate end-to-end promotional activities for the Buyer to review\n4 more items\nMore job highlights\nJob description\nAbout us:\nTarget is an iconic brand, a Fortune 50 company and one of America’s leading retailers\n\nTarget Merchandising is evolving at an incredible pace. We are constantly reimagining how this $106 billion retailer offers the innovative, guest-inspiring items that Target is known and loved for. Our goal is to deliver exceptional value, quality and style to elevate Target as the premier retailer in a competitive global marketplace. Through intelligent and progressive business strategies that make the most of Target’s resources and partnerships worldwide, Merchandising works across product categories to create a localized shopping experience online and in our 1800 stores. Are you a creative problem solver who loves to see your work translate into real results? Can you collaborate effectively, execute a plan efficiently and positively influence how Target chooses and presents the right product in the right place at the right price? If so, you will have success on one of our dynamic teams.\n\nA role in Buying means working with several diverse vendors to choose the best product mix, both in-store and online. We help determine where to localize, while calibrating market positioning and acting as brand managers. Here, you’ll own a wide SKU count so that your work is varied and challenging. Through cross-functional collaboration, instinct and creativity, you will be the expert on the guest, the market and the competition.\n\nAs an Associate Buyer, you’ll execute advertising plans and strategies for your category via ad item selection, space allocation planning, pricing, ad volume forecasting and productivity analysis. You’ll watch market trends, evaluate competitors, plan assortments and coordinate end-to-end promotional activities for the Buyer to review. In addition, you’ll help Buyers with system input of item descriptions and markdown updates, and you’ll generate reports to analyze weekly and monthly category metrics. In partnership with product design and sourcing, you will support the Buyer in guiding product development and executing the financial plan for your categories. Aligning with cross-functional partners, you will manage communication with vendors to maximize sales and profit. Your unique strategic perspective will be integral to Buyers selecting items and assortments. Core responsibilities are described within this job description. Job duties may change at any time due to business needs.\n\nAbout you:\n• A four-year degree or equivalent experience\n• Strong financial, strategic and planning skills\n• Entrepreneurial spirit with strong analytical, decision-making, and organization skills\n• A performance-driven individual who demonstrates strong initiative and has superior leadership skills\n• Flexibility and resiliency; comfortable working in “grey areas” that are constantly changing\n• Comfortable taking risks, working through change and supporting creative chances\n• 1+ years merchandising experience preferred\n\nAmericans with Disabilities Act (ADA)\n\nTarget will provide reasonable accommodations (such as a qualified sign language interpreter or other personal assistance) with the application process upon your request as required to comply with applicable laws. If you have a disability and require assistance in this application process, please visit your nearest Target store or Distribution Center or reach out to Guest Services at 1-800-440-0680 for additional information
16	4	Software Engineer	At U.S. Bank, we're passionate about helping customers and the communities where we live and work. The fifth-largest bank in the United States, we’re one of the country's most respected, innovative and successful financial institutions. U.S. Bank is an equal opportunity employer committed to creating a diverse workforce. We consider all qualified applicants without regard to race, religion, color, sex, national origin, age, sexual orientation, gender identity, disability or veteran status, among other factors.\n\nJob Description\n\nU.S. Bank is seeking the position of Software Engineer in Minneapolis, Minnesota. Duties: The Software Engineer will be responsible for the analysis, design, testing, development and maintenance of best in class software experiences. The candidate will be adept with the agile software development lifecycle and DevOps principles. Responsibilities include: designing, developing, testing, operating and maintaining products; full stack ownership by consistently writing production-ready and testable code; creates optimal design adhering to architectural best practices; considers scalability, reliability and performance of systems/contexts affected when defining technical designs; makes sound design/coding decisions keeping customer experience in the forefront; takes feedback from code review and apply changes to meet standards; conducts code reviews to provide guidance on engineering best practices and compliance with development procedures; accountable for ensuring all aspects of product development follow compliance and security best practices; exhibits relentless focus in software reliability engineering standards embedded into development standards; embraces emerging technology opportunities and contributes to the best practices in support of the bank's technology transformation; contributes to a culture of innovation, collaboration and continuous improvement; reviews tasks critically and ensures they are appropriately prioritized and sized for incremental delivery; and anticipates and communicates blockers and delays before they require escalation. The Software Engineer will be primarily responsible for: defining required epics and stories for new APIs; creating GitLab projects and Jenkins pipelines for new APIs; implementing or exposing the microservices using Spring Boot and GraphQL technologies; writing unit test cases for APIs with Junit and Mockito; implementing the proper logging mechanism and audit logs for all new APIs; using Kubernetes for deploying, managing, and scaling containers; and using JIRA tool for user story status tracking and defect status tracking. Telecommuting available anywhere in U.S. Base pay range may vary if an offer is made for work in a different location. Pay Range: $130,998.00 - $146,100.00.\n\nQualifications\n\nRequires a Master’s degree (or foreign equivalent) in Computer Science, Computer Information Systems, or related technical field and 2 years of experience developing new and existing services using Spring Boot. Will accept a Bachelor’s degree (or foreign equivalent) in Computer Science, Computer Information Systems, or related technical field and 5 years of experience developing new and existing services using Spring Boot in lieu of a Master’s degree plus 2 years. Must possess 2 years of experience with Master’s or 5 years of experience with Bachelor’s with: Agile, Dumo Logic, Bamboo, RA tool, GIT, Spring Boot, and JIRA. Telecommuting available anywhere in the U.S. Company headquarters located at 800 Nicollet Mall, Minneapolis, MN 55402.\n\nIf there’s anything we can do to accommodate a disability during any portion of the application or hiring process, please refer to our disability accommodations for applicants.\n\nLearn how the way we work at U.S. Bank drives meaningful relationships with our customers and collaboration across the company.\n\nBenefits:\n\nTake care of yourself and your family with U.S. Bank employee benefits. We know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve. That's why we share the cost of benefits and offer a variety of programs, resources and support you need to bring your full self to work and stay present and committed to the people who matter most - your family.\n\nLearn all about U.S. Bank employee benefits, including tuition reimbursement, retirement plans and more, by visiting careers.usbank.com.\n\nEEO is the Law\n\nApplicants can learn more about the company’s status as an equal opportunity employer by viewing the federal EEO is the Law poster.\n\nE-Verify\n\nU.S. Bank participates in the U.S. Department of Homeland Security E-Verify program in all facilities located in the United States and certain U.S. territories. The E-Verify program is an Internet-based employment eligibility verification system operated by the U.S. Citizenship and Immigration Services. Learn more about the E-Verify program.\n\nDue to legal requirements, U.S. Bank requires that the successful candidate hired for some positions be fully-vaccinated for COVID-19, absent being granted an accommodation due to a medical condition, pregnancy, or sincerely held religious belief or other legally required exemption. For these positions, as part of the conditional offer of employment, the successful candidate will be asked to provide proof of vaccination or approval for an accommodation or exemption upon hire
17	4	UX Content Strategist (Content Designer)	Qualifications\n•\nFive or more years of related work experience\nResponsibilities\n•\nWrites, edits and implements content based on the U.S. Bank content strategy, including voice and tone, and customer-/business-centric site goals\n•\nReviews content with peers and senior content strategists to ensure they accurately represent the U.S. Bank content strategies\n•\nFormally observes user interviews and usability sessions\n•\nAnalyzes and understands end-to-end customer experiences to ensure that all content is consistent in voice/tone/construction and technically correct\n•\nAssists in gathering requirements and assessing the content needs of a given project\n•\nUpdates content logs, copies documents, CMS and other documentation systems\n•\nProvides strategic content recommendations and writing/editing support for UX teams, product managers, business lines, and other content stakeholders\n•\nDrives, advocates and embodies a customer-centric perspective within and outside the UX\n•\nDesign organization, resulting in consistently simple and innovatively enriching experiences for our customers\n•\nApplies and updates existing content strategies to accommodate new products and campaigns\n•\n﻿Validates that content is correctly and accurately implemented across all platforms\nBenefits\n•\nTake care of yourself and your family with U.S. Bank employee benefits\n•\nWe know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve\n•\nThat's why we share the cost of benefits and offer a variety of programs, resources and support you need to bring your full self to work and stay present and committed to the people who matter most - your family\n•\nLearn all about U.S. Bank employee benefits, including tuition reimbursement, retirement plans and more, by visiting careers.usbank.com\n•\nIn addition to salary, US Bank offers a comprehensive benefits package, including incentive and recognition programs, equity stock purchase 401k contribution and pension (all benefits are subject to eligibility requirements)\n•\nPay Range: $99,365.00 - $116,900.00 - $128,590.00\nJob description\nAt U.S. Bank, we're passionate about helping customers and the communities where we live and work. The fifth-largest bank in the United States, we’re one of the country's most respected, innovative and successful financial institutions. U.S. Bank is an equal opportunity employer committed to creating a diverse workforce. We consider all qualified applicants without regard to race, religion color, sex, national origin, age, sexual orientation, gender identity, disability or veteran status, among other factors.\n\nThe Content Specialist/Strategist works with Experience Strategy leads and UX team members to identify and meet the content demands for various projects.\n• Writes, edits and implements content based on the U.S. Bank content strategy, including voice and tone, and customer-/business-centric site goals.\n• Reviews content with peers and senior content strategists to ensure they accurately represent the U.S. Bank content strategies.\n• Formally observes user interviews and usability sessions.\n• Analyzes and understands end-to-end customer experiences to ensure that all content is consistent in voice/tone/construction and technically correct.\n• Assists in gathering requirements and assessing the content needs of a given project.\n• Updates content logs, copies documents, CMS and other documentation systems.\n• Provides strategic content recommendations and writing/editing support for UX teams, product managers, business lines, and other content stakeholders.\n• Drives, advocates and embodies a customer-centric perspective within and outside the UX\n• Design organization, resulting in consistently simple and innovatively enriching experiences for our customers.\n• Applies and updates existing content strategies to accommodate new products and campaigns.\n• ﻿Validates that content is correctly and accurately implemented across all platforms.\n\nBasic Qualifications\n• Bachelor's degree, with an emphasis on English, Writing, Technical Writing, Journalism, Content Strategy, or Library Science preferred, or equivalent experience\n• Five or more years of related work experience\n\nPreferred Skills/Experience\n• Strong understanding of the principles of content strategy with a clear understanding of information architecture, interactive design principles, and web usability\n• Ability to produce user-centered design from concept to delivery without supervision\n• Ability to communicate complex concepts clearly and persuasively across different audiences and varying levels of the organization\n• Significant experience writing a variety of digital content for instructional, transactional and marketing experiences – including navigation labels, form fields labels and messaging, error messages, contextual help messages, alert messages and FAQs\n• Experience with data collection and quantitative analysis\n• Ability to meet ambitious deadlines and deliver high-quality work on schedule, including quickly turning around plans and reports\n• Good knowledge of UX best practices\n• Familiar with delivering creative within an Agile environment\n\nIf there’s anything we can do to accommodate a disability during any portion of the application or hiring process, please refer to our disability accommodations for applicants.\n\nLearn how the way we work at U.S. Bank drives meaningful relationships with our customers and collaboration across the company.\n\nBenefits:\n\nTake care of yourself and your family with U.S. Bank employee benefits. We know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve. That's why we share the cost of benefits and offer a variety of programs, resources and support you need to bring your full self to work and stay present and committed to the people who matter most - your family.\n\nLearn all about U.S. Bank employee benefits, including tuition reimbursement, retirement plans and more, by visiting careers.usbank.com.\n\nEEO is the Law\n\nApplicants can learn more about the company’s status as an equal opportunity employer by viewing the federal EEO is the Law poster.\n\nE-Verify\n\nU.S. Bank participates in the U.S. Department of Homeland Security E-Verify program in all facilities located in the United States and certain U.S. territories. The E-Verify program is an Internet-based employment eligibility verification system operated by the U.S. Citizenship and Immigration Services. Learn more about the E-Verify program.\n\nThe salary range reflects figures based on the primary location, which is listed first. The actual range for the role may differ based on the location of the role. In addition to salary, US Bank offers a comprehensive benefits package, including incentive and recognition programs, equity stock purchase 401k contribution and pension (all benefits are subject to eligibility requirements). Pay Range: $99,365.00 - $116,900.00 - $128,590.00.\n\nDue to legal requirements, U.S. Bank requires that the successful candidate hired for some positions be fully vaccinated for COVID-19, absent being granted an accommodation due to a medical condition, pregnancy, or sincerely held religious belief or other legally required exemption. For these positions, as part of the conditional offer of employment, the successful candidate will be asked to provide proof of vaccination or approval for accommodation or exemption upon hire. U.S. Bank will consider qualified applicants with criminal histories in a manner consistent with the San Francisco Fair Chance Ordinance
18	4	Accounting Specialist 5	Job highlights\nIdentified by Google from the original job post\nQualifications\n•\nShould have approximately 5 or more years of banking related experience\n•\nShould have demonstrated efficiency in workflow management with completing assigned work\n•\nHigh school diploma or equivalent\n•\nFive or more years of relevant experience\nResponsibilities\n•\nUnder minimal supervision, assists with the operational activities, tracking and daily monitoring for Network reconciliations\n•\nWill track the aging exception items in conjunction with reporting to ensure tasks are completed\n5 more items\nBenefits\n•\nTake care of yourself and your family with U.S. Bank employee benefits\n•\nWe know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve\n2 more items\nMore job highlights\nJob description\nAt U.S. Bank, we're passionate about helping customers and the communities where we live and work. The fifth-largest bank in the United States, we’re one of the country's most respected, innovative and successful financial institutions. U.S. Bank is an equal opportunity employer committed to creating a diverse workforce. We consider all qualified applicants without regard to race, religion color, sex, national origin, age, sexual orientation, gender identity, disability or veteran status, among other factors.\n\nJob Description\n\nUnder minimal supervision, assists with the operational activities, tracking and daily monitoring for Network reconciliations. Will track the aging exception items in conjunction with reporting to ensure tasks are completed. Will complete any escalations and assist with task coverage as needed. Will provide training for existing staff and onboard new staff. Will provide production, quality reporting and communicate to manager. Will be involved in application testing and support releases of system enhancements. Completes KPI, ARM, SOX audits, prepare reporting as requested.\n\nShould have approximately 5 or more years of banking related experience.\n\nShould have demonstrated efficiency in workflow management with completing assigned work.\n\nBasic Qualifications\n• High school diploma or equivalent\n• Five or more years of relevant experience\n\nPreferred Skills/Experience\n• Considerable knowledge of bookkeeping practices and principles\n• Ability to identify and resolve exceptions and to interpret data\n• Ability to manage multiple tasks\n• Proficient computer navigation skills using a variety of software packages including Microsoft Office applications\n\nIf there’s anything we can do to accommodate a disability during any portion of the application or hiring process, please refer to our disability accommodations for applicants.\n\nLearn how the way we work at U.S. Bank drives meaningful relationships with our customers and collaboration across the company.\n\nBenefits:\n\nTake care of yourself and your family with U.S. Bank employee benefits. We know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve. That's why we share the cost of benefits and offer a variety of programs, resources and support you need to bring your full self to work and stay present and committed to the people who matter most - your family.\n\nLearn all about U.S. Bank employee benefits, including tuition reimbursement, retirement plans and more, by visiting careers.usbank.com.\n\nEEO is the Law\n\nApplicants can learn more about the company’s status as an equal opportunity employer by viewing the federal EEO is the Law poster.\n\nE-Verify\n\nU.S. Bank participates in the U.S. Department of Homeland Security E-Verify program in all facilities located in the United States and certain U.S. territories. The E-Verify program is an Internet-based employment eligibility verification system operated by the U.S. Citizenship and Immigration Services. Learn more about the E-Verify program.\n\nDue to legal requirements, U.S. Bank requires that the successful candidate hired for some positions be fully-vaccinated for COVID-19, absent being granted an accommodation due to a medical condition, pregnancy, or sincerely held religious belief or other legally required exemption. For these positions, as part of the conditional offer of employment, the successful candidate will be asked to provide proof of vaccination or approval for an accommodation or exemption upon hire
19	4	Marketing Project Manager	Qualifications\n•\nBachelor's degree, or equivalent work experience\n•\nSix or more years of related experience in marketing and marketing strategy with proven ability to deliver results\nResponsibilities\n•\nProject Managers are responsible for creative development through channel execution\n•\nIn addition to managing campaigns, this role may be asked to assist with managing vendors and envisioning new ways to manage campaigns more efficiently\n•\nDevelops and manages the fulfillment of campaigns, including:\n•\nProduction matrix\n•\nDeciphering and managing mail plans, tests, and offer strategies\n•\nLettershop instructions\n•\nEstimates and invoices (against campaign budgets and expectations)\n•\nCampaign and package specifications\n•\nInternal approvals (Compliance, Business Line, Operations)\n•\nCoordination with other integrated marketing teams on mail drops, email deployment, phone center readiness, and digital channel readiness;\n•\nReviews and approves audits and proofs for all components;\n•\nEngineers print and email creative designs for cost, time, and production efficiency:\n•\nInfluences creative designs to optimize vendor capabilities, responses, and bookings\n•\nShares best practices with peers\n•\nInvestigates new formats, technologies, and production methods proactively\n•\nNegotiates with vendors\n•\nEvaluates opportunities for driving response and efficiency within and across business lines\n•\nMaintains understanding of channel influence on overall integrated marketing CPA\n•\nReports on cost savings and efficiencies gained;\n•\nPlans, optimizes, and improves future campaigns with a deep understanding of timelines and works on future campaigns while executing campaign in process;\n•\nInitiates requests for bids and quotes and evaluates responses and responsible for invoicing, tracking costs, reconciliations, and final billing;\n•\nMaintains and establishes quality control standards and check points;\n•\nManages vendor relationships by establishing and monitoring performance to recognized standards and effectively resolves production-related issues:\n•\nHolds vendors accountable for SLAs, accuracy, and quality standards\n•\nAssists with negotiating pricing based on business line volumes and volumes across acquisitions; and\n•\nPrioritizes deliverables based on revenue drivers\n•\nTeam members who are in a hybrid role typically spend three days a week at a U.S. Bank location, while\n•\nhaving flexibility on their work location for the other working days\nBenefits\n•\nTake care of yourself and your family with U.S. Bank employee benefits\n•\nLearn all about U.S. Bank employee benefits, including tuition reimbursement, retirement plans and more, by visiting careers.usbank.com\nJob description\nAt U.S. Bank, we're passionate about helping customers and the communities where we live and work. The fifth-largest bank in the United States, we're one of the country's most respected, innovative and successful financial institutions. U.S. Bank is an equal opportunity employer committed to creating a diverse workforce. We consider all qualified applicants without regard to race, religion color, sex, national origin, age, sexual orientation, gender identity, disability or veteran status, among other factors.\n\nJob Description\n\nU.S. Bank is currently recruiting a Marketing Project Manager, who will manage the creation of direct marketing materials supporting credit card campaigns for various business lines. The mediums are direct mail, email, and other forms of online acquisition communications as needed. Project Managers are responsible for creative development through channel execution. In addition to managing campaigns, this role may be asked to assist with managing vendors and envisioning new ways to manage campaigns more efficiently. Additional responsibilities include:\n• Develops and manages the fulfillment of campaigns, including:\n• Creative design\n• Schedules\n• Production matrix\n• Deciphering and managing mail plans, tests, and offer strategies\n• Lettershop instructions\n• Estimates and invoices (against campaign budgets and expectations)\n• Campaign and package specifications\n• Internal approvals (Compliance, Business Line, Operations)\n• Coordination with other integrated marketing teams on mail drops, email deployment, phone center readiness, and digital channel readiness;\n\n• Reviews and approves audits and proofs for all components;\n• Engineers print and email creative designs for cost, time, and production efficiency:\n• Influences creative designs to optimize vendor capabilities, responses, and bookings\n• Shares best practices with peers\n• Investigates new formats, technologies, and production methods proactively\n• Negotiates with vendors\n• Evaluates opportunities for driving response and efficiency within and across business lines\n• Maintains understanding of channel influence on overall integrated marketing CPA\n• Reports on cost savings and efficiencies gained;\n\n• Plans, optimizes, and improves future campaigns with a deep understanding of timelines and works on future campaigns while executing campaign in process;\n• Initiates requests for bids and quotes and evaluates responses and responsible for invoicing, tracking costs, reconciliations, and final billing;\n• Maintains and establishes quality control standards and check points;\n• Manages vendor relationships by establishing and monitoring performance to recognized standards and effectively resolves production-related issues:\n• Holds vendors accountable for SLAs, accuracy, and quality standards\n• Assists with negotiating pricing based on business line volumes and volumes across acquisitions; and\n\n• Prioritizes deliverables based on revenue drivers.\n\nThis role is hybrid. Team members who are in a hybrid role typically spend three days a week at a U.S. Bank location, while\nhaving flexibility on their work location for the other working days.\n\nBasic Qualifications\n• Bachelor's degree, or equivalent work experience\n• Six or more years of related experience in marketing and marketing strategy with proven ability to deliver results\n\nPreferred Skills/Experience\n• Ability to lead projects and provide marketing that is data-driven, customer-centric, and relevant\n• Proven ability to manage multiple projects and assignments that are completed on time and on budget\n• Ability to collaborate with research teams and leaders to adapt strategies based on research findings and campaign results\n• Able to lead contract negotiations with limited supervision and activate vendor relationships for the benefit of the Company and our brand\n• Strong organizational, interpersonal, and team-building skills\n• Excellent written and oral communication skills, including presentation skills\n• Proficient computer navigation skills using a variety of software packages\n• MBA or equivalent markers of high achievement are a plus\n\nIf there's anything we can do to accommodate a disability during any portion of the application or hiring process, please refer to our disability accommodations for applicants.\n\nLearn how the way we work at U.S. Bank drives meaningful relationships with our customers and collaboration across the company.\n\nBenefits:\nTake care of yourself and your family with U.S. Bank employee benefits. We know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve. That's why we share the cost of benefits and offer a variety of programs, resources and support you need to bring your full self to work and stay present and committed to the people who matter most - your family.\n\nLearn all about U.S. Bank employee benefits, including tuition reimbursement, retirement plans and more, by visiting careers.usbank.com.\n\nEEO is the Law\nApplicants can learn more about the company's status as an equal opportunity employer by viewing the federal EEO is the Law poster.\n\nE-Verify\n\nU.S. Bank participates in the U.S. Department of Homeland Security E-Verify program in all facilities located in the United States and certain U.S. territories. The E-Verify program is an Internet-based employment eligibility verification system operated by the U.S. Citizenship and Immigration Services. Learn more about the E-Verify program.\n\nDue to legal requirements, U.S. Bank requires that the successful candidate hired for some positions be fully-vaccinated for COVID-19, absent being granted an accommodation due to a medical condition, pregnancy, or sincerely held religious belief or other legally required exemption. For these positions, as part of the conditional offer of employment, the successful candidate will be asked to provide proof of vaccination or approval for an accommodation or exemption upon hire
20	4	Technical Help Desk Representative	Qualifications\n•\nHigh school diploma or equivalent\n•\nTwo to three years of experience as a Telecommunications CSR\nResponsibilities\n•\nThis Technical Helpdesk Representative role supports U.S. Bank clients with their commercial credit card programs by providing technical assistance through phone, email, and chat to ensure a positive client experience with our online commercial card management platform Access Online\n•\nTechnical Helpdesk Representatives regularly address client issues by listening to clients, troubleshooting potential root causes of issues and determining the appropriate course of action with the ultimate goal of final issue resolution and maximum client satisfaction\n3 more items\nBenefits\n•\nTake care of yourself and your family with U.S. Bank employee benefits\n•\nWe know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve\n2 more items\nMore job highlights\nJob description\nAt U.S. Bank, we're passionate about helping customers and the communities where we live and work. The fifth-largest bank in the United States, we're one of the country's most respected, innovative and successful financial institutions. U.S. Bank is an equal opportunity employer committed to creating a diverse workforce. We consider all qualified applicants without regard to race, religion color, sex, national origin, age, sexual orientation, gender identity, disability or veteran status, among other factors.\n\nJob Description\n\nJoin a fast-paced and engaging team environment at U.S. Bank! This Technical Helpdesk Representative role supports U.S. Bank clients with their commercial credit card programs by providing technical assistance through phone, email, and chat to ensure a positive client experience with our online commercial card management platform Access Online. Technical Helpdesk Representatives regularly address client issues by listening to clients, troubleshooting potential root causes of issues and determining the appropriate course of action with the ultimate goal of final issue resolution and maximum client satisfaction. This is a key client support role that works closely with our account management teams and is a team orientated position. Successful Technical Helpdesk Representatives can enjoy future opportunities for career advancement within the commercial card organization.\n\nThis team operates a 24-hour, 7 day a week support center model so shifts vary and include days, nights and weekends and scheduling is completed a month in advance. There are opportunities for overtime based on business need.\n\nThis role is responsible for supporting Federal Government accounts and requires passing a post-employment screening administered by the General Services Administration (GSA) which includes extensive criminal and background checks. The background review will incorporate review of the following: citizenship, substance abuse, criminal history, debt/bankruptcy, conflicts of interest.\n\nBasic Qualifications\n\n- High school diploma or equivalent\n\n- Two to three years of experience as a Telecommunications CSR\n\nPreferred Skills/Experience\n\n- General knowledge and understanding of the technical aspects of telecommunications equipment, systems, and vendor capabilities\n\n- Ability to manage multiple tasks/projects and deadlines simultaneously\n\n- Good verbal and written communications skills\n\n- One to two years of experience in roles focused on hardware or software technical support, telecommunications, or related industries\n\n- Proficient computer skills using a variety of software packages including Microsoft Office applications\n\n- One or two years of focused customer phone and email support highly desired\n\nCovid-19 Vaccine Mandate Requirement: U.S. Bank requires that the successful candidate hired for this position be fully-vaccinated for COVID-19, absent being granted an accommodation due to a medical condition, pregnancy, or sincerely held religious belief or other legally required exemption.\n\nIf there's anything we can do to accommodate a disability during any portion of the application or hiring process, please refer to our disability accommodations for applicants.\n\nLearn how the way we work at U.S. Bank drives meaningful relationships with our customers and collaboration across the company.\n\nBenefits:\nTake care of yourself and your family with U.S. Bank employee benefits. We know that healthy employees are happy employees, and we believe that work/life balance should be easy to achieve. That's why we share the cost of benefits and offer a variety of programs, resources and support you need to bring your full self to work and stay present and committed to the people who matter most - your family.\n\nLearn all about U.S. Bank employee benefits, including tuition reimbursement, retirement plans and more, by visiting careers.usbank.com.\n\nEEO is the Law\nApplicants can learn more about the company's status as an equal opportunity employer by viewing the federal EEO is the Law poster.\n\nE-Verify\n\nU.S. Bank participates in the U.S. Department of Homeland Security E-Verify program in all facilities located in the United States and certain U.S. territories. The E-Verify program is an Internet-based employment eligibility verification system operated by the U.S. Citizenship and Immigration Services. Learn more about the E-Verify program.\n\nDue to legal requirements, U.S. Bank requires that the successful candidate hired for some positions be fully-vaccinated for COVID-19, absent being granted an accommodation due to a medical condition, pregnancy, or sincerely held religious belief or other legally required exemption. For these positions, as part of the conditional offer of employment, the successful candidate will be asked to provide proof of vaccination or approval for an accommodation or exemption upon hire
21	5	Associate Software Engineer	Qualifications\n•\nBachelor's Degree in Computer Science, Information Technology, or related discipline OR completion of technology related boot camp OR 6+ months of software engineering experience\n•\n6+ months of familiarity/experience with software programming language\n•\n6+ months of familiarity/experience with object-oriented programming concepts\n•\nCandidates must be able to perform all essential job functions with or without reasonable accommodation\nResponsibilities\n•\nPerform all phases of software development lifecycle including requirement analysis, design, development, and testing (unit testing, automation, deployment, and support)\n•\nProvide support in critical production support issue resolution as needed in DevOps teams\n•\nSupport the team for application availability, reliability, and stability\n•\nWork with team to achieve timely resolution of all production issues meeting or exceeding Service Level Agreements\n•\nEstablish, refine, and integrate development and test environment tools and software as needed\n•\nParticipate in an Agile/Scrum methodology to deliver high-quality software and Attend Agile ceremonies\n•\nPush for technology solutions that create a better work environment/experience for developers\n•\nWork with the dev team and product management to create next-gen features\n•\nIn addition, some roles and locations require full COVID-19 vaccination, including boosters, as an essential job function\nJob description\nOptum is a global organization that delivers care, aided by technology to help millions of people live healthier lives. The work you do with our team will directly improve health outcomes by connecting people with the care, pharmacy benefits, data, and resources they need to feel their best. Come make an impact on the communities we serve as we help advance health equity on a global scale. Here you will find talented peers, comprehensive benefits, a culture guided by diversity and inclusion, career growth opportunities and your life's best work.SM\n\nPrimary Responsibilities:\n• Perform all phases of software development lifecycle including requirement analysis, design, development, and testing (unit testing, automation, deployment, and support)\n• Provide support in critical production support issue resolution as needed in DevOps teams\n• Support the team for application availability, reliability, and stability\n• Work with team to achieve timely resolution of all production issues meeting or exceeding Service Level Agreements\n• Establish, refine, and integrate development and test environment tools and software as needed\n• Participate in an Agile/Scrum methodology to deliver high-quality software and Attend Agile ceremonies\n• Push for technology solutions that create a better work environment/experience for developers\n• Work with the dev team and product management to create next-gen features\n• This role is onsite in Eden Prairie, MN\n\nYou'll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in.\n\nRequired Qualifications:\n• Bachelor's Degree in Computer Science, Information Technology, or related discipline OR completion of technology related boot camp OR 6+ months of software engineering experience\n• 6+ months of familiarity/experience with software programming language\n• 6+ months of familiarity/experience with object-oriented programming concepts\n\nTo protect the health and safety of our workforce, patients, and communities we serve, UnitedHealth Group and its affiliate companies require all employees to disclose COVID-19 vaccination status prior to beginning employment. In addition, some roles and locations require full COVID-19 vaccination, including boosters, as an essential job function. UnitedHealth Group adheres to all federal, state, and local COVID-19 vaccination regulations as well as all client COVID-19 vaccination requirements and will obtain the necessary information from candidates prior to employment to ensure compliance. Candidates must be able to perform all essential job functions with or without reasonable accommodation. Failure to meet the vaccination requirement may result in rescission of an employment offer or termination of employment.\n\nCareers with Optum. Our objective is to make health care simpler and more effective for everyone. With our hands at work across all aspects of health, you can play a role in creating a healthier world, one insight, one connection and one person at a time. We bring together some of the greatest minds and ideas to take health care to its fullest potential, promoting health equity and accessibility. Work with diverse, engaged, and high-performing teams to help solve important challenges.\n\nAt UnitedHealth Group, our mission is to help people live healthier lives and make the health system work better for everyone. We believe everyone-of every race, gender, sexuality, age, location, and income-deserves the opportunity to live their healthiest life. Today, however, there are still far too many barriers to good health which are disproportionately experienced by people of color, historically marginalized groups, and those with lower incomes. We are committed to mitigating our impact on the environment and enabling and delivering equitable care that addresses health disparities and improves health outcomes - an enterprise priority reflected in our mission.\n\nDiversity creates a healthier atmosphere: UnitedHealth Group is an Equal Employment Opportunity/Affirmative Action employer, and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, age, national origin, protected veteran status, disability status, sexual orientation, gender identity or expression, marital status, genetic information, or any other characteristic protected by law.\n\nUnitedHealth Group is a drug - free workplace. Candidates are required to pass a drug test before beginning employment.\n
22	5	Business Analyst Consultant - Remote	Qualifications\n•\nBachelor's Degree or equivalent experience\n•\n5+ years in benefit configuration of benefit design and build\n•\nIn lieu of Benefit configuration experience, have Cirrus Claims SME experience with experiencing interpreting/reviewing member benefit information and full understanding of how that connects to the system design\n•\n5+ years of healthcare experience with a preference for Payer implementation and migrations\n•\n5+ years of analytical skills, understanding how to translate complex medical coverage statements into Cirrus build/design requirements\n•\n5+ years of prioritizing and balancing multiple priorities and projects\n•\nExpert Excel experience, skilled at utilizing Excel both as a document and research tool\n•\nAbility to travel up to 25% from time- to-time\n•\nExperience within multiple lines of business (E&I, M&R, C&S and/or Provider)\n•\nExperience working with Agile methodology\n•\nAbility as an open minded and innovative thinker, not tied to the way it has always been done\n•\nBe able to handle ambiguity and change\n•\nAbility to communicate ideas clearly and concisely\n•\nSolid communication (written and oral) and interpersonal skills\n•\nStrategic thinker and understands how to look for automation and improvement opportunities\n•\nCandidates must be able to perform all essential job functions with or without reasonable accommodation\nResponsibilities\n•\nLead configuration activities for designing and building benefits based on approved business requirements\n•\nEnsure that all configuration documentation is prepared, reviewed, and approved\n•\nCollaborate, provide support, and participate in development of requirements to ensure business needs are captured and delivered\n•\nParticipate in defect remediation activities\n•\nYou'll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in\n•\nIn addition, some roles and locations require full COVID-19 vaccination, including boosters, as an essential job function\nBenefits\n•\nThe salary range for Colorado residents is $82,100 to $146,900\n•\nThe salary range for Connecticut/Nevada/New York City residents is $90,500 to $161,600\n•\nPay is based on several factors including but not limited to education, work experience, certifications, etc\n•\nIn addition to your salary, UnitedHealth Group offers benefits such as, a comprehensive benefits package, incentive and recognition programs, equity stock purchase and 401k contribution (all benefits are subject to eligibility requirements)\nJob description\nAt UnitedHealthcare, we're simplifying the health care experience, creating healthier communities and removing barriers to quality care. The work you do here impacts the lives of millions of people for the better. Come build the health care system of tomorrow, making it more responsive, affordable and equitable. Ready to make a difference? Join us and start doing **your life's best work.(sm)**\n\nAs Sr Business Configuration Analyst for the United Healthcare Strategic Platform (USP) Configuration Team, you will help shape best practices to improve configuration implementation loading and support enterprise platform growth.\n\nYou'll enjoy the flexibility to telecommute* from anywhere within the U.S. as you take on some tough challenges.\n• *Primary Responsibilities:**\n\nIn this role, you will have the opportunity to perform the following types of activities in leading edge technology:\n\n+ Lead configuration activities for designing and building benefits based on approved business requirements\n\n+ Ensure that all configuration documentation is prepared, reviewed, and approved\n\n+ Collaborate, provide support, and participate in development of requirements to ensure business needs are captured and delivered\n\n+ Participate in defect remediation activities\n\nYou'll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in.\n• *Required Qualifications:**\n\n+ Bachelor's Degree or equivalent experience\n\n+ 5+ years in benefit configuration of benefit design and build. In lieu of Benefit configuration experience, have Cirrus Claims SME experience with experiencing interpreting/reviewing member benefit information and full understanding of how that connects to the system design\n\n+ 5+ years of healthcare experience with a preference for Payer implementation and migrations\n\n+ 5+ years of analytical skills, understanding how to translate complex medical coverage statements into Cirrus build/design requirements\n\n+ 5+ years of prioritizing and balancing multiple priorities and projects\n\n+ Expert Excel experience, skilled at utilizing Excel both as a document and research tool\n\n+ Ability to travel up to 25% from time- to-time. The travel may be for training or other work-related duties Less\n• *Preferred Qualifications:**\n\n+ Experience within multiple lines of business (E&I, M&R, C&S and/or Provider)\n\n+ Experience working with Agile methodology\n\n+ Ability as an open minded and innovative thinker, not tied to the way it has always been done\n\n+ Be able to handle ambiguity and change\n\n+ Ability to communicate ideas clearly and concisely\n\n+ Solid communication (written and oral) and interpersonal skills\n\n+ Strategic thinker and understands how to look for automation and improvement opportunities\n\n+ To achieve success, you must demonstrate CLL practices and behaviors in Being Accountable, Being Coachable, Collocating and Deliver results\n\n_To protect the health and safety of our workforce, patients and communities we serve, UnitedHealth Group and its affiliate companies require all employees to disclose COVID-19 vaccination status prior to beginning employment. In addition, some roles and locations require full COVID-19 vaccination, including boosters, as an essential job function. UnitedHealth Group adheres to all federal, state and local COVID-19 vaccination regulations as well as all client COVID-19 vaccination requirements and will obtain the necessary information from candidates prior to employment to ensure compliance. Candidates must be able to perform all essential job functions with or without reasonable accommodation. Failure to meet the vaccination requirement may result in rescission of an employment offer or termination of employment_\n• *Careers with UnitedHealthcare.** Work with a Fortune 5 organization that's serving millions of people as we transform health care with bold ideas. Bring your energy for driving change for the better. Help us improve health access and outcomes for everyone, as we work to advance health equity, connecting people with the care they need to feel their best. As an industry leader, our commitment to improving lives is second to none.\n• All employees working remotely will be required to adhere to UnitedHealth Group's Telecommuter Policy\n• *Colorado, Connecticut, Nevada, or New York City Residents Only:** The salary range for Colorado residents is $82,100 to $146,900. The salary range for Connecticut/Nevada/New York City residents is $90,500 to $161,600. Pay is based on several factors including but not limited to education, work experience, certifications, etc. In addition to your salary, UnitedHealth Group offers benefits such as, a comprehensive benefits package, incentive and recognition programs, equity stock purchase and 401k contribution (all benefits are subject to eligibility requirements). No matter where or when you begin a career with UnitedHealth Group, you'll find a far-reaching choice of benefits and incentives.\n\n_At UnitedHealth Group, our mission is to help people live healthier lives and make the health system work better for everyone. We believe everyone-of every race, gender, sexuality, age, location and income-deserves the opportunity to live their healthiest life. Today, however, there are still far too many barriers to good health which are disproportionately experienced by people of color, historically marginalized groups and those with lower incomes. We are committed to mitigating our impact on the environment and enabling and delivering equitable care that addresses health disparities and improves health outcomes - an enterprise priority reflected in our mission._\n\n_Diversity creates a healthier atmosphere: UnitedHealth Group is an Equal Employment Opportunity/Affirmative Action employer and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, age, national origin, protected veteran status, disability status, sexual orientation, gender identity or expression, marital status, genetic information, or any other characteristic protected by law._\n\n_UnitedHealth Group is a drug - free workplace. Candidates are required to pass a drug test before beginning employment
23	5	Senior Workforce Representative - Telecommute	Qualifications\n•\nHigh school diploma or GED\n•\n1+ years of experience using MS Excel working with data sets, including ability to utilize VLOOKUPs, create pivot tables and graphs, and incorporate standard formulas and functions\n•\n1+ years of experience analyzing information from multiple data sources to identify trends and outliers for issue detection and problem resolution\n•\n1+ years of experience with either back-office or call center transaction and production tracking applications\n•\nIntermediate level proficiency in MS Word and MS PowerPoint\n•\nAbility to work a flexible schedule as needed for infrequent occasions, including early hours, weekends, and holidays\n•\nExperience in Tableau with skills in creating adhoc reports\n•\nExperience using MS Visio for process flows/mapping\n•\nExperience in the Healthcare Industry with products and services\n•\nExcellent verbal and written communication skills, including proven ability to effectively present data and trend analysis, work direction, concerns regarding performance, action plans, solutions and opportunities\n•\nAdaptable and able to quickly move with change while maintaining a positive attitude\n•\nCandidates must be able to perform all essential job functions with or without reasonable accommodation\nResponsibilities\n•\nTo Effectively And Promptly\n•\nAnalyze inventory and performance against targets and determine corresponding work direction\n•\nCommunicate the daily work direction plan for/to Operations Supervisors, Managers, Directors, and VPs\n•\nAdminister skills/profiles database and routing prioritization logic to ensure accurate work assignment\n•\nConduct intraday data and metric monitoring, detect inventory and performance issues, and immediately communicate concerns\n•\nDaily Work Direction and Monitoring\n•\nConduct data analysis of current state inventory, receipts, days on hand, aging, completions and TAT against the capacity forecast/plan and the required key performance metrics (e.g. utilization, efficiency, conformance) and service levels to develop daily work direction plan (staff/inventory pairing) to meet Operations’ inventory targets, service levels, and financial targets including managing/meeting performance guarantees and budget\n•\nEffectively communicate with multiple levels, from peers to director and VP level positions, both verbally and in writing regarding such matters as daily inventory status and work direction, production expectations, stalled inventory concerns, process gaps, system issues, education/skill concerns, recommendations and action plans for remediation, etc\n•\nMonitor, detect issues, and respond [real-time urgent action] to inventory, aging, and performance metrics data - collaborating with Operations partners to make necessary adjustments to solve for broken process, routing, or other issues causing stalled inventory/service, which includes ensuring that roadblocks, holds, and other issues are escalated with appropriate urgency\n•\nManage intra-day staffing levels aligned with multiple work queues and drive the most effective methods for staffing adjustments including adjusting profiles/skilling assignments and/or work-type prioritization\n•\nPerform ad hoc analysis and reporting to identify trends, patterns, and opportunities to improve overall business performance\n•\nCollaborate with all workforce planning functions to ensure unified support for Operations\n•\nSupport the preparation and maintenance of reports, dashboards and monthly packages relating to staffing, inventory and production levels, aging of inventory, and effectiveness of performance\n•\nBe a Trusted Advisor measured by achieving a high level of partner satisfaction through providing training on tools, reports, dashboards, and processes to team members and management as needed, as well as being a resource to all Business Partners\n•\nSupport business areas during reported system outage and latency\n•\nLead innovation and process improvement within Workforce Management, including involvement in local and national project teams as subject matter experts to improve efficiency across the organization\n•\nYou’ll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in\nBenefits\n•\nThe hourly range for Connecticut / Nevada residents is $23.94 to $42.40\n•\nPay is based on several factors including but not limited to education, work experience, certifications, etc\n•\nIn addition to your salary, UnitedHealth Group offers benefits such as, a comprehensive benefits package, incentive and recognition programs, equity stock purchase and 401k contribution (all benefits are subject to eligibility requirements)\n•\nNo matter where or when you begin a career with UnitedHealth Group, you’ll find a far-reaching choice of benefits and incentives\nJob description\nUnitedHealthcare is a company that's on the rise. We're expanding in multiple directions, across borders and, most of all, in the way we think. Here, innovation isn't about another gadget, it's about transforming the health care industry. Ready to make a difference? Make yourself at home with us and start doing your life's best work.(sm)\n\nWe are Trusted Advisors to our UHC Operations and other business partners who effectively plan for, and direct, the right people to be in the right place at the right time. We are thoughts-based, curious people who thrive on developing new solutions to solve tough challenges. Our analytical and innovative skills drive our mission of helping people live healthier lives. We consistently deliver cost-effective plans, solutions and support while balancing strategy with risk to ensure the appropriate staffing is assigned to meet inventory and aging service levels. We maintain and execute on the Workforce Vision of, “Enabling UnitedHealth Group Operations to become a Competitive Advantage for our company.”\n\nPurpose of Job\n\nTo Effectively And Promptly\n• Analyze inventory and performance against targets and determine corresponding work direction\n• Communicate the daily work direction plan for/to Operations Supervisors, Managers, Directors, and VPs\n• Administer skills/profiles database and routing prioritization logic to ensure accurate work assignment\n• Conduct intraday data and metric monitoring, detect inventory and performance issues, and immediately communicate concerns\n\nYou’ll enjoy the flexibility to telecommute* from anywhere within the U.S. as you take on some tough challenges.\n\nPrimary Responsibilities\n• Daily Work Direction and Monitoring\n• Conduct data analysis of current state inventory, receipts, days on hand, aging, completions and TAT against the capacity forecast/plan and the required key performance metrics (e.g. utilization, efficiency, conformance) and service levels to develop daily work direction plan (staff/inventory pairing) to meet Operations’ inventory targets, service levels, and financial targets including managing/meeting performance guarantees and budget\n• Effectively communicate with multiple levels, from peers to director and VP level positions, both verbally and in writing regarding such matters as daily inventory status and work direction, production expectations, stalled inventory concerns, process gaps, system issues, education/skill concerns, recommendations and action plans for remediation, etc.\n• Monitor, detect issues, and respond [real-time urgent action] to inventory, aging, and performance metrics data - collaborating with Operations partners to make necessary adjustments to solve for broken process, routing, or other issues causing stalled inventory/service, which includes ensuring that roadblocks, holds, and other issues are escalated with appropriate urgency\n• Manage intra-day staffing levels aligned with multiple work queues and drive the most effective methods for staffing adjustments including adjusting profiles/skilling assignments and/or work-type prioritization\n• Perform ad hoc analysis and reporting to identify trends, patterns, and opportunities to improve overall business performance\n• Collaborate with all workforce planning functions to ensure unified support for Operations\n• Support the preparation and maintenance of reports, dashboards and monthly packages relating to staffing, inventory and production levels, aging of inventory, and effectiveness of performance\n• Be a Trusted Advisor measured by achieving a high level of partner satisfaction through providing training on tools, reports, dashboards, and processes to team members and management as needed, as well as being a resource to all Business Partners\n• Support business areas during reported system outage and latency\n• Lead innovation and process improvement within Workforce Management, including involvement in local and national project teams as subject matter experts to improve efficiency across the organization\n\nYou’ll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in.\n\nRequired Qualifications\n• High school diploma or GED\n• 1+ years of experience using MS Excel working with data sets, including ability to utilize VLOOKUPs, create pivot tables and graphs, and incorporate standard formulas and functions\n• 1+ years of experience analyzing information from multiple data sources to identify trends and outliers for issue detection and problem resolution\n• 1+ years of experience with either back-office or call center transaction and production tracking applications\n• Intermediate level proficiency in MS Word and MS PowerPoint\n• Ability to work a flexible schedule as needed for infrequent occasions, including early hours, weekends, and holidays\n\nPreferred Qualifications\n• Associate's degree or 2+ years of experience in business/finance analysis or workforce forecasting and planning\n• Experience communicating with, and presenting to, VPs or Directors to provide performance status and recommendations as well as collaborate for solutions\n• Experience in capacity modeling, six sigma/process improvement, or project management\n• Experience leading medium-sized projects\n• Experience with MS Access with the ability to understand queries\n• Experience maintaining an automated work routing application in a back-office environment, i.e. enterprise work router\n• Experience working with scheduling applications, e.g. IEX\n• Experience in Tableau with skills in creating adhoc reports\n• Experience using MS Visio for process flows/mapping\n• Experience in the Healthcare Industry with products and services\n• Excellent verbal and written communication skills, including proven ability to effectively present data and trend analysis, work direction, concerns regarding performance, action plans, solutions and opportunities\n• Adaptable and able to quickly move with change while maintaining a positive attitude\n\nTo protect the health and safety of our workforce, patients and communities we serve, UnitedHealth Group and its affiliate companies require all employees to disclose COVID-19 vaccination status prior to beginning employment. In addition, some roles and locations require full COVID-19 vaccination, including boosters, as an essential job function. UnitedHealth Group adheres to all federal, state and local COVID-19 vaccination regulations as well as all client COVID-19 vaccination requirements and will obtain the necessary information from candidates prior to employment to ensure compliance. Candidates must be able to perform all essential job functions with or without reasonable accommodation. Failure to meet the vaccination requirement may result in rescission of an employment offer or termination of employment.\n\nCareers with UnitedHealthcare. Let's talk about opportunity. Start with a Fortune 5 organization that's serving more than 85 million people already and building the industry's singular reputation for bold ideas and impeccable execution. Now, add your energy, your passion for excellence, your near-obsession with driving change for the better. Get the picture? UnitedHealthcare is serving employers and individuals, states and communities, military families and veterans where ever they're found across the globe. We bring them the resources of an industry leader and a commitment to improve their lives that's second to none. This is no small opportunity. It's where you can do your life's best work.(sm)\n\nColorado, Connecticut or Nevada Residents Only: The hourly range for Colorado residents is $21.68 to $38.56. The hourly range for Connecticut / Nevada residents is $23.94 to $42.40. Pay is based on several factors including but not limited to education, work experience, certifications, etc. In addition to your salary, UnitedHealth Group offers benefits such as, a comprehensive benefits package, incentive and recognition programs, equity stock purchase and 401k contribution (all benefits are subject to eligibility requirements). No matter where or when you begin a career with UnitedHealth Group, you’ll find a far-reaching choice of benefits and incentives.\n• All Telecommuters will be required to adhere to UnitedHealth Group’s Telecommuter Policy\n\nDiversity creates a healthier atmosphere: UnitedHealth Group is an Equal Employment Opportunity/Affirmative Action employer and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, age, national origin, protected veteran status, disability status, sexual orientation, gender identity or expression, marital status, genetic information, or any other characteristic protected by law.\n\nUnitedHealth Group is a drug-free workplace. Candidates are required to pass a drug test before beginning employment
24	5	UHC Communications Manager	Qualifications\n•\nThis position requires a highly motivated, self-sufficient individual who can effectively interact with a range of stakeholders, including senior leaders, and quickly develop an in-depth understanding of Government Program's sales initiatives, priorities and programs\n•\nEssential qualities for success in this position include a collaborative nature, uncompromising eye for quality, exceptional writing skills, strong interpersonal skills, superior organizational skills, program management skills, resourcefulness, the flexibility to adapt effectively and quickly to changing priorities and a willingness to dive in and execute on plans\n•\nBachelor's degree\n•\n6 years of experience that includes:\n•\nCommunications, marketing, public relations, employee engagement, or business management\n•\nAccount management and relationship development assessing and interpreting client needs and requirements\n5 more items\nResponsibilities\n•\nWork within Government Programs Sales Strategy and Experience team to support communications to our 95K external field agents and 2,400 internal employees in a role that includes field communications, project management, client relationship management and analysis\n•\nThis individual will play a key role in executing high-impact programs and communications that advance engagement across several key initiatives\n•\nDevelop and execute communications plans as needed to support business goals in addition to engaging and motivating field agents\n•\nDraft, edit and distribute communications targeted to field agents, including articles, emails, executive communications, videos, presentations, event-related communications, intranet content, etc\n•\nManage communications for assigned region to support regional leaders\n•\nDevelop relationships with market leadership to understand market dynamics and priorities\n9 more items\nMore job highlights\nJob description\nAt UnitedHealthcare, we're simplifying the health care experience, creating healthier communities and removing barriers to quality care. The work you do here impacts the lives of millions of people for the better. Come build the health care system of tomorrow, making it more responsive, affordable and equitable. Ready to make a difference? Join us and start doing your life's best work.(sm)\n\nPositions in this function play a critical role in rallying our internal and external Medicare stakeholders around our mission to help people live healthier lives and to help make the health system work better for everyone. Work within Government Programs Sales Strategy and Experience team to support communications to our 95K external field agents and 2,400 internal employees in a role that includes field communications, project management, client relationship management and analysis. This individual will play a key role in executing high-impact programs and communications that advance engagement across several key initiatives.\n\nThis position requires a highly motivated, self-sufficient individual who can effectively interact with a range of stakeholders, including senior leaders, and quickly develop an in-depth understanding of Government Program's sales initiatives, priorities and programs. Essential qualities for success in this position include a collaborative nature, uncompromising eye for quality, exceptional writing skills, strong interpersonal skills, superior organizational skills, program management skills, resourcefulness, the flexibility to adapt effectively and quickly to changing priorities and a willingness to dive in and execute on plans.\n\nPrimary Responsibilities:\n• Develop and execute communications plans as needed to support business goals in addition to engaging and motivating field agents\n• Draft, edit and distribute communications targeted to field agents, including articles, emails, executive communications, videos, presentations, event-related communications, intranet content, etc.\n• Manage communications for assigned region to support regional leaders. Develop relationships with market leadership to understand market dynamics and priorities\n• Executive communication support as assigned, including script writing and written messages\n• Monitor feedback on published content and identify opportunities to improve communications based on research and data\n• Support efforts to collect, analyze and report on various internal data (qualitative and quantitative) to drive improvements and increased effectiveness (surveys, tailored metrics for tactics and channels, etc.)\n• Provide ad hoc input and support on specialized communications issues\n• Support innovations and enhancements to field agent communications, programs and platforms\n• Maintain understanding of industry to help inform communications strategy and planning\n• Serve as a trusted partner and work effectively with colleagues across the enterprise, adding value and driving projects to achieve goals\n\nYou'll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in.\n\nRequired Qualifications:\n• Bachelor's degree\n• 6 years of experience that includes:\n• Communications, marketing, public relations, employee engagement, or business management\n• Account management and relationship development assessing and interpreting client needs and requirements\n• Presenting to groups and teams\n• Content creation across multiple channels\n• Experience in developing content tailored to specific audiences and channels (digital, print, social, verbal)\n• Experience working with discipline and urgency\n• Experience managing multiple projects\n• Intermediate or higher level of proficiency in Microsoft Office suite (PowerPoint/Word/Excel/SharePoint/Teams)\n\nPreferred Qualifications:\n• Experience in the health care industry\n• Experience in building and executing initiatives in a corporate setting (or in consultation with corporations)\n• Experience with video and digital communications\n• Knowledge and / or use of Associated Press Stylebook\n• Ability to be flexible and work with ambiguity\\ Excellent writing and editing skills with proven track record of executing campaigns and tactics\n• Excellent project management skills including development of strategic initiatives, active management and execution\n\nCareers at UnitedHealthcare Medicare & Retirement. The Boomer generation is the fastest growing market segment in health care. And we are the largest business in the nation dedicated to serving their unique health and well-being needs. Up for the challenge of a lifetime? Join a team of the best and the brightest to find bold new ways to proactively improve the health and quality of life of these 9 million customers. You'll find a wealth of dynamic opportunities to grow and develop as we work together to heal and strengthen our health care system. Ready? It's time to do your life's best work.(sm)\n\nAt UnitedHealth Group, our mission is to help people live healthier lives and make the health system work better for everyone. We believe everyone-of every race, gender, sexuality, age, location and income-deserves the opportunity to live their healthiest life. Today, however, there are still far too many barriers to good health which are disproportionately experienced by people of color, historically marginalized groups and those with lower incomes. We are committed to mitigating our impact on the environment and enabling and delivering equitable care that addresses health disparities and improves health outcomes - an enterprise priority reflected in our mission.\n\nDiversity creates a healthier atmosphere: UnitedHealth Group is an Equal Employment Opportunity/Affirmative Action employer, and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, age, national origin, protected veteran status, disability status, sexual orientation, gender identity or expression, marital status, genetic information, or any other characteristic protected by law.\n\nUnitedHealth Group is a drug-free workplace. Candidates are required to pass a drug test before beginning employment
26	6	Lead Software Engineer	Qualifications\n•\nExpert level knowledge of cloud IaaS architecture and API development for IoT cloud PaaS and SaaS systems\n•\nExperience in developing real-time data or telematics services on Serverless Application Model (AWS Lambda) and/or container orchestration environments (e.g\n•\nDeveloping backend services using AWS SDKs in TypeScript, AWS RDS (MySQL, Postgres DB)\n•\nExperience with AWS Services including: API Gateway, Iot Core, Cognito, Lambda, CloudWatch, DynamoDB, S3, Elemental MediaConvert, Kinesis/Kinesis Video Streams, OpenSearch, Glue, SQS, SNS\n•\nA university degree and 10+ years of experience (i.e\n•\nBachelors degree) or a graduate degree and 6+ years of experience (i.e\n10 more items\nResponsibilities\n•\nSoftware Engineer works as part of a solutions team practicing mature Agile-Scrum based feature development\n•\nInfrastructure as a code development (AWS CloudFormation, CDK)\n•\nDesign intuitive, well-modeled API endpoints for both internal and user-facing consumption that conform to RESTful concepts\n•\nUse OpenAPI specification to document these endpoints\n•\nDevelopment of advanced cloud services for large scale IoT platforms, AI, and real time telematics solutions\n•\nDesign and maintain web application front and backends, using a variety of web technologies\n5 more items\nMore job highlights\nJob description\nWe are looking for an exceptional Software Engineering Professional to join us in building the next generation Smart and Connected Dashcam solution.\n\nSensata Insights delivers world-class, cloud-native solutions based on our industry leading vehicle telematics devices with edge intelligent technology designed to solve real business problems in fleet, transportation/logistics and automotive related markets.\n\nWe are looking for individuals that thrive in a winning culture, strive for continuous improvement, and enjoy the dynamic environment of a leading-edge technology company. If you enjoy working along with other professionals across all functional disciplines, delivering high quality products and solutions, and leading the way on our next generation platforms; then you will find tremendous opportunity at Sensata.\n\nThe Senior Software Engineer is a platform developer and technologist for our next generation Dash Camera Cloud Services. This advanced telematics platform will support our evolving AI technologies in Advanced Driver Assistance, Driver Monitoring, and multi-camera Live View with reliable and real time delivery of enriched vehicular data to 3rd party services and applications. The Sr. Software Engineer works as part of a solutions team practicing mature Agile-Scrum based feature development.\n\nKnowledge:\n• Expert level knowledge of cloud IaaS architecture and API development for IoT cloud PaaS and SaaS systems.\n• Experience in developing real-time data or telematics services on Serverless Application Model (AWS Lambda) and/or container orchestration environments (e.g. AWS ECS).\n• Infrastructure as a code development (AWS CloudFormation, CDK).\n• Design intuitive, well-modeled API endpoints for both internal and user-facing consumption that conform to RESTful concepts. Use OpenAPI specification to document these endpoints. Use Postman for testing APIs.\n• Developing backend services using AWS SDKs in TypeScript, AWS RDS (MySQL, Postgres DB)\n• Experience with AWS Services including: API Gateway, Iot Core, Cognito, Lambda, CloudWatch, DynamoDB, S3, Elemental MediaConvert, Kinesis/Kinesis Video Streams, OpenSearch, Glue, SQS, SNS.\n• Understand messaging protocols such as MQTT or AMQP and be comfortable using third-party message brokers (e.g., Mosquitto, RabbitMQ.).\n\nGeneral Responsibilities:\n• Development of advanced cloud services for large scale IoT platforms, AI, and real time telematics solutions.\n• Design and maintain web application front and backends, using a variety of web technologies.\n• Support the integration of new cloud platforms and technologies through acquisition and aggressive organic growth.\n• Collaborate with firmware/hardware teams to design new system-wide features and solutions.\n• Support end-users for high-priority issues.\n• Document development plans, processes, and overall applications from a technical perspective.\n• Support customer Proof-of-Concept and other technical discussions.\n\nEducation and Experience:\n• A university degree and 10+ years of experience (i.e. Bachelors degree) or a graduate degree and 6+ years of experience (i.e. Masters degree) or a higher level degree and 4+ years of experience (i.e. Doctorate degree)\n• Experience leading agile transformation and continuous improvement initiatives\n• Must be a team player able to work in a fast-paced environment with demonstrated ability to handle multiple competing tasks and demands\n• Strong communication skills; oral, written and presentation\n• Strong organization, planning and time management skills to achieve results\n• Strong personal and professional ethical values and integrity\n• Holds self-accountable to achieving goals and standards\n• Proficient in Microsoft Office programs (Outlook, Word, PowerPoint, Excel and Visio)\n• Strong interpersonal & collaboration skills to work effectively with all levels of the organization including suppliers and/or external customers\n\nSmarterTogether\n• Collaborating at Sensata means working with some of the world’s most talented people in an enriching environment that is constantly pushing towards the next best thing\n• Employees work across functions, countries and cultures gaining new perspectives through mutual respect and open communication\n• As OneSensata, we are working together to make things work together\n\nClick here to view Sensata Recruitment Privacy Statement\n\nClick here to view our Sensata Recruitment Privacy Statement for China\n\nNOTE: If you are a current Sensata employee (or one of our Affiliates), please back out of this application and log into Workday via the Company Intranet to apply directly. Type "FIND JOBS" in the Workday search bar
27	7	Staff Software Engineer, Digital Shopping Experience (DSX) - Hybrid	Qualifications\n•\nExperience working closely with product managers and other teams to lead feature implementation and identify solutions when appropriate\n•\nA desire to go above and beyond basic requirements to support their team and others\n•\nA passion for learning and evangelizing industry best practices like Test Driven Design and Pair Programming\n•\nA history of evaluating and recommending libraries, solutions, and frameworks that help improve quality, speed of delivery, and outcomes\n•\nA good understanding of architecture that allows them to influence multiple systems or processes\n•\nThe ability to articulate engineering design patterns related to scale, performance, security, and usability\n3 more items\nMore job highlights\nJob description\nStaff Software Engineer, Digital Shopping Experience (DSX)\n\nSummary\n\nBest Buy is seeking an innovative and technically curious technical leader to join us as we make a huge impact in the e-commerce space. Best Buy is one of the largest multi-channel consumer electronics retailers in the world with technology at its center. We are looking for an experienced technical solution leader to drive and influence the technical architecture of our mobile app, help fuel growth and spur innovation as we continue to create exceptional experiences for our customers.\n\nA career with Best Buy offers the opportunity to apply your talents and creative energy to deliver high performing solutions at one of the top 10 e-commerce solutions in the US.\n• Best Buy Digital, Analytics and Technology teams are working in a hybrid work model. Most roles can predominantly work from home but the person who fills this role must be within a commutable distance to Richfield, MN, Seattle, WA, Atlanta, GA, or Boston, MA\n\nIdeal Qualities\n• Experience working closely with product managers and other teams to lead feature implementation and identify solutions when appropriate.\n• A desire to go above and beyond basic requirements to support their team and others.\n• A passion for learning and evangelizing industry best practices like Test Driven Design and Pair Programming.\n• A history of evaluating and recommending libraries, solutions, and frameworks that help improve quality, speed of delivery, and outcomes\n• A good understanding of architecture that allows them to influence multiple systems or processes.\n• The ability to articulate engineering design patterns related to scale, performance, security, and usability.\n• Proven history of coaching and mentoring junior and mid-level software engineers.\nMinimum Qualifications\n• 5 or more years of professional full-stack software development experience with a bachelor’s degree OR equivalent relevant professional experience.\n• 3 or more years of Modern JavaScript frameworks; React is preferred.\n• Strong experience and advanced aptitude in mobile development: React Native preferred.\n• Expert knowledge and understanding of HTTP, REST, Graph QL and modern web and mobile technologies.\n\nPreferred Qualifications\n• Bachelor's degree in IT, Computer Science, or Engineering.\n• 8 or more years of relevant professional experience.\n• Expert knowledge of high-quality and modern consumer/customer-facing mobile experiences.\n• Test-driven development, refactoring, automated unit test, integration test, functional test, and continuous integration/deployment. (JEST, Cypress or similar tools)\n• Mentor – guide and advise younger talent\n
28	7	Associate Marketing Manager	Qualifications\n•\n6+ Years progressive media planning experience in advertising agency or client setting\n•\n3+ Years digital planning and/or buying experience; familiarity with display, digital video, mobile/ tablet, paid social and retargeting\n•\n2+ Years people or resource leadership experience (direct or indirect)\n•\nA team-player who is a self-starter, curious and eager to learn, demonstrating openness to feedback and coaching, and well organized\n•\nHigh attention to detail, critical-thinking and problem-solving skills\n•\nProven ability to execute projects end-to-end, on time and within budget, under general direction in a highly dynamic, collaborative and matrixed environment\n2 more items\nResponsibilities\n•\nThe Associate Manager, Media Strategy will support the strategic planning and implementation of assigned paid media plans\n•\nThis role works cross functionally with internal marketing teams to understand business and marketing goals, and assists in the creation and execution of paid media plans (traditional and digital, with a strong emphasis on digital media)\n•\nIn addition, this role is will be responsible for supporting portfolio level reporting, analyzing data and maintaining a deep understanding of media success drivers across individual campaigns as well as enterprise level media performance The associate manager will also assist in the day-to-day management of the media agency, as well as manage media budgets for area of responsibility and provide operational support for the team\n•\nThis role reports into a Senior Manager, and does not have direct reports\n•\nSupport development of data driven paid media recommendations that support key business and marketing goals and objectives\n•\nAssist in analyzing date and drawing insights on media performance in support of portfolio level reporting\n6 more items\nMore job highlights\nJob description\nThe Associate Manager, Media Strategy will support the strategic planning and implementation of assigned paid media plans. This role works cross functionally with internal marketing teams to understand business and marketing goals, and assists in the creation and execution of paid media plans (traditional and digital, with a strong emphasis on digital media). In addition, this role is will be responsible for supporting portfolio level reporting, analyzing data and maintaining a deep understanding of media success drivers across individual campaigns as well as enterprise level media performance The associate manager will also assist in the day-to-day management of the media agency, as well as manage media budgets for area of responsibility and provide operational support for the team.\n\nS/he will have experience managing multi-million dollar ad budgets, be results-driven and solution-oriented with strong problem-solving skills and a proven track record of working closely with internal business teams in a highly collaborative, cross-functional and fast-paced environment to ensure campaigns are aligned with enterprise drive times and business objectives.\n\nDue to the highly dynamic nature of the retail consumer electronics industry, s/he will also need to thrive in a very fast-paced culture, embrace learning from challenges and change, and be able to be flexible in situations not always process-driven.\n\nThis role reports into a Senior Manager, and does not have direct reports.\n\nCore Job Responsibilities\n• Support development of data driven paid media recommendations that support key business and marketing goals and objectives\n• Assist in analyzing date and drawing insights on media performance in support of portfolio level reporting\n• Oversee the entire media planning process for assigned campaigns from strategy through implementation for working with brand/ category marketing and other internal business teams; direct media agency on creation and execution for assigned media plans\n• Provide direction and guidance on assigned media plans as the day to day contact for the media agency\n• Contribute to ongoing paid media team thought leadership and education to marketing partners\n• Assist external and internal partners in drawing insights on media performance; utilize industry trends, business environment and media results (including insights from media mix optimization and attribution tools) to improve future strategies and plan recommendations\n• Ensure media budgets are maintained by working closely with brand/ category marketing and finance partners\n• Develop strong relationships and collaborate with media agency, brand/ category marketing and cross functional marketing partners (i.e. media sales and account management, creative, finance, research, etc.)\n\nBasic Qualifications\n• 6+ Years progressive media planning experience in advertising agency or client setting\n• 3+ Years digital planning and/or buying experience; familiarity with display, digital video, mobile/ tablet, paid social and retargeting\n• 2+ Years people or resource leadership experience (direct or indirect)\n• A team-player who is a self-starter, curious and eager to learn, demonstrating openness to feedback and coaching, and well organized\n• High attention to detail, critical-thinking and problem-solving skills\n• Proven ability to execute projects end-to-end, on time and within budget, under general direction in a highly dynamic, collaborative and matrixed environment\n• Strong presentation skills to garner support from marketing teams/ leadership and persuade them on media recommendations\n• Curious and eagerness to learn to stay current on industry trends and tools, and about new trends and new business opportunities\n\nPreferred Qualifications\n• Experience managing omni-channel paid media programs for a national, retail brand\n• Experience managing million-dollar budgets\n• Advanced PC Skills to include all Microsoft Office Products including both PowerPoint and Excel\n
35	5	Sales Associate	Do you want to work for a long-standing Alaskan company? Do you want to work with a team that honors excellent customer service? Do you want to work with the support of a leader and team that enjoy a positive work environment?\n\nFounded in Downtown Anchorage in 1947 as a military surplus store, Big Jay's has weathered the trials and tribulations of over 75 years of operating in Alaska. To this day Big Jay's continues to be family owned and operated, and with 5 locations statewide it has expanded to become Alaska's premier all-weather outfitter. From brands like Carhartt, to Columbia, to XtraTuf, to Under Armour, Big Jay's carries all the name brands customers need to be outfitted in Alaska. With an exhaustive inventory, business to business contracts and customized embroidery service, Big Jay's caters to all. Though Big Jay's may have changed with the times, our mission has not: to meet the needs of Alaskans as they confront the challenges of the Last Frontier.\n\nResponsibilities:The Corporate Sales Assistant’s general responsibilities include the following tasks:\n\n· Assist business - to - business customers with locating proper apparel.\n\n· Create customer orders in order fulfillment software.\n\n· Contact customers via phone or email for pick - up of completed orders.\n\n· Consistently attempt to have all available sizes represented on the sales floor by reporting the voids to the merchandise support specialist, as well as participate in restocking such items as necessary.\n\n· Ensure customer orders are moving through the fulfillment process in a consistent and timely manner.\n\n· Perform End - of - Day procedures in order fulfilment software.\n\n· Adhere to the Customer Service Standards established for the department.\n\n· Adhere to the Merchandise Presentation Standards established for the department.\n\n· Maintain excellent communication with fellow workers and leadership.\n\n· Protect the company’s value and integrity by maintaining confidentiality.\n\n· Commit to and accountable for the delivery of exceptional customer service.\n\n· Lead, encourage and promote positive team member engagement; empower individuality while promoting productivity.
\.


--
-- Data for Name: message; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.message (id, application_id, content, "time", is_from_candidate) FROM stdin;
5	10	We are thrilled to see you meet the requirements of our position, but we would like to ask you a few more questions about your application. What is your availability later this week?	2023-01-09 11:15:11.863606	f
6	10	Great, let's meet tomorrow at 1pm.	2023-01-09 11:15:56.975092	t
\.


--
-- Data for Name: saved_jobs; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.saved_jobs (id, candidate_id, job_post_id) FROM stdin;
1	1	21
5	1	22
7	1	26
8	1	27
9	4	21
10	4	16
\.


--
-- Data for Name: skill; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public.skill (id, candidate_id, skill_name) FROM stdin;
1	1	HTML
2	1	Python
3	1	CSS
4	1	C++
5	1	Java
6	1	Effective Communication
7	1	Public Speaking
8	4	Effective Communication
9	4	React.js
10	4	CSS
11	4	Javascript
12	6	Effective Communication
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: daniel
--

COPY public."user" (id, username, password, user_type) FROM stdin;
1	Prime	$2a$10$.OjnUxG1ApJW6ZDzVCBd0e97Z9yvGvJkXr.0uJguvMqFALb29FW8.	employer
2	Honeywell	$2a$10$YMFsy9k8BiMyuFxTb9DTP.rx3RCF8xLlxOq9l3O1q7vfIkaBYIHfC	employer
3	Target	$2a$10$8t5pKq.0d.P8yZvQTFWWP.zZm7KP4kMKOYz8UQHXMEDfz4xtYPGM.	employer
4	USbank	$2a$10$s.NoFj8ziCLx05E2pbRfhOeYY/DK9ls6dwma4P2cFIppfC96EBnki	employer
5	Unitedhealthgroup	$2a$10$BrtefFkxrAl5rIW/TeiG3.B6oI/dOn4GfBAZ3q46n3sUdtqFAh0Ta	employer
6	Sensata 	$2a$10$22fUOGLcaOX1t3gJ0nEWo.tQS.ssV7pMhPE3or87mMMveWaxzhru2	employer
7	Bestbuy	$2a$10$0z.Y.ycVeLx/JFKMGjdiCub1LLD3/8Yvf3T7Sm4ork9aduZl1VGNO	employer
8	u1	$2a$10$8xDN16M.6kVpQPzeT1BZauLTeLeGp9JHrq716t1wCi9xVpv4Pn0G2	candidate
9	u2	$2a$10$V7MiZhc9oH2EpfCgxdpeXOJTfNZCw6CRguR2a3EO69jXxMXD3b16S	candidate
11	FadumaSiyad	$2a$10$SuLOGyB7MuTYwm/E/4C8wOR30cQpTVcyC9Z2JbnAO29U2N9FkjvBy	candidate
12	u11	$2a$10$X8tzoL2FIR1pa19YLwnkcOVozsZJ5BgD/5NF.OEhn9AH0DK/ZvBh6	candidate
13	u22	$2a$10$XQ477XKr6xTMxgBi08Huh.2WO1BNGuk8HsprcTtjS0TSZax8SzKBO	candidate
\.


--
-- Name: application_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.application_id_seq', 11, true);


--
-- Name: candidate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.candidate_id_seq', 6, true);


--
-- Name: education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.education_id_seq', 6, true);


--
-- Name: employer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.employer_id_seq', 2, true);


--
-- Name: experience_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.experience_id_seq', 6, true);


--
-- Name: hyperlink_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.hyperlink_id_seq', 4, true);


--
-- Name: job_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.job_post_id_seq', 35, true);


--
-- Name: message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.message_id_seq', 6, true);


--
-- Name: saved_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.saved_jobs_id_seq', 10, true);


--
-- Name: skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.skill_id_seq', 12, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: daniel
--

SELECT pg_catalog.setval('public.user_id_seq', 13, true);


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

