import { Container, Typography, Box } from "@mui/material";
import ProfileCard from "./components/ProfileCard";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h4" gutterBottom>
          秋山の結婚式特設Page
        </Typography>
        <Typography variant="body1">Produced by GO.OBAYASHI</Typography>
      </Box>

      <ProfileCard />
      <MusicPlayer />
      {/* <LyricsDisplay /> */}
    </Container>
  );
}

export default App;
