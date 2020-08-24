import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions 
  } from 'react-native';
import MacroChart from './MacroChart.js';
import ProgressChart from './ProgressChart.js';


const HomeScreen = () => {
    return(
        <ScrollView 
            style={styles.scrollView} 
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            bounces={false}>

            {/*
                Displays the pie chart at the beginning 
                of home screen
            */}
            <View style={{flex: 1}}>
                <MacroChart></MacroChart>
            </View>
            {/*
                Displays the line charts at   
                of home screen
            */}
            <View >
                <View style={styles.titleContainer}>
                    <Text style={styles.sectionTitle}>Your progress</Text>
                </View>
                <ScrollView 
                    horizontal={true} 
                    bounces={false}
                    alwaysBounceHorizontal={false}
                    directionalLockEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    style={{flexDirection:'row'}}
                >
                    <ProgressChart></ProgressChart>
                </ScrollView>
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        
    },
    titleContainer: {
        marginTop: 32,
        marginLeft: 20,
    },
    sectionTitle: {
        flex:1,
        fontFamily:'Impact',
        
        
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2a2a2a',
    },
    lineChart: {
        flex: 1,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    highlight: {
      fontWeight: '700',
    },
  });
export default HomeScreen;