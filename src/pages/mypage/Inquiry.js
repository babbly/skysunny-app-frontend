import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleWidth } from '../../res/layout';


export default function Inquiry({ navigation }) {


    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={[layout.topBar]}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../img/common/backarrow.png')}
                            style={[layout.icon24]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[layout.topTxt]}>이용문의</Text>
                    </View>
                </View>
            </View>

            <View style={[layout.container, { backgroundColor: color.white }]}>
                <TouchableOpacity onPress={() => navigation.navigate('AppInquiry', {})}>
                    <View style={styles.menuTab}>
                        <Text style={styles.menuText}> 앱 이용문의</Text>
                        <Image
                            source={require('../../img/common/backarrow2.png')}
                            style={[layout.icon2420]}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('InquiryType', {})}>
                    <View style={styles.menuTab}>
                        <Text style={styles.menuText}> 입점/제휴문의</Text>
                        <Image
                            source={require('../../img/common/backarrow2.png')}
                            style={[layout.icon2420]}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('StoreInquiry', {})}>
                    <View style={styles.menuTab}>
                        <Text style={styles.menuText}> 지점 이용문의</Text>
                        <Image
                            source={require('../../img/common/backarrow2.png')}
                            style={[layout.icon2420]}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyInquiry', {})}>
                    <View style={styles.menuTab}>
                        <Text style={styles.menuText}> 나의 문의내역</Text>
                        <Image
                            source={require('../../img/common/backarrow2.png')}
                            style={[layout.icon2420]}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>


            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    menuTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: scaleWidth(330),
        marginTop: 20
    },
    menuText: {
        color: color.black,
        fontFamily: 'NotoSans KR',
        fontWeight: '500',
        fontSize: scaleFont(15),
        lineHeight: scaleFont(24),
    },
});

