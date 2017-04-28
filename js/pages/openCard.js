import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    TextInput,
} from 'react-native';
import commonStyles from '../styles/common';
import DeviceStorage from '../store/DeviceStorage';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import StepTabBar from './StepTabBar';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

class OpenCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['基本信息', '持卡人信息', '我要签约'],
            tabImgPaths: [require('../imgs/step_pressed2.png'), require('../imgs/step_normal2.png'), require('../imgs/step_normal2.png')],
            isOpen: true,
            isDisabled: true,
            cardNo: '',
            count: '',
        };
    }

    _onPress() {
        Alert.alert('tips', 'Click Hint', [{
            text: 'OK', onPress: () => {
            }
        }])
    }

    _makeCard(cardNumber, number) {
        // var number = 3;
        // var card = "4527301992052256101";
        var kh = cardNumber.substring(0, 18);
        var nowCardNum;
        for (var n = 0; n < number; n++) {
            var s1 = kh;
            var k = 0;
            for (var i = 1; i <= 18; i++) {
                var s2;
                if (i % 2 == 1) {
                    s2 = s1.substring(i - 1, i);
                } else {
                    s2 = String(parseInt(s1.substring(i - 1, i)) * 2);
                }
                var len = s2.length;
                for (var l = 0; l < len; l++) {
                    k += parseInt(s2.substring(l, l + 1));
                }
            }
            kh = (kh.substring(0, 13)) + String(parseInt(kh.substring(13, 18)) + 1);
            nowCardNum = s1 + (String((10 - (k % 10)) % 10));
            // console.log('nowCardNum->' + nowCardNum);
            DeviceStorage.save(String(n), nowCardNum, (error) => {
                if (!error) {
                    console.log('save success ->');
                } else {
                    console.log('save error ->' + err);
                }
            });

            // if (err) {
            //     console.log('save error ->' + err);
            // } else {
            //     console.log('save success ->');
            // }
        }

        DeviceStorage.get(String(0)).then((tags) => {
            console.log('tags->' + tags);
            //  this.setState({
            //        tags: tags
            // })
        });
        // console.log('a->' + a);


    }

    confirm = () => {
        // Alert.alert('温馨提示', '点击了确认', [{
        //     text: 'OK', onPress: () => {
        //     }
        // }])
        this.setState({isOpen: false});
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabImgPaths = this.state.tabImgPaths;
        return (
            <View style={commonStyles.container}>
                <Image source={require('../imgs/head.png')}
                       style={commonStyles.head}>
                    <View style={{flex: 1}}>
                        <Image source={require('../imgs/logo.png')}
                               style={commonStyles.logo}/>
                    </View>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={commonStyles.titleTxt}>我要开卡</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity style={commonStyles.set} activeOpacity={0.7}
                                          onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../imgs/home.png')}
                                   style={commonStyles.setImg}/>
                        </TouchableOpacity>
                        <View style={{width: 2, flexDirection: 'row', marginRight: 12}}>
                            <View style={{width: 1, backgroundColor: '#d53d26'}}/>
                            <View style={{width: 1, backgroundColor: '#881f0d'}}/>
                        </View>
                        <TouchableOpacity style={commonStyles.set} onPress={this._onPress} activeOpacity={0.7}>
                            <Image source={require('../imgs/setting.png')}
                                   style={commonStyles.setImg}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.set}
                                          onPress={()=>this._makeCard("4527301992052256101", 3)}
                                          activeOpacity={0.7}>
                            <Image source={require('../imgs/menu.png')}
                                   style={commonStyles.setImg}/>
                        </TouchableOpacity>
                    </View>

                </Image>
                <ScrollableTabView
                    style={{marginTop: 0, marginRight: 10, marginLeft: 10}}
                    renderTabBar={() => <StepTabBar tabNames={tabNames} tabImgPaths={tabImgPaths}/>}
                >
                    <Text tabLabel='基本信息'>基本信息</Text>
                    <Text tabLabel='持卡人信息'>持卡人信息</Text>
                    <Text tabLabel='我要签约'>我要签约</Text>
                </ScrollableTabView>

                <Modal
                    style={styles.modal}
                    ref='modal'
                    isOpen={this.state.isOpen}
                    animationDuration={0}
                    position={"center"}
                    onClosed={() => this.setState({isOpen: false})}
                >
                    <Text style={{marginTop: 20, marginBottom: 20, color: '#000', fontSize: 20}}>卡号初始化</Text>
                    <View style={{backgroundColor: '#CCC', height: 1, width: 400}}/>
                    <View style={styles.input_area}>
                        <Text style={styles.input_title}>卡号：</Text>
                        <TextInput style={styles.input_body} placeholder={'首张卡卡号'}
                                   onChangeText={(cardNo) => this.setState({cardNo})}/>
                    </View>
                    <View style={styles.input_area}>
                        <Text style={styles.input_title}>数量：</Text>
                        <TextInput style={styles.input_body} placeholder={'生成卡数量'}
                                   onChangeText={(number) => this.setState({number})}/>
                    </View>
                    <Button onPress={this.confirm}
                            style={styles.btn}>确认</Button>

                    <Button onPress={()=>this.setState({isOpen: false})}
                            style={styles.btn}>取消</Button>
                </Modal>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: 300,
        borderRadius: 8,
        paddingBottom: 10,
    },
    input_area: {
        width: 400,
        flexDirection: 'row',
        height: 50, justifyContent: 'center',
        alignItems: 'center',
    },
    input_title: {
        width: 100,
        color: '#000',
        fontSize: 18,
        textAlign: 'right',
    },
    input_body: {
        width: 300,
        height: 50
    },
    btn: {
        margin: 10,
        backgroundColor: "#FF0000",
        color: "white",
        padding: 10,
        width: 270,
        height: 50,
        borderRadius: 3,
    },

});
export default OpenCard;