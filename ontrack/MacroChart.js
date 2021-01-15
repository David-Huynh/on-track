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
import { PieChart } from 'react-native-svg-charts';
 
/**
 * Shows how many macros the user has left for the day
 * @author [David Huynh](https://github.com/David-Huynh)
 * 
 */
const MacroChart = (props) =>{
    //Define and set states of the macro chart
    const [labelWidth, setLabelWidth] = useState(0);

    const [proteins, setProteins] = useState(10);
    const [fats, setFats] = useState(10);
    const [carbs, setCarbs] = useState(10);

    const [selectedSlice,setSelectedSlice] = useState(['Macros', 0]);
    const [outerRad, setOuterRadi]= useState([100, 100, 100, 100, 100, 100]);
    
    const colors = ['#61dafb', '#adecfd', '#e7fb61', '#f1fab2', '#fb6189', '#fabbcb'];
    const keys = ['Carbs','Carbs left', 'Fats', 'Fats left', 'Protein', 'Protein left'];
    const values = [carbs, 50-carbs, fats, 50-fats, proteins, 50-proteins];
    
    const deviceWidth = Dimensions.get('window').width;

    const data = keys.map((key,index)=> {
        return {
            key,
            value: values[index],
            svg: {fill: colors[index]},
            onPress: () => {
                setSelectedSlice([key, values[index]]), 
                setOuterRadi( () => {
                    for (var i = 0; i< outerRad.length; i++){
                        outerRad[i] = 100;
                    }
                    outerRad[index] = 120;
                    return outerRad;
                })
            },
            arc: { outerRadius: outerRad[index] + '%', cornerRadius: 5}
        }
    })

    return (
        <PieChart 
            style={{ height: 250 }} 
            data={data} 
            outerRadius={'80%'}
            animate={true}
            animationDuration={500}
            innerRadius={'30%'}>
            <Text
                onLayout={({ nativeEvent: { layout: { width } } }) => {
                    setLabelWidth( width );
                }}
                style={{
                    marginTop:105,
                    position: 'absolute',
                    left: deviceWidth / 2 - labelWidth / 2,
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}
            >
                {`${selectedSlice[0]}\n${selectedSlice[1]}`} 
            </Text>
        </PieChart>
    );
  }
export default MacroChart;