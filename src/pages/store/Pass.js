import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function Pass({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const [selectedType, setSelectedType] = useState('cash');


    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
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
                            <Text style={[layout.topTxt]}>정기권 구매</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: scaleWidth(360), justifyContent: 'center', alignItems: 'center', paddingVertical: scaleWidth(20) }}>
                    <Text style={{
                        fontSize: scaleFont(16),
                        lineHeight: scaleFont(24),
                        color: color.gray900
                    }}>시작 스터디카페 인천 송도점</Text>
                    <Text style={{
                        fontSize: scaleFont(12),
                        lineHeight: scaleFont(24),
                        color: color.gray900
                    }}>인천 연수구 해돋이로 165 8층 (803호)</Text>
                    {/* 이벤트문구 */}
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: color.lightGray,
                        width: scaleWidth(330),
                        paddingHorizontal: scaleWidth(8),
                        paddingVertical: scaleHeight(6),
                        borderRadius: 6,
                        alignItems: 'center',
                        marginTop: scaleHeight(15)

                    }}>
                        <Image
                            source={require("../../img/mypage/discount.png")}
                            style={{ width: 14, height: 14, marginRight: 10 }} />
                        <Text style={{ fontSize: scaleFont(12), color: color.black, marginRight: 5 }}>
                            캐시정기권 이용시 좌석당 최대 20% 할인
                        </Text>
                    </View>
                </View>

                {/* 티켓 */}
                <View style={[layout.container, { backgroundColor: color.white }]}>
                    <View style={{
                        flex: 1,
                        width: scaleWidth(360),
                        paddingVertical: scaleHeight(20),
                        paddingHorizontal: scaleWidth(15),
                        backgroundColor: color.lightGray
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={require("../../img/history/ticket.png")}
                                style={{ width: 14, height: 14, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{
                                fontWeight: '400',
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(16),
                                justifyContent: 'bottom',
                            }}>이용권을 선택해주세요.</Text>
                        </View>
                        {/* 이용권 */}
                        <View style={{ alignItems: 'center', paddingVertical: scaleHeight(15) }}>
                            <TouchableOpacity onPress={() => setSelectedType('cash')}>
                                <ImageBackground
                                    source={
                                        selectedType === 'cash'
                                            ? require('../../img/home/passBg-b.png')
                                            : require('../../img/home/passBg-w.png')
                                    }
                                    style={styles.passCard}
                                    resizeMode="contain"
                                >
                                    <Text style={[styles.title, { color: selectedType === 'cash' ? color.gray900 : color.gray700, }]}>캐시정기권</Text>
                                    <Text style={[styles.text1, { color: selectedType === 'cash' ? color.gray900 : color.gray700, }]}>전국 스카스카 가맹점에서 사용하실 수 있습니다.</Text>
                                    <Text style={[styles.text2, { color: selectedType === 'cash' ? color.gray900 : color.gray700, }]}>- 이용권 설명란</Text>

                                </ImageBackground>
                            </TouchableOpacity>

                            <View style={{ marginTop: scaleHeight(10) }}>
                                <TouchableOpacity onPress={() => setSelectedType('free')}>
                                    <ImageBackground
                                        source={
                                            selectedType === 'free'
                                                ? require('../../img/home/passBg-b.png')
                                                : require('../../img/home/passBg-w.png')
                                        }
                                        style={styles.passCard}
                                        resizeMode="contain"
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[styles.title, { color: selectedType === 'free' ? color.gray900 : color.gray700, marginRight: scaleWidth(5) }]}>기간정기권</Text>
                                            <Text style={{
                                                borderLeftWidth: 1, borderLeftColor: color.gray700, height: scaleHeight(16),
                                                textAlign: 'center', paddingLeft: scaleWidth(5)
                                            }}>자유석</Text>
                                        </View>
                                        <Text style={[styles.text1, { color: selectedType === 'free' ? color.gray900 : color.gray700, }]}>결제한 가맹점에서만 사용하실 수 있습니다.</Text>
                                        <Text style={[styles.text2, { color: selectedType === 'free' ? color.gray900 : color.gray700, }]}>- 이용권 설명란</Text>

                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: scaleHeight(10) }}>
                                <TouchableOpacity onPress={() => setSelectedType('fix')}>
                                    <ImageBackground
                                        source={
                                            selectedType === 'fix'
                                                ? require('../../img/home/passBg-b.png')
                                                : require('../../img/home/passBg-w.png')
                                        }
                                        style={styles.passCard}
                                        resizeMode="contain"
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[styles.title, { color: selectedType === 'fix' ? color.gray900 : color.gray700, marginRight: scaleWidth(5) }]}>기간정기권</Text>
                                            <Text style={{
                                                borderLeftWidth: 1, borderLeftColor: color.gray700, height: scaleHeight(16),
                                                textAlign: 'center', paddingLeft: scaleWidth(5)
                                            }}>고정석</Text>
                                        </View>
                                        <Text style={[styles.text1, { color: selectedType === 'fix' ? color.gray900 : color.gray700, }]}>해당 매장의 지정된 좌석만 에약이 가능합니다.</Text>
                                        <Text style={[styles.text2, { color: selectedType === 'fix' ? color.gray900 : color.gray700, }]}>- 이용권 설명란</Text>

                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: scaleHeight(15),
                            }}>
                                <Image
                                    source={require('../../img/home/information.png')}
                                    style={[layout.icon14]}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(20), color: color.black }}>
                                    안내사항</Text>
                            </View>
                            <Text style={{ marginTop: scaleHeight(8), fontSize: scaleFont(12), lineHeight: scaleFont(15), color: color.black }}>
                                안내사항입니다.</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {/* 하단 버튼 */}
            <View style={styles.bottomButtonMain2}>
                <TouchableOpacity onPress={() => movePage('PassTicket')} >
                    <Text style={styles.bottomButtonTxt}>다음 단계로</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    passCard: {
        width: scaleWidth(330),
        height: scaleHeight(100),
        justifyContent: 'center',
        paddingHorizontal: scaleWidth(30),
        paddingVertical: scaleWidth(18),
    },
    title: {
        fontSize: scaleFont(15),
        lineHeight: scaleFont(24),
        fontWeight: 400,
        marginBottom: scaleHeight(5)
    },
    text1: {
        fontSize: scaleFont(13),
        lineHeight: scaleFont(16),
        fontWeight: 500,
        marginBottom: scaleHeight(5),
    },
    text2: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        fontWeight: 350,
    },
    bottomButtonMain2: {
        width: scaleWidth(360),
        height: scaleHeight(52),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.mainColor,
    },
    bottomButtonTxt: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.gray900
    }
});
