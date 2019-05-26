import React from 'react';

import { Container } from 'react-bootstrap';
import SelfIntro from './SelfIntro';
import Works from './Works';
import PersonalProjects from './PersonalProjects';
import Footer from './Footer';

export default () => (
  <div className="">
    <SelfIntro />
    <Container>
      <Works />
      <PersonalProjects />
    </Container>
    <Footer />
  </div>
);
