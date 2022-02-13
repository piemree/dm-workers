import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Person } from "@mui/icons-material";

const theme = createTheme();

export default function Login() {
  const [errName, setErrName] = useState(false);
  const [errOwner, setErrOwner] = useState(false);
  const [errContact, setErrContact] = useState(false);
  const [errBalance, setErrBalance] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setErrName(data.get("name") == "");
    setErrOwner(data.get("owner") == "");
    setErrContact(data.get("contact") == "");
    setErrBalance(data.get("balance") == "");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Person />
          </Avatar>
          <Typography component="h1" variant="h5">
            Yeni Müsteri
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              onError={() => console.log("error")}
              fullWidth
              name="name"
              label="Firma Adı"
              autoFocus
              error={errName}
              helperText={errName && "Bu alan boş bırakılamaz"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="owner"
              label="Firma Sahibi"
              error={errOwner}
              helperText={errOwner && "Bu alan boş bırakılamaz"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact"
              label="Firma İletişim"
              error={errContact}
              helperText={errContact && "Bu alan boş bırakılamaz"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="balance"
              label="Güncel Bakiye"
              type="number"
              error={errBalance}
              helperText={errBalance && "Bu alan boş bırakılamaz"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="bg-blue-800"
            >
              Ekle
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
