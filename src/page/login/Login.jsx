import { Box, Typography, Stack, Link, TextField, Button } from "@mui/material"
import backsarylogin from '../../assets/sarylogin.png'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Headerc from "../header/Headerc";


function Login() {
  return (
    <>
      <Box>
        <Headerc />
        <Stack direction="rows" sx={{ mt: 5.2, padding: "0px 10px", border: "1px solid #EEEEEE", width: "80%", mx: "auto", borderRadius: "5px" }}>
          <Box sx={{ width: "500px", height: "500px", backgroundImage: `url(${backsarylogin})`, backgroundRepeat: "no-repeat", /*backgroundSize: "cover",*/ backgroundPosition: "center" }}></Box>

          <Box sx={{ width: "700px", height: "500px", padding: "50px 20px" }}>
            <Typography sx={{ textAlign: "center", fontSize: "26px", fontWeight: "600", color: "#2A2A2A", lineHeight: "33px", mb: 1.7}}>Completez votre profile<br/>organisateur</Typography>
            <Typography sx={{ textAlign: "center", fontSize: "12px", color: "#3A3A3A" }}>Déja un compte organisateur ?<Link> Connexion</Link></Typography>
            <Box fullWidth sx={{ padding: "40px 100px" }}>
              <Typography sx={{ fontSize: "12px", mb: "5px" }}>Nom d utilisateur <space>*</space></Typography>
              <TextField size="small" variant="outlined" fullWidth
                sx={{ 
                  '& .MuiInputBase-input': {
                    color: 'grey.grey600',
                    fontWeight: "300",
                  },
                  mb: 2
                }} />
              <Typography sx={{ fontSize: "12px", mb: "5px" }}>Nom de votre organisation ( <space style={{ color: "#3A3A3A" }}>facultatif</space> )</Typography>
              <TextField size="small" variant="outlined" fullWidth
                sx={{ 
                  '& .MuiInputBase-input': {
                    color: 'grey.grey600',
                    fontWeight: "300",
                  }
                }} />
              <Box sx={{ mt: 2 }}>
                <FormGroup sx={{ fontSize: "10px"}}>
                  <FormControlLabel required control={<Checkbox />} label="Je certifie organiser des évènements" />      
                </FormGroup>
              </Box>
              <Button fullWidth sx={{ bgcolor: "#CFD0D0", color: "#313131", mt: 2, fontSize: "14px", textTransform: "lowercase", fontWeight: "600", border: "1px solid grey", '&:hover': { bgcolor: "#CFD0D0" } }}><span style={{ textTransform: "uppercase" }}>C</span>ontinue</Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Login