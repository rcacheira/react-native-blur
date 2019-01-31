import React, { Component } from "react";
import PropTypes from "prop-types";

class VibrancyView extends Component {
  render() {
    return (
      <View
        {...this.props}
        style={[
          {
            backgroundColor: "transparent"
          },
          this.props.style
        ]}
      />
    );
  }
}

VibrancyView.propTypes = {
  blurType: PropTypes.string,
  blurAmount: PropTypes.number.isRequired
};

VibrancyView.defaultProps = {
  blurAmount: 10
};

module.exports = VibrancyView;
