import React, { Component } from 'react';
import { connect } from 'redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
