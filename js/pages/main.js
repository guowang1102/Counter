// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
//
// import React, {Component} from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TouchableHighlight,
//     TouchableOpacity,
//     Alert
// } from 'react-native';
// import {connect} from 'react-redux';
// import NavigatorBar from 'react-native-navbar';
// import commonStyles from '../styles/common';
// import {logOut} from '../actions/user';
// import OpenCard from './openCard';
//
// var Dimensions = require('Dimensions');
// var {width, height} = Dimensions.get('window');
//
// class Main extends Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     if (nextProps.isLoggedIn != this.props.isLoggedIn && nextProps.isLoggedIn === false) {
//     //         //logout, need to redirect login page
//     //         this.toLogin();
//     //         return false;
//     //     }
//     //     return true;
//     // }
//     //
//     // toLogin() {
//     //     let {router} = this.props;
//     //     router.resetToLogin();
//     // }
//     //
//     // _renderNavBar() {
//     //     let {router, user, dispatch} = this.props;
//     //     var leftButtonConfig = {
//     //         title: 'Logout',
//     //         handler: () => {
//     //             dispatch(logOut());
//     //         }
//     //     };
//     //
//     //     var titleConfig = {
//     //         title: user.name || '',
//     //     };
//     //     return <NavigatorBar style={commonStyles.navbar}
//     //                          title={titleConfig}
//     //                          leftButton={leftButtonConfig}/>;
//     // }
//
//     // _push()
//     // {
//     //     this.props.navigator.push({
//     //         id: 'OpenCardPage',
//     //         component: OpenCard,
//     //         passProps: {
//     //             from: 'OpenCard Page'
//     //         },
//     //         sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
//     //     });
//     // }
//
//     _onPressMenu0() {
//         // Alert.alert('温馨提示', '点击了我要开卡', [{
//         //     text: 'OK', onPress: () => {
//         //     }
//         // }]);
//         let {router} = this.props;
//         router.toOpenCard();
//     }
//
//     _onPressMenu1() {
//         Alert.alert('温馨提示', '点击了我要签约', [{
//             text: 'OK', onPress: () => {
//             }
//         }])
//     }
//
//     _onPressSet() {
//         Alert.alert('温馨提示', '点击了设置', [{
//             text: 'OK', onPress: () => {
//             }
//         }])
//     }
//
//     render() {
//         // let {user} = this.props;
//         return (
//             <View style={styles.container}>
//                 <Image source={require('../imgs/head.png')}
//                        style={styles.head}>
//                     <Image source={require('../imgs/logo.png')}
//                            style={styles.logo}/>
//                     <View style={styles.cell}/>
//
//                     <TouchableOpacity style={styles.set} onPress={this._onPressSet} activeOpacity={0.7}>
//                         <Image source={require('../imgs/setting.png')}
//                                style={styles.setImg}/>
//                     </TouchableOpacity>
//
//                 </Image>
//
//                 <Image source={require('../imgs/bg.png')}
//                        style={styles.body}>
//
//                     <TouchableOpacity style={styles.menu0} onPress={this._onPressMenu0} activeOpacity={0.7}>
//
//                         <View style={styles.menuTouch}>
//                             <Image source={require('../imgs/menu0.png')}
//                                    style={styles.menuImg}/>
//                             <Text style={styles.menuTxt}>我要开卡</Text>
//                         </View>
//                     </TouchableOpacity>
//
//                     <TouchableOpacity style={styles.menu1} onPress={this._onPressMenu1} activeOpacity={0.7}>
//
//                         <View style={styles.menuTouch}>
//                             <Image source={require('../imgs/menu1.png')}
//                                    style={styles.menuImg}/>
//                             <Text style={styles.menuTxt}>我要签约</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </Image>
//             </View>
//         );
//
//     }
//
//     //
//     // handlePress() {
//     //     console.log('handlePress');
//     //
//     // }
//     //
//     // handleAsyncPress() {
//     //     console.log('asyncPress');
//     // }
//
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//     },
//     head: {
//         resizeMode: 'stretch',
//         width: width,
//         height: 60,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     logo: {
//         resizeMode: 'contain',
//         width: 300,
//         height: 45,
//         marginLeft: 10,
//     },
//     cell: {
//         flex: 1,
//     },
//     set: {
//         width: 35,
//         height: 35,
//         marginRight: 20,
//     },
//     setImg: {
//         resizeMode: 'contain',
//         width: 35,
//         height: 35,
//     },
//     body: {
//         flex: 1,
//         flexDirection: 'row',
//         resizeMode: 'stretch',
//         width: width,
//         height: height,
//     },
//     menu0: {
//         width: 180,
//         height: 220,
//         position: 'relative',
//         top: 120,
//         left: 280,
//     },
//     menu1: {
//         width: 180,
//         height: 220,
//         position: 'relative',
//         top: 120,
//         left: 370,
//     },
//     menuTouch: {
//         alignItems: 'center'
//     },
//     menuImg: {
//         resizeMode: 'contain',
//         width: 170,
//         height: 170,
//     },
//     menuTxt: {
//         fontFamily: 'Cochin',
//         fontSize: 20,
//         color: '#000',
//     },
// });
//
//
// function select(store) {
//     return {
//         isLoggedIn: store.userStore.isLoggedIn,
//         user: store.userStore.user,
//     }
// }
//
//
// export default connect(select)(Main);
