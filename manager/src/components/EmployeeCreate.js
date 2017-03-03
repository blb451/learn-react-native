import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
// import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import * as actions from './../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane Doe"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>

        <CardSection></CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
