# surfline-accuracy-tracker

## About
This is a small GraphQL project to track the accuracy of surfline.com's surf reports.

## Local Setup
Use go 1.20 and `go mod download` to fetch dependencies.

You can use docker-compose to run a local psql instance, first copy `.env.example` to `.env` and fill it out, and then run `docker-compose up`

You must also manually setup the postgres schema for the time being, see `local/postgres/schema.sql` for the DDLs to run

Finally, run `go run ./server.go` to bring up the server.

## Example Queries

```graphql
query getSiteReports {
  siteReports{
    email
    surflineSite {
      name
      url
    }
  }
}

query getSurflineSites {
  surflineSites{
    name
    url
  }
}
```

## Example Mutations

```graphql
mutation createSiteReport {
  createSiteReport(input:{
    email:"vijay.krishna.ramesh@gmail.com"
    surflineSiteId:1
    surflineRating: FAIR
    siteReportRating:GOOD
    accuracyEstimate:MEDIUM
    timestamp: 1688324044 
  }){
    timestamp
  }
}
```

## Tests
Run `go test ./...` to run all tests.

## Contributing
Contributions are welcome, please fork and submit a PR.  Please follow the existing code style and conventions.
