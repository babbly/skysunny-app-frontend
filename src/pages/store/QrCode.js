import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity,
    View
} from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function QrCode({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={{
                    height: scaleHeight(290),
                    backgroundColor: color.mainColor,
                    width: scaleWidth(360),
                }}>
                    <View style={{
                        height: scaleHeight(290),
                        width: scaleWidth(360),
                        paddingVertical: 9,
                        paddingHorizontal: 15,
                        paddingTop: scaleHeight(40),
                    }}>
                        <View style={{
                            marginTop: scaleHeight(35), marginHorizontal: scaleWidth(25),
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 18,
                                lineHeight: scaleFont(26),
                                marginBottom: scaleHeight(8),
                                textAlign: 'center'
                            }}>QR코드를 출입문 리더기에{"\n"}인식시켜주세요.</Text>

                        </View>
                    </View>
                </View>
                {/* qr 박스 */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.menuBox}>
                        <Image source={require('../../img/home/qr.png')}
                            style={{ width: scaleWidth(170), height: scaleHeight(170), }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../img/home/time.png')}
                                style={[layout.icon18, { marginRight: 4 }]} />
                            <Text style={styles.qrTimer}>인증시간 00:25</Text>
                        </View>
                    </View>

                    {/* 기본내용 */}
                    <View style={{
                        width: scaleWidth(250),
                        justifyContent: 'center',
                    }}>
                        <View style={styles.textBox}>
                            <View style={styles.innerTextBox}>
                                <Image
                                    source={require('../../img/home/seat2.png')}
                                    style={[layout.icon18, { marginRight: 10 }]}
                                    resizeMode="contain"
                                />
                                <Text style={styles.titleTxt}>이용좌석</Text>
                            </View>
                            <Text style={styles.text}>61번</Text>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.innerTextBox}>
                                <Image
                                    source={require('../../img/home/locker2.png')}
                                    style={[layout.icon18, { marginRight: 10 }]}
                                    resizeMode="contain"
                                />
                                <Text style={styles.titleTxt}>출입문</Text>
                            </View>
                            <Text style={styles.text}>#01234</Text>
                        </View>
                        <View style={styles.textBox}>
                            <View style={styles.innerTextBox}>
                                <Image
                                    source={require('../../img/home/wifi.png')}
                                    style={[layout.icon18, { marginRight: 10 }]}
                                    resizeMode="contain"
                                />
                                <Text style={styles.titleTxt}>와이파이</Text>
                            </View>
                            <Text style={styles.text}>a15333963</Text>
                        </View>

                    </View>
                    {/* 결제내역 */}
                    <View style={{
                        width: scaleWidth(330),
                        borderRadius: 6,
                        borderWidth: 1,
                        borderColor: color.gray200,
                        backgroundColor: color.white,
                        paddingHorizontal: scaleWidth(15),
                        paddingTop: scaleHeight(15),
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
                        <View style={[layout.line, { marginBottom: scaleHeight(12) }]} />
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>이용정보</Text>
                            <Text style={styles.text}>24.07.01 14:00~16:30</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>유효기간</Text>
                            <Text style={styles.text}>15일</Text>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={styles.titleTxt}>잔여정보</Text>
                            <Text style={styles.text}>3시간</Text>
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
    menuBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: 6,
        paddingHorizontal: scaleWidth(37.5),
        paddingTop: scaleHeight(30),
        paddingBottom: scaleHeight(11),
        marginTop: scaleHeight(-150),
        marginBottom: scaleHeight(15)
    },

    myMenu: {
        flexDirection: 'row',
        marginBottom: scaleHeight(25),
    },
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
    innerTextBox: {
        flexDirection: 'row',
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
    qrTimer: {
        fontSize: scaleFont(13),
        lineHeight: scaleFont(20),
        color: color.gray500,
        paddingVertical: scaleHeight(12),
        textAlign: 'center'
    },
});
