import React from 'react'
import { Stack, Typography, Box } from "@mui/material"

const ExerciseVideo = ({ youTubeVideo, name }) => {

    return (
        <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
            <Typography variant="h3" mb="33px" textAlign="center">
                Watch
                <span style={{ textTransform: "capitalize", color: "#ff2625" }}>{` ${name} `}
                </span>
                exercises video
            </Typography>

            <Stack flexWrap="wrap" sx={{
                flexDirection: { lg: "row" }, gap: { lg: "50px", xs: "0" },
                justifyContent: { xs: "center" }
            }}

                alignItems="center"
            >
                {youTubeVideo && youTubeVideo.slice(0, 6).map((item, index) => {
                    return (
                        <a key={index}
                            className='exercise-video'
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel='noreferrer'
                        >
                            <img style={{ height: "250px" }} src={item.video.thumbnails[0].url} alt={item.video.description
                            } />
                            <Box sx={{ marginLeft: { lg: "7px" } }}>
                                <Typography variant='h6' sx={{ lineHeight: "1.3" }} mb="5px" color="#343a40">{item.video.title}</Typography>
                                <p variant='h6' style={{ color: "#6c757d", fontSize: "17px" }} >{item.video.channelName}</p>
                            </Box>
                        </a>
                    )
                })}
            </Stack>
        </Box >
    )
}

export default ExerciseVideo