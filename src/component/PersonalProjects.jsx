import React from 'react';

import {
  Card,
  CardDeck,
} from 'react-bootstrap';

import SectionHeader from './SectionHeader';

export default () => (
  <div id="personal-projects">
    <SectionHeader>Personal Projects</SectionHeader>
    <CardDeck>
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
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);
