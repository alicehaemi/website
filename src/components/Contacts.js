import React from "react";
import { Typography, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/system";
import apps from "../images/apps.png";
import topbar from "../images/topbar.png";

export default function Contacts() {
  

  return (
    <div className="contact">
      <Stack pt={5}>
        <Box
          pt={3}
          pl={2.5}
          borderRadius={10}
          sx={{ bgcolor: "black", width: "380px", height: "600px" }}
        >
          <Paper
            sx={{
              bgcolor: "white",
              width: "360px",
              height: "575px",
              borderRadius: 8,
            }}
          >
            <Box sx={{ ml: 9, pt: -2, mt: 0 }}>
              <img src={topbar} alt="topbar" width={295} height={36} />
            </Box>
            <Typography variant="h2"> Keep in touch </Typography>
            <Stack
              spacing={2}
              borderRadius={3}
              sx={{
                bgcolor: "#e3e3e3",
                width: "260px",
                height: "370px",
                ml: "48px",
                mt: 1.5,
              }}
            >
              <Box component="span" sx={{ p: 1, border: "1px grey" }}>
                <IconButton
                  href="mailto:alicehaemilee@gmail.com"
                  target="_blank"
                >
                  <EmailIcon sx={{ fontSize: 60 }} />
                </IconButton>
                <div>
                  <Typography variant="p">
                    {" "}
                    Any questions or comments?{" "}
                  </Typography>
                </div>
              </Box>
              <Box component="span" sx={{ p: 1, border: "1px grey" }}>
                <IconButton
                  href="https://linkedin.com/in/alicehaemilee"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ fontSize: 60 }} />
                </IconButton>
                <div>
                  <Typography variant="p">
                    {" "}
                    Connect with me on Linkedin!{" "}
                  </Typography>
                </div>
              </Box>
              <Box component="span" sx={{ p: 1, border: "1px grey" }}>
                <IconButton
                  href="https://github.com/alicehaemi"
                  target="_blank"
                >
                  <GitHubIcon sx={{ fontSize: 60 }} />
                </IconButton>
                <div>
                  <Typography variant="p">
                    {" "}
                    Check out my Github Profile! <br />
                    <br />
                    <br />
                  </Typography>
                </div>
              </Box>
            </Stack>

            <Box sx={{ mt: 1 }}>
              <img src={apps} alt="apps" width={320.3} height={75.8} />
            </Box>
          </Paper>
        </Box>
        
      </Stack>
    </div>
  );
}
