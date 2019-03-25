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
                            height: 200,
                            width: '100%'
                        }}
                    >
                    </View>

                    <View
                        style={{
                            borderWidth: 2,
                            marginTop: 10,
                            marginHorizontal: 38,
                            padding: 6
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >Selamat datang di Aplikasi {'\n'}Kecamatan Bojonggenteng</Text>
                    </View>

                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 70
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                shadowOffset: 2,
                                shadowRadius: 2,
                                borderRadius: 15,
                                width: 140,
                                height: 140,
                                alignContent: 'center',
                                paddingTop: 50
                            }}
                            onPress={() => navigation.navigate('Page')}
                        >
                            <Text
                                style={{
                                    fontSize: 17,
                                    textAlign: "center"
                                }}
                            >Pilih Layanan</Text>
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