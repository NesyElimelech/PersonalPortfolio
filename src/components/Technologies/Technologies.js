import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiAdobephotoshop, SiFigma } from 'react-icons/si';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've experienced a rage of technologies in the web development world. From
      Back-End to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, JavaScript, CSS frameworks.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Databases and Authentications
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFigma size='2rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools like XD and Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobephotoshop size='2rem' />
        <ListContainer>
          <ListTitle>Graphics</ListTitle>
          <ListParagraph>
            Adobe Photoshop, Premier and a little bit of After Effects.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <br />
    <SectionDivider />
    <br />
    <br />
  </Section>
);

export default Technologies;
