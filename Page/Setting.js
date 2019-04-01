import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
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

        const desc = [
            {
                itemName: 'Akun',
                btnPage: 'SettingAkun'
            },
            {
                itemName: 'Syarat dan Ketentuan',
                btnPage: 'SyaratDanKetentuan'
            },
            {
                itemName: 'Kebijakan Privasi',
                btnPage: 'KebijakanPrivasi'
            },
            {
                itemName: 'Pusat Bantuan',
                btnPage: 'PusatBantuan'
            }
        ];

        const item = desc.map(function (name, index) {
            return (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        padding: 16,
                        borderBottomWidth: 0.4,
                    }}
                    onPress={() =>
                        navigation.navigate(`${name.btnPage}`)}
                >
                    <Text
                        style={{
                            color: '#333333'
                        }}
                    >
                        {name.itemName}
                    </Text>
                </TouchableOpacity>
            )
        });

        return (item);
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

                <View
                    style={{
                        height: 65,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        shadowColor: 'grey',
                        shadowOffset: { width: 1.5, height: 1.5 },
                        shadowRadius: 2,
                        shadowOpacity: 0.35,
                        elevation: 3,
                        backgroundColor: 'white'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomePage')}
                        style={{
                            flex: 0.4,
                            marginLeft: 16
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 26,
                                color: '#333333',
                            }}
                        >
                            {'<'}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#333333',
                            flex: 0.65
                        }}
                    >Setting</Text>
                </View>

                <ScrollView
                    style={{
                    }}
                >
                    <View>
                        {this._SettingProfile()}
                    </View>
                </ScrollView>
                <View>
                    <TouchableOpacity
                        style={{
                            borderTopWidth: 0.5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: '#444444',
                            }}
                        >Keluar</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}