import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Column from "../Components/column";

export default class MainComponent extends React.Component {
  data = {};
  ref = {};
  componentWillMount() {
    for (let j = 0; j < this.props.noOfColumns; j++) {
      this.data["col" + j] = [];
    }
    if (this.props.data) {
      for (let i = 0; i < this.props.data.length; i++) {
        for (let k = 0; k < this.props.noOfColumns; k++) {
          if (i % this.props.noOfColumns === k) {
            this.data["col" + k].push(this.props.data[i]);
          }
        }
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        {Object.values(this.data).map((value, index) => {
          return (
            <Column
              assignRef={ref => {
                this.ref["col" + index] = ref;
              }}
              maxToRenderPerBatch={Math.round(
                this.props.maxToRenderPerBatch / this.props.noOfColumns
              )}
              spacingRight={
                index !== Object.values(this.data).length - 1
                  ? this.props.spacingRight
                  : 0
              }
              onEndReached={this.props.onEndReached}
              data={value}
              renderItem={this.props.renderItem}
              key={Math.random() * 10}
              onScroll={event => {
                const offsetY = event.nativeEvent.contentOffset.y;
                const refs = Object.values(this.ref);
                for (let i = 0; i < refs.length; i++) {
                  refs[i].scrollToOffset({ offset: offsetY, animated: false });
                }
              }}
            />
          );
        })}
      </View>
    );
  }
}
MainComponent.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  noOfColumns: PropTypes.number,
  spacingRight: PropTypes.number,
  maxToRenderPerBatch: PropTypes.number,
  renderItem: PropTypes.func,
  onEndReached: PropTypes.func
};
MainComponent.defaultProps = {
  data: [],
  renderItem: () => {},
  noOfColumns: 1,
  spacingRight: 0,
  maxToRenderPerBatch: 5,
  renderItem: () => {},
  onEndReached: () => {}
};
