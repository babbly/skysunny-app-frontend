import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { scaleHeight, scaleWidth } from '../res/layout';

export default function Checkbox({ checked, label, onPress, style, labelStyle }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Image
                source={
                    checked
                        ? require('../img/common/check-on.png')
                        : require('../img/common/check-off.png')
                }
                style={styles.box}
                resizeMode="contain"
            />
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    box: {
        width: scaleWidth(15),
        height: scaleHeight(15),
        marginRight: scaleWidth(8),
    },
    label: {
        fontSize: 14,
        color: '#000',
    },
});
