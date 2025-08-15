import { useState } from "react";
import { Card, CardContent, Typography, Avatar, Collapse, Box, Fade } from "@mui/material";

const messages = [
  "呼んだ？",
  "好きなタイプは、マイナスドライバーよりもプラスドライバーです。",
  "最近、笑ってないな",
  "8時？20時のこと？",
  "タイピングが早すぎて、指の動きと音がズレて聞こえてきます",
  "この仕掛けを見つけたあなたは、もうオニャンコポンの一員です。",
  "最近シャンプーかと思って使ってたのがボディソープだと気づきました",
  "食べ方が汚いことで有名です",
  "10ポイント獲得です!",
  "Just Do It",
  "調子に乗るとチャリのことをバイセコーと呼びます",
  "ンッアーー!!んだよっ！？",
  "ごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさいごめんなさい",
  "はいはいはいはいはいはい",
  "大林ってつまり森ですよね？",
];

export default function ProfileCard() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(messages[0]);

  const handleAvatarClick = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setSelectedMessage(random);
    setShowDetail(true);
  };

  return (
    <Card sx={{ my: 2 }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Box onClick={handleAvatarClick} sx={{ cursor: "pointer" }}>
          <Avatar src="/go-image.png" sx={{ width: 80, height: 80, mx: "auto", mb: 1 }} />
        </Box>
        <Typography variant="h6">G.O</Typography>
        <Typography variant="body2">
          お手元のパンフレットを作成した人類です。
          <br />
          寝顔が昆虫に似ていると言われたことがあります。
        </Typography>

        <Collapse in={showDetail} timeout={400}>
          <Fade in={showDetail} timeout={600}>
            <Box mt={2}>
              <Typography variant="body2" color="text.secondary">
                {selectedMessage}
              </Typography>
            </Box>
          </Fade>
        </Collapse>
      </CardContent>
    </Card>
  );
}
