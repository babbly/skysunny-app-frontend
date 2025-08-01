import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function Out({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >


                <View style={[layout.container, { justifyContent: 'center', alignItems: 'center', borderWidth: 1 }]}>

                    <Image
                        source={require("../../img/home/out2.png")}
                        style={{ width: 150, height: 150, }}
                        resizeMode="contain"
                    />
                    <View style={{ marginTop: scaleHeight(65), width: scaleWidth(330), }}>
                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(16),
                            color: color.gray900,
                            textAlign: 'left',

                        }}>
                            퇴실이 완료되었습니다.
                        </Text>

                    </View>
                    <View style={{
                        width: scaleWidth(330),
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: color.gray200,
                        backgroundColor: color.white,
                        paddingHorizontal: scaleWidth(15),
                        paddingTop: scaleHeight(15),
                        marginTop: scaleHeight(10)
                    }}>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>매장명</Text>
                            <Text style={styles.text}>abc@naver.com</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>이용권</Text>
                            <Text style={styles.text}>캐시정기권</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>상품정보</Text>
                            <Text style={styles.text}>50,000 캐시권</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>이용금액</Text>
                            <Text style={styles.text}>50,000원</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>좌석당 할인율</Text>
                            <Text style={styles.text}>시간당 정상가 10%</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>이용기간</Text>
                            <Text style={styles.text}>1개월</Text>
                        </View>
                        <View style={[layout.line, { marginBottom: scaleHeight(12) }]} />
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>이용정보</Text>
                            <Text style={styles.text}>24.07.01 14:00~16:30</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>유효기간</Text>
                            <Text style={styles.text}>20일</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>잔여정보</Text>
                            <Text style={styles.text}>38,200 캐시</Text>
                        </View>
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={styles.bottomButtonMain2}>
                    <TouchableOpacity onPress={() => movePage('StoreDetail')} >
                        <Text style={styles.bottomButtonTxt}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
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
    bottomButtonMain2: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: scaleHeight(52),
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButtonTxt: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.gray900
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaleHeight(12)
    },
    titleTxt: {
        fontWeight: '700',
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        color: color.black
    },
    text: {
        color: color.gray900,
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16)
    }
});


