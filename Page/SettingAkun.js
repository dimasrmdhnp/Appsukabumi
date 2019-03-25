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
                            borderWidth: 1,
                            width: 200,
                            height: 50
                        }}
                    />
                </View>
            )
        });

        return (item);
    }
    render() {
        return (
            <View>

            </View>
        )
    }
}