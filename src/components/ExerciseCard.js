import React from 'react'
import { Link } from "react-router-dom"
import { Stack, Box, Typography, Button, Pagination } from "@mui/material"
import Exercises from './Exercises'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row" justifyContent="center"  >
                <Button sx={{
                    color: "#fff", background: "#ffa9a9",
                    fontSize: "14px", borderRadius: "20px", textTransform: "capitalize",
                }}>{exercise.bodyPart}</Button>
                <Button sx={{
                    ml: "21px", color: "#fff", background: "#fcc757",
                    fontSize: "14px", borderRadius: "20px", textTransform: "capitalize",
                }}>{exercise.target}</Button>
            </Stack>
            <Typography textAlign="center" ml="21px" color="#000" fontWeight="bold" textTransform="capitalize"
                fontSize="20px" mt="11px" pb="20px"  >{exercise.name}</Typography>
        </Link>
    )
}

export default ExerciseCard