import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import SectionHeader from './SectionHeader';

export default () => (
  <Jumbotron id="intro">
    <SectionHeader>Self Intro</SectionHeader>
    <p>
      I am Sing, a senior software engineer with 10 years experience in the industry
    </p>
    <SectionHeader>My skills</SectionHeader>
    <p>Android, node js, aws lambda, reactjs</p>
  </Jumbotron>
);
