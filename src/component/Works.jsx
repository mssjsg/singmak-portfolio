import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardGroup,
} from 'react-bootstrap';

import SectionHeader from './SectionHeader';

const ExpItem = ({ companyName, projects }) => (
  <div>
    <h3>
      {companyName}
    </h3>
    <CardGroup>
      {
        projects.map(({ projName, projDescription }) => (
          <Card>
            <Card.Body>
              <Card.Title>{projName}</Card.Title>
              <Card.Text>
                {projDescription}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </CardGroup>
  </div>
);

ExpItem.propTypes = {
  companyName: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    projName: PropTypes.string.isRequired,
    projDescription: PropTypes.string.isRequired,
  })).isRequired,
};

export default () => (
  <div id="works">
    <SectionHeader>Works</SectionHeader>
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Fleetship</Card.Title>
          <Card.Text>
            <p>Developed and maintained Android apps, frontend websites and the backend for internal projects</p>
            <p>In this job, I spent most of my time with Javascripts and the AWS services such as Lambda, Elasticsearch, etc</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>M800</Card.Title>
          <Card.Text>
            <ul>
              <li>
                Designed and implemented new features for an Android instant messaging / VOIP app
              </li>
              <li>
                Designed, documented and implemented new API for SDK products
                 (for internal uses and selling to customers) for the Android mobile platform.
              </li>
              <li>
                Wrote Unit tests with JUnit, Mockito and Robolectric for new features
                 and existing codebase
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Accedo</Card.Title>
          <Card.Text>
            <ul>
              <li>Developed mobile applications for Android devices and iOS devices</li>
              <li>Made the transition from Web TV development to mobile development</li>
              <li>Developed front-end web applications for TV and Set-top-box</li>
              <li>Provided support and maintenance of applications to clients</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </div>
);
