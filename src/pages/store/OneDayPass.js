import React, { useState } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function OneDayPass({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };
    const [passVisible, setPassVisible] = useState(false);
    const [selectedType, setSelectedType] = useState('new');


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
                            <Text style={[layout.topTxt]}>이용권 구매</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: scaleWidth(360), justifyContent: 'center', alignItems: 'center', paddingVertical: scaleHeight(20) }}>
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

                </View>

                {/* 상세내역 */}
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
                            <TouchableOpacity onPress={() => setSelectedType('new')}>
                                <ImageBackground
                                    source={
                                        selectedType === 'new'
                                            ? require('../../img/home/passBg-b.png')
                                            : require('../../img/home/passBg-w.png')
                                    }
                                    style={styles.passCard}
                                    resizeMode="contain"
                                >
                                    <Text style={[styles.title, { color: color.gray900 }]}>신규구매</Text>
                                    <Text style={[styles.text1, { color: color.gray900 }]}>아직 이용중인 좌석이 없으시면 선택해주세요.</Text>
                                    <Text style={[styles.text2, { color: color.gray900 }]}>- 신규 방문/보유 이용권 시간을 모두 소진한 회원님</Text>

                                </ImageBackground>
                            </TouchableOpacity>

                            <View style={{ marginTop: scaleHeight(10) }}>
                                <TouchableOpacity onPress={() => setSelectedType('extend')}>
                                    <ImageBackground
                                        source={
                                            selectedType === 'extend'
                                                ? require('../../img/home/passBg-b.png')
                                                : require('../../img/home/passBg-w.png')
                                        }
                                        style={styles.passCard}
                                        resizeMode="contain"
                                    >
                                        <Text style={[styles.title, { color: color.gray700 }]}>연장구매</Text>
                                        <Text style={[styles.text1, { color: color.gray700 }]}>현재 1일 이용권을 이용중이시면 선택해주세요.</Text>
                                        <Text style={[styles.text2, { color: color.gray700 }]}>- 구매한 보유 이용권의 잔여시간이 존재하는 회원님</Text>

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
                                - 1일 이용권은 당일권으로 퇴실처리시 해당 이용권으로 재입장이 불가능하며, 퇴실 후 잔여시간 환불은 불가능합니다.</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            {/* 하단 버튼 */}
            {/* <View style={styles.bottomButtonMain2}>
                <TouchableOpacity onPress={() => setPassVisible(true)}
                >
                    <Text style={styles.bottomButtonTxt}>다음 단계로</Text>
                </TouchableOpacity>
                <Dialog
                    visible={passVisible}
                    title="현재 이용중인 1일 이용권이 있어요!"
                    message={`잔여시간 소진 전 추가 구매시 '연장구매'를 선택해주세요.`}
                    onClose={() => setPassVisible(false)}
                    type="oneBtn"
                />
            </View> */}

            <View style={styles.bottomButtonMain2}>
                <TouchableOpacity onPress={() => movePage('SelectSeat')} >
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
        marginBottom: scaleHeight(5)
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
