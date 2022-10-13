import React, { useState } from 'react'
import { Box } from '@mui/material'

import HeroBannner from '../components/HeroBannner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
    const [bodyPart, setBodyPart] = useState("all")
    //for re-rendering the UI for the searchedExercises to show them on UI
    const [exercises, setExercises] = useState([])
    return (
        <Box>
            <HeroBannner />
            <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
            <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises} />
        </Box>
    )
}

export default Home