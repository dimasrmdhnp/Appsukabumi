import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class BottomBar extends React.Component {

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
                btnName: 'BeritaBojong',
                btnPage: 'Berita',
                btnImage: require('../berita.png')
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
                        borderTopWidth: 0.2,
                    }}
                    onPress={() => navigation.navigate(`${item.btnPage}`)}
                >
                    <View
                        style={{
                            paddingVertical: 12
                        }}
                    >
                        <Image
                            style={{ width: 27, height: 27 }}
                            source={item.btnImage}
                        />
                    </View>
                </TouchableOpacity >
            )
        });
        return (btn);
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                {this._ProfileButton()}
            </View>
        )
    }
}