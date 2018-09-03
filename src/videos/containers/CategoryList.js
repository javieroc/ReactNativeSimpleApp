import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Layout from '../components/CategoryListLayout';
import Category from '../components/Category';
import Empty from '../components/Empty';
import Separator from '../components/HorizontalSeparator';

class CategoryList extends Component {
  render() {
    return (
      <Layout title="Lista de Categorías">
        <FlatList
          horizontal
          keyExtractor={item => item.id.toString()}
          data={this.props.list}
          ListEmptyComponent={() => <Empty text="There isn't items." />}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => <Category {...item} />}
        />
      </Layout>
    );
  }
}

export default CategoryList;
