import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Card from '../HomeScreen/Card';
import { Feather } from '@expo/vector-icons';

const Details = ({ route, navigation }) => {
    const { movieId, otherParams } = route.params;

    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <View>
            <View style={styles.topBarStyle}>
                <Text style={styles.titleStyle}>{otherParams.original_title}</Text>
            </View>
            <View style={{ padding: 20 }}>
                <View style={styles.movieDetailStyle}>

                    <Card key={movieId} {...otherParams} />

                    <View style={{ padding: 10 }}>
                        <Text style={styles.releaseDateTextStyle}>{otherParams.release_date.slice(0,4)}</Text>
                        <Text style={styles.popularityTextStyle}>{otherParams.popularity}</Text>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text style={styles.averageVoteTextStyle}>{otherParams.vote_average}/10</Text>

                            <TouchableOpacity style={{ backgroundColor: '#5D5450', height: 50, padding: '10%', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>Add to Favourite</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={styles.overviewStyle}>{otherParams.overview}</Text>

                <Text style={{ paddingTop: '10%', color: '#5D5450', fontWeight: '700' }}>TRAILERS</Text>
                <Separator />
                <TouchableOpacity style={styles.trailerBtnStyle}>
                    <Feather name="play-circle" size={24} color="#5D5450" />
                    <Text style={{ color: '#5D5450' }}>Play trailer 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.trailerBtnStyle}>
                    <Feather name="play-circle" size={24} color="#5D5450" />
                    <Text style={{ color: '#5D5450' }}>Play trailer 2</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    topBarStyle: {
        height: 60,
        backgroundColor: '#5D5450',
        justifyContent: 'center',
        paddingLeft: 20
    },
    titleStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: '700'
    },
    movieDetailStyle: {
        flexDirection: 'row',
    },
    releaseDateTextStyle: {
        fontSize: 25
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
        paddingVertical: '2%',
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
});

export default Details;
