CREATE TABLE "users" (
    "id" serial NOT NULL,
    "username" varchar(50) NOT NULL UNIQUE,
    "password" varchar(50) NOT NULL,
    "email" varchar(75),
    "img_url" varchar(400),
    CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "small_events" (
    "id" serial NOT NULL,
    "event_name" varchar(250) NOT NULL,
    "date" DATE NOT NULL,
    "start_time" TIMESTAMP NOT NULL,
    "end_time" TIMESTAMP NOT NULL,
    "description" varchar(2000) NOT NULL,
    "public" BOOLEAN NOT NULL,
    "event_type" int NOT NULL,
    CONSTRAINT small_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "large_events" (
    "id" serial NOT NULL,
    "event_name" varchar(250) NOT NULL,
    "date" DATE NOT NULL,
    "start_time" TIMESTAMP NOT NULL,
    "end_time" TIMESTAMP NOT NULL,
    "description" varchar(2000) NOT NULL,
    "public" BOOLEAN NOT NULL,
    "event_type" int NOT NULL,
    CONSTRAINT large_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "event_types" (
    "id" serial NOT NULL,
    "type" varchar(100) NOT NULL,
    CONSTRAINT event_types_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "organizers_small_events" (
    "id" serial NOT NULL,
    "user_id" int NOT NULL,
    "small_event_id" int NOT NULL,
    CONSTRAINT organizers_small_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "attendees_small_events" (
    "id" serial NOT NULL,
    "user_id" int NOT NULL,
    "small_event_id" int NOT NULL,
    CONSTRAINT attendees_small_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "organizers_large_events" (
    "id" serial NOT NULL,
    "user_id" int NOT NULL,
    "large_event_id" int NOT NULL,
    CONSTRAINT organizers_large_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "attendees_large_events" (
    "id" serial NOT NULL,
    "user_id" int NOT NULL,
    "large_event_id" int NOT NULL,
    CONSTRAINT attendees_large_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "checklist_small_events" (
    "id" serial NOT NULL,
    "item" varchar(250) NOT NULL,
    CONSTRAINT checklist_small_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "checklist_large_events" (
    "id" serial NOT NULL,
    "items" varchar(250) NOT NULL,
    CONSTRAINT checklist_large_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users_checklist_small_event" (
    "id" serial NOT NULL,
    "user_id" int NOT NULL,
    "small_events" int NOT NULL,
    "checklist_small_events" int NOT NULL,
    CONSTRAINT users_checklist_small_event_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users_checklist_large_events" (
    "id" serial NOT NULL,
    "user_id" int NOT NULL,
    "large_events" int NOT NULL,
    "checklist_large_events" int NOT NULL,
    CONSTRAINT users_checklist_large_events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "small_events" ADD CONSTRAINT "small_events_fk0" FOREIGN KEY ("event_type") REFERENCES "event_types"("id");

ALTER TABLE "large_events" ADD CONSTRAINT "large_events_fk0" FOREIGN KEY ("event_type") REFERENCES "event_types"("id");


ALTER TABLE "organizers_small_events" ADD CONSTRAINT "organizers_small_events_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "organizers_small_events" ADD CONSTRAINT "organizers_small_events_fk1" FOREIGN KEY ("small_event_id") REFERENCES "small_events"("id");

ALTER TABLE "attendees_small_events" ADD CONSTRAINT "attendees_small_events_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "attendees_small_events" ADD CONSTRAINT "attendees_small_events_fk1" FOREIGN KEY ("small_event_id") REFERENCES "small_events"("id");

ALTER TABLE "organizers_large_events" ADD CONSTRAINT "organizers_large_events_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "organizers_large_events" ADD CONSTRAINT "organizers_large_events_fk1" FOREIGN KEY ("large_event_id") REFERENCES "large_events"("id");

ALTER TABLE "attendees_large_events" ADD CONSTRAINT "attendees_large_events_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "attendees_large_events" ADD CONSTRAINT "attendees_large_events_fk1" FOREIGN KEY ("large_event_id") REFERENCES "large_events"("id");

ALTER TABLE "users_checklist_small_event" ADD CONSTRAINT "users_checklist_small_event_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users_checklist_small_event" ADD CONSTRAINT "users_checklist_small_event_fk1" FOREIGN KEY ("small_events") REFERENCES "small_events"("id");
ALTER TABLE "users_checklist_small_event" ADD CONSTRAINT "users_checklist_small_event_fk2" FOREIGN KEY ("checklist_small_events") REFERENCES "checklist_small_events"("id");

ALTER TABLE "users_checklist_large_events" ADD CONSTRAINT "users_checklist_large_events_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users_checklist_large_events" ADD CONSTRAINT "users_checklist_large_events_fk1" FOREIGN KEY ("large_events") REFERENCES "large_events"("id");
ALTER TABLE "users_checklist_large_events" ADD CONSTRAINT "users_checklist_large_events_fk2" FOREIGN KEY ("checklist_large_events") REFERENCES "checklist_large_events"("id");

-- Dummy data for inital GET:
INSERT INTO event_types ("type")
VALUES ('Party');

INSERT INTO "small_events" (event_name, date, start_time, end_time, description, public, event_type)
VALUES('Plan(et) launch party', TO_DATE('27 Jan 2019', 'DD Mon YYYY'), TO_TIMESTAMP('27 Jan 2019 4:30 PM','DD Mon YYYY HH:MI PM'), TO_TIMESTAMP('27 Jan 2019 11:30 PM','DD Mon YYYY HH:MI PM'), 'Please join us for the launch of Plan(et), the most awesome event planning and community organizing app of the decade.', true, 1);