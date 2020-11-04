import React from 'react';
import {} from 'react-native';
import { TouchableOpacity, Text } from 'react-native-gesture-handler';

const CityItem = (props) => {
    return (
        <TouchableOpacity>
            <Text>{props.cityName}</Text>
        </TouchableOpacity>
    )
}
export {CityItem};