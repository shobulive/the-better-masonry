import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import Column from '../Component';
export default class MainComponent extends React.Component {
  data = {};
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
  componentWillUpdate() {
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
          this.props.setOffset(e.nativeEvent.contentOffset.y);
          let paddingToBottom = 0;
          paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          if (
            e.nativeEvent.contentOffset.y ==
            e.nativeEvent.contentSize.height - paddingToBottom
          ) {
            this.props.onEndReached();
          }
        }}
        scrollEventThrottle={16}
        {...this.props}
        style={[{ flex: 1 }, this.props.style]}
      >
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {Object.values(this.data).map((value, index) => {
            return (
              <View
                style={{
                  flex: 1
                }}
                key={JSON.stringify(value)}
              >
                <Column
                  key={JSON.stringify(value) + index}
                  renderItem={this.props.renderItem}
                  value={value}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
MainComponent.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  noOfColumns: PropTypes.number,
  renderItem: PropTypes.func,
  onEndReached: PropTypes.func,
  setOffset: PropTypes.func,
  style: PropTypes.any
};
MainComponent.defaultProps = {
  data: [],
  renderItem: () => {},
  noOfColumns: 1,
  renderItem: () => {},
  onEndReached: () => {},
  setOffset: () => {},
  style: {}
};
