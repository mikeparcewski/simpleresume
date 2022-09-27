import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Highlight } from "../Objects/SimpleResume";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface SectionData {
  highlights: Highlight[];
  compId: string;
  separator?: string;
  iconName: string;
  iconPrefix: string;
  header: string;
}

const HomeSection = (data: SectionData) => {
  return (
    <>
      <List sx={{}}>
        <ListSubheader>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {data.header}
          </Typography>
        </ListSubheader>

        {data.highlights.map((highlight: Highlight, index: number) => (
          <ListItem
            disableGutters={true}
            key={data.compId + "-" + index}
            sx={{
              alignItems: "flex-start",
            }}
          >
            <ListItemIcon
              key={data.compId + "lii" + index}
              sx={{
                pt: 1,
                pr: 1,
                justifyContent: "right",
              }}
            >
              <FontAwesomeIcon key={data.compId + "icon" + index} icon={[data.iconPrefix as IconPrefix, data.iconName as IconName]} />
            </ListItemIcon>
            <ListItemText key={data.compId + "lit" + index}>
              <strong>
                {highlight.name} {data.separator}
              </strong>{" "}
              {highlight.summary}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HomeSection;
