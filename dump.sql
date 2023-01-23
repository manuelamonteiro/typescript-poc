--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: humor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.humor (
    id integer NOT NULL,
    date text NOT NULL,
    mood text NOT NULL,
    activities text,
    hour text NOT NULL
);


--
-- Name: humor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.humor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: humor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.humor_id_seq OWNED BY public.humor.id;


--
-- Name: humor id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.humor ALTER COLUMN id SET DEFAULT nextval('public.humor_id_seq'::regclass);


--
-- Data for Name: humor; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.humor VALUES (2, '20/01/2022', 'bem', 'resolvi meu bug', '20:54');
INSERT INTO public.humor VALUES (3, '20/01/2022', 'bem', '', '20:54');


--
-- Name: humor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.humor_id_seq', 3, true);


--
-- Name: humor humor_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.humor
    ADD CONSTRAINT humor_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

