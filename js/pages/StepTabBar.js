/**
 * Created by wells on 2017/4/27 0027.
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

class StepTabBar extends Component {


    setAnimationValue({value}) {
        console.log(value);
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

// <Icon
// name={this.props.tabIconNames[i]} // 图标
// size={30}
// color={color}/>


    // case R.id.step1:
    // viewPager.setCurrentItem(0);
    // step1.setTextColor(getResources().getColor(R.color.white));
    // step1.setBackgroundResource(R.mipmap.busi_step1_pressed);
    // step2.setBackgroundResource(R.mipmap.busi_step2_normal1);
    // step3.setBackgroundResource(R.mipmap.busi_step3_normal);
    // break;
    // case R.id.step2:
    // viewPager.setCurrentItem(1);
    // step2.setTextColor(getResources().getColor(R.color.white));
    // step2.setBackgroundResource(R.mipmap.busi_step2_pressed);
    // step1.setBackgroundResource(R.mipmap.busi_step1_normal2);
    // step3.setBackgroundResource(R.mipmap.busi_step3_normal);
    // break;
    // case R.id.step3:
    // viewPager.setCurrentItem(2);
    // step3.setTextColor(getResources().getColor(R.color.white));
    // step3.setBackgroundResource(R.mipmap.busi_step3_pressed);
    // step2.setBackgroundResource(R.mipmap.busi_step2_normal2);
    // step1.setBackgroundResource(R.mipmap.busi_step1_normal1);
    // break;

    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} activeOpacity={1}>
                <View style={styles.tabItem}>
                    <Image source={this.props.tabImgPaths[i]} style={styles.img}>
                        {i == this.props.activeTab ? <Text style={{color: '#fff'}}>
                            {this.props.tabNames[i]}
                        </Text> : <Text style={{color: '#79868d'}}>
                            {this.props.tabNames[i]}
                        </Text>}
                    </Image>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}

StepTabBar.propTypes = {
    goToPage: React.PropTypes.func, // 跳转到对应tab的方法
    activeTab: React.PropTypes.number, // 当前被选中的tab下标
    tabs: React.PropTypes.array, // 所有tabs集合
    tabNames: React.PropTypes.array, // 保存Tab名称
    // tabIconNames: React.PropTypes.array, // 保存Tab图标
    tabImgPaths: React.PropTypes.array, //保存图片路径
}

const styles = StyleSheet.create({
        tabs: {
            flexDirection: 'row',
            height: 50,
        },

        tab: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        tabItem: {
            flexDirection: 'column',
            alignItems: 'center',
        },

        title: {
            color: '#FFF'
        },
        img: {
            width: width / 3,
            height: 50,
            resizeMode: 'contain',
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
    ;


export default StepTabBar;