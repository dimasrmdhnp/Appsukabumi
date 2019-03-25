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

export default class Elapor extends React.Component {
    _ProfileButton() {
        const navigation = this.props.navigation;

        const buttons = [
            {
                btnName: 'Home',
                btnPage: 'HomePage',
                btnImage: require('../home.png')
            },
            {
                btnName: 'E-Lapor',
                btnPage: 'Elapor',
                btnImage: require('../elapor.png')
            },
            {
                btnName: 'Pengaturan',
                btnPage: 'Setting',
                btnImage: require('../pengaturan.png')
            }
        ];

        const btn = buttons.map(function (item, index) {
            return (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        flex: 1,
                        textAlign: 'center',
                        justifyContent: 'center',
                        ...(index == 1 ? { borderRightWidth: 1 } : {}),
                        ...(index == 1 ? { borderLeftWidth: 1 } : {}),
                        borderTopWidth: 1
                    }}
                    onPress={() => navigation.navigate(`${item.btnPage}`)}
                >
                    <View
                        style={{
                            paddingTop: 5,
                            paddingBottom: 5,
                        }}
                    >
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={item.btnImage}
                        />
                    </View>
                </TouchableOpacity >
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
                    style={{
                    }}
                >
                    <View
                        style={{
                            marginTop: 15,
                            flex: 0.2,
                            backgroundColor: 'rgb(52,73,100)',
                            width: '100%',
                            height: 100,
                            paddingTop: 30
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 22,
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >E-Lapor</Text>
                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 30,
                                marginTop: 20,
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
                                    backgroundColor: 'black',
                                    borderWidth: 1,
                                    shadowOpacity: 10,
                                    borderRadius: 15,
                                    padding: 8,
                                    marginTop: 10,
                                    width: 60,
                                    alignItems: 'center'
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
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 15,
                        position: 'absolute',
                        bottom: 0,
                    }}
                >
                    {this._ProfileButton()}
                </View>
            </View>
        );
    }
}