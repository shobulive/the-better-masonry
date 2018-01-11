import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class MainComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.value.map((item, index) => {
          return this.props.renderItem(item);
        })}
      </View>
    );
  }
}
MainComponent.propTypes = {
  value: PropTypes.array,
  renderItem: PropTypes.func
};
MainComponent.defaultProps = {
  value: [],
  renderItem: () => {}
};
