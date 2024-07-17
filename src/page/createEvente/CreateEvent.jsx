import { useState, useRef } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
//import HeaderConnect from "../../components/headerConnection/HeaderConnect"
//import Input from '@mui/joy/Input';
import { PiNotePencilBold } from "react-icons/pi";
import { BsCalendarEvent } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import "./CreateEvent.css";
import { FaRegImage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeaderAccueil from "../../components/header/HeaderAccueil";
import HideAppBar from "../../components/header/hideBar";
// import Headerb from "../../components/header/Headerb"
import Navbar from "../../components/header/navBar";

//import { makeStyles } from "@material-ui/core";
/*
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red', // Couleur de la bordure du champ de saisie
      },
      '&:hover fieldset': {
        borderColor: 'blue', // Couleur de la bordure au survol
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green', // Couleur de la bordure quand le champ est en focus
      },
    },
    '& .MuiInputBase-input': {
      color: 'purple', // Couleur du texte saisi
    },
    '& .MuiFormHelperText-root': {
      color: 'orange', // Couleur du texte d'aide
    },
    '& .MuiInputLabel-root': {
      color: 'pink', // Couleur de l'étiquette
    },
  }
}))
*/

export default function CreateEvent() {
  const [isShow, setIsShow] = useState(false);
  const [choixImage, setChoixImage] = useState([]);
  const inputref = useRef(null);
  const inputRefLogo = useRef(null);
  const [isShowChoix, setIsShowChoix] = useState(false);
  const [image, setImage] = useState("");

  const selectImage = (event) => {
    //event.preventDefault();
    const files = Array.from(event.target.files);
    setChoixImage(files);
  };

  const handleClickLogo = () => {
    inputRefLogo.current.click();
  };

  const handleRemoveLogo = (id) => {
    // Supprime l'image du tableau en utilisant son identifiant
    const newChoixImage = choixImage.filter((file, index) =>
      file.id ? file.id !== id : index !== id
    );
    // Met à jour le tableau d'images
    setChoixImage(newChoixImage);
  };

  const handleImageClick = () => {
    inputref.current.click();
  };

  const handleImageChange = (event) => {
    //const file = event.target.files[0];
    setImage(event.target.files[0]);
  };

  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <HeaderAccueil />
        {/* <HideAppBar>
          <Navbar />
        </HideAppBar> */}
        {/* <Navbar /> */}
      </Box>
      <Box sx={{ padding: "15px 20px", bgcolor: "#fbfbfb", height: "100svh" }}>
        <Box
          sx={{
            mt: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between" /*, bgcolor: "red"*/,
          }}
        >
          <Typography
            sx={{
              ml: 3,
              backgroundColor: "#fff",
              color: "blue.blue600",
              padding: "5px 1px",
              borderRadius: "2px",
              fontWeight: "600",
              fontSize: "1.4rem",
              position: "relative",
              "::after": {
                content: "''",
                display: "block",
                bgcolor: "#291F43",
                height: "2px",
                width: "62px",
              },
            }}
          >
            CREE VOTRE EVENEMENT{" "}
          </Typography>
          <Link to="/createbillet" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                bgcolor: "#291F43",
                color: "#fff",
                "&:hover": { bgcolor: "#291E20" },
                mr: 3,
                padding: "8px 20px",
              }}
            >
              Créer un billet
            </Button>
          </Link>
        </Box>

        <form action="">
          <Box
            gap={3}
            sx={{
              mt: 2,
              /*backgroundColor: "grey.grey300",*/ width: "97%",
              marginX: "auto",
              paddingTop: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              pb: 1,
            }}
          >
            <Box
              sx={{
                width: "45%",
                backgroundColor: "#fff",
                borderRadius: "5px",
                boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.2)",
                px: "20px",
                py: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  mb: 1,
                }}
              >
                <PiNotePencilBold style={{ fontSize: "20px" }} />
                <Typography
                  sx={{
                    /*color: "blue.blue500",*/ fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  Nom de l évènement
                </Typography>
              </Box>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiInputBase-input": {
                    color: "grey.grey600",
                    fontWeight: "300",
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  mt: 1.2,
                  gap: "6px",
                }}
              >
                <BsCalendarEvent
                  style={{ marginTop: "5px", fontSize: "17px" }}
                />
                <Typography sx={{ mt: 1, fontSize: "17px", fontWeight: "500" }}>
                  Type de l évènement
                </Typography>
              </Box>
              <select
                className="stySelect"
                style={{
                  width: "100%",
                  padding: "12.5px",
                  borderColor: "lightgrey",
                  borderRadius: "5px",
                  marginBottom: "8px",
                  fontWeight: "normal",
                  fontSize: "14px",
                  paddingLeft: "10px",
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.10)",
                }}
              >
                <option>Festival</option>
                <option>Salon & Foire</option>
                <option>Concert & Spectacle</option>
                <option>Tourisme & Parc</option>
                <option>Sport & Session loisirs</option>
                <option>Soirée & Evènement Etudiant</option>
              </select>
              <Box sx={{ mt: 1 }}>
                <Typography
                  sx={{ fontWeight: "normal", cursor: "pointer" }}
                  onClick={() => setIsShow(!isShow)}
                >
                  <span style={{ fontSize: "20px", marginTop: "10px" }}>+</span>{" "}
                  Ajouter une autre information{" "}
                  <span style={{ color: "grey" }}>(Optionel)</span>
                </Typography>

                {isShow && (
                  <Box
                    sx={{
                      width: "95%",
                      backgroundColor: "#fff",
                      mx: "auto",
                      mt: 1,
                      pb: "0.02px",
                      pt: 1,
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        sx={{
                          color: "blue",
                          fontWeight: "normal",
                          ml: 1,
                          mb: 2,
                        }}
                      >
                        Sponsor
                      </Typography>
                      <Box>
                        {choixImage.map((file, index) => (
                          <>
                            <Box
                              sx={{ display: "inline-block", ml: 1 }}
                              key={index}
                            >
                              <img
                                src={URL.createObjectURL(file)}
                                alt=""
                                style={{ maxWidth: "50px", maxHeight: "50px" }}
                                onClick={() =>
                                  handleRemoveLogo(file.id || index)
                                }
                              />
                            </Box>
                          </>
                        ))}
                        <Box sx={{ ml: 1 }}>
                          <input
                            type="file"
                            multiple
                            onChange={selectImage}
                            ref={inputRefLogo}
                            style={{ display: "none" }}
                          />
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              backgroundColor: "#291E20",
                              display: "inline-block",
                              cursor: "pointer",
                              color: "#fff",
                              pl: "10px",
                              pr: "10px",
                              pt: "5px",
                              pb: "5px",
                              borderRadius: "5px",
                              ml: "2",
                              mt: 1.5,
                            }}
                            htmlFor="uploadBtn"
                            onClick={handleClickLogo}
                          >
                            Importer une photo (logo)
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
              <Box sx={{ mt: 1 }}>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ mt: 1, fontWeight: "normal" }}>
                    Choisiser votre image
                  </Typography>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACnklEQVR4nOWXzWsTQRTApxWiiB68iKAH6bEH0UuT1hSPIm4MFHvxKvUgFNGDF8EFM6+beGvxYMCdiQUvSym9eq1Y8V/wIgqJbeZt7MEPROnK252NdZNttjFZhD54MJmZN+83b968zTB24GWczWayzKjkmNHIsYI3IH0VBjbLjNfR8Swz6jlmlMk3o8YAHYe6HgIQTPw8o0yEdfoxyYpTaaVDlhn5MBIspEk7F9t+c/8rgGN6GcGxIgAbkmNdApapLzUACViWgF5Ey+kBcH/Xnii5U3aplfcBONZTB7BLrbyA5nT6ANB5BIKjlRqAY3oZH4IisY8kfGFtnxCg3pJSu2+AfkSa749IjuvtiIF6UzXrR1MBcBzvkAC1GjhXHwP1IVZpbOgAgqulIFHVdg1a52zAcQnKDSCwOlQAwdHUSfqNbk3Yby9gVnD8oo/kYV8AzyrqOJ0lKbWj4xKaczrsP2sL6lonnCoKrn4Fc5pz+wLwPG9EgnJ2XcU10/RGdy1eIMeCqx0JeDNuEyEkgQjAmcQAAtQjbdgi1UnFg0XdixRyXaAexDnvdkxkm6ASurO0M5+au5cDpbbaIYftBOP4pJfzP2viU31c7p4Akm+dD5PHBrzb3kXJvRepjmvdrlic0PEJUCtkGwuwbH46Kbj6oMMtO0IJSoZJJ63PZ5M6jxarrgAOlV9dyQRXG4uL7w5HF6A+GgsrXbc5vYRKdFcAAVjVhaNR43g6dhePt061Kx3HZdaHdABIwHnt/HuN40SvBZ5bzQsS8Ku2ufPPAALUDz/rQd1IuogNeD28KTXuXukLYHK0uEkN69ZGX997stE5g7a1OZbEZoJdnW7/LZ8Zu/9yCA+TpGqx25ecY4Uz8yu5kcIgn2Z76l9PM3bQ5TdeEkOWZvdSbQAAAABJRU5ErkJggg=="
                    style={{
                      marginLeft: "5px",
                      cursor: "pointer",
                      width: "25px",
                      height: "25px",
                      marginTop: "4px",
                    }}
                    onClick={() => setIsShowChoix(!isShowChoix)}
                  />
                </Box>
                {isShowChoix && (
                  <Box
                    sx={{
                      width: "95%",
                      height: "200px",
                      bgcolor: "#fff",
                      mx: "auto",
                      mt: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box onClick={handleImageClick}>
                      {image ? (
                        <Box
                          sx={{
                            width: "150px",
                            height: "150px",
                            backgroundColor: "",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box>
                            <img
                              src={URL.createObjectURL(image)}
                              alt=""
                              className="cursor-pointer image_choix"
                            />
                          </Box>
                        </Box>
                      ) : (
                        <FaRegImage className="logo_image" />
                      )}
                      <input
                        type="file"
                        ref={inputref}
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                width: "55%",
                height: "294px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.2)",
                px: "20px",
                py: "20px",
              }}
            >
              <Box
                gap={0.5}
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <MdOutlineLocationOn style={{ fontSize: "23px" }} />
                <Typography sx={{ fontSize: "17px", fontWeight: "500" }}>
                  Localisation
                </Typography>
              </Box>
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiInputBase-input": {
                    color: "grey.grey600",
                    fontWeight: "300",
                  },
                }}
              />
              <Box
                gap={0.8}
                sx={{ display: "flex", alignItems: "center", mt: 1.8 }}
              >
                <MdOutlineDateRange
                  style={{ marginTop: "5px", fontSize: "20px" }}
                />
                <Typography sx={{ mt: 1, fontSize: "17px", fontWeight: "500" }}>
                  Date
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1.6,
                }}
              >
                <Box sx={{ backgroundColor: "F8F7FA", width: "33.33%" }}>
                  <Typography sx={{ fontWeight: "normal" }}>
                    Date de début
                  </Typography>
                  <TextField
                    size="small"
                    type="date"
                    fullWidth
                    sx={{
                      fontWeight: "normal",
                      mt: 0.5,
                      bgcolor: "#fff",
                      "& .MuiInputBase-input": {
                        color: "grey.grey600",
                        fontWeight: "300",
                        fontSize: "16px",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ backgroundColor: "F8F7FA", ml: 1, width: "33.33%" }}>
                  <Typography sx={{ fontWeight: "normal" }}>
                    Heure de début
                  </Typography>
                  <TextField
                    size="small"
                    type="time"
                    fullWidth
                    sx={{
                      fontWeight: "normal",
                      mt: 0.5,
                      bgcolor: "#fff",
                      "& .MuiInputBase-input": {
                        color: "grey.grey600",
                        fontWeight: "300",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ backgroundColor: "F8F7FA", ml: 1, width: "33.33%" }}>
                  <Typography sx={{ fontWeight: "normal" }}>
                    Heure finale{" "}
                    <span style={{ color: "grey" }}>(Optionel)</span>
                  </Typography>
                  <TextField
                    size="small"
                    type="time"
                    fullWidth
                    sx={{
                      fontWeight: "normal",
                      mt: 0.5,
                      bgcolor: "#fff",
                      "& .MuiInputBase-input": {
                        color: "grey.grey600",
                        fontWeight: "300",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}
