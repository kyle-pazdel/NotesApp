import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

export default class Home extends Component {
  componentDidMount() {
    this.props.actions.fetchNotes();
  }

  _renderNotes() {
    const {data} = this.props.notes;
    return <View>{data.map(note => this._renderNote(note))}</View>;
  }

  render() {
    return <ScrollView></ScrollView>;
  }
}
