import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function StudyRoomPass({ navigation }) {
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
                            <Text style={[layout.topTxt]}>스터디룸 구매</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: scaleWidth(360), justifyContent: 'center', alignItems: 'center', paddingVertical: scaleWidth(21) }}>
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
                                source={require("../../img/mypage/studyroom.png")}
                                style={{ width: 14, height: 14, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{
                                fontWeight: '400',
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(16),
                                justifyContent: 'bottom',
                            }}>이용하실 스터디룸을 선택하세요.</Text>
                        </View>
                        {/* 이용권 */}
                        <View style={{ alignItems: 'center', paddingVertical: scaleHeight(15) }}>
                            <TouchableOpacity onPress={() => setSelectedType('cash')}
                                style={{
                                    width: scaleWidth(330),
                                    borderWidth: 1,
                                    borderColor: selectedType === 'cash' ? color.gray900 : color.mediumGray,
                                    backgroundColor: selectedType === 'cash' ? color.mainColor : color.white,
                                    paddingVertical: scaleHeight(5),
                                    paddingHorizontal: scaleWidth(5),
                                    borderRadius: 6

                                }}>

                                <View style={{ flexDirection: 'row', }}>
                                    <View>
                                        <Image
                                            source={require("../../img/home/studyRoomExample.png")}
                                            style={{
                                                width: 80, height: 80, marginRight: 10, borderRadius: 6
                                            }}
                                            resizeMode="contain"
                                        />
                                    </View>

                                    <View style={{ width: scaleWidth(225), }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                                            <Text style={[styles.title, { color: selectedType === 'cash' ? color.gray900 : color.gray700, }]}>
                                                4인룸 1번방</Text>
                                            <View style={{
                                                borderRadius: 6,
                                                width: scaleWidth(87),
                                                backgroundColor: 'rgba(0,0,0,0.1)'
                                            }}>
                                                <Text style={{
                                                    color: color.gray900,
                                                    fontSize: scaleFont(12),
                                                    lineHeight: scaleFont(16),
                                                    textAlign: 'center',
                                                    paddingVertical: scaleHeight(5),
                                                    paddingHorizontal: scaleWidth(5)
                                                }}>
                                                    4,000원 / 30분
                                                </Text>
                                            </View>
                                        </View>
                                        <Text style={[styles.text1, {
                                            color: selectedType === 'cash' ? color.gray900 : color.gray700,
                                            textOverflow: 'ellipsis',
                                        }]}
                                            numberOfLines={2}
                                            ellipsizeMode="tail">
                                            화이트보드, 모니터 구비(HDMI 연결 가능)완료 과외 수업 및 스터디 모임용으로 이용 가능합니다.</Text>

                                    </View>
                                </View>
                            </TouchableOpacity>



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
                <TouchableOpacity onPress={() => movePage('StudyRoomTicket')} >
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
        fontSize: scaleFont(12),
        lineHeight: scaleFont(15),
        color: color.gray900
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
