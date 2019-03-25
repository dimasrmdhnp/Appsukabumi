import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Setting extends React.Component {

    _ProfileButton() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Home',
                btnPage: 'HomePage',
                btnImage: require('../home.png')
            },
            {
                btnName: 'E-Lapor',
                btnPage: 'Elapor',
                btnImage: require('../elapor.png')
            },
            {
                btnName: 'Pengaturan',
                btnPage: 'Setting',
                btnImage: require('../pengaturan.png')
            }
        ];

        const btn = buttons.map(function (item, index) {
            return (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                        ...(index == 1 ? { borderRightWidth: 1 } : {}),
                        ...(index == 1 ? { borderLeftWidth: 1 } : {}),
                        borderTopWidth: 1
                    }}
                    onPress={() => navigation.navigate(`${item.btnPage}`)}
                >
                    <View
                        style={{
                            paddingTop: 5,
                            paddingBottom: 5,
                        }}
                    >
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={item.btnImage}
                        />
                    </View>
                </TouchableOpacity >
            )
        });
        return (btn);
    }

    _SettingProfile() {
        const navigation = this.props.navigation;

        const buttons = [
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
    }
    render() {

        const navigation = this.props.navigation;

        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <SafeAreaView
                    style={{
                        ...Platform.select({
                            android: {
                                backgroundColor: 'black',
                                height: 24,
                            }
                        })
                    }}
                >
                </SafeAreaView>
                <ScrollView
                    style={{
                        flexDirection: 'row',
                        marginTop: 15
                    }}
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            marginTop: 210
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center'
                            }}
                        >
                            Setting masi on progress kk
                        </Text>
                    </View>
                    <View>
                        {this._SettingProfile()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}