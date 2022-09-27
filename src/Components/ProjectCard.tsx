import * as React from "react";
import { Project, SimpleResume } from "../Objects/SimpleResume";
import { Typography, Button, Card, CardActions, CardContent, CardHeader, Avatar, CardMedia, ListItemText, List, ListItem, IconButton, ListItemIcon, Collapse, Box } from "@mui/material";
import { ArrowForward, ExpandMore, LabelImportant } from "@mui/icons-material";
import * as Config from "../Components/SiteConfig";

import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

const CardContentNoYPadding = styled(CardContent)(`
  padding-top: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

type ProjectCardParams = {
  project: Project;
  resume: SimpleResume;
};

const ProjectCard = (params: ProjectCardParams) => {
  const project = params.project;
  const resume = params.resume;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: "100%", mr: "1vmax" }}>
      <CardHeader
        avatar={
          <Avatar aria-label={project.type} color="primary">
            <FontAwesomeIcon
              color="primary.contrastText"
              icon={[
                resume && resume.getIconPrefix ? resume.getIconPrefix(project.type) : (Config.DEF_ICONDETAIL.clz as IconPrefix),
                resume && resume.getIconName ? resume.getIconName(project.type) : (Config.DEF_ICONDETAIL.name as IconName),
              ]}
            />
          </Avatar>
        }
        title={project.name}
        subheader={project.type}
      />

      {project.img && <CardMedia component="img" height="200" image={project.img} />}

      <CardContent>
        <Typography variant="body2">{project.description}</Typography>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContentNoYPadding>
          {project.roles && (
            <Box sx={{ fontSize: 14, mb: ".9rem" }} color="text.secondary">
              <Typography sx={{ fontSize: ".85rem", fontWeight: "fontWeightBold" }}>Role(s): </Typography>
              {project.roles.join(", ")}
            </Box>
          )}

          {project.keywords && (
            <Box sx={{ fontSize: 14, mb: ".9rem" }} color="text.secondary">
              <Typography sx={{ my: ".5rem", fontSize: ".85rem", fontWeight: "fontWeightBold" }}>Keyword(s): </Typography>
              {project.keywords.join(", ")}
            </Box>
          )}

          {project.highlights && (
            <List
              subheader={
                <Typography
                  sx={{
                    mt: ".5rem",
                    fontSize: 14,
                    fontWeight: "fontWeightBold",
                    pb: 0,
                  }}
                  color="text.secondary"
                >
                  Highlight(s):
                </Typography>
              }
            >
              {project.highlights.map((highlight: string) => (
                <ListItem key={highlight}>
                  <ListItemIcon sx={{ m: 0, minWidth: 30 }}>
                    <LabelImportant />
                  </ListItemIcon>
                  <ListItemText secondary={highlight} />
                </ListItem>
              ))}
            </List>
          )}
        </CardContentNoYPadding>
      </Collapse>

      <CardActions
        sx={{
          pt: 0,
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <IconButton
            onClick={handleExpandClick}
            aria-label="Expand/Collapse Details"
            sx={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <ExpandMore />
          </IconButton>
        </Box>

        {project.url && (
          <Button size="small" variant="contained" endIcon={<ArrowForward />} href={project.url}>
            View Project
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
