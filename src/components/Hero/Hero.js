import React from 'react';
import { saveAs } from 'file-saver';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section
    // @ts-ignore
    row
    nopadding
  >
    <LeftSection>
      <SectionTitle
        // @ts-ignore
        main
        center
      >
        Hi, I'm Nesy <br />
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A web developer, Specialized in MERN stack and a graphic designs.
      </SectionText>
      <Button
        onClick={() =>
          saveAs('/assets/NesyElimelechResume.pdf', 'NesyElimelechResume.pdf')
        }
      >
        Download CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
