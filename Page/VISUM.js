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

export default class VISUM extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto Surat permohonan visum dari Direktur CV kepada Camat',
                btnPage: 'VISUM'
            },
            {
                btnName: 'Upload foto Surat Perintah Kerja/Mulai Kerja (SPK/SPMK)',
                btnPage: 'VISUM'
            },
            {
                btnName: 'Upload foto Berita Acara/Surat Penyerahan Lapangan (BAPL/SPL)',
                btnPage: 'VISUM'
            },
            {
                btnName: 'Upload foto Dokumentasi pelaksanaan pekerjaan',
                btnPage: 'VISUM'
            },
            {
                btnName: 'Upload foto Surat Pernyataan Penyelesaian Pekerjaan yg di TTd Pengawas lapangan',
                btnPage: 'VISUM'
            },
            {
                btnName: 'Upload foto Surat Keterangan Penyelesaian Pekerjaan dan tidak memiliki hutang-piutang dengan masyarakat oleh Kepala Desa',
                btnPage: 'VISUM'
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
                    title="VISUM"
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
        )
    }
}