import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', fontFamily: "cursive", fontSize: "50px", mb: 10 }}>
                {
                    "GraphQL Queries for Countries and Rick and Morty API"
                }
            </Typography>
            <Typography variant="h3" gutterBottom>
            </Typography>
            <Stack spacing={25} direction="row" sx={{ml:10}}>
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
                <Button
                    variant="contained"
                    size='large'
                    color="warning"
                    onClick={() => {
                        navigate("/characters")
                    }}>
                    Using Apollo Client
                </Button>
            </Stack></>
    );
}