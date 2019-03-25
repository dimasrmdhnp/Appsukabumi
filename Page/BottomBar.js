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

    render() {
        const navigation = this.props.navigation;
        return (
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                {this._ProfileButton()}
            </View>
        )
    }
}