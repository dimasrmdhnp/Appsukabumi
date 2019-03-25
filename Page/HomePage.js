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

export default class HomePage extends React.Component {

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
                <ScrollView>
                    <View
                        style={{
                            borderWidth: 10,
                            backgroundColor: 'rgb(52,73,100)',
                            height: 200,
                            width: '100%'
                        }}
                    >
                    </View>

                    <View
                        style={{
                            borderWidth: 2,
                            marginTop: 10,
                            marginHorizontal: 38,
                            padding: 6
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >Selamat datang di Aplikasi {'\n'}Kecamatan Bojonggenteng</Text>
                    </View>

                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 70
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                shadowOffset: 2,
                                shadowRadius: 2,
                                borderRadius: 15,
                                width: 140,
                                height: 140,
                                alignContent: 'center',
                                paddingTop: 50
                            }}
                            onPress={() => navigation.navigate('Page')}
                        >
                            <Text
                                style={{
                                    fontSize: 17,
                                    textAlign: "center"
                                }}
                            >Pilih Layanan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 15,
                        position: 'absolute',
                        bottom: 0,
                    }}
                >
                    {this._ProfileButton()}
                </View>
            </View>
        );
    }
}