import React from 'react'
import { Stack, Box, Typography } from "@mui/material"
import Logo from "../assets/images/Logo-1.png"


const Footer = () => {
    return (
        <Box mt="80px" sx={{ bgcolor: "#fff3a4" }}>
            <Stack gap="30px" alignItems="center" px="20px" pt="24px">
                <img style={{ width: "200px", height: "40px" }} src={Logo} alt="logo" />
                <Typography variant="h5" mt="5px" pb="20px">Made with 💕 from Tarun</Typography>
            </Stack>
        </Box>
    )
}

export default Footer