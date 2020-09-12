import React, { useState, useEffect } from 'react';
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
const graphId = 'Dumbbell Curls';
const userId = 'BrokenAnkle';

    
const ProgressChart = (props) =>{
    const [updatedData, updateData] = useState([]);
    useEffect(() => {
        const getGraphData = async () => {
            const response = await fetch(`http://192.168.0.17:5000/linegraph-data/${graphId}/${userId}`,{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const promise = await response.json();
            var data = [];
            for (var i = 0; i < promise.length; i++){
                if (promise[i].hasOwnProperty("amount")){
                    data.push(promise[i]["amount"]);
                }
            }
            updateData(data);
        };
        getGraphData();
    }, []);
    
    
    return (
        <LineChart
            style={{  height: 180, width:deviceWidth*3/4, marginLeft:20}}
            data={updatedData}
            svg={{ stroke: '#61dafb'}}
            contentInset={{ top: 20, bottom: 20 ,left:20,right:30}}
        >
            <Grid />
        </LineChart>
    );
};

export default ProgressChart;