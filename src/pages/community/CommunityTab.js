import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function CommunityTab({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={layout.backBox} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../img/common/backarrow.png')}
                            style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={layout.topText}>커뮤니티</Text>
                    </View>
                </View>
            </View>
            <View style={[layout.container, { justifyContent: 'center', }]}>

                <Image
                    source={require("../../img/common/update.png")}
                    style={{ width: 150, height: 150, }}
                    resizeMode="contain"
                />
                <Text style={{
                    fontWeight: '350',
                    fontSize: scaleFont(16),
                    lineHeight: scaleFont(26),
                    textAlign: 'center'
                }}>
                    페이지 업데이트중이에요.{"\n"}조금만 기다려주세요!
                </Text>
            </View>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({

});
