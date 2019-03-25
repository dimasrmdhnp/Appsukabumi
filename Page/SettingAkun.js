import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import HeaderSetting from './HeaderSetting';

export default class SettingAkun extends React.Component {

    _SettingProfile() {
        const navigation = this.props.navigation;

        const desc = [
            {
                itemName: 'Nama Lengkap',
            },
            {
                itemName: 'Tanggal Lahir',
            },
            {
                itemName: 'Jenis Kelamin',
            },
            {
                itemName: ' Alamat',
            },
            {
                itemName: 'Nomor Handphone',
            },
            {
                itemName: 'Email',
            },
            {
                itemName: 'Nomor Handphone',
            },
            {
                itemName: 'Ubah Password',
            }
        ];

        const item = desc.map(function (name, index) {
            return (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        marginTop: 14
                    }}
                >
                    <Text
                    >
                        {name.itemName}
                    </Text>
                    <TextInput
                        style={{
                            borderWidth: 0.5,
                            width: 100,
                            height: 15
                        }}
                    />
                </View>
            )
        });

        return (item);
    }
    render() {

        const navigation = this.props.navigation
        return (
            <View>
                <View>
                    <HeaderSetting
                        title='Akun Pribadi'
                        navigation={navigation}
                    />
                </View>
                <ScrollView>
                    <View>                                      {this._SettingProfile()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}