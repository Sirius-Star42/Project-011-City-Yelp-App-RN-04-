import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const RestaurantsItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onSelect}>
            <Image
                style={styles.image}
                source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/f7/9d/bc/kiyi-restaurant-tarabya.jpg'}}
            />
            <Text style={styles.name}>{props.restaurant.name}</Text>
        </TouchableOpacity>
    )
}

export {RestaurantsItem};

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#ff826c',
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