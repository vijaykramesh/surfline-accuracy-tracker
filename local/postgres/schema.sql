create table surfline_sites (
                                id serial primary key,
                                surfline_id text not null,
                                name text not null,
                                url text not null,
                                created_at timestamp default current_timestamp,
                                updated_at timestamp default current_timestamp,
                                deleted_at timestamp
);

create table site_reports (
                         id serial primary key,
                         email text not null,
                         surfline_site_id int not null references surfline_sites(id),
                         surfline_rating text,
                         site_report_rating text not null,
                         accuracy_estimate text,
                         timestamp int not null,
                          created_at timestamp default current_timestamp,
                          updated_at timestamp default current_timestamp,
                          deleted_at timestamp
);