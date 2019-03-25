import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import LayananForm from './LayananForm';
import BackBtn from './BackBtn';

export default class PageSuratPindah extends
    React.Component {
    _PageSuratPindahUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto surat pengantar dari RT/RW dan Desa',
                btnPage: 'PageSuratPindah'
            },
            {
                btnName: 'Upload foto kartu keluarga asli',
                btnPage: 'PageSuratPindah'
            },
            {
                btnName: 'Upload foto e-KTP.',
                btnPage: 'PageSuratPindah'
            },
            {
                btnName: 'Upload foto Pernyataan pindah',
                btnPage: 'PageSuratPindah'
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
                            {this._PageSuratPindahUpload()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}