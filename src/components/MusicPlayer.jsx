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
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function MusicPlayer() {
  const songs = [
    { title: "結局オニャンコポン", src: "/audio/music1.mp3" },
    { title: "最高気温のオニャンコポン", src: "/audio/music2.mp3" },
  ];
  const [copySuccess, setCopySuccess] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cardRefs = useRef([]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
    } catch (err) {
      console.error("コピー失敗:", err);
    }
  };

  const handleAccordionChange = (index) => (_, expanded) => {
    setExpandedIndex(expanded ? index : null);
    if (expanded) {
      setTimeout(() => {
        const card = cardRefs.current[index];
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }
  };

  return (
    <Box mb={8}>
      {songs.map((song, index) => (
        <Card key={index} sx={{ my: 2 }} ref={(el) => (cardRefs.current[index] = el)}>
          <CardContent
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: "#f8f8ff",
              borderBottom: "1px solid #444",
            }}
          >
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
            expanded={expandedIndex === index}
            onChange={handleAccordionChange(index)}
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
            <AccordionDetails
              sx={{
                maxHeight: "calc(100vh - 310px)",
                overflowY: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  {LiricsMap[index].text.split("\n").map((line, i) => {
                    const { ref, inView } = useInView({
                      triggerOnce: true,
                      threshold: 0.1,
                    });
                    return (
                      <Typography
                        key={i}
                        ref={ref}
                        sx={{
                          opacity: inView ? 1 : 0,
                          transform: inView ? "none" : "translateY(20px)",
                          filter: inView ? "blur(0)" : "blur(4px)",
                          transition: "all 0.6s ease-out",
                          whiteSpace: "pre-line",
                          mb: 1,
                        }}
                      >
                        {line}
                      </Typography>
                    );
                  })}
                </Box>

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
