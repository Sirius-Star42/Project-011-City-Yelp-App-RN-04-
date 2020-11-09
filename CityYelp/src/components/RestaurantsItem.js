import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const RestaurantsItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>
            <Image
                style={styles.image}
                source={{uri: props.restaurants.image_url}}
            />
            <Text style={styles.name}>{props.restaurants.name}</Text>
        </TouchableOpacity>
    )
}

export {RestaurantsItem};

const styles=StyleSheet.create({
    container: {
        backgroundColor: 'aqua',
        padding: 10,
        margin: 5,
        borderRadius: 5,

    },
    image: {
        height:Dimensions.get('window').height /3
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    }
})