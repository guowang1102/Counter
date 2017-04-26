import React, {Component} from 'react';
import {
    AppRegistry,
    commonStylesheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native';
import commonStyles from '../styles/common';
import DeviceStorage from '../store/DeviceStorage'

class OpenCard extends Component {

    constructor(props) {
        super(props);
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

    render() {
        return (
            <View style={commonStyles.container}>
                <Image source={require('../imgs/head.png')}
                       style={commonStyles.head}>
                    <View style={{flex:1}}>
                        <Image source={require('../imgs/logo.png')}
                               style={commonStyles.logo}/>
                    </View>

                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={commonStyles.titleTxt}>我要开卡</Text>
                    </View>
                    <View style={{flex:1,flexDirection: 'row',justifyContent:'flex-end'}}>
                        <TouchableOpacity style={commonStyles.set} activeOpacity={0.7}
                                          onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../imgs/home.png')}
                                   style={commonStyles.setImg}/>
                        </TouchableOpacity>
                        <View style={{width:2,flexDirection: 'row',marginRight:12}}>
                            <View style={{width:1,backgroundColor:'#d53d26'}}/>
                            <View style={{width:1,backgroundColor:'#881f0d'}}/>
                        </View>
                        <TouchableOpacity style={commonStyles.set} onPress={this._onPress} activeOpacity={0.7}>
                            <Image source={require('../imgs/setting.png')}
                                   style={commonStyles.setImg}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.set} onPress={()=>this._makeCard("4527301992052256101",3)}
                                          activeOpacity={0.7}>
                            <Image source={require('../imgs/menu.png')}
                                   style={commonStyles.setImg}/>
                        </TouchableOpacity>
                    </View>

                </Image>
            </View>
        );

    }
}
export default OpenCard;