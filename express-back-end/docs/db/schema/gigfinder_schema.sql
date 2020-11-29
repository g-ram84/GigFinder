DROP TABLE IF EXISTS employer_ratings CASCADE;
DROP TABLE IF EXISTS worker_ratings CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS workers CASCADE;
DROP TABLE IF EXISTS employers CASCADE;

CREATE TABLE workers (
	id SERIAL PRIMARY KEY NOT NULL,
	first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(12) NOT NULL,
  avatar_url VARCHAR(255),
  sin VARCHAR(12),
  resume_upload VARCHAR(255)
);

CREATE TABLE employers (
	id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  contact_name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(12) NOT NULL,
  password VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE jobs (
	id SERIAL PRIMARY KEY NOT NULL,
	job_title VARCHAR(50),
	hourly_wage INTEGER,
	job_date DATE,
	job_active BOOLEAN NOT NULL,
	positions INTEGER DEFAULT 1,
	job_description VARCHAR(255) DEFAULT 'Job Description',
	employer_id INTEGER REFERENCES employers(id),
	job_location VARCHAR(255) DEFAULT 'Job Location'
);

CREATE TABLE employer_ratings (
	id SERIAL PRIMARY KEY NOT NULL,
	worker_id INTEGER REFERENCES workers(id),
	employer_id INTEGER REFERENCES employers(id),
	rating INTEGER DEFAULT 0
);

CREATE TABLE worker_ratings (
	id SERIAL PRIMARY KEY NOT NULL,
	worker_id INTEGER REFERENCES workers(id),
	employer_id INTEGER REFERENCES employers(id),
	rating INTEGER DEFAULT 0
);

-- CREATE TABLE saved_employers (
-- 	id SERIAL PRIMARY KEY NOT NULL,
-- 	worker_id INTEGER REFERENCES workers(id),
-- 	employer_id INTEGER REFERENCES employers(id),
-- 	favourite BOOLEAN DEFAULT FALSE,
-- 	rating INTEGER DEFAULT 0
-- );

-- CREATE TABLE saved_workers (
-- 	id SERIAL PRIMARY KEY NOT NULL,
-- 	worker_id INTEGER REFERENCES workers(id),
-- 	employer_id INTEGER REFERENCES employers(id),
-- 	favourite BOOLEAN DEFAULT FALSE,
-- 	rating INTEGER DEFAULT 0
-- );

CREATE TABLE applications (
	id SERIAL PRIMARY KEY NOT NULL,
	worker_id INTEGER REFERENCES workers(id),
	job_id INTEGER REFERENCES Jobs(id),
	status VARCHAR(20) DEFAULT 'Pending',
	date_applied DATE NOT NULL
);



