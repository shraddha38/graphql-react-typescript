import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAxios } from '../hooks/useGraphQlAxios';
import { useFetch } from '../hooks/useQraphQlFetch';

const LANGUAGES_QUERY = `query{
  languages {
    code
    name
  }
}`
export const AxiosData = () => {
  const { data: languagesData, refetch: languagesRefetch } = useAxios({ url: "https://countries.trevorblades.com/", query: LANGUAGES_QUERY });

  useEffect(() => {

    languagesRefetch();
    console.log(languagesData, "languagesData")
  }, [])



  return (
    <div>
      <Typography variant="h4" component="div" sx={{ color: "lightseagreen", textAlign: 'center', fontFamily: "cursive", fontSize: "50px", m: 5 }}>
        {
          "Get Data using Axios with GraphQL"
        }
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ color: "lightyellow" }}>

        Languages
      </Typography>
      {languagesData && languagesData.languages.map((lang: any) => (
        <>

          <List style={
            {
              border: "1px solid lightgray",
              color: "lightpink",
            }
          }>

            <ListItem  >
              <ListItemText>
                {lang.code}
              </ListItemText>

              <ListItemText
                primary={<Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', fontFamily: "fantasy", fontSize: "20px" }} >{lang.name}</Typography>}
              />


            </ListItem>
          </List>


        </>
      ))}



    </div>
  );
};

