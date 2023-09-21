import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <AppBar position="static" sx={{ backgroundColor: "white", height: "60px" }}>
          <Toolbar sx={{ gap: "10px", }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: "black" }}>Mais recentes</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/release" style={{ color: "black" }}>Release</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/news" style={{ color: "black" }}>Notícia</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/favorite" style={{ color: "black" }}>Favoritas</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;