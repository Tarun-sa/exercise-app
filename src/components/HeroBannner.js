import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroBannerImage from "../assets/images/banner.png"

const HeroBannner = () => {

    const theme = createTheme({
        palette: {
            neutral: {
                main: '#FF2625',
            },
        },
    });
    return (
        <Box sx={{
            mt: { xs: "70px" },
            ml: { lg: "120px", xs: "50px" },
            position: "relative",
            p: "20px"
        }}>
            <Typography color="#FF2625"
                fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>

            <Typography fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "40px", sm: "42px" } }}
                mt="23px"
                mb="30px">
                Sweat, Smile <br /> and Repeat
            </Typography>

            <Typography fontSize="22px" lineHeight="35px" mb={2}>
                Check out the most effective exercises
            </Typography>

            <ThemeProvider theme={theme} >
                <Button href="#exercises"
                    variant='contained'
                    color="neutral"
                    sx={{ padding: "10px", color: "white" }}
                >Explore Exercises</Button>
            </ThemeProvider>

            <Typography
                fontWeight={600}
                fontSize="210px"
                color="#FF2625"
                mt="64px"
                sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}>
                Exercise
            </Typography>

            <img src={HeroBannerImage} className="hero-banner-img" alt="banner" />

        </Box >
    )
}

export default HeroBannner