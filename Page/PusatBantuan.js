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

export default class PusatBantuan extends React.Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <HeaderSetting
                    title='Pusat Bantuan'
                    navigation={navigation}
                />
                <View>
                    <Text>
                        Hubungi Kami Di:
                        {'\n'}
                        No. Tlp (Camat): 0815-6227-953
                        {'\n'}
                        Email: kecbojonggenteng@gmail.com
                    </Text>
                </View>
            </View>
        )
    }
}