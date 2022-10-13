import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination"
import { Box, Typography, Stack } from "@mui/material"
import { fetchData, exerciseOptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {



    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 5;

    // for pagination purpose
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExerxciseOnAPage = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExerxciseOnAPage, indexOfLastExercise)


    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 1800 })
    }

    //for showing exercises as per bodypart
    useEffect(() => {

        const fetchBodyPartData = async () => {
            let bodyPartExerciseData = [];

            if (bodyPart === "all") {
                bodyPartExerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions)
            } else {
                bodyPartExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions)
            }

            setExercises(bodyPartExerciseData)
        }

        fetchBodyPartData();
    }, [bodyPart])


    return (
        <Box id="exercises"
            sx={{ mt: { lg: "110px" } }}
            mt="50px"
            p="20px">
            <Typography variant="h4" textAlign="center" mb="46px">Showing Results</Typography>
            <Stack direction="row"
                sx={{ gap: { lg: "90px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, index) => {
                    return <ExerciseCard key={index} exercise={exercise} />
                })}

            </Stack>

            <Stack mt="100px" alignItems="center">
                {exercises.length > exercisesPerPage && (
                    <Pagination
                        color="secondary"
                        shape='rounded'
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises