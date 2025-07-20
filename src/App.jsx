import { Container, Typography, Box } from "@mui/material";
import ProfileCard from "./components/ProfileCard";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h4" color="#fff" gutterBottom>
            秋山の結婚式特設Page
          </Typography>
          <Typography variant="body1" color="#fff" sx={{ "& span": { color: "GrayText" } }}>
            Produced by <span>GO</span>.OBAYASHI
          </Typography>
        </Box>

        <ProfileCard />
        <MusicPlayer />
        {/* <LyricsDisplay /> */}
      </Container>
      <Footer />
    </>
  );
}

export default App;
