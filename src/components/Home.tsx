import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"
import Editor, { useMonaco } from '@monaco-editor/react';

export default function Home() {
    const navigate = useNavigate();
    const monaco = useMonaco();
    React.useEffect(() => {
        // do conditional chaining
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        // or make sure that it exists by other ways
        if (monaco) {
            console.log("here is the monaco instance:", monaco);
        }
    }, [monaco]);
    return (
        <>
            <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', fontFamily: "cursive", fontSize: "50px", mb: 10 }}>
                {
                    "GraphQL Queries for Countries and Rick and Morty API"
                }
            </Typography>
            <Typography variant="h3" gutterBottom>
            </Typography>
            <Stack spacing={25} direction="row" sx={{ ml: 10, mb: 15 }}>
                <Button
                    variant="contained"
                    size='large'
                    color="warning"
                    onClick={() => {
                        navigate("/characters")
                    }}>
                    Using Apollo Client
                </Button>
                <Button variant="contained" size='large'
                    color="success"
                    onClick={() => {
                        navigate("/usefetch")
                    }}
                >Using Fetch</Button>
                <Button
                    variant="contained"
                    size='large'
                    color="primary"
                    onClick={() => {
                        navigate("/useaxios")
                    }}
                >Using Axios</Button>

            </Stack>
            <>
                <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', fontFamily: "monospace", fontSize: "30px", mb: 10 }}>
                    {"Write your query here"}
                </Typography>
                <Editor
                    height="10vh"
                    width="80vh"
                    defaultValue=" 
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
                    const RickAndMorty_QUERY = `query{'
                                characters(page: 1) {
                                    results {
                                        id
                                        name
                                        status
                                        species
                                        type
                                        }
                                        }`
                                        "
                    language="javascript"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                />
            </>

        </>
    );
}