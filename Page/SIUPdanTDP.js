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

export default class SIUPdanTDP extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: ' Upload foto e-KTP',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'Upload foto FC Surat Tanah',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'Upload foto FC AJB',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'Upload foto FC SHM',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'Upload foto FC Surat Sewa Menyewa',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'Upload foto SPPT Terakhir',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'Upload foto STTS',
                btnPage: 'SIUPdanTDP'
            },
            {
                btnName: 'Upload foto Surat Izin Tetangga',
                btnPage: 'SIUPdanTDP'
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
                            {this._KtpUpload()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}