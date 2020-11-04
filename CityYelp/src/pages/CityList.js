import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, FlatList} from 'react-native';
import {CityItem, SearchBar} from '../components'






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

    const renderCities = ({item}) => <CityItem cityName= {item}/>
    const renderSeperator = () => <View style={{borderWidth: 1, borderColor: 'black'}}/>
    return (
        <SafeAreaView>
            <View>
                <SearchBar
                    placeholder='Search a city...'
                    onSearch={(value) => console.log(value)}
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