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

export default class PagePinjamBank extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto Berkas yang sudah ditandatangani oleh yang bersangkutan',
                btnPage: 'PagePinjamBank'
            },
            {
                btnName: 'Upload foto KTP',
                btnPage: 'PagePinjamBank'
            },
            {
                btnName: 'Upload foto KK',
                btnPage: 'PagePinjamBank'
            },
            {
                btnName: 'Upload foto Surat keterangan kematian dari desa',
                btnPage: 'PagePinjamBank'
            },
            {
                btnName: 'Upload foto AJB',
                btnPage: 'PagePinjamBank'
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
                    title="Surat Keterangan Pinjam ke Bank"
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