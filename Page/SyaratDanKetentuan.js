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

export default class SyaratDanKetentuan extends React.Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View>
                <HeaderSetting
                    title='Syarat dan Ketentuan'
                    navigation={navigation}
                />
            </View>
        )
    }
}