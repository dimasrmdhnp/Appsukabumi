import React from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class TestScreen extends React.Component {
    render() {
        return (
            <View>
                <View
                    style={{
                        height: 100,
                        width: '100%',
                        backgroundColor: 'red'
                    }}
                >
                    <Text>Upload foto KTP</Text>
                </View>
                <Text>abcccc</Text>
            </View>
        )
    }
}