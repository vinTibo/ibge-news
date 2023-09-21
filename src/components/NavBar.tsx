import { Box, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <AppBar position="static" sx={{ backgroundColor: "white", height: "60px" }}>
          <Toolbar sx={{ gap: "60px" }}>
            <Link to="/" style={{ color: "black" }}>Mais recentes</Link>
            <Link to="/release" style={{ color: "black" }}>Release</Link>
            <Link to="/news" style={{ color: "black" }}>Notícias</Link>
            <Link to="/favorite" style={{ color: "black" }}>Favoritas</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;