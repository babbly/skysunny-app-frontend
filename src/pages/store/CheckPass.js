import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';
import BannerSlider from '../../components/BannerSlider';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function CheckPass({ navigation }) {

    const checkCoupon = () => {
        navigation.navigate('PageStack', {
            screen: 'CheckCoupon'
        });
    };

    const storeDetail = () => {
        navigation.navigate('PageStack', {
            screen: 'StoreDetail'
        });
    };

    const [paymentMethod, setPaymentMethod] = useState('card');


    const bannerImages2 = [
        require('../../img/home/bannerexample.png'),
        require('../../img/home/bannerexample.png'),
        require('../../img/home/bannerexample.png'),
    ];

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                {/* 상단 바 */}
                <View style={layout.topBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={layout.backBox} onPress={() => navigation.goBack()}>
                            <Image source={require('../../img/common/backarrow.png')} style={{ width: scaleWidth(24), height: scaleHeight(24) }} resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={layout.topText}>구매확인</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: scaleWidth(360), }}>
                    <BannerSlider banners={bannerImages2} type='bottom' />
                </View>

                <View style={[layout.container,]}>
                    <View style={{ width: scaleWidth(330), marginTop: scaleHeight(20), }}>
                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(16),
                            color: color.blackGray,
                            textAlign: 'left',
                        }}>
                            구매정보
                        </Text>

                    </View>
                    <View style={{
                        width: scaleWidth(330),
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: '#dbdcdd',
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
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>이용정보</Text>
                            <Text style={styles.text}>24.07.01 14:00~16:30</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>1일 이용정보</Text>
                            <Text style={styles.text}>38,200캐시</Text>
                        </View>
                        <View style={[layout.line, { marginBottom: scaleHeight(12) }]} />
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>할인쿠폰</Text>
                            <TouchableOpacity onPress={checkCoupon}
                                style={{
                                    width: scaleWidth(58.6),
                                    height: scaleHeight(20),
                                    borderWidth: 1,
                                    backgroundColor: color.mainColor,
                                    borderRadius: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(16), textAlign: 'center', color: color.blackGray }}>쿠폰선택</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.dashedLine, { marginBottom: scaleHeight(12) }]} />
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>할인금액</Text>
                            <Text style={styles.text}>5,000원</Text>
                        </View>

                    </View>
                    {/* 결제수단 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: scaleHeight(15), width: scaleWidth(330) }}>
                        <TouchableOpacity
                            onPress={() => setPaymentMethod('card')}
                            style={{
                                borderWidth: 1,
                                width: scaleWidth(157.5),
                                alignItems: 'center',
                                paddingVertical: scaleHeight(8),
                                borderRadius: 6,
                                backgroundColor: paymentMethod === 'card' ? color.mainColor : color.white,
                                borderColor: paymentMethod === 'card' ? color.black : '#c1c3c5',
                            }}
                        >
                            <Text style={{ color: paymentMethod === 'card' ? color.black : '#c1c3c5', }}>신용/체크카드</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setPaymentMethod('bank')}
                            style={{
                                borderWidth: 1,
                                width: scaleWidth(157.5),
                                alignItems: 'center',
                                paddingVertical: scaleHeight(8),
                                borderRadius: 6,
                                backgroundColor: paymentMethod === 'bank' ? color.mainColor : color.white,
                                borderColor: paymentMethod === 'bank' ? color.black : '#c1c3c5',
                            }}
                        >
                            <Text style={{ color: paymentMethod === 'bank' ? color.black : '#c1c3c5', }}>무통장입금</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: scaleHeight(20),
                            width: scaleWidth(330),
                        }}>
                            <Image
                                source={require('../../img/home/information.png')}
                                style={{ width: scaleWidth(14), height: scaleHeight(14), marginRight: 4 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(20), color: color.black, }}>
                                안내사항</Text>
                        </View>
                        <Text style={{ marginTop: scaleHeight(8), fontSize: scaleFont(12), lineHeight: scaleFont(15), color: color.black }}>
                            안내사항입니다.</Text>
                    </View>
                </View>

                {/* 하단 버튼 */}

                <View style={{
                    width: scaleWidth(360),
                    height: scaleHeight(52),
                    paddingHorizontal: scaleWidth(15),
                    backgroundColor: color.white,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontSize: scaleFont(15),
                        lineHeight: scaleFont(16),
                        color: color.black,
                        fontWeight: '400'
                    }}>
                        결제금액
                    </Text>
                    <Text style={{
                        fontSize: scaleFont(15),
                        lineHeight: scaleFont(16),
                        color: color.black,
                        fontWeight: '500'
                    }}>
                        45,000원
                    </Text>
                </View>
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        onPress={storeDetail}
                    >
                        <Text style={styles.bottomButtonText}>구매하기</Text>
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
    bottomButtonWrapper: {
        // position: 'absolute',
        bottom: 0,
        width: scaleWidth(360),
        height: scaleHeight(52),
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButtonText: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.blackGray
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
        color: color.blackGray,
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16)
    },
    dashedLine: {
        borderStyle: 'dashed',
        borderTopWidth: 1,
        borderColor: '#dbdcdd',
    }
});


