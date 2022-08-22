import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Button title='Navigate to Details screen'
            onPress={() => navigation.navigate("detail")}
            ></Button>
        </View>
    );
}

export default Home;
