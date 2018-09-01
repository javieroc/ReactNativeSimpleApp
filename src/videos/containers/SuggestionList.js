import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';

class SuggestionList extends Component {
  render() {
    const list = [
      {
        title: 'Advengers',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2',
      },
    ];
    return (
      <Layout title="Recomendadados para tí">
        <FlatList
          data={list}
          ListEmptyComponent={() => <Empty text="There isn't items." />}
          ItemSeparatorComponent={() => <Separator color="orange" />}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
