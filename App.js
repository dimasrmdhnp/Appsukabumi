import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,
  Alert, Image, Button,
} from 'react-native';
import { createRootNavigator } from './router';

export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator();
    return <Layout />
  }
}