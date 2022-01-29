import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';

const PeopleItem = () => {
  return (
    <View>
      <Text>People Item</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    people: state.people,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps)(PeopleItem);
