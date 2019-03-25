import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import HeaderSetting from './HeaderSetting';

export default class KebijakanPrivasi extends React.Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View>
                <HeaderSetting
                    title='Kebijakan Privasi'
                    navigation={navigation}
                />
            </View>
        )
    }
}