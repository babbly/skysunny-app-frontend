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
                        style={{ width: 150, height: 150, }}
                        resizeMode="contain"
                    />
                    <Text style={{
                        fontWeight: '350',
                        fontSize: scaleFont(16),
                        lineHeight: scaleFont(26),
                        textAlign: 'center',
                        color: color.black
                    }}>
                        회원가입이 완료되었습니다.
                    </Text>


                    <View style={{ width: scaleWidth(310), marginTop: scaleHeight(64) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scaleHeight(10) }}>
                            <Text>아이디</Text>
                            <Text style={{ color: color.black, fontSize: scaleFont(16), lineHeight: scaleFont(24) }}>abc@naver.com</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scaleHeight(10) }}>
                            <Text>성명</Text>
                            <Text style={{ color: color.black, fontSize: scaleFont(16), lineHeight: scaleFont(24) }}>홍길동</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scaleHeight(10) }}>
                            <Text>가입일</Text>
                            <Text style={{ color: color.black, fontSize: scaleFont(16), lineHeight: scaleFont(24) }}>2025년 1월 1일</Text>
                        </View>

                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        onPress={login}
                    >
                        <Text style={styles.bottomButtonText}>로그인 바로가기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    viewButton: {
        width: scaleWidth(60),
        height: scaleHeight(20),
        backgroundColor: color.lightGray,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewButtonText: {
        textAlign: 'center',
        fontSize: scaleFont(10),
        lineHeight: scaleFont(16),
        color: color.darkGray
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
    bottomButtonText: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.blackGray
    }
});


