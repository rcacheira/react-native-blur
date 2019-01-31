import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ViewPropTypes } from "react-native";

class BlurView extends Component {
  render() {
    return (
      <View
        ref={e => (this._root = e)}
        {...this.props}
        style={[{ backgroundColor: "transparent" }, this.props.style]}
      />
    );
  }
}

BlurView.propTypes = {
  ...(ViewPropTypes || View.propTypes),
  blurType: PropTypes.oneOf([
    "dark",
    "light",
    "xlight",
    "prominent",
    "regular",
    "extraDark"
  ]),
  blurAmount: PropTypes.number
};

BlurView.defaultProps = {
  blurType: "dark",
  blurAmount: 10
};

module.exports = BlurView;
