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
import { LineChart, Grid } from 'react-native-svg-charts';
const deviceWidth = Dimensions.get('window').width;
const ProgressChart = (props) =>{
    const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];
    return (
        <LineChart
            style={{  height: 180, width:deviceWidth*3/4, marginLeft:20}}
            data={data}
            svg={{ stroke: '#61dafb'}}
            contentInset={{ top: 20, bottom: 20 ,left:20,right:30}}
        >
            <Grid />
        </LineChart>
    );

}

export default ProgressChart;