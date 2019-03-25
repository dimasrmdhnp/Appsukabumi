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
                            marginTop: 50
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