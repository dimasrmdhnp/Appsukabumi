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

import BottomBar from './BottomBar';

export default class HomePage extends React.Component {

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
                        flex: 1
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'rgb(52,73,100)',
                            height: 160,
                            width: '100%',
                            shadowColor: 'grey',
                            shadowOffset: { width: 1.5, height: 1.5 },
                            shadowRadius: 2,
                            shadowOpacity: 0.35,
                            elevation: 3,
                        }}
                    >
                        <View
                            style={{
                                paddingTop: 12
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    textAlign: 'center'
                                }}
                            >
                                Berita Terkini
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            borderWidth: 0.3,
                            marginTop: 28,
                            marginHorizontal: 40,
                            paddingVertical: 10,
                            shadowColor: 'grey',
                            shadowOffset: { width: 1.5, height: 1.5 },
                            shadowRadius: 2,
                            shadowOpacity: 0.35,
                            elevation: 3,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignContent: 'center',
                                paddingVertical: 6
                            }}
                        >
                            <Image
                                source={require('../assets/logo_bojong.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                paddingTop: 4
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 14,
                                    color: '#444444'
                                }}
                            >Selamat datang di Aplikasi{'\n'} Kecamatan Bojonggenteng
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 35
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Page')}
                        >
                            <Image
                                style={{
                                    width: 180,
                                    height: 180
                                }}
                                source={require('../assets/tombol.png')} />

                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View
                >
                    <BottomBar
                        navigation={navigation}
                    />
                </View>
            </View>
        );
    }
}