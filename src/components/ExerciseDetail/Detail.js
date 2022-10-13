import React from 'react'
import { Stack, Typography, Button } from "@mui/material"

import bodyPartIcon from "../../assets/icons/body-part.png"
import equipmentIcon from "../../assets/icons/equipment.png"
import targetIcon from "../../assets/icons/target.png"
import { Start } from '@mui/icons-material'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

    const extraDetail = [
        {
            icon: bodyPartIcon,
            name: bodyPart

        },
        {
            icon: equipmentIcon,
            name: equipment

        },
        {
            icon: targetIcon,
            name: target

        },
    ]

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "flex-start" }}>

            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

            <Stack sx={{ gap: { lg: "30px", xs: "20px" } }}>
                <Typography variant='h4' fontWeight={500} textTransform="capitalize">
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Exercises keep you strong,{name} is one of the best exercises
                    to target your {target}.It will help you imporve your mood and gain energy.
                </Typography>
                {extraDetail.map((item) => {
                    return (
                        <Stack key={item.name} gap="25px" direction="row"
                            alignItems="center"
                            sx={{}} >
                            <Button sx={{ backgroundColor: "#fff2db", width: "70px", height: "70px", borderRadius: "50%" }}>
                                <img style={{ width: "30px", height: "30px" }} src={item.icon} alt={item.name} />
                            </Button>
                            <Typography variant="h5" textTransform="capitalize">{item.name}</Typography>
                        </Stack>
                    )
                })}
            </Stack>

        </Stack >
    )
}

export default Detail