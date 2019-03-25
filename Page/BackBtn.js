import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class BackBtn extends React.Component {

    render() {
        const navigation = this.props.navigation;
        return (
            <View
                style={{
                    backgroundColor: 'rgb(52,73,100)',
                    paddingVertical: 14,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        paddingHorizontal: 12,
                        flex: 0.2
                    }}
                >

                    <Text
                        style={{
                            fontSize: 30,
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        {"<"}
                    </Text>
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 21
                        }}
                    >
                        {this.props.title}
                    </Text>
                </View>

                <View
                    style={{
                        flex: 0.2
                    }}
                >

                </View>
            </View>
        );
    }
}