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
	"day" DATE DEFAULT CURRENT_DATE,
	"time" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	"name" varchar(250) NOT NULL,
	"quantity" integer  DEFAULT 1,
	"member" BOOLEAN  DEFAULT false,
	"visitor" BOOLEAN  DEFAULT false,
	"purpose" varchar(250) NOT NULL,
	"checked-in" BOOLEAN DEFAULT true,
	"cobot-id" varchar(500) ,
	CONSTRAINT checkin_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "members" (
	"id" serial NOT NULL,
	"name" varchar(250) NOT NULL,
	"company" varchar(250) NOT NULL,
	"img_url" varchar(1000),
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
	"date-time" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	"init-welcome" BOOLEAN DEFAULT false,
	CONSTRAINT mailinglist_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);














