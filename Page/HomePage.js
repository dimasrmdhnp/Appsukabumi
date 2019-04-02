import React from 'react';
import {
    Text,
    View,
    Platform,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import BottomBar from './BottomBar';
import Carousel from 'react-native-banner-carousel';

const dimensions = Dimensions.get('window');
const dWidth = dimensions.width;
const bannerHeight = dWidth * 0.67;

export default class HomePage extends React.Component {

    render() {

        const navigation = this.props.navigation;
        const bannerImages2 = [
            {
                btnImage: require('../assets/kolom_berita/berita_hot/hot_bcl.png'),
                btnPage: 'berita1'
            },
            {
                btnImage: require('../assets/kolom_berita/berita_hot/hot_agnez.png'),
                btnPage: 'berita1'
            },
            {
                btnImage: require('../assets/kolom_berita/berita_hot/hot_us.png'),
                btnPage: 'berita1'
            },
            {
                btnImage: require('../assets/kolom_berita/berita_hot/hot_rossa.png'),
                btnPage: 'berita1'
            },
        ];

        const contentBanner = bannerImages2.map(function (item, index) {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate(`${item.btnPage}`)}
                >
                    <View>
                        <Image
                            style={{ width: dWidth, height: bannerHeight }}
                            //source={{ uri: `${global.uri}assets/images/site/${item}.png`}}
                            source={item.btnImage}
                            resizeMode='contain'
                        />
                    </View>
                </TouchableOpacity>
            );
        });
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
                            backgroundColor: 'white',
                            height: 185,
                            width: '100%',
                        }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 25,
                                paddingVertical: 10,
                                backgroundColor: 'rgb(52,73,100)',
                                width: '100%'
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 17,
                                    color: "white"
                                }}
                            >Berita HOT</Text>
                        </View>
                        <View style={{
                            marginTop: -40
                        }}>
                            <Carousel
                                autoplay
                                autoplayTimeout={4500}
                                loop
                                index={0}
                                pageSize={dWidth}
                            >
                                {contentBanner}
                            </Carousel>
                        </View>
                    </View>

                    <View
                        style={{
                            borderWidth: 0.3,
                            marginTop: 46,
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
                                paddingTop: 8
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
                            marginTop: 10
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