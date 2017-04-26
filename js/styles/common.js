'use strict';
import React from 'react';
import {
    StyleSheet,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    head: {
        resizeMode: 'stretch',
        width: width,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 45,
        marginLeft: 10,
    },
    cell: {
        flex: 1,
    },
    set: {
        width: 35,
        height: 35,
        marginRight: 20,
    },
    setImg: {
        resizeMode: 'contain',
        width: 35,
        height: 35,
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        resizeMode: 'stretch',
        width: width,
        height: height,
    },
    titleTxt: {
        fontFamily: 'Cochin',
        fontSize: 22,
        color: '#FFF',
    },

});
module.exports = styles;
