import { Card, CardContent, Typography, Avatar } from "@mui/material";

export default function ProfileCard() {
  return (
    <Card sx={{ my: 2 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar src="/images/profile.jpg" sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
        <Typography variant="h6">G.O</Typography>
        <Typography variant="body2">
          お手元のパンフレットを作成した人類です。
          <br />
          寝顔が昆虫に似ていると言われたことがあります。
        </Typography>
      </CardContent>
    </Card>
  );
}
