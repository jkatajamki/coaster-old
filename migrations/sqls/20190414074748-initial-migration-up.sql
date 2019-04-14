create table if not exists coaster_users (
  id bigserial not null primary key,
  username varchar(255) not null unique,
  created_at timestamp not null,
  email varchar(255) not null unique,
  user_password varchar(1023) not null,
  salt varchar(1023) not null,
  updated_at timestamp not null
);

create table if not exists artists (
  id bigserial not null primary key,
  artist_name varchar(511) not null,
  artist_slug varchar(255) unique not null,
  genre varchar(255),
  country varchar(255),
  created_at timestamp not null,
  updated_at timestamp not null
);
