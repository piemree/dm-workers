import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { setDrawerState } from "../store/slices/rootSlice";
import Loading from "./Loading";

const Layout = ({ children }) => {
  const drawerState = useSelector((state) => state.root.drawer);
  const dispatch = useDispatch();

  const list = () => (
    <Box role="presentation" onClick={() => dispatch(setDrawerState(false))}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Navbar />
      <Drawer
        className="md:hidden"
        onClose={() => dispatch(setDrawerState(false))}
        open={drawerState}
      >
        {list()}
      </Drawer>
      <Container className="py-5">{children}</Container>
      <Loading />
    </div>
  );
};

export default Layout;
