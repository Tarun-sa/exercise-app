import React from 'react'
import { Box, Typography, Stack } from "@mui/material"
import HorizontalScrollBar from '../HorizontalScrollBar'
import Loader from "../Loader"


const SmiliarExercise = ({ similarTargetMuscleExercise, similarEquipmentMuscleExercise }) => {

    return (
        <Box sx={{ mt: { lg: "100px", xs: "0" }, pb: "50px" }}>

            <Typography textAlign="center" variant="h3" mb={3}>Exercises that target the same muscle group</Typography>
            <Stack direction="row" sx={{ p: "50px", position: "relative" }}>
                {similarTargetMuscleExercise.length ?
                    <HorizontalScrollBar data={similarTargetMuscleExercise} />
                    : <Loader />
                }
            </Stack>

            <Typography textAlign="center" variant="h3" mb={3}>Exercises that use same equipment</Typography>
            <Stack direction="row" sx={{ p: "50px", position: "relative" }}>
                {similarEquipmentMuscleExercise.length ?
                    <HorizontalScrollBar data={similarEquipmentMuscleExercise} />
                    : <Loader />
                }
            </Stack>

        </Box >
    )
}

export default SmiliarExercise