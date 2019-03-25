import React from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import LayananForm from './LayananForm';
import BackBtn from './BackBtn';

export default class ImbDibawah200m extends
    React.Component {
    _ImbUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto e-KTP',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload Fotocopy Surat Tanah',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload Fotocopy AJB',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload Fotocopy Letter C',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload Fotocopy Surat Sewa Menyewa',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload foto Surat Keterangan Tanah Tidak Sengketa',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload foto SPPT PBB Terakhir',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload foto STTS PBB',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload foto Gambar Konstruksi Bangunan',
                btnPage: 'ImbDiatas200m'
            },
            {
                btnName: 'Upload foto Surat Izin Tetangga/Lingkungan',
                btnPage: 'ImbDiatas200m'
            }
        ];

        return (<LayananForm buttons={buttons} />)
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
                    title="Pembuatan SIUP/TDP"
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
                            {this._ImbUpload()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}