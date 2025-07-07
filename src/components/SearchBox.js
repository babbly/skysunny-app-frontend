import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import color from '../res/color';
import { scaleFont, scaleHeight, scaleWidth } from '../res/layout';

const SearchBox = () => {
    return (
        <View style={styles.searchContainer}>

            <TextInput
                placeholder="매장명을 입력하세요."
                placeholderTextColor="#c4c4c4"
                style={styles.input}
                editable={false} // 입력 비활성화
            // value={searchTxt}
            // onChangeText={text => {
            //     searchList(text.trim());
            // }}
            />
            <Image
                source={require('../img/common/search2.png')}
                style={styles.icon}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: color.lightGray,
        width: scaleWidth(330),
        height: scaleHeight(40),
        paddingHorizontal: scaleWidth(10),
    },
    icon: {
        width: scaleWidth(24),
        height: scaleHeight(24),
        marginRight: scaleWidth(8),
    },
    input: {
        flex: 1,
        fontSize: scaleFont(14),
        color: color.black,
    },
});

export default SearchBox;
