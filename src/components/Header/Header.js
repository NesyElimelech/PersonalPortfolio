import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          href=''
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <DiCssdeck size='3rem' />
          <Span>Nesy's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/NesyElimelech' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://linkedin.com/in/nesy-elimelech'
        target='_blank'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://api.whatsapp.com/send?phone=972523359995&text=Hello%20Nesy%20'
        target='_blank'
      >
        <AiOutlineWhatsApp size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/nesye30/' target='_blank'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
