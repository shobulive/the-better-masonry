import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class Column extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.value.map((item, index) => {
          return this.props.renderItem(item, index, (this.props.index));
        })}
      </View>
    );
  }
}
Column.propTypes = {
  value: PropTypes.array,
  renderItem: PropTypes.func
};
Column.defaultProps = {
  value: [],
  renderItem: () => { }
};
