import React from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,
    Alert, Image, Button,
} from 'react-native';

export default class Page extends React.Component {
    onPressButton = () => {
        Alert.alert("ktp");
    }

    _ProfileButton() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Home',
                btnKey: 'home',
                btnImage: require('../home.png')
            },
            {
                btnName: 'E-Lapor',
                btnKey: 'e-lapor',
                btnImage: require('../elapor.png')
            },
            {
                btnName: 'Pengaturan',
                btnKey: 'pengaturan',
                btnImage: require('../pengaturan.png')
            }
        ];

        const btn = buttons.map(function (item, index) {
            return (
                <TouchableOpacity
                    key={item.btnKey}
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                        ...(index == 1 ? { borderRightWidth: 1 } : {}),
                        ...(index == 1 ? { borderLeftWidth: 1 } : {}),
                        borderTopWidth: 1
                    }}
                    onPress={() => navigation.navigate('TestScreen')}
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
                            borderWidth: 1,
                            width: 30,
                            marginRight: 7,
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 15
                            }}
                        >
                            {index + 1}
                        </Text>
                    </View>

                    <View
                        style={{
                            padding: 5,
                            borderRadius: 10,
                            borderWidth: 1,
                            width: 250,
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 15,
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
                <ScrollView
                    style={{
                        marginBottom: 37
                    }}
                >
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

                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingHorizontal: 27,
                                paddingTop: 10
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(52,73,100)',
        height: 80,
        paddingTop: 25,
        flexDirection: 'row',
    },


});
