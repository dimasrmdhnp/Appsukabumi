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

export default class KtpPage extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload Fotocopy Kartu Keluarga',
                btnPage: 'KtpPage'
            },
            {
                btnName: 'Upload Fotocopy Buku Nikah/Akta Perkawinan bagi penduduk yang belum berumur 17 tahun, tetapi pernah kawin atau sudah kawin',
                btnPage: 'KtpPage'
            },
            {
                btnName: 'Upload Fotocopy Akta Kelahiran',
                btnPage: 'KtpPage'
            },
            {
                btnName: 'Bagi pemohon yang mengajukan perubahan biodata penduduk melampirkan FC Surat Bukti / Keterangan peristiwa penting atau kependudukan yang dialami',
                btnPage: 'KtpPage'
            },
            {
                btnName: 'Bagi orang asing tinggal tetap, mohon upload FC KITAP',
                btnPage: 'KtpPage'
            },
            {
                btnName: 'Bagi orang asing tinggal tetap, mohon upload FC SKTT',
                btnPage: 'KtpPage'
            }
        ];

        return (<LayananForm buttons={buttonts} />)
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
                        height: 24,
                        ...Platform.select({
                            android: {
                                backgroundColor: 'black'
                            }
                        })
                    }}
                ></SafeAreaView>

                <BackBtn
                    title="Perekamang e-KTP"
                    navigation={navigation}
                />

                <ScrollView>
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