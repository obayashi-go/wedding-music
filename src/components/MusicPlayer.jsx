import {
  Card,
  CardContent,
  Typography,
  Accordion,
  Box,
  IconButton,
  AccordionSummary,
  AccordionDetails,
  Snackbar,
} from "@mui/material";
import { LiricsMap } from "../constans/Lyrics.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

export default function MusicPlayer() {
  const songs = [
    { title: "結局オニャンコポン", src: "/audio/music1.mp3" },
    { title: "最高気温のオニャンコポン", src: "/audio/music2.mp3" },
  ];
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
    } catch (err) {
      console.error("コピー失敗:", err);
    }
  };

  return (
    <Box mb={8}>
      {songs.map((song, index) => (
        <Card key={index} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h6" fontWeight={700} textAlign="center" marginBottom={1}>
              {song.title}
            </Typography>
            <audio controls style={{ width: "100%" }}>
              <source src={song.src} type="audio/mpeg" />
              お使いのブラウザでは再生できません。
            </audio>
          </CardContent>
          <Accordion
            className="lyrics"
            key={`lyrics-${index}`}
            sx={{
              my: 0,
              "& .MuiAccordionSummary-root:focus, .MuiAccordionSummary-root:focus-visible": {
                outline: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Lyrics</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  overflow: "auto",
                  height: "500px",
                }}
              >
                <Typography sx={{ whiteSpace: "pre-line" }}>{LiricsMap[index].text}</Typography>
                <IconButton
                  size="small"
                  onClick={() => handleCopy(LiricsMap[index].text)}
                  sx={{ ml: 1 }}
                  aria-label="コピーしたぞい"
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}
      <Snackbar
        open={copySuccess}
        autoHideDuration={2000}
        onClose={() => setCopySuccess(false)}
        sx={{ "& div": { justifyContent: "center", background: "#005611ff" } }}
        message="コピーしたぞい"
      />
    </Box>
  );
}
