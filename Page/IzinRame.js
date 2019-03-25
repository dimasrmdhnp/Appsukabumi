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

export default class IzinRame extends React.Component {

    _KtpUpload() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Upload foto Berkas Izin Rame-Rame yang sudah ditanda tangani Kepala Desa dan dilengkapi surat peresetujuan tidak keberatan warga sekitar',
                btnPage: 'IzinRame'
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
                >
                </SafeAreaView>

                <BackBtn
                    title='Surat Izin Rame-Rame'
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