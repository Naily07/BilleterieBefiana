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
            {eventList.map((event, i)=>{
                return(
                    <Stack key={i} justifyContent={"space-between"} minHeight={"368px"} width={"295px"} sx={{background : `center / cover no-repeat url(${img})`}} > 
                        <Stack direction={"column"} bgcolor={"white"} width={"75px"} justifyContent={"center"} alignItems={"center"}>
                            <Typography textTransform={"uppercase"} variant="h5" fontSize={"17px"} color={"red"}>Ven</Typography>
                            <Typography fontSize={"1.5rem"} >20</Typography>
                            <Typography  >  {event.date}</Typography>
                        </Stack>
                        <Stack direction={"row"} bgcolor={"rgba(0, 0, 0, 0.7)"} height={"80px"} justifyContent={"space-evenly"} alignItems={"center"}> 
                            <Stack justifyContent={"center"} alignItems={"center"} spacing={1} width={"60px"} >
                                <Typography  variant="h5"  fontSize={"16px"} color={"white"} fontWeight={"medium"} textTransform={"uppercase"}>Prestige</Typography>
                                <Typography fontSize={"1rem"} variant="h2" color={"white"}>Soirée</Typography>
                            </Stack>
                            <Button 
                                variant="contained" size="medium" sx={{ color: "white", fontSize: "12px", 
                                ml: 2, backgroundColor : (theme) => theme.palette.secondary.main}}
                                href={"/event/"+event.slug}
                            >
                                Publier
                            </Button>
                            <Typography fontSize={"1rem"} variant="h5" color={"white"} width={"60px"} textAlign={"center"} >ticket a partir de 5€</Typography>
                        </Stack>
                    </Stack>
                )
            })}
        </Stack>
    )
}