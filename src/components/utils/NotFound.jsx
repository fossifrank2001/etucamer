import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

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
            <Typography variant="h4">Page Not Found</Typography>
            <Typography variant="body1" sx={{fontWeight:'lighter'}}>The requested page could not be found.</Typography>
            <Button variant="outlined" sx={{margin:'16px 0'}}  color="primary" component={Link} to="/web">
                Go to Home
            </Button>
        </Box>
    );
}

export default NotFound;
