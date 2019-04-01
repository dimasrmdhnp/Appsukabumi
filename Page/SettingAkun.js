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
            }
        ];

        const item = desc.map(function (name, index) {
            return (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        marginTop: 14,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                        }}
                    >
                        <Text
                            style={{
                                color: '#333333',
                                flex: 0.4,
                                paddingTop: 3,
                                paddingLeft: 4
                            }}
                        >
                            {name.itemName}
                        </Text>
                        <TextInput
                            style={{
                                borderWidth: 0.4,
                                width: 120,
                                height: 28,
                                flex: 0.5
                            }}
                        />
                    </View>
                </View>
            )
        });

        return (item);
    }
    render() {

        const navigation = this.props.navigation
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <View>
                    <HeaderSetting
                        title='Akun Pribadi'
                        navigation={navigation}
                    />
                </View>
                <View
                    style={{
                        flex: 0.2
                    }}
                >

                </View>
                <View
                    style={{
                        flex: 1
                    }}
                >
                    {this._SettingProfile()}
                </View>

                <TouchableOpacity
                    style={{
                        borderTopWidth: 0.3
                    }}
                >
                </TouchableOpacity>
            </View>
        )
    }
}