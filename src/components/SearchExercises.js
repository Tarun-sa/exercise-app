import React, { useState, useEffect } from 'react'
import { Box, Typography, Stack, TextField, Button } from "@mui/material"
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'


const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {

    // for searching the exercises by typing in input
    const [search, setSearch] = useState("")

    // for displaying the bodyparts on UI as soon as pages loads
    const [bodyParts, setBodyParts] = useState([])


    useEffect(() => {

        const fetchBodyPartData = async () => {

            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                exerciseOptions)
            setBodyParts(["all", ...bodyPartData])


        }

        fetchBodyPartData()
    }, [])




    const handleSearch = async () => {

        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
                exerciseOptions);

            const searchedExercise = exercisesData.filter((exercise) => {
                return (
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
                )
            })

            setSearch("")
            setExercises(searchedExercise)
        }

    }
    return (

        <Stack alignItems="center"
            justifyContent="center"
            mt="50px"
            p="20px">

            <Typography fontWeight={700}
                sx={{
                    textAlign: "center", mb: "50px",
                    fontSize: { lg: "44px", xs: "30px" }
                }}>
                Awesome Exercises  You  <br />Should Know
            </Typography>

            <Box mb="72px" position="relative">

                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                        },
                        width: { lg: "800px", xs: "350px" },
                        backgroundColor: "#fff",
                        borderRadius: "40px"
                    }}
                    placeholder='Search Exercises'
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase())
                    }}
                />

                <Button onClick={handleSearch} className="search-btn"
                    sx={{
                        backgroundColor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "55px",
                        position: "absolute",
                        right: 0


                    }}>Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
        </Stack>
    )
}

export default SearchExercises