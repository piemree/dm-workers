import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { ExitToApp } from "@mui/icons-material";
import { setDrawerState } from "../store/slices/rootSlice";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const authState = useSelector((state) => state.auth.state);
  const dispatch = useDispatch();
  const router = useRouter();
  const pageName = () => {
    if (router.pathname == "/") return "Musteri Listesi";
    return router.pathname.split("/")[1].split("-").join(" ").toUpperCase();
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const pages = [
    {
      name: "Yeni Musteri",
      to: "yeni-musteri",
    },
    {
      name: "Musteri Listesi",
      to: "",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className="md:hidden "
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(setDrawerState(true))}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            className="py-5 md:hidden"
            sx={{ flexGrow: 1 }}
          >
            {pageName()}
          </Typography>
          <div className="flex grow items-center">
            {pages.map(({ name, to }, index) => (
              <Button
                className="text-white hover:bg-blue-400 min-h-full rounded-none py-5 hidden  md:block"
                key={index}
                onClick={() =>router.push(`/${to}`)}
              >
                {name}
                {/* <Link
                  href={`/${to}`}
                  className=" text-white block h-full w-full"
                >
                  {name}
                </Link> */}
              </Button>
            ))}
            <div className="m-auto">
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className="rounded-none  hover:bg-blue-400 underline underline-offset-4 font-semibold"
              >
                1000 TL
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <span className="font-semibold">Nakit Tahsilat: </span>0 TL
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span className="font-semibold">Kart Tahsilat: </span>0 TL
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span className="font-semibold">Toplam Tahsilat: </span>0 TL
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span className="font-semibold">Satş Miktarı: </span>0 TL
                </MenuItem>
              </Menu>
            </div>
          </div>
          {true && (
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <ExitToApp />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
