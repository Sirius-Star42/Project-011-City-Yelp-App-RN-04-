import React, {useCallback} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';



const RestaurantDetail = (props) => {
    const { selectedRestaurant } = props.route.params;




    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>
                <Image
                    style={styles.image}
                    source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/12/bc/78/03/velika-sala-restorana.jpg'}}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
                </View>
                <TouchableOpacity style={styles.button} 
                    onPress={() => Linking.openURL(selectedRestaurant.mobile_reserve_url) }>
                    <Text style={{color: 'white', fontWeight: '300'}}>BOOKING</Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetail};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 5 },
    name: { fontWeight: '300', fontSize: 30 },
    image: { height: Dimensions.get('window').height / 3 },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: { color: 'white', fontWeight: 'bold' },
    button: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#29b6f6',
        alignSelf: "center",
        padding: 10,
    }
})


