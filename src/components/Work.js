import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import FlashcardList from "../FlashcardList";

const flashcard_comp = [
    {
      id: 1,
      project_name: "Data Assistant",
      details: "Analyze various datasets such as admission, degrees, retention, and many other academic data to create and update visualizations and dashboards for the university to use.",
      additional: "Present to and discuss with a team of 4 on the progress of the project and the next steps to take on a bi-weekly basis.",
      website: "https://cosdatadigest.science.purdue.edu/",
      textweb: "Glimpse of what I do!",
      pills: ["Tableau", "Python", "Excel"],
    },
    {
      id: 2,
      project_name: "Data Science Intern at MISO Energy",
      details: "Innovate ways to visualize financial data and create a dashboard for the company to use. Placed in the market evaluation team to provide and bring automation in.",
      additional: "",
      pills: ["Python", "Tableau", "Excel", "SQL"],
      relevant_course: ["Data Visualization", "Python Programming"]
    },
  ];

export default function Work() {
    const [flashcards, setFlashcards] = useState(flashcard_comp);

return(
    <div>
      <Stack>
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
                    p: 2
                  }}
                >
                  <br />
                  <Typography variant="h2"> Experience </Typography>
                  <br/>
                  <br/>
                  <FlashcardList flashcards={flashcards}/>
                </Paper>
              </Box>
        </Stack>
      </div>
);
  }