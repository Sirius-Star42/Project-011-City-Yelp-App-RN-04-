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
        backgroundColor: 'yellow',
        margin: 5,
        padding: 5,
        borderRadius: 5,
    }
})