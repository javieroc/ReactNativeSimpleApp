import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList />
      </Home>
    );
  }
}
