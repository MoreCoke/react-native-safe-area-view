import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

function SafeAreaView(props) {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = {};
  const { 
    disableTopSafeArea,
    disableBottomSafeArea,
    disableSidesSafeArea,
    children,
    style
  } = props;

  if (!disableTopSafeArea) {
    safeAreaStyle.paddingTop = insets.top;
  }

  if (!disableBottomSafeArea) {
    safeAreaStyle.paddingBottom = insets.bottom;
  }

  if (!disableSidesSafeArea) {
    safeAreaStyle.paddingLeft = insets.left;
    safeAreaStyle.paddingRight = insets.right;
  }

  const merged = Array.isArray(style)
    ? [...style, safeAreaStyle]
    : [style, safeAreaStyle];

  return (
    <View style={merged}>
      {children}
    </View>
  );
}

SafeAreaView.propTypes = {
  disableTopSafeArea: PropTypes.bool,
  disableBottomSafeArea: PropTypes.bool,
  disableSidesSafeArea: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

SafeAreaView.defaultProps = {
  disableTopSafeArea: false,
  disableBottomSafeArea: false,
  disableSidesSafeArea: false,
  style: undefined,
  children: undefined
};

export default SafeAreaView;
