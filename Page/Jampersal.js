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

export default class Jampersal extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: ' Upload foto Surat pengantar dari kepala desa',
                btnPage: 'Jampersal'
            },
            {
                btnName: 'Upload foto E-KTP yang masih berlaku',
                btnPage: 'Jampersal'
            },
            {
                btnName: 'Upload foto Surat Pernyataan Tidak mampu dari pemohon diketahui Ketua RT, Ketua RW, TKSK Kades/Lurah, dan Camat',
                btnPage: 'Jampersal'
            },
            {
                btnName: 'Upload foto Surat Rujukan dari puskesmas setempat, bagi yang berobat ke Rumah sakit',
                btnPage: 'Jampersal'
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
                        height: 24,
                        ...Platform.select({
                            android: {
                                backgroundColor: 'black'
                            }
                        })
                    }}
                ></SafeAreaView>

                <BackBtn
                    title="Surat Keterangan Jampersal"
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