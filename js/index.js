import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import OpenCard from './pages/openCard';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

import {Provider} from 'react-redux';
import configureStore from './store/index';
import commonStyles from './styles/common';


class HomeScreen extends React.Component {

    _onClick() {
        Alert.alert('温馨提示', 'Click', [{
            text: 'OK', onPress: () => {
            }
        }])
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={commonStyles.container}>
                <Image source={require('./imgs/head.png')}
                       style={commonStyles.head}>
                    <Image source={require('./imgs/logo.png')}
                           style={commonStyles.logo}/>
                    <View style={commonStyles.cell}/>

                    <TouchableOpacity style={commonStyles.set} onPress={this._onClick} activeOpacity={0.7}>
                        <Image source={require('./imgs/setting.png')}
                               style={commonStyles.setImg}/>
                    </TouchableOpacity>

                </Image>

                <Image source={require('./imgs/bg.png')}
                       style={commonStyles.body}>

                    <TouchableOpacity style={styles.menu0} onPress={() => navigate('Card')} activeOpacity={0.7}>

                        <View style={styles.menuTouch}>
                            <Image source={require('./imgs/menu0.png')}
                                   style={styles.menuImg}/>
                            <Text style={styles.menuTxt}>我要开卡</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menu1} onPress={this._onClick} activeOpacity={0.7}>

                        <View style={styles.menuTouch}>
                            <Image source={require('./imgs/menu1.png')}
                                   style={styles.menuImg}/>
                            <Text style={styles.menuTxt}>我要签约</Text>
                        </View>
                    </TouchableOpacity>
                </Image>
            </View>
        )

    }
}

const Nav = StackNavigator({
        Home: {screen: HomeScreen},
        Card: {screen: OpenCard},
    }, {
        initialRouteName: 'Home',
        navigationOptions: {
            cardStack: {
                gesturesEnabled: true
            }
        },
        mode: 'card',
        headerMode: 'none',
    }
);
const styles = StyleSheet.create({
    menu0: {
        width: 180,
        height: 220,
        position: 'relative',
        top: 120,
        left: 280,
    },
    menu1: {
        width: 180,
        height: 220,
        position: 'relative',
        top: 120,
        left: 370,
    },
    menuTouch: {
        alignItems: 'center'
    },
    menuImg: {
        resizeMode: 'contain',
        width: 170,
        height: 170,
    },
    menuTxt: {
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#000',
    },
});

class App extends React.Component {
    store = configureStore();

    render() {
        return (
            <Provider store={this.store}>
                <Nav />
            </Provider>
        );
    }
}
export default App;