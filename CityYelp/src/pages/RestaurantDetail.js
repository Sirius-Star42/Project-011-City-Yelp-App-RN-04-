import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, Button, Linking } from 'react-native';


const RestaurantDetail = (props) => {
    const { selectedRestaurant } = props.route.params;

    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>
                <Image
                    style={styles.image}
                    source={{uri: selectedRestaurant.image_url}}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetail};