package resolvers

import (
	"github.com/99designs/gqlgen/client"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/stretchr/testify/require"
	"github.com/vijaykramesh/surfline-accuracy-tracker/graph/common"
	"github.com/vijaykramesh/surfline-accuracy-tracker/graph/generated"
	"gopkg.in/DATA-DOG/go-sqlmock.v1"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"regexp"
	"testing"
)

var (
	loginname = "mrdulin"
	avatarURL = "avatar.jpg"
	score     = 50
	createAt  = "1900-01-01"
)

func TestMutationResolver_CreateSurflineSite(t *testing.T) {

	t.Run("should create a surfline site", func(t *testing.T) {
		mockDb, mock, _ := sqlmock.New()
		dialector := postgres.New(postgres.Config{
			Conn:       mockDb,
			DriverName: "postgres",
		})
		sqlRows := sqlmock.NewRows([]string{"surfline_id", "name", "url"}).
			AddRow("123", "Bolina", "https://foobar.com")
		mock.ExpectBegin()
		mock.ExpectQuery(`INSERT INTO .+`).WithArgs(sqlmock.AnyArg(), sqlmock.AnyArg(), sqlmock.AnyArg(), "123", "Bolinas", "https://foobar.com").WillReturnRows(sqlmock.NewRows([]string{"id"}).AddRow(1))
		mock.ExpectCommit()
		mock.ExpectQuery(regexp.QuoteMeta(`SELECT`)).WithArgs(1).WillReturnRows(sqlRows)
		db, _ := gorm.Open(dialector, &gorm.Config{})
		srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &Resolver{}}))
		customCtx := &common.CustomContext{
			Database: db,
		}
		var resp struct {
			CreateSurflineSite struct {
				SurflineID string
				Name       string
				URL        string
			}
		}

		q := `mutation createSurflineSite {
			createSurflineSite(input:{
				surflineId: "123"
				name: "Bolinas"
				url: "https://foobar.com"
			}) {
					surflineId
					name
					url
			}
		  }
		`
		gql := client.New(common.CreateContext(customCtx, srv))

		gql.MustPost(q, &resp)
		// log resp

		require.Equal(t, "123", resp.CreateSurflineSite.SurflineID)
		require.Equal(t, "Bolinas", resp.CreateSurflineSite.Name)
		require.Equal(t, "https://foobar.com", resp.CreateSurflineSite.URL)

	})

}
