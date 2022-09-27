import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Profile, SimpleResume } from "../Objects/SimpleResume";
import SiteTheme from "./SiteTheme";
import * as Config from "../Components/SiteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@mui/material";
import ReactRoundedImage from "react-rounded-image";

type InputProps = {
  theme: typeof SiteTheme;
  open: boolean;
};

const drawerWidth = "25vmax";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<InputProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Header(config: SimpleResume) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const path = window.location.pathname;
  const homePages: string[] = ["/", ""];
  const isHomepage = homePages.some((x) => x.includes(path));

  let avatars: typeof require[] = [require("../Customize/avatar.png"), require("../Customize/avatar-old.png")];
  let myAvatar = avatars[Math.round(Math.random())];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} theme={theme}>
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box
              sx={{
                display: isHomepage ? "none" : { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                paddingRight: ".3vmax",
              }}
            >
              <ReactRoundedImage image={myAvatar} alt={config.siteTitle} roundedSize="13" imageWidth="50" imageHeight="50"></ReactRoundedImage>
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                href="/"
                sx={{
                  fontSize: "2.3vmax",
                  fontWeight: "700",
                  color: "primary.contrastText",
                  textTransform: "uppercase",
                }}
              >
                {config.resume?.basics.name}
              </Button>
            </Box>
          </Box>

          {config.resume?.basics.profiles?.map((profile: Profile) => (
            <Button
              key={profile.network}
              href={profile.url}
              variant="text"
              sx={{
                mx: Config.isBrand(config, profile) ? 0 : 1,
                twdisplay: "block",
                color: "primary.contrastText",
                fontSize: "1.3vmax",
                fontWeight: "800",
                display: { xs: "none", md: "inline" },
              }}
            >
              {Config.isBrand(config, profile) ? (
                <FontAwesomeIcon
                  icon={[
                    config && config.getIconPrefix ? config.getIconPrefix(profile.network) : (Config.DEF_ICONDETAIL?.clz as IconPrefix),
                    config && config.getIconName ? config.getIconName(profile.network) : (Config.DEF_ICONDETAIL?.name as IconName),
                  ]}
                />
              ) : (
                profile.network
              )}
            </Button>
          ))}

          <Box sx={{ display: { xs: "inline", md: "none" } }}>
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} sx={{ ...(open && { display: "none" }) }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <DrawerHeader />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem component="a" key="home" href="/">
            <ListItemIcon>
              <FontAwesomeIcon icon={["fas", "home"]} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {config.resume?.basics.profiles?.map((profile: Profile) => (
            <ListItem component="a" key={profile.network} href={profile.url}>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={[
                    config && config.getIconPrefix ? config.getIconPrefix(profile.network) : (Config.DEF_ICONDETAIL?.clz as IconPrefix),
                    config && config.getIconName ? config.getIconName(profile.network) : (Config.DEF_ICONDETAIL?.name as IconName),
                  ]}
                />
              </ListItemIcon>
              <ListItemText primary={profile.network} />
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            display: isHomepage ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "1vmax",
          }}
        >
          <ReactRoundedImage image={myAvatar} alt={config.siteTitle} roundedSize="0" imageWidth="50" imageHeight="50"></ReactRoundedImage>
        </Box>
      </Drawer>
    </Box>
  );
}
