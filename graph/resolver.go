package graph

//go:generate go run github.com/99designs/gqlgen generate
import "github.com/go-pg/pg"

type Resolver struct {
	DB *pg.DB
}
