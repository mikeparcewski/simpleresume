import React from "react";
import SimpleHeader, { SimpleHeaderParams } from "./SimpleHeader";
import { SimpleResume, Skill } from "../Objects/SimpleResume";
import WordCloud from "react-d3-cloud";
import { Box } from "@mui/system";

interface CloudSkill {
  text: string;
  value: number;
}

const Skills = (props: SimpleResume) => {
  const headerParams: Partial<SimpleHeaderParams> = {
    title: props.getProfilePageTitle && props.getProfilePageTitle("Skills"),
    conf: props
  };

  const words: CloudSkill[] = (props.resume?.skills ?? ([] as Skill[])).map((skill: Skill) => {
    return { text: skill.name.toLocaleLowerCase(), value: skill.level };
  });

  const [width] = React.useState(window.innerWidth * 0.78);
  const [height] = React.useState(window.innerHeight * 0.68);
  const fontSize = (word: CloudSkill) => {
    const size = word.value <= 40 ? word.value * 0.5 : word.value * 0.6;
    return size;
  };
  const rotate = (word: CloudSkill) => (word.value % 90) - 45;

  return (
    <>
      <SimpleHeader {...headerParams} />
      <Box padding={{ sm: 0, md: 4 }}>
        <WordCloud spiral="rectangular" width={width} height={height} data={words} fontWeight={500} fontSize={fontSize} rotate={rotate} padding={0} font="Montserrat" />
      </Box>
    </>
  );
};

export default Skills;
