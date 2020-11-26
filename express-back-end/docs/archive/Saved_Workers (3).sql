create table Saved_Workers (
	id SERIAL PRIMARY KEY NOT NULL,
	worker_id INTEGER REFERENCES workers(id),
	employer_id INTEGER REFERENCES employers(id),
	favourite BOOLEAN DEFAUL FALSE(50),
	rating INT
);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (1, 90, 5, false, 2);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (2, 84, 6, true, 5);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (3, 38, 9, false, 4);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (4, 51, 3, false, 3);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (5, 94, 10, false, 4);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (6, 28, 2, true, 3);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (7, 67, 7, true, 4);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (8, 33, 7, false, 1);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (9, 5, 3, false, 3);
insert into Saved_Workers (id, worker_id, employer_id, favourite, rating) values (10, 48, 5, true, 2);
