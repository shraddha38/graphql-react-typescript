import React from 'react';
import { useAxios } from '../hooks//useGraphQlAxios';
import { useFetch } from '../hooks/useQraphQlFetch';
interface CountriesResponse {
    countries: Array<string> ;
}

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
    const { data: countriesData, refetch: countriesRefetch } = useFetch<CountriesResponse>({ url: "https://countries.trevorblades.com/", query: COUNTRIES_QUERY });
    const { data: languagesData, refetch: languagesRefetch } = useAxios<CountriesResponse>({ url: "https://countries.trevorblades.com/", query: LANGUAGES_QUERY });

    return (
        <div>
            <button onClick={() => countriesRefetch()}>
                Countries Fetch
            </button>
            <button onClick={() => languagesRefetch()}>
                Languages Axios
            </button>


        </div>
    );
};

