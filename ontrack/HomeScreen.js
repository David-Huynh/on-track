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

/**
 * The default main screen of the app
 * @author [David Huynh](https://github.com/David-Huynh)
 * 
 */
const HomeScreen = () => {
    return(
        <ScrollView 
            style={styles.scrollView} 
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            bounces={false}
        >
            {/*
                Displays the pie chart at the beginning 
                of home screen
            */}
            <View style={{flex: 1, backgroundColor:'#fafafa'}}>
                <MacroChart></MacroChart>
            </View>
            {/*
                Displays the line charts at   
                home screen
            */}
            <View style={{marginTop:10, flex: 1, backgroundColor:'#fafafa', paddingBottom:10}}>
                <View style={styles.titleContainer}>
                    <Text style={styles.sectionTitle}>Your progress</Text>
                </View>
                <ScrollView 
                    horizontal={true} 
                    bounces={false}
                    alwaysBounceHorizontal={false}
                    directionalLockEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    style={{flex:1,flexDirection:'row'}}
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
        backgroundColor: '#c9ccd1',
        
    },
    titleContainer: {
        marginTop: 20,
        marginLeft: 20,
    },
    sectionTitle: {
        fontFamily:'Impact',
        
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2a2a2a',
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