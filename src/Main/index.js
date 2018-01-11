import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

export default class MainComponent extends React.Component {
  data = {};
  ref = {};
  componentWillMount() {
    for (let j = 0; j < this.props.noOfColumns; j++) {
      this.data['col' + j] = [];
    }
    if (this.props.data) {
      for (let i = 0; i < this.props.data.length; i++) {
        for (let k = 0; k < this.props.noOfColumns; k++) {
          if (i % this.props.noOfColumns === k) {
            this.data['col' + k].push(this.props.data[i]);
          }
        }
      }
    }
  }
  render() {
    return (
      <ScrollView
        onScroll={e => {
          let paddingToBottom = 10;
          paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          if (
            e.nativeEvent.contentOffset.y >=
            e.nativeEvent.contentSize.height - paddingToBottom
          ) {
            this.props.onEndReached();
          }
        }}
        style={{ flex: 1, flexDirection: 'row', width: '100%' }}
        {...this.props}
      >
        {Object.values(this.data).map((value, index) => {
          return (
            <View style={{ flex: 1 }}>
              {value.map((value, index) => {
                return this.props.renderItem(value);
              })}
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
MainComponent.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  noOfColumns: PropTypes.number,
  renderItem: PropTypes.func,
  onEndReached: PropTypes.func
};
MainComponent.defaultProps = {
  data: [],
  renderItem: () => {},
  noOfColumns: 1,
  renderItem: () => {},
  onEndReached: () => {}
};
