import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
const IMAGE_API="https://image.tmdb.org/t/p/w185/";

export default function Card({ titel, poster_path, vote_average, release_date, overviewposter_path }) {

    const ScreenWidth = Dimensions.get("window").width;

    return (
        <View style={{justifyContent: 'center'}}>
                <Image
                    style={{
                        width: (ScreenWidth - 40) / 2,
                        height: 200,
                        // margin: 10,
                        borderRadius: 5,
                        shadowColor: "#051934",
                        marginVertical: 5,
                    }}
                    source={{ uri: IMAGE_API + poster_path }}
                />
        </View>
    );
}