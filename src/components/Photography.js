import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import blueflowers from "../images/SAM_1075.JPG";
import getty from "../images/SAM_1088.JPG";
import garden from "../images/SAM_1055.JPG";
import palmtrees from "../images/SAM_1108.JPG";
import ducks from "../images/SAM_1057.JPG";
import tree from "../images/SAM_1054.JPG";

export default function Design() {
    const myphotos = [
      {
        img: blueflowers,
        title: "",
        author: "Flowers",
      },
      {
        img: getty,
        title: "",
        author: "Getty",
        cols: 2,
      },
      {
        img: garden,
        title: "",
        author: "Bird near water",
        cols: 2,
      },
      {
        img: palmtrees,
        title: "",
        author: "Shape of leaves",
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: ducks,
        title: "",
        author: "Two ducks on the ledge",
      },
      {
        img: tree,
        title: "",
        author: "Mix of nature and architecture",
      },
    ];
      
  return (
    <div>
        <Box
            sx={{
              bgcolor: "#b5b5b5",
              borderRadius: 2,
              width: 1500,
              mt: 35
            }}
          >
            <div class="container">
              <div class="circle1"></div>
              <div class="circle2"></div>
              <div class="circle3"></div>
            </div>

              <Paper
                elevation={5}
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  width: 1500,
                  height: 775,
                  fontSize: 24,
                }}
              >
                <br />
                <Typography variant="h2">
                  {" "}
                  Photography{" "}
                  <br/>
                </Typography>
                <Typography variant="p"> Quick eye break! </Typography>
                <br/>
                <ImageList variant="masonry" cols={3} gap={8} sx={{mt: 5}}>
                  {myphotos.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
                </ImageList>
              </Paper>
          </Box>
    </div>
  )
}
