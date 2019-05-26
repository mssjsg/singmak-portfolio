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
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>M800</Card.Title>
          <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
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
