import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import {HOME_URL} from "./utilsFunction";

function NotFound() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
            textAlign="center"
        >
            <Typography variant="h1">404</Typography>
            <Typography variant="h4">Page non trouvée</Typography>
            <Typography variant="body1" sx={{fontWeight:'lighter'}}>La page demandée n'a pu être trouvée.</Typography>
            <Button variant="outlined" sx={{margin:'16px 0'}}  color="primary" component={Link} to={HOME_URL}>
                Allez à la page d'acceuil:
            </Button>
        </Box>
    );
}

export default NotFound;
