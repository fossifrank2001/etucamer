import React from 'react'
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import NavBar from "../components/partials/web/NavBar";
import Footer from "../components/partials/web/Footer";

export default function WebLayout() {
    return (
        <>
            <NavBar/>
            <Box>
                <Outlet/>
            </Box>
            <Footer/>
        </>
    )
}
