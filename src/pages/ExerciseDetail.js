import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { exerciseOptions, fetchData, YouTubeoptions } from "../utils/fetchData"
import SmiliarExercise from "../components/ExerciseDetail/SmiliarExercise"
import Detail from "../components/ExerciseDetail/Detail"
import ExerciseVideo from "../components/ExerciseDetail/ExerciseVideo"

const ExerciseDetail = () => {

    const { id } = useParams();

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [youTubeVideo, setYouTubeVideo] = useState([])
    const [similarTargetMuscleExercise, setSimilarTargetMuscleExercise] = useState([])
    const [similarEquipmentMuscleExercise, setSimilarEquipmentMuscleExercise] = useState([])

    useEffect(() => {

        const fetchExerciseDetail = async () => {
            const exerciseDBUrl = "https://exercisedb.p.rapidapi.com"
            const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

            const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData)


            const youTubeVideoData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, YouTubeoptions)
            setYouTubeVideo(youTubeVideoData.contents)

            const similarTargetMuscleExerciseData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            setSimilarTargetMuscleExercise(similarTargetMuscleExerciseData.slice(0, 9))

            const similarEquipmentExerciseData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setSimilarEquipmentMuscleExercise(similarEquipmentExerciseData.slice(0, 9))



        }

        fetchExerciseDetail();
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideo youTubeVideo={youTubeVideo} name={exerciseDetail.name} />
            <SmiliarExercise
                similarTargetMuscleExercise={similarTargetMuscleExercise}
                similarEquipmentMuscleExercise={similarEquipmentMuscleExercise} />
        </Box>
    )
}

export default ExerciseDetail