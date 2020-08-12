import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Animated } from 'react-native';
import { G } from 'react-native-svg';

class _Viewer extends React.Component {
  render() {
    return (
      <G translateX={this.props.tx} translateY={this.props.ty} scale={this.props.ty / 100}>
        {this.props.children}
      </G>
    );
  }
}

export default Animated.createAnimatedComponent(_Viewer);
