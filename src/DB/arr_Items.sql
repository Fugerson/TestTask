create table arr_Items (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	img VARCHAR(5000) NOT NULL,
	hotDogName VARCHAR(50) NOT NULL,
	prise DECIMAL(3,1) NOT NULL,
	Textbott TEXT NOT NULL
);
insert into arr_Items (id, img, hotDogName, prise, Textbott) values (1, './../../../img/jay.jpg');
insert into arr_Items (id, img, hotDogName, prise, Textbott) values (2, './../../../img/jessica.jpg');
insert into arr_Items (id, img, hotDogName, prise, Textbott) values (3, './../../../img/victoria.jpg');
