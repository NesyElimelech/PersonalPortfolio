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
        A Fullstack web developer | Specialized in MERN stack | A Graphic
        designer | Sports, Cooking and Dogs Lover.
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
