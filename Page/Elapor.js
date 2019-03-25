import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import BackBtn from './BackBtn';
import BottomBar from './BottomBar';

export default class Elapor extends React.Component {
    _HomeButtons() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'HomePage',
                btnPage: 'HomePage'
            }
        ];

        const btn = buttons.map(function (items, index) {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('HomePage')}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}
                    >
                        {'<'}
                    </Text>
                </TouchableOpacity>
            )
        });
        return (btn);
    }

    state = {
        lapor: ''
    }
    handleLapor = (text) => {
        this.setState({ lapor: text })
    }
    kirim = (lapor) => {
        alert('Terimakasih, Laporan anda akan segera kami proses.')
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
                <ScrollView
                >
                    <View
                        style={{
                            backgroundColor: 'rgb(52,73,100)',
                            paddingVertical: 14,
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                paddingLeft: 11,
                                flex: 0.2,
                                paddingHorizontal: 12
                            }}
                        >
                            {this._HomeButtons()}
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 22,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}
                            >E-Lapor
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 0.3
                            }}
                        >

                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 30,
                                marginTop: 70,
                                marginBottom: 20
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center'
                                }}
                            >
                                E-Lapor adalah fitur yang disediakan oleh kecamatan Bojonggenteng untuk masyarakat, agar dapat melaporkan kejadian apapun secara online yang terjadi di sekitar.
                            </Text>
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 30
                            }}
                        >
                            <TextInput
                                style={{
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    marginTop: 15,
                                    width: 300,
                                    height: 200,
                                }}
                                underlineColorAndroid="transparent"
                                placeholder="Tulis laporan anda"
                                placeholderTextColor="black"
                                autoCapitalize="none"
                                onChangeText={this.handleLapor} />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#888888',
                                    borderWidth: 0.1,
                                    borderRadius: 15,
                                    padding: 8,
                                    marginTop: 10,
                                    width: 60,
                                    alignItems: 'center',
                                    shadowColor: 'grey',
                                    shadowOffset: { width: 1.5, height: 1.5 },
                                    shadowRadius: 2,
                                    shadowOpacity: 0.35,
                                    elevation: 3,
                                }}
                                onPress={
                                    () => this.Kirim(this.state.lapor)
                                }>
                                <Text style={{
                                    color: 'white'
                                }}>Kirim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <BottomBar navigation={navigation} />
                </View>
            </View>
        );
    }
}