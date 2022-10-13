import React from 'react'
import { Typography, Stack } from "@mui/material"
import Icon from "../assets/icons/gym.png"

const BodyPart = ({ bodyPart, setBodyPart, item }) => {
    return (
        <Stack type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? "4px solid #ff2625" : "",
                backgroundColor: "#fff",
                borderBottomLeftRadius: "20px",
                height: "260px",
                width: "280px",
                cursor: "pointer",
                gap: "47px"
            }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" })
            }}>

            <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
            <Typography fontSize="24px" fontWeight="700" color="#3A1212" textTransform="capitalize">{item}</Typography>
        </Stack >
    )
}

export default BodyPart