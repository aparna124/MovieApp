import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { fetchMovieDetails } from '../../Apis/api';
import Card from './Card';
import { getMovies } from '../../Apis/api';

const Home = ({ navigation }) => {

    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchPopularMovieList();
    }, []);

    const fetchPopularMovieList = async () => {
        const data = await fetchMovieDetails();
        setMovies(data.results)
    }

    const searchMovies = async () => {
        // const data = await getMovies(searchText);
        // setMovies(data.results)
    }

    return (
        <View>
            <TextInput
                placeholder="Search your movies here"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                left={<TextInput.Icon name="magnify" />}
                onSubmitEditing={searchMovies}
            />
            <Text style={styles.headingTitle}>Most Popular</Text>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    {movies.length > 0 ? (
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                {movies.map((movie, index) =>
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => navigation.navigate("detail", { movieId: movie.id, otherParams: { ...movie } })}>
                                        <Card key={movie.id} {...movie} />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    ) : (
                        <Text>No Movies Found</Text>
                    )}
                </View>
            </ScrollView>



        </View>
    );
}

const styles = StyleSheet.create({
    headingTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        padding: 10,
    },
});

export default Home;
