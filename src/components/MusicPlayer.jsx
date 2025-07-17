import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { LiricsMap } from "../constans/Lyrics.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MusicPlayer() {
  const songs = [
    { title: "結局オニャンコポン", src: "/audio/music1.mp3" },
    { title: "最高気温のオニャンコポン", src: "/audio/music2.mp3" },
  ];

  return (
    <>
      {songs.map((song, index) => (
        <Card key={index} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h6">{song.title}</Typography>
            <audio controls style={{ width: "100%" }}>
              <source src={song.src} type="audio/mpeg" />
              お使いのブラウザでは再生できません。
            </audio>
          </CardContent>
          <Accordion key={`lyrics-${index}`} sx={{ my: 0 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Lyrics</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ whiteSpace: "pre-line" }}>{LiricsMap[index].text}</Typography>
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}
    </>
  );
}
