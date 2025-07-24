import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

export default function SignUp6({ navigation }) {

    const login = () => {
        navigation.navigate('PageStack', {
            screen: 'Login'
        });
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >

                <View style={[layout.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: color.white }]}>
                    <Image
                        source={require("../../../img/common/loginsuccess.png")}
                        style={{ width: scaleWidth(150), height: scaleHeight(150), }}
                        resizeMode="contain"
                    />
                    <Text style={{
                        color: color.black,
                        textAlign: 'center',
                        fontFamily: 'Noto Sans KR',
                        fontSize: scaleFont(16),
                        fontWeight: '300',
                        lineHeight: scaleFont(26),
                    }}>
                        회원가입이 완료되었습니다.
                    </Text>


                    <View style={{ width: scaleWidth(310), marginTop: scaleHeight(64) }}>
                        <View style={styles.txtWrapper}>
                            <Text style={styles.mainTxt}>아이디</Text>
                            <Text style={styles.subTxt}>abc@naver.com</Text>
                        </View>
                        <View style={styles.txtWrapper}>
                            <Text style={styles.mainTxt}>성명</Text>
                            <Text style={styles.subTxt}>홍길동</Text>
                        </View>
                        <View style={styles.txtWrapper}>
                            <Text style={styles.mainTxt}>가입일</Text>
                            <Text style={styles.subTxt}>2025년 1월 1일</Text>
                        </View>

                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity
                        onPress={login}
                    >
                        <Text style={[layout.bottomButtonTxt]}>로그인 바로가기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    txtWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaleHeight(10)
    },
    mainTxt: {
        color: color.grey40,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(13),
        fontWeight: '300',
        lineHeight: scaleFont(20)
    },
    subTxt: {
        color: color.black,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(16),
        fontWeight: '300',
        lineHeight: scaleFont(24)
    },
    bottomButtonWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: scaleHeight(52),
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


