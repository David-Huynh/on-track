import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions 
  } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
const deviceWidth = Dimensions.get('window').width;
const WorkoutScreen = () => {
    const [labelWidth, setLabelWidth] = useState(0);
    return(
        <View style={{
            position: 'absolute',
            top: '50%'
            }}
        >
            <ProgressCircle style={{ height: 200,}} progress={0.7} progressColor={'rgb(134, 65, 244)'} >
                <Text
                    onLayout={({ nativeEvent: { layout: { width } } }) => {
                        setLabelWidth( width );
                    }}
                    style={{
                        position: 'absolute',
                        left: deviceWidth / 2 - labelWidth / 2,
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    Hi
                </Text>
            </ProgressCircle>
        </View>
       
    );
}

export default WorkoutScreen;