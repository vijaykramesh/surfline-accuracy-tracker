
create table surfline_sites (
  id serial primary key,
  surfline_id text not null,
  name text not null,
  url text not null
);

create table reports (
  id serial primary key,
  email text not null,
  surfline_site_id int not null references surfline_sites(id),
  surfline_rating text,
  report_rating text not null,
  accuracy_estimate text,
  timestamp int not null
);

