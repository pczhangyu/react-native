/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @providesModule RNTesterList
 */
'use strict';

export type RNTesterExample = {
  key: string,
  module: Object,
};

const ComponentExamples: Array<RNTesterExample> = [
  {
    key: 'ActivityIndicatorExample',
    module: require('./ActivityIndicatorExample'),
  },
  {
    key: 'ButtonExample',
    module: require('./ButtonExample'),
  },
  {
    key: 'CheckBoxExample',
    module: require('./CheckBoxExample'),
  },
  {
    key: 'FlatListExample',
    module: require('./FlatListExample'),
  },
  {
    key: 'ImageExample',
    module: require('./ImageExample'),
  },
  {
    key: 'ListViewExample',
    module: require('./ListViewExample'),
  },
  {
    key: 'ListViewGridLayoutExample',
    module: require('./ListViewGridLayoutExample'),
  },
  {
    key: 'ListViewPagingExample',
    module: require('./ListViewPagingExample'),
  },
  {
    key: 'ModalExample',
    module: require('./ModalExample'),
  },
  {
    key: 'MultiColumnExample',
    module: require('./MultiColumnExample'),
  },
  {
    key: 'PickerExample',
    module: require('./PickerExample'),
  },
  {
    key: 'ProgressBarAndroidExample',
    module: require('./ProgressBarAndroidExample'),
  },
  {
    key: 'RefreshControlExample',
    module: require('./RefreshControlExample'),
  },
  {
    key: 'ScrollViewSimpleExample',
    module: require('./ScrollViewSimpleExample'),
  },
  {
    key: 'SectionListExample',
    module: require('./SectionListExample'),
  },
  {
    key: 'SliderExample',
    module: require('./SliderExample'),
  },
  {
    key: 'StatusBarExample',
    module: require('./StatusBarExample'),
  },
  {
    key: 'SwipeableListViewExample',
    module: require('./SwipeableListViewExample')
  },
  {
    key: 'SwitchExample',
    module: require('./SwitchExample'),
  },
  {
    key: 'TextExample',
    module: require('./TextExample'),
  },
  {
    key: 'TextInputExample',
    module: require('./TextInputExample'),
  },
  {
    key: 'ToolbarAndroidExample',
    module: require('./ToolbarAndroidExample'),
  },
  {
    key: 'TouchableExample',
    module: require('./TouchableExample'),
  },
  {
    key: 'ViewExample',
    module: require('./ViewExample'),
  },
  {
    key: 'ViewPagerAndroidExample',
    module: require('./ViewPagerAndroidExample'),
  },
  {
    key: 'WebViewExample',
    module: require('./WebViewExample'),
  },
];

const APIExamples: Array<RNTesterExample> = [
  {
    key: 'AccessibilityAndroidExample',
    module: require('./AccessibilityAndroidExample'),
  },
  {
    key: 'AlertExample',
    module: require('./AlertExample').AlertExample,
  },
  {
    key: 'AnimatedExample',
    module: require('./AnimatedExample'),
  },
  {
    key: 'AppStateExample',
    module: require('./AppStateExample'),
  },
  {
    key: 'BorderExample',
    module: require('./BorderExample'),
  },
  {
    key: 'CameraRollExample',
    module: require('./CameraRollExample'),
  },
  {
    key: 'ClipboardExample',
    module: require('./ClipboardExample'),
  },
  {
    key: 'DatePickerAndroidExample',
    module: require('./DatePickerAndroidExample'),
  },
  {
    key: 'GeolocationExample',
    module: require('./GeolocationExample'),
  },
  {
    key: 'ImageEditingExample',
    module: require('./ImageEditingExample'),
  },
  {
    key: 'LayoutEventsExample',
    module: require('./LayoutEventsExample'),
  },
  {
    key: 'LinkingExample',
    module: require('./LinkingExample'),
  },
  {
    key: 'LayoutAnimationExample',
    module: require('./LayoutAnimationExample'),
  },
  {
    key: 'LayoutExample',
    module: require('./LayoutExample'),
  },
  {
    key: 'NativeAnimationsExample',
    module: require('./NativeAnimationsExample'),
  },
  {
    key: 'NetInfoExample',
    module: require('./NetInfoExample'),
  },
  {
    key: 'OrientationChangeExample',
    module: require('./OrientationChangeExample'),
  },
  {
    key: 'PanResponderExample',
    module: require('./PanResponderExample'),
  },
  {
    key: 'PermissionsExampleAndroid',
    module: require('./PermissionsExampleAndroid'),
  },
  {
    key: 'PointerEventsExample',
    module: require('./PointerEventsExample'),
  },
  {
    key: 'RTLExample',
    module: require('./RTLExample'),
  },
  {
    key: 'ShareExample',
    module: require('./ShareExample'),
  },
  {
    key: 'TimePickerAndroidExample',
    module: require('./TimePickerAndroidExample'),
  },
  {
    key: 'TimerExample',
    module: require('./TimerExample'),
  },
  {
    key: 'ToastAndroidExample',
    module: require('./ToastAndroidExample'),
  },
  {
    key: 'TransformExample',
    module: require('./TransformExample'),
  },
  {
    key: 'VibrationExample',
    module: require('./VibrationExample'),
  },
  {
    key: 'WebSocketExample',
    module: require('./WebSocketExample'),
  },
  {
    key: 'XHRExample',
    module: require('./XHRExample'),
  },
];

const Modules = {};

APIExamples.concat(ComponentExamples).forEach(Example => {
  Modules[Example.key] = Example.module;
});

const RNTesterList = {
  APIExamples,
  ComponentExamples,
  Modules,
};

module.exports = RNTesterList;
