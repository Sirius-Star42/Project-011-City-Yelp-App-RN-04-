import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, FlatList} from 'react-native';
import {CityItem} from '../components'






const CityList = (props) => {
    const [cityList, setCityList] = useState([]);

    //ASYNC-AWAITS
    const fetchCityData = async () => {
        const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
        setCityList(data.cities)
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({item}) => <Text>{item}</Text>

    return (
        <SafeAreaView>
            <View>
                <FlatList
                data={cityList}
                renderItem={renderCities}
                keyExtractor={(_, index) =>index.toString()}
                
                />
            </View>
        </SafeAreaView>
    )
}

export {CityList};