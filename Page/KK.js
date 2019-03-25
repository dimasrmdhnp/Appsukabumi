import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    Platform
} from 'react-native';

import LayananForm from './LayananForm';
import BackBtn from './BackBtn'

export default class KK extends React.Component {
    _KKUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto surat pengantar dari RT/RW dan Desa',
                btnPage: 'KK'
            },
            {
                btnName: 'Upload foto Surat Pindah bagi pendatang',
                btnPage: 'KK'
            },
            {
                btnName: 'Upload foto Akta Nikah',
                btnPage: 'KK'
            },
            {
                btnName: 'Upload foto Surat Keterangan kehilangan bagi yang hilang',
                btnPage: 'KK'
            },
            {
                btnName: 'Upload foto e-KTP.',
                btnPage: 'KK'
            },
            {
                btnName: 'Upload foto Data Penunjang.',
                btnPage: 'KK'
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
                    title="Pembuatan KK"
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
                            {this._KKUpload()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}