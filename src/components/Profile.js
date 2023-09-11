import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from '@mui/material';
import headshot from "../headshot.JPG";
import folder from "../images/folder.png";

export default function Education() {
  return (
    <div className='edu'>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ height: "500px"}}>
            <div className="list">
              <Box
                sx={{
                  bgcolor: "#b5b5b5",
                  borderRadius: 2,
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
                    width: 420,
                    height: 500,
                    fontSize: 24,
                  }}
                >
                  <br />
                  
                  <Typography variant="h2"> Profile </Typography>
                  <br/>

                  <img src={headshot} alt="headshot" width={290.3} height={345.8}/>

                </Paper>
              </Box>
            </div>

            <div className="second box">
              <Box
                sx={{
                  bgcolor: "#b5b5b5",
                  borderRadius: 2,
                  height: 250,
                  ml: 3.55
                }}
              >
                <div class="container">
                  <div class="circle1"></div>
                  <div class="circle2"></div>
                  <div class="circle3"></div>
                </div>
                <Paper
                  elevation={3}
                  align="left"
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    width: 800,
                    height: 500,
                    fontSize: 24,
                  }}
                >
                  <br />
                  <Box align="center">
                  <Typography variant="h2"> Education </Typography>
                  </Box>
                  <Box sx={{p: 2}}>
                  <Typography variant="p" sx={{fontWeight: 'bold'}}>
                    Purdue University / West Lafayette, IN
                  </Typography>
                  <Typography variant="p" sx={{ml: 31}}> May 2025 </Typography>
                    <br />
                  <Typography variant="p" >
                    Majoring in Data Science <br/>
                    Minoring in Management <br/>
                  </Typography>

                  <Typography variant="p" sx={{fontWeight: 'bold', fontStyle: 'italic' }}>
                    <br />
                    Honors & Awards: <br/>
                  </Typography>
                  
                  <Box sx={{mt: 1}}>
                  <Typography variant="p" sx={{textDecoration: 'underline'}}>
                    Trustee's Scholarship 
                  </Typography>
                  <Typography variant="p" sx={{ pt: '2' }}>
                    : Received for exceptional academic achievement, leadership, and service in high school/community. <br/>
                  </Typography>
                  </Box>
                  
                  <Box sx={{mt: 1}}>
                  <Typography variant="p" sx={{textDecoration: 'underline'}}>
                    Dean's List and Semester Honors
                  </Typography>
                  <Typography variant="p" sx={{ pt: '2' }}>
                    : Awarded for academic excellence in all 8 semesters of attending. <br/>
                  </Typography>
                  </Box>

                  <Box sx={{mt: 1}}>
                  <Typography variant="p" sx={{textDecoration: 'underline'}}>
                    2nd Place in AITP's Data Science Challenge
                  </Typography>
                  <Typography variant="p" sx={{ pt: '2' }}>
                    : Awarded for presenting an innovative solution to a data science problem in a competition hosted by AITP. <br/>
                  </Typography>  
                  </Box>
                </Box>

                </Paper>
              </Box>
            </div>

            
            <Stack spacing={2} sx={{ height: "500px", pl: 6.75, pb: 3}}>
            <div className="folder1">
            <a href="https://open.spotify.com/playlist/07p8ItXJGJ814pmpwvWJ8U?si=eed07a4b96fc495c" target="_blank" rel="noreferrer">
              <img src={folder} alt="folder" width={165} height={140}/>
            </a>
            <br/>
            <Typography variant="p"> Chill Songs </Typography>
            </div>

            <div className="folder2">
            <a href="https://open.spotify.com/playlist/2gbIBGiRCEfIpIRbZUayhh?si=f9eeea595952409a" target="_blank" rel="noreferrer">
              <img src={folder} alt="folder" width={165} height={140}/>
            </a>
            <br/>
            <Typography variant="p"> Bass Collection </Typography>
            </div>

            <div className="folder3">
            <a href="https://open.spotify.com/playlist/29R5DVm2t7n270X84FNx25?si=f6ecb150bb0f4d66" target="_blank" rel="noreferrer">
              <img src={folder} alt="folder" width={165} height={140}/>
            </a>
            <br/>
            <Typography variant="p"> Drive songs </Typography>
            </div>
            </Stack>
            
      </Stack>

    </div>
  )
}
