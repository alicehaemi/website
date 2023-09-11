import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme, Typography } from "@mui/material";
import background from "./backg.png";
import sparkle from "./sparkle.png";
import mouse from "./images/5.png";
import geo from "./images/6.png";

import FlashcardList from "./FlashcardList";
import Appbar from "./components/Appbar";
import Profile from "./components/Profile";
import Photography from "./components/Photography";
import Contacts from "./components/Contacts";
import Introduction from "./components/Introduction";
import Work from "./components/Work";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

const flashcard_component = [
  {
    id: 1,
    project_name: "Website development",
    details: "A personal project dedicated to learning about React and MUI, as well as build other various front-end development skills.",
    additional: "I spent time outside of my internship to design and implement features that were visually appealing and to my liking.",
    final: "It's the website you are on right now :)",
    pills: ["React", "JSX", "MUI", "CSS"],
  },
  {
    id: 2,
    project_name: "Data Visualization Hackathon",
    sub_name: "https://msshreyavasant.wixsite.com/visualizers",
    additional: "Created the data visualization for Michigan, cleaning the data from scratch and making an eye-catchng visualization. Received one of the highest ratings in the class",
    details: "Worked in a group of 5 to create a data visualization of opioid overdose data.",
    linkviz: "Link to our project website!",
    pills: ["Tableau", "Python", "Excel", "Wix"],
    relevant_course: ["Data Visualization", "Python Programming"],
  },
];

function App() {
  useEffect(() => {
    document.title = "Alice Lee";
  }, []);

  const [flashcards, setFlashcards] = useState(flashcard_component);

  const shapes={
    backgroundImage: `url(${geo})`,
    marginLeft: 100,
    marginTop:'-650px',
    height:'500px',
    backgroundRepeat: 'no-repeat',
  }

  const cursor={
    backgroundImage: `url(${mouse})`,
    marginLeft: 1130,
    marginTop:'-300px',
    height:'500px',
    width:'500px',
    backgroundRepeat: 'no-repeat',
  }

  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: "myFirstFont",
      },
      h2: {
        fontFamily: "myFirstFont",
      },
      p: {
        fontFamily: "louis",
      },
      h3: {
        fontFamily: "freesans",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          color: "black",
          background:
            "linear-gradient(to right, #b4c0cf, #e8bdbe, #f4d2b5, #d4d5c8)",
        }}
      >
        <Stack className="App">
          <Appbar />

          <Introduction />
          <br />
          <br />
          <br />

          <Profile />
          <br />
          <br />
          <br />
          <br />

          <div className="work">
            <Stack direction="row" spacing={2} sx={{ height: "500px"}}>
              <div className="second box">
                <Box
                  sx={{
                    bgcolor: "#b5b5b5",
                    borderRadius: 2,
                    width: 800,
                    height: 250,
                  }}
                >
                  <div class="container">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                  </div>
                  <Paper
                    elevation={3}
                    sx={{
                      bgcolor: "white",
                      borderRadius: 1,
                      height: 675,
                      fontSize: 24,
                      p: 2,
                    }}
                  >
                    <br />
                    <Typography variant="h2"> Projects </Typography>
                    <br />
                    <br />
                    <FlashcardList flashcards={flashcards} />
                  </Paper>
                </Box>
              </div>

              <Work />
            </Stack>
          </div>
          <br />

          <div className="Picture">
            <Photography />
          </div>

          <br />
          <div className="connect">
          <Contacts />
          </div>

          <div className="graphics">
            <div style = {shapes}> </div>
            <div style = {cursor}> </div>
          </div>         

          <br />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
