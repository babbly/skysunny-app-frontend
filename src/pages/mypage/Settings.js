import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function Settings({ navigation }) {

    const logout = () => {
        navigation.navigate('PageStack', {
            // screen: 'LogOut'
        });
    };

    const [toggleStates, setToggleStates] = useState([false, false, false, false, false]);

    const toggleSetting = (index) => {
        const newStates = [...toggleStates];
        newStates[index] = !newStates[index];
        setToggleStates(newStates);
    };

    const menus = [
        "마케팅 수신동의",
        "자동 로그아웃 설정",
        "푸쉬 알림 설정",
        "보호자 알림 설정",
        "위치정보 수신여부"
    ];

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
                        <Text style={[layout.topTxt]}>설정</Text>
                    </View>
                </View>
            </View>

            <View style={[layout.container, { backgroundColor: color.white }]}>

                {menus.map((menuText, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => toggleSetting(idx)}
                        activeOpacity={0.7}
                    >
                        <View style={styles.menuTab}>
                            <Text style={styles.menuText}>{menuText}</Text>
                            <Image
                                source={
                                    toggleStates[idx]
                                        ? require('../../img/mypage/settingUnBtn.png')
                                        : require('../../img/mypage/settingBtn.png')
                                }
                                style={{
                                    width: scaleWidth(24),
                                    height: scaleHeight(20),
                                }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                //    onPress={() => navigation.navigate('AppFaq', {})}
                >
                    <View style={styles.menuTab}>
                        <Text style={styles.menuText}>서비스 소개</Text>
                        <Image
                            source={require('../../img/common/backarrow2.png')}
                            style={{
                                width: scaleWidth(24),
                                height: scaleHeight(20),
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                //    onPress={() => navigation.navigate('AppFaq', {})}
                >
                    <View style={styles.menuTab}>
                        <Text style={styles.menuText}>이용약관</Text>
                        <Image
                            source={require('../../img/common/backarrow2.png')}
                            style={{
                                width: scaleWidth(24),
                                height: scaleHeight(20),
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                //    onPress={() => navigation.navigate('AppFaq', {})}
                >
                    <View style={styles.menuTab}>
                        <Text style={styles.menuText}>개인정보처리방침</Text>
                        <Image
                            source={require('../../img/common/backarrow2.png')}
                            style={{
                                width: scaleWidth(24),
                                height: scaleHeight(20),
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

                <View style={styles.menuTab}>
                    <Text style={styles.menuText}>버전</Text>

                    <Text>V 1.0.0</Text>
                </View>


                <View style={styles.menuTab}>
                    <Text style={styles.menuText}>고객센터</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity
                        //    onPress={() => navigation.navigate('AppFaq', {})}
                        >
                            <Image
                                source={require('../../img/home/call.png')}
                                style={{
                                    width: scaleWidth(24),
                                    height: scaleHeight(20),
                                }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                        //    onPress={() => navigation.navigate('AppFaq', {})}
                        >
                            <Image
                                source={require('../../img/home/talk.png')}
                                style={{
                                    width: scaleWidth(24),
                                    height: scaleHeight(20),
                                }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={{ marginBottom: scaleHeight(20) }}>
                <Text style={{
                    color: color.fontGray,
                    textAlign: 'center',
                    fontFamily: 'Noto Sans KR',
                    fontSize: scaleFont(14),
                    fontWeight: '300',
                    lineHeight: scaleFont(20),
                }}>회원탈퇴를 원하시는 분은
                    <Text
                        // onPress={{}}
                        style={{
                            color: color.black,
                            fontFamily: 'Noto Sans KR',
                            fontSize: scaleFont(14),
                            fontWeight: '700',
                            lineHeight: scaleFont(20)
                        }}> 여기</Text>
                    를 눌러주세요.
                </Text>
            </View>
            {/* 하단 버튼 */}
            <View style={[layout.bottomButtonGray]}>
                <TouchableOpacity
                    onPress={logout}
                >
                    <Text style={[layout.bottomButtonTxt]}>로그아웃</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    menuTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignSelf: 'stretch',
        width: scaleWidth(330),
        marginTop: scaleHeight(25)
    },
    menuText: {
        color: color.black,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(15),
        fontWeight: '500',
        lineHeight: scaleFont(24),
    },
});

