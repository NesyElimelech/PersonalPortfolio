import React from 'react';

import {
  BlogCard,
  CardInfo,
  // @ts-ignore
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  // @ts-ignore
  Tag,
  // @ts-ignore
  TagList,
  TitleContent,
  // @ts-ignore
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section
    // @ts-ignore
    nopadding
    id="projects"
  >
    <SectionDivider />
    <SectionTitle
      // @ts-ignore
      main
    >
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(
        // @ts-ignore
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <div>
              <HeaderThree title={title}></HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
            </div>
            <br />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">
                Demo
              </ExternalLinks>
              <ExternalLinks href={source} target="_blank">
                Source Code
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
