import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Appbar} from 'react-native-paper';
import Card from '../HomeScreen/Card';
import { Feather } from '@expo/vector-icons';

const Details = ({route, navigation}) => {
    const {movieId, otherParams} = route.params;
    console.log("movie id is", movieId);
    console.log("Other params", otherParams);
    // currentPosterPath = otherParams.poster_path

    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <View> 
            <View style={styles.topBarStyle}>
                <Text style={styles.titleStyle}>{otherParams.original_title}</Text>
            </View>
            <View style={{padding: '5%'}}>
                <View style={styles.movieDetailStyle}>

                    <Card key={movieId} {...otherParams} />

                    <View style={{padding: 10}}>
                        <Text style={styles.releaseDateTextStyle}>{otherParams.release_date}</Text>
                        <Text style={styles.popularityTextStyle}>{otherParams.popularity}</Text>
                        <View style={{flex: 1,justifyContent: 'flex-end'}}>
                            <Text style={styles.averageVoteTextStyle}>{otherParams.vote_average}/10</Text>
                        
                            <TouchableOpacity style={{ backgroundColor: '#5D5450', height: 50, padding: '10%', justifyContent: 'center'}}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Favourite</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={styles.overviewStyle}>{otherParams.overview}</Text>
                
                <Text style={{paddingTop: '10%', color: '#5D5450', fontWeight: '700' }}>TRAILERS</Text>
                <Separator />
                <TouchableOpacity style={styles.trailerBtnStyle}>
                        <Feather name="play-circle" size={24} color="#5D5450" />
                        <Text style={{ color: '#5D5450'}}>Play trailer 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.trailerBtnStyle}>
                        <Feather name="play-circle" size={24} color="#5D5450" />
                        <Text style={{ color: '#5D5450'}}>Play trailer 2</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    topBarStyle: {
        height: '10%', 
        backgroundColor: '#5D5450', 
        justifyContent: 'center',
        padding: '5%'
    },
    titleStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '900'
    }, 
    movieDetailStyle: {
        flexDirection: 'row', 
        // padding: '5%'
    },
    releaseDateTextStyle: {
        fontSize: 20
    },
    popularityTextStyle: {
        fontSize: 15,
        fontStyle: 'italic',
    },
    averageVoteTextStyle: {
        fontSize: 15,
        fontWeight: '500',
        paddingBottom: 30
    },
    overviewStyle: {
        paddingTop: 10
    },
    trailerBtnStyle: {
        flexDirection: 'row',
        backgroundColor: '#E1E2F5', 
        height: 55, 
        justifyContent: 'center',
        margin: 5, 
        alignItems: 'center',
    },
    
    separator: {
        //  marginVertical: 8,
        paddingVertical: '2%',
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,

      },
});

export default Details;
