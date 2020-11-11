import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, FlatList} from 'react-native';
import {CityItem, SearchBar} from '../components';

let originalList= [];

const CityList = (props) => { 

    const [cityList, setCityList] = useState([]);

    //ASYNC-AWAITS
    const fetchCityData = async () => {
        const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
        setCityList(data.cities);
        originalList = [...data.cities];
        
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({item}) => {
        return (
            <CityItem
                cityName= {item}
                onSelect={() => {
                    props.navigation.navigate('Restaurants', {selectedCity : item} )
             }}
             />
        )
    }
    const renderSeperator = () => <View style={{}}/>

    function searchCity(search) {
        const filteredCity = originalList.filter(city =>{
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();
            return cityName.indexOf(text) > -1;

        })
        setCityList(filteredCity);
    }
    
    return (
        <SafeAreaView >
            <View>
                <Text style={{margin: 5, fontWeight: "bold", fontSize: 30}}>Cities</Text>
                <SearchBar
                    placeholder='Search a city...'
                    onSearch={(value) => searchCity(value)}
                />
                <FlatList
                    data={cityList}
                    renderItem={renderCities}
                    keyExtractor={(_, index) =>index.toString()}
                    ItemSeparatorComponent={renderSeperator}             
    
                />
            </View>
        </SafeAreaView>
    )
}

export {CityList};




