import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

import BottomBar from './BottomBar';
import HeaderBerita from './HeaderBerita';

export default class berita2 extends React.Component {

    render() {

        const navigation = this.props.navigation

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
                <View>
                    <HeaderBerita
                        title="MyBoget News"
                        navigation={navigation} />
                </View>

                <ScrollView
                >
                    <View
                        style={{
                            flexDirection: 'column',
                        }}
                    >
                        <View
                            style={{
                                marginHorizontal: 14,
                                marginTop: 16,
                                marginBottom: 6
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 21
                                }}
                            >Kedapatan Beli Sabu, Caleg Gerindra Ditangkap Polisi</Text>
                        </View>

                        <View
                            style={{
                                marginHorizontal: 14,
                                flexDirection: 'row',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12
                                }}
                            >Kompas.com</Text>
                            <Text
                                style={{
                                    marginLeft: 6,
                                    color: '#999999'
                                }}
                            >l</Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#888888",
                                    marginLeft: 6
                                }}
                            >Kompas</Text>
                        </View>

                        <View
                            style={{
                                marginHorizontal: 14,
                                flexDirection: 'row',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#888888'
                                }}
                            >Diterbitkan :</Text>
                            <Text
                                style={{
                                    marginLeft: 6,
                                    fontSize: 12,
                                    color: '#888888'
                                }}
                            >Minggu, 31/03/2019</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            marginLeft: 14,
                            marginTop: 10,
                            marginRight: 20,
                            marginBottom: 30
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15
                            }}
                        >
                            Seorang calon legislatif untuk DPRD Kabupaten Lingga, Dapil 2 Kepulauan Riau ditangkap Satresnarkoba Polresta Barelang karena membeli narkoba jenis sabu.
                            {'\n'}{'\n'}
                            Menurut polisi, tersangka R membeli sabu untuk berpesta bersama rekannya. Polisi menangkap tersangka R di kawasan Nagoya Mansion, Batam, Kepulauan Riau.
                            {'\n'}{'\n'}
                            Dari tangan tersangka, petugas menyita barang bukti 0,66 gram sabu dan beberapa unit ponsel.
                            {'\n'}{'\n'}
                            Tersangka R ditangkap bersama rekannya. KPU Kepri perlu memastikan status hukum caleg itu untuk mengambil langkah selanjutnya.
                            </Text>
                    </View>
                </ScrollView>
                <View>
                    <BottomBar navigation={navigation} />
                </View>
            </View>
        )
    }
}