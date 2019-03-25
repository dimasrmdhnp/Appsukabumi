import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Alert,
    SafeAreaView,
    Platform,
} from 'react-native';

import BottomBar from './BottomBar';

export default class Page extends React.Component {
    onPressButton = () => {
        Alert.alert("ktp");
    }

    _HomeButtons() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'HomePage',
                btnPage: 'HomePage'
            }
        ];

        const btn = buttons.map(function (items, index) {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('HomePage')}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}
                    >
                        {'<'}
                    </Text>
                </TouchableOpacity>
            )
        });
        return (btn);
    }

    _ShowButtons() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Perekaman e-KTP',
                btnPage: 'KtpPage'
            },
            {
                btnName: 'Pembuatan KK',
                btnPage: 'KK'
            },
            {
                btnName: 'Penerbitan Surat Pindah',
                btnPage: 'PageSuratPindah'
            },
            {
                btnName: 'Pembuatan IMB dibawah 200m2',
                btnPage: 'ImbDibawah200m'
            },
            {
                btnName: 'Pembuatan IMB diatas 200m2',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Surat Keterangan Jampersal',
                btnPage: 'Jampersal'
            },
            {
                btnName: 'Pembuatan SIUP/TDP',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'VISUM',
                btnPage: 'VISUM'
            },
            {
                btnName: 'PPATS',
                btnPage: 'PPATS'
            },
            {
                btnName: 'Surat Keterangan Ahli Waris',
                btnPage: 'PageAhliWaris'
            },
            {
                btnName: 'Surat Keterangan Pinjam ke Bank',
                btnPage: 'PagePinjamBank'
            },
            {
                btnName: 'Izin Reklame Tanpa Sponsor',
                btnPage: 'IzinReklame'
            },
            {
                btnName: 'Rekomendasi Izin Rame-Rame',
                btnPage: 'IzinRame'
            }
        ];

        const btn = buttons.map(function (item, index) {
            return (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        marginTop: 14,
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.navigate(`${item.btnPage}`)}
                >
                    <View
                        style={{
                            padding: 5,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            width: 30,
                            marginRight: 7,
                            shadowColor: 'grey',
                            shadowOffset: { width: 1.5, height: 1.5 },
                            shadowRadius: 2,
                            shadowOpacity: 0.35,
                            elevation: 3,
                            backgroundColor: 'white'
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 15,
                                color: "#444444"
                            }}
                        >
                            {index + 1}
                        </Text>
                    </View>

                    <View
                        style={{
                            padding: 5,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            width: 250,
                            shadowColor: 'grey',
                            shadowOffset: { width: 1.5, height: 1.5 },
                            shadowRadius: 2,
                            shadowOpacity: 0.35,
                            elevation: 3,
                            backgroundColor: 'white'
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 15,
                                color: "#444444"
                            }}
                        >
                            {item.btnName}
                        </Text>
                    </View>
                </TouchableOpacity>
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
                ></SafeAreaView>
                <View style={styles.container}>
                    <View
                        style={{
                            flex: 0.3,
                            paddingLeft: 11,
                            paddingTop: 8
                        }}
                    >
                        {this._HomeButtons()}
                    </View>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 22,
                            color: 'white',
                            flex: 0.6,
                            paddingTop: 10,
                            paddingLeft: 36
                        }}
                    >Layanan</Text>
                </View>
                <ScrollView
                >
                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingHorizontal: 27,
                                paddingTop: 10,
                                color: "#333333"
                            }}
                        >
                            Selamat datang dihalaman Layanan kami,silahkan pilih layanan yang anda butuhkan
                            dibawah ini.{"\n"}{'\n'}Kecamatan Bojonggenteng akan memproses data yang anda upload di setiap layanan yang tersedia, mohon untuk mempersiapkan data yang dibutuhkan dan harap mengirim foto yang jelas agar kami dapat memproses kebutuhan anda dengan lebih cepat.
                        </Text>
                    </View>

                    <View
                        style={{
                            padding: 10,
                            marginBottom: 17
                        }}
                    >
                        {this._ShowButtons()}
                    </View>

                </ScrollView>
                <View
                >
                    <BottomBar
                        navigation={navigation}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(52,73,100)',
        height: 80,
        paddingTop: 15,
        flexDirection: 'row',

    },


});
