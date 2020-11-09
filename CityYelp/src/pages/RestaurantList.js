import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList } from 'react-native';

import { RestaurantsItem, SearchBar } from '../components';

let originalList = [];

const RestaurantList = (props) => {
    const [restaurantList, setRestaurantList] = useState([]);
    const {selectedCity } = props.route.params;

    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants', 
            {
                params : {
                    city : selectedCity
                }
            })
        .then(response => {
            setRestaurantList(response.data.restaurants);
            originalList = [...response.data.restaurants];
            })
            
    }
    useEffect(() => {
        fetchRestaurants();
    }, [])

    const renderRestaurants = ({item}) => {
        return (
            <RestaurantsItem
                restaurant={item}
                onSelect={() => props.navigation.navigate ('Details', {selectedRestaurant: item})
                }
            />
        )
    }

    function searchRestaurant (search) {
        const filteredRestaurants = originalList.filter(restaurant => {
            const text = search.toUpperCase();
            const restaurantName = restaurant.name.toUpperCase();
            return restaurantName.indexOf(text) > -1;
        })
        setRestaurantList(filteredRestaurants);
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <View>
                    <Text style={{margin: 5, fontWeight: "bold", fontSize: 30 }}>{selectedCity}</Text>
                    <SearchBar
                        placeholder = "Search a restaurant..."
                        onSearch = {(value) => searchRestaurant(value)}
                    />
                </View>
                
                <FlatList
                    data={restaurantList}
                    renderItem={renderRestaurants}
                    keyExtractor={(_, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export {RestaurantList};