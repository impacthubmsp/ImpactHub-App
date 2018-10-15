# Delete this first section when project is completed.

## ImpactHub-App
A React application that allows members of co-work spaces to checkin and out.

## Scope Document
https://docs.google.com/document/d/1oY9Uow1v0ioNsKaUkgfrAqzfyJtztJZcXDJwuJzligo/edit#

## Trello Board
https://trello.com/b/LyXnEMIn/impact-megasoft-corp

## Database Setup
Database is done with PostgreSQL, it should be created and called **"impact-hub-app'**.

To setup the database, use "database.sql" to create tables.

Test user accounts can be added to database using "test.sql".

---

# ImpactHub App

Project ImpactHub is a visit-tracking application for local coworking space, Impact Hub MSP. The app is designed with an intuitive user interface that allows Impact Hub members and visitors to easily check themselves into the coworking space.  The app integrates with the Cobot API to provide a seamless transfer of data from the check-in desk to Impact Hub MSP’s Cobot account..

## Built With

* HTML / CSS
* JavaScript
* React
* Node.js
* Express
* PostgreSQL
* Cobot API (REST)
* Material UI
* Heroku
* Chart.js
* Balsamiq Mockups
* DB Designer

## Database Set-Up

To start off with dummy data use the test.sql.

![DB table](https://imgur.com/a/q2sbCX5 "DB table")

 

To set up this application on your computer, follow these instructions to create a new database for the local data to be stored.

```

CREATE TABLE "person" (
	"id" serial NOT NULL,
	"username" varchar(80) NOT NULL,
	"password" varchar(80) NOT NULL,
	CONSTRAINT person_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "checkin" (
	"id" serial NOT NULL,
	"day" DATE NOT NULL,
	"time" TIMESTAMP NOT NULL,
	"name" varchar(250) NOT NULL,
	"quantity" integer NOT NULL DEFAULT 1,
	"member" BOOLEAN NOT NULL,
	"visitor" BOOLEAN NOT NULL,
	"purpose" varchar(250) NOT NULL,
	"checked-in" BOOLEAN NOT NULL DEFAULT 'false',
	"cobot-id" varchar(500) NOT NULL,
	CONSTRAINT checkin_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "members" (
	"id" serial NOT NULL,
	"name" varchar(250) NOT NULL,
	"company" varchar(250) NOT NULL,
	"img_url" varchar(1000) NOT NULL,
	"cobot-id" varchar(500) NOT NULL,
	CONSTRAINT members_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "mailinglist" (
	"id" serial NOT NULL,
	"name" varchar(250) NOT NULL,
	"phone" int NOT NULL,
	"email" varchar(250) NOT NULL,
	"date-time" TIMESTAMP NOT NULL,
	"init-welcome" BOOLEAN NOT NULL,
	CONSTRAINT mailinglist_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "checkin" ADD CONSTRAINT "checkin_fk0" FOREIGN KEY ("cobot-id") REFERENCES "members"("cobot-id");

```

### Installing

Steps to get the development environment running.

1. Download this project.
2. Set-Up DB (above)
3. `npm install`
4. `npm run server`
5. `npm run client`

## Screen Shot

![Screen Shot](https://via.placeholder.com/700x300 "Screen Shot")




### Features

 Member check-in / check-out
* Visitor check-in / check-out
  * Add visitors to mailing list
* Administrative View
  * Memebers present w/ info card
    * Name
    * Business / Mission
    * Role
    * Contact Info
    * Avatar Image
    * Website
    * Phone Number
  * Group check-in
  * Attendance Trends (Data Visualization)
  * Retroactive check-in

### Next Steps

Features that you would like to add at some point in the future.

## Authors

* @k-burn (Kara Burnett)
* @sBahta1 (Sam Bahta)
* @lvang5 (Lais Vang)
* @maelstrm (Jakeh Clark)


## Acknowledgments

We would like to thank our wonderful project owners from **Impact Hub MPLS** & and the faculty of **Prime Digital Academy** for this wonderful opportunity and their continued support.
