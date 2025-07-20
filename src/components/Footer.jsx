import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "#f5f5f5",
        py: 1,
        textAlign: "center",
        borderTop: "1px solid #ddd",
        display: { xs: "block", sm: "none" }, // スマホのみ表示
      }}
    >
      <Typography variant="caption" color="textSecondary">
        2025.08.17 Akiyama Wedding
      </Typography>
    </Box>
  );
}

export default Footer;
