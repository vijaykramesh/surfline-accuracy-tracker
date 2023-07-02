# surfline-accuracy-tracker

## About
This is a small GraphQL project to track the accuracy of surfline.com's surf reports.

## Local Setup
Use go 1.19 and `go mod download` to fetch dependencies.

You can use docker-compose to run a local psql instance, first copy `.env.example` to `.env` and fill it out, and then run `docker-compose up`

You must also manually setup the postgres schema for the time being, see `local/postgres/schema.sql` for the DDLs to run

Finally, run `go run ./server.go` to bring up the server.

## Example Queries

```graphql
query getReports {
  reports{
    id
    email
    surflineSite {
      id
      name
      url
    }
  }
}

query getSurflineSites {
  surflineSites{
    id
    name
    url
  }
}
```

## Example Mutations

```graphql
mutation createReport {
  createReport(input:{
    email:"vijay.krishna.ramesh@gmail.com"
    surflineSiteId:1
    surflineRating: FAIR
    reportRating:GOOD
    accuracyEstimate:MEDIUM
    timestamp: 1688324044 
  }){
    id
  }
}
```

## Tests
TODO

## Contributing
Contributions are welcome, please fork and submit a PR.  Please follow the existing code style and conventions.
