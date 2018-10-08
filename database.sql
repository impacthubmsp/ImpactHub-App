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
	"member" BOOLEAN NOT NULL DEFAULT false,
	"visitor" BOOLEAN NOT NULL DEFAULT false,
	"purpose" varchar(250) NOT NULL,
	"checked-in" BOOLEAN NOT NULL DEFAULT true,
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









