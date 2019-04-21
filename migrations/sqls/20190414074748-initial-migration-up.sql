create table if not exists coaster_users (
  user_id bigserial not null primary key,
  username varchar(255) not null unique,
  created_at timestamp not null,
  email varchar(255) not null unique,
  user_password varchar(1023) not null,
  salt varchar(1023) not null,
  updated_at timestamp not null
);

create table if not exists artists (
  artist_id bigserial not null primary key,
  artist_name varchar(511) not null,
  artist_slug varchar(255) unique not null,
  genre varchar(255),
  country varchar(255),
  created_at timestamp not null,
  updated_at timestamp not null
);

create type album_types as enum (
  'full-length',
  'ep',
  'demo',
  'compilation',
  'video',
  'live-album',
  'single',
  'split',
  'collab',
  'box-set'
);

create table if not exists albums (
  album_id bigserial not null primary key,
  artist_id bigserial not null references artists (artist_id),
  description text,
  release_year int,
  release_month int,
  release_day int,
  album_type album_types,
  created_at timestamp not null,
  updated_at timestamp not null
);

create type album_formats as enum (
  'cd',
  'cassette',
  '12-inch',
  '7-inch',
  'digital',
  'dvd',
  'video'
);

create table if not exists user_albums (
  user_album_id bigserial not null primary key,
  album_id bigserial not null references albums (album_id),
  user_id bigserial not null references coaster_users (user_id),
  format album_formats,
  edition_description text,
  created_at timestamp not null,
  updated_at timestamp not null
);
