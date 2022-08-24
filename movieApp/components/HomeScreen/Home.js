import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import { fetchMovieDetails } from '../../Apis/api';
import Card from './Card';

const Home = ({ navigation }) => {

    const [movies, setMovies] = useState([]);
    // console.log(movies);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchPopularMovieList();
    }, []);

    const fetchPopularMovieList = async () => {
        const data = await fetchMovieDetails();
        setMovies(data.results)
    }

    return (
        <View>
            <TextInput
              placeholder="Search your movies here"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              left={<TextInput.Icon name="magnify" />}
            />
            <Text style={styles.headingTitle}>Most Popular</Text>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    {movies.length > 0 ? (
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                                {movies.map((movie) =>
                                    <Card key={movie.id} {...movie} />)}
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
