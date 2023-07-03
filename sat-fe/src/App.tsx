import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SurflineSite, SiteReport } from '../src/__generated__/graphql';
import { useQuery,gql } from '@apollo/client';

const GET_SURFLINE_SITES = gql(/* GraphQL */ `

  query getSurflineSites {
  surflineSites{
    surflineId
    name
    url
  }
}

`);

const GET_SITE_REPORTS = gql(/* GraphQL */ `

  query getSiteReports {
  siteReports{
    email
    surflineSite {
      name
    }
    timestamp
  }
}

`);


export function SurflineSitesList() {

  // our query's result, data, is typed!

  const { loading, data } = useQuery(

    GET_SURFLINE_SITES,

    // variables are also typed!

    // { variables: { year: 2019 } }

  );

  return (

    <div>

      <h3>Available Sites</h3>

      {loading ? (

        <p>Loading ...</p>

      ) : (

        <table>

          <thead>

            <tr>
 <th>SurflineId</th>

              <th>Name</th>

              <th>Url</th>

              
            </tr>

          </thead>

          <tbody>

        
            {data && data.surflineSites.map((site: SurflineSite) => (

              <tr key={site.surflineId}>

                <td>{site.surflineId}</td>

                <td>{site.name}</td>

                <td>{site.url}</td>

              </tr>

            ))}
          </tbody>

        </table>

      )}

    </div>

  );

}

export function SiteReportsList() {

  // our query's result, data, is typed!

  const { loading, data } = useQuery(

    GET_SITE_REPORTS,

    // variables are also typed!

    // { variables: { year: 2019 } }

  );

  return (

    <div>

      <h3>Site Reports</h3>

      {loading ? (

        <p>Loading ...</p>

      ) : (

        <table>

          <thead>

            <tr>

             <th>Reporter Email</th>

              <th>Site Name</th>

              <th>Report Timestamp</th>


            </tr>

          </thead>

          <tbody>
{data && data.siteReports.map((siteReport: SiteReport) => (

              <tr key={siteReport.timestamp}>

                <td>{siteReport.email}</td>

                <td>{siteReport.surflineSite.name}</td>

                <td>{siteReport.timestamp}</td>

              </tr>

            ))}


          </tbody>

        </table>

      )}

    </div>

  );

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Surfline Accuracy Tracker
       </header>
       <div className="App-body">
        <SurflineSitesList />
        <SiteReportsList />
        </div>
    </div>
  );
}

export default App;
