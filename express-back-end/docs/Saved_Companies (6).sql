create table Saved_Companies (
	id SERIAL PRIMARY KEY NOT NULL,
	worker_id INTEGER REFERENCES workers(id),
	employer_id INTEGER REFERENCES employers(id),
	favourite BOOLEAN DEFAULT FALSE,
	rating INT
);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (1, 5, 2, false, 5);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (2, 2, 7, true, 2);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (3, 3, 9, false, 2);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (4, 8, 9, true, 1);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (5, 7, 6, true, 4);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (6, 3, 9, false, 3);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (7, 9, 3, true, 4);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (8, 3, 8, false, 3);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (9, 9, 10, true, 4);
insert into Saved_Companies (id, worker_id, employer_id, favourite, rating) values (10, 6, 4, true, 3);
