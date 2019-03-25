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

export default class PageAhliWaris extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto Berkas yang sudah ditandatangani oleh yang bersangkutan',
                btnPage: 'PageAhliWaris'
            },
            {
                btnName: 'Upload foto KTP',
                btnPage: 'PageAhliWaris'
            },
            {
                btnName: 'Upload foto KK',
                btnPage: 'PageAhliWaris'
            },
            {
                btnName: 'Upload foto Surat keterangan kematian dari desa',
                btnPage: 'PageAhliWaris'
            }
        ];

        return (<LayananForm buttons={buttons} />);
    }

    render() {

        const navigation = this.props.navigation;

        return (
            <View>
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
                    title="Surat Keterangan Ahli Waris"
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