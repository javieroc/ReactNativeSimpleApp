import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Suggestion from '../components/Suggestion';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';

class SuggestionList extends Component {
  render() {
    return (
      <Layout title="Recomendadados para tí">
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={this.props.list}
          ListEmptyComponent={() => <Empty text="There isn't items." />}
          ItemSeparatorComponent={() => <Separator color="orange" />}
          renderItem={({ item }) => <Suggestion {...item} />}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
