import React, { useRef, useCallback, useState } from 'react';
import { Button, Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';
import { Svg, Rect, Circle } from 'react-native-svg';

import Viewer from './components/Viewer';
import Scatter from './components/Scatter';

export default function App() {
  const ty = useRef(new Animated.Value(100)).current;
  const [toggle, setToggle] = useState(true);

  const handleForward = useCallback(() => {
    Animated.timing(ty, {
      toValue: 500,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [ty]);

  const handleBackward = useCallback(() => {
    Animated.timing(ty, {
      toValue: 100,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [ty]);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Svg width={400} height="100%">
          <Rect fill="white" width="100%" height="100%" />
          <Viewer ty={ty}>
            <Scatter effect={toggle} />
          </Viewer>
        </Svg>
      </View>
      <View style={styles.row}>
        <Button title="Forward" onPress={handleForward} />
        <Button title="Backward" onPress={handleBackward} />
        <Button title={`Effect:${toggle ? "on" : "off"}`} onPress={()=>setToggle(p => !p)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 50,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inner: {
    flex: 1,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
});
