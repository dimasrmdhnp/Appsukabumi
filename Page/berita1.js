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

export default class berita1 extends React.Component {

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
                            >11 Curhatan Seputar Dunia Per-Ojolan, dari Kisah Baper Hingga Bikin Mewek</Text>
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
                            >Boombastis.com</Text>
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
                            >Ayu</Text>
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
                        >Aplikasi ojek online memang mempermudah banyak orang, khususnya mereka yang tidak punya kendaraan dan tidak bisa naik motor. Sejak ada ojek online juga ada banyak sekali cerita haru, sedih, serta ngakak baik dari driver ataupun penumpang. Cerita-cerita ini juga dibagikan oleh akun @dramaojol.id dan timeline Twitter.
                        {'\n'}{'\n'}
                            Nah, di antara cerita-cerita lucu yang bertebaran di media sosial, sekarang Boombastis.com akan berbagi curhatan galau, kesal, serta kelakuan para penumpang yang bikin ngakak. Adakah nih di antara kalian semua yang suka kebablasan curhat panjang lebar seperti ini?
                        {'\n'}{'\n'}
                            Ini kisah yang pertama, sambil baca sambil dihayati yaa..
                        {'\n'}{'\n'}
                            Duh, emang ada-ada saja ya para netizen Indonesia ini. Tapi enggak masalah sih selama abang gojeknya juga mau mendengarkan, kali aja bisa memberi solusi kan ya~</Text>
                    </View>
                </ScrollView>
                <View>
                    <BottomBar navigation={navigation} />
                </View>
            </View>
        )
    }
}