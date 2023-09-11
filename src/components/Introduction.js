import React from 'react'
import MovingComponent from 'react-moving-text'
import Typography from '@mui/material/Typography';
import sparkle from "../sparkle.png";
import background from "../backg.png";
import { Box } from '@mui/material';


export default function Introduction() {
    const mystyle={
        backgroundImage: `url(${background})`,
        marginLeft: 1130,
        marginTop:'-350px',
        height:'500px',
        backgroundRepeat: 'no-repeat',
      }
    
      const spark={
        backgroundImage: `url(${sparkle})`,
        marginLeft: 110,
        marginTop:'-300px',
        height:'500px',
        backgroundRepeat: 'no-repeat',
      }
    return (
      <div>
        <div className="title">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h1"> Alice Lee </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

        <div className="moving">
        <Box justifyContent="center">
          <MovingComponent
            type="glowing"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="none">
            <Typography variant="h3"> An Aspiring Data Scientist.</Typography>
            <Typography variant="h3"> A Go-Getter with a passion.</Typography>
            <Typography variant="h3"> Always learning & improving.</Typography>
            <div className='pic' style = {spark}> </div>
            <div className='pic' style = {mystyle}> </div>

          </MovingComponent>
        </Box>
        </div>
      </div>
    )}