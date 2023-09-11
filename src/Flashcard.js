import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Chip } from "@mui/material";

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const pillsDiv = [];
  for (let pill of flashcard.pills) {
    pillsDiv.push(
      <div key={pill}>
        <Chip label={pill} variant="outlined" color="primary" />
      </div>
    )};

  return (
    <div 
      className={`card ${flip ? 'flip' : ''}`} 
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flashcard.project_name}<br/>
      </div>
        
      <div className="back" align="left">
        {flashcard.details}
        <br/>
        <br/>
        {flashcard.additional}
        <br/>
        <br/>
        {flashcard.final}
        <a href={flashcard.sub_name} target="_blank" rel="noreferrer">
        {flashcard.linkviz}
        </a>
        <a href={flashcard.website} target="_blank" rel="noreferrer">
          {flashcard.textweb}
        </a>
        <br/>
        <br/>
        <Stack direction="row" spacing={1}>
          {pillsDiv}
      </Stack>
      </div>
    </div>
  );
}
