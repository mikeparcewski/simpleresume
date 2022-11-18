import React, { useEffect, useRef } from "react";
import SimpleHeader, { SimpleHeaderParams } from "./SimpleHeader";
import { Box } from "@mui/material";
import { SimpleResume, Skill } from "../Objects/SimpleResume";
import WordCloud from "wordcloud";

const Skills = (props: SimpleResume) => {
  const headerParams: Partial<SimpleHeaderParams> = {
    title: props.getProfilePageTitle && props.getProfilePageTitle("Skills"),
    conf: props
  };

  const [width] = React.useState(window.innerWidth * 0.78);
  const [height] = React.useState(window.innerHeight * 0.68);

  const canvasRef = useRef(null);

  useEffect(() => {
    WordCloud(canvasRef.current, {
      list: Array.from(props.resume?.skills ?? ([] as Skill[]), (skill: Skill) => [skill.name, skill.level]),
      shape: "circle",
      color: "random-dark",
      minRotation: 0,
      maxRotation: 0,
      shrinkToFit: true,
      minSize: 2
    });
  }, [props.resume]);

  return (
    <>
      <SimpleHeader {...headerParams} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: "2vmax"
        }}
      >
        <canvas ref={canvasRef} width={width} height={height} />
      </Box>
    </>
  );
};
export default Skills;
