import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAxios } from '../hooks/useGraphQlAxios';
import { useFetch } from '../hooks/useQraphQlFetch';


const COUNTRIES_QUERY = `query{
  countries {
    code
    name
  }
}`

const LANGUAGES_QUERY = `query{
  languages {
    code
    name
  }
}`
export const FetchAxios = () => {
  const { data: countriesData, refetch: countriesRefetch } = useFetch({ url: "https://countries.trevorblades.com/", query: COUNTRIES_QUERY });
  const { data: languagesData, refetch: languagesRefetch } = useAxios({ url: "https://countries.trevorblades.com/", query: LANGUAGES_QUERY });
  useEffect(() => {
    countriesRefetch();

  }, [countriesRefetch])



  return (
    <div>
      <Typography variant="h4" component="div" sx={{ color: "lightseagreen", textAlign: 'center', fontFamily: "cursive", fontSize: "50px", m: 5 }}>
        {
          "Get Data using Fetch with GraphQL"
        }
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ color: "lightyellow" }}>

        Countries
      </Typography>
      {countriesData && countriesData.countries.map((country: any) => (
        <>

          <List style={
            {
              border: "1px solid lightgray",
              color: "lightpink",
            }
          }>

            <ListItem  >
              <ListItemText>
                {country.code}
              </ListItemText>

              <ListItemText
                primary={<Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', fontFamily: "fantasy", fontSize: "20px" }} key={country.code}>{country.name}</Typography>}
              />


            </ListItem>
          </List>


        </>
      ))}



    </div>
  );
};

