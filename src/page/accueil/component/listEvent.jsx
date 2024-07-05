import { Box, Typography, Stack, Button, CardActionArea, CardMedia, CardContent } from "@mui/material"    
import img from "../../../assets/event.jpeg"


const eventList = [
    {
        title: 'Concert de Jazz',
        date: '2024',
        day: 'Mercredi',
        ticketPrice: 50,
        eventType: 'Concert',
        slug : 'concert-de-jazz'
    },
    {
        title: 'Exposition d\'art moderne',
        date: '2024',
        day: 'Vendredi',
        ticketPrice: 20,
        eventType: 'Exposition',
        slug : 'exposition-d-art-moderne'
    },
    {
        title: 'Conférence sur l\'intelligence artificielle',
        date: '2024',
        day: 'Lundi',
        ticketPrice: 100,
        eventType: 'Conférence',
        slug : 'conference-sur-la-intelligence-artificielle'

    },
    {
        title: 'Festival de cinéma',
        date: '2024',
        day: 'Samedi',
        ticketPrice: 30,
        eventType: 'Festival',
        slug : 'festival-de-cinema'
    },
    {
        title: 'Atelier de cuisine',
        date: '2024',
        day: 'Jeudi',
        ticketPrice: 70,
        eventType: 'Atelier',
        slug : "atelier-de-cuisine"
    }
];

export default function ListEvent() {
    return ( 
        <Stack 
            direction="row" 
            gap={5} alignItems="center" justifyContent="center" flexWrap={"wrap"}
            sx={{ height: "100%" }}
            py={10}
        >
            {eventList.map((event)=>{
                return(
                    <Stack justifyContent={"space-between"} minHeight={"380px"} sx={{background : `center / cover no-repeat url(${img})`}} width={"300px"}> 
                        <Stack direction={"column"} bgcolor={"white"} width={"80px"} justifyContent={"center"} alignItems={"center"}>
                            <Typography textTransform={"uppercase"} color={"red"}>Ven</Typography>
                            <Typography fontSize={"1.5rem"} >20</Typography>
                            <Typography  > {()=>event.day} {event.date}</Typography>
                        </Stack>
                        <Stack bottom={0} position={"relative"} direction={"row"} bgcolor={"rgba(0, 0, 0, 0.7)"} height={"80px"} justifyContent={"space-evenly"} alignItems={"center"}> 
                            <Stack justifyContent={"center"} alignItems={"center"} spacing={1} maxWidth={"50px"}>
                                <Typography fontSize={"1rem"} variant="h5" color={"white"} fontWeight={"600"} textTransform={"uppercase"}>Prestige</Typography>
                                <Typography fontSize={"1rem"} variant="h5" color={"white"}>Soirée</Typography>
                            </Stack>
                            <Button 
                                variant="contained" size="medium" sx={{ color: "white", fontSize: "12px", 
                                ml: 2, backgroundColor : (theme) => theme.palette.secondary.main}}
                                href={"/event/"+event.slug}
                            >
                                Detail
                            </Button>
                            <Typography fontSize={"1rem"} variant="h5" color={"white"} maxWidth={"50px"} textAlign={"center"} >ticket a partir de 5€</Typography>
                        </Stack>
                    </Stack>
                )
            })}
            
        </Stack>
    )
}