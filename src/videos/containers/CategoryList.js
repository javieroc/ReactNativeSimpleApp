import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Suggestion from '../components/Suggestion';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';


class CategoryList extends Component {
  render() {
    return (
      <FlatList
        horizontal
        keyExtractor={item => item.id.toString()}
        data={this.props.list}
        ListEmptyComponent={() => <Empty text="There isn't items." />}
        ItemSeparatorComponent={() => <Separator color="orange" />}
        renderItem={({ item }) => <Suggestion {...item} />}
      />
    );
  }
}

export default CategoryList;
