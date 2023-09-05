import React, {useState} from 'react'
import {Box, Typography, FormControl, InputLabel, MenuItem, Select, Button} from "@mui/material";
import {ArrowDropDown, KeyboardArrowDown, Mail, Phone} from "@mui/icons-material";
import '../../../assets/css/web/navbar.css'
import logo from "../../../assets/images/logo1.png"
import {Link} from "react-router-dom";
const menuOptions = [
    { value: 'fr-FR', label: 'FR' },
    { value: 'en-EN', label: 'EN' },
];
export default function NavBar() {
    const [selectedValue, setSelectedValue] = useState('fr-FR');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleClick = ()=>{
        alert('login')
    }
    return (
        <Box component='navbar'>
            <Box component='div' className='first_bloc_nav'>
                <Box className='flex-one'>
                    <Box className='sub-flex-one'>
                        <Mail/>
                        <Typography component='span' style={{marginLeft:"18px"}}>contact@etucaner.net</Typography>
                    </Box>
                    <Box className='sub-flex-two'>
                        <Phone/>
                        <Typography component="span" style={{marginLeft:"18px"}}>655-178-302</Typography>
                    </Box>
                </Box>
                <Box className='flex-two'>
                    <Box className='sub-flex'>
                        <FormControl variant="outlined">
                            <Select
                                labelId="dropdown-label"
                                id="dropdown-select"
                                value={selectedValue}
                                onChange={handleChange}
                                label="Select an option"
                                style={{
                                    color:"var(--standard)",
                                    fontWeight:"bolder",
                                }}
                            >
                                {menuOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
            <Box component='div' className='second_bloc_nav'>
                <Box className="logo">
                    <img src={logo} alt='logo-etucamer' style={{objectFit:'cover', objectPosition:"center", width:"auto", height:"75px"}}/>
                </Box>
                <Box className='links'>
                    <Box className='link active'><Link to='#'>A propos de nous</Link></Box>
                    <Box className='link'><Link to='#'>Nos services</Link></Box>
                    <Box className='link'><Link to='#'>Temoignages</Link></Box>
                    <Box className='link'><Link to='#'>Nos partenaires</Link></Box>
                    <Box className='link'><Link to='#'>Nos contacts</Link></Box>
                    <Button variant="standard" onClick={handleClick} sx={{textTransform:"initial"}} className='login-btn'>Connexion</Button>
                </Box>
            </Box>
        </Box>
    )
}
