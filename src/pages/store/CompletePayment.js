import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function CompletePayment({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const [paymentMethod, setPaymentMethod] = useState('card');



    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={[layout.container, { alignItems: 'center', justifyContent: 'center', }]}>

                    <Image
                        source={require('../../img/home/payment.png')}
                        style={{ width: scaleWidth(150), height: scaleHeight(150), marginTop: 70 }}
                        resizeMode="contain"
                    />

                    <View style={{ width: scaleWidth(330), marginTop: scaleHeight(50), }}>
                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(16),
                            color: color.gray900,
                            textAlign: 'left',
                        }}>
                            결제가 완료되었습니다.
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
                            <Text style={styles.text}>시작 스터디카페 인천 송도점</Text>
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
                            <Text style={styles.titleTxt}>이용기간</Text>
                            <Text style={styles.text}>1개월</Text>
                        </View>
                        <View style={[layout.line, { marginBottom: scaleHeight(12) }]} />
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>이용정보</Text>
                            <Text style={styles.text}>24.07.01 14:00~16:30</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>1일 이용정보</Text>
                            <Text style={styles.text}>38,200캐시</Text>
                        </View>

                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>주분번호</Text>
                            <Text style={styles.text}>22123022889934</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>결제일시</Text>
                            <Text style={styles.text}>2024-03-03 10:00:10</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>결제금액</Text>
                            <Text style={styles.text}>45,000원</Text>
                        </View>

                    </View>


                    {/* 입장하기 버튼 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: scaleWidth(330), marginVertical: scaleHeight(15) }}>
                        <TouchableOpacity
                            onPress={() => movePage('Qr')}
                            style={{
                                borderWidth: 1,
                                width: scaleWidth(330),
                                alignItems: 'center',
                                paddingVertical: scaleHeight(8),
                                borderRadius: 6,
                                backgroundColor: color.white,
                                borderColor: color.black,
                            }}
                        >
                            <Text style={{ color: paymentMethod === 'card' ? color.black : color.gray300, }}>입장하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={styles.bottomButtonMain2}>
                    <TouchableOpacity
                        onPress={() => movePage('StoreDetail')}
                    >
                        <Text style={styles.bottomButtonTxt}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    bottomButtonMain2: {
        position: 'absolute',
        bottom: 0,
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
    },
    dashedLine: {
        borderStyle: 'dashed',
        borderTopWidth: 1,
        borderColor: color.gray200,
    }
});


