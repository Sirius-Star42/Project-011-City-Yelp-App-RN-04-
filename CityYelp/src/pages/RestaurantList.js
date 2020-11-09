import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, FlatList } from 'react-native';
import { RestaurantsItem, SearchBar } from '../components';


const RestaurantList = (props) => {
    const [restaurantList, setRestaurantList] = useState([]);
    const {selectedCity } = props.route.params

    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants', 
            {
                params: {
                    "city" : selectedCity
                }
            })
            .then(response => {
                setRestaurantList(response.data.restaurants);
            })
            
    }
    useEffect(() => {
        fetchRestaurants();
    }, [])

    const renderRestaurants = ({item}) => {
        return (
            <RestaurantsItem
                restaurant={item}
            />
        )
    }
    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text style={{margin: 5, fontWeight: "bold", fontSize: 40, }}>{selectedCity}</Text>
                    <SearchBar/>
                </View>
                
                <FlatList
                    data={restaurantList}
                    renderItem={renderRestaurants}
                />
            </View>
        </SafeAreaView>
    )
}

export {RestaurantList};