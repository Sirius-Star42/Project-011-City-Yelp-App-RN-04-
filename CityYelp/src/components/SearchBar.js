import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={(value) => props.onSearch(value)}   
            />
        </View>
    )
};

export {SearchBar};

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#ffc05f',
        margin: 5,
        padding: 2,
        borderRadius: 12,
    }
})