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

import LayananForm from './LayananForm';
import BackBtn from './BackBtn';

export default class IzinReklame extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto KTP',
                btnPage: 'IzinReklame'
            },
            {
                btnName: 'Upload foto NPWP',
                btnPage: 'IzinReklame'
            },
            {
                btnName: 'Upload foto Jenis Reklame dan gambar serta gambaran dasar konstruksi yang akan dibangun',
                btnPage: 'IzinReklame'
            },
            {
                btnName: 'Upload foto Lokasi pemasangan yang diinginkan',
                btnPage: 'IzinReklame'
            },
            {
                btnName: 'Upload foto Surat Pernyataan Tidak Keberatan dari pemilik tanah / bangunan yang akan dipakai pemasangan Reklame bagi pemasangan milik pihak lain',
                btnPage: 'IzinReklame'
            },
            {
                btnName: 'Upload foto Surat Rekomendasi dari OPD terkait',
                btnPage: 'IzinReklame'
            }
        ];

        return (<LayananForm buttons={buttons} />);
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

                <BackBtn
                    title="Izin Reklame Tanpa Sponsor"
                    navigation={navigation}
                />

                <ScrollView
                    style={{
                        flex: 1
                    }}
                >
                    <View
                        style={{
                            marginTop: 5,
                            marginLeft: 20,
                            marginRight: 20,
                            marginBottom: 20
                        }}
                    >
                        <View>
                            {this._KtpUpload()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}