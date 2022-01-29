import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';

const PeopleList = () => {
  return (
    <View style={styles.container}>
      <Text> People List</Text>
      <FlatList
        data={this.props.people}
        renderItem={item => <PeopleItem people={item.item} />}
        keyExtractor={item => item.id.toString()}
      />
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

export default connect(mapStateToProps)(PeopleList);
