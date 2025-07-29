import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function MyPageTab({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, }}>
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
                        paddingTop: scaleHeight(40)
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row', }}>
                                <TouchableOpacity style={[layout.backBox]}
                                    onPress={() => navigation.goBack()}>
                                    <Image
                                        source={require("../../img/common/backarrow.png")}
                                        style={[layout.icon24]}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={[layout.backBox]}
                                    onPress={() => movePage('Settings')} >
                                    <Image
                                        source={require("../../img/common/setting.png")}
                                        style={{ width: 21.36, height: 22.26, }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ marginTop: scaleHeight(35), marginHorizontal: scaleWidth(25) }}>
                            <Text style={{
                                color: color.black,
                                fontFamily: 'BMDoHyeon',
                                fontSize: scaleFont(18),
                                fontWeight: '400',
                                lineHeight: scaleFont(26),
                                marginBottom: scaleHeight(8)
                            }}>홍길동 회원님, 반가워요!</Text>
                            <Text style={{
                                color: color.black,
                                fontFamily: 'NotoSans KR',
                                fontSize: scaleFont(14),
                                fontWeight: '300',
                                lineHeight: scaleFont(26),
                            }}>오늘도 스카스카와 함께 열공해볼까요?</Text>
                        </View>
                    </View>

                    {/* 메뉴박스 */}
                    <View style={styles.menuBox}>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('MyInfo')} >
                            <Image
                                source={require("../../img/mypage/myinfo.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>내 정보관리</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('PaymentHistory')} >
                            <Image
                                source={require("../../img/mypage/payment.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>결제내역</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('StudyTime')} >
                            <Image
                                source={require("../../img/mypage/studyTime.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>내 공부시간</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('FavoriteStore')} >
                            <Image
                                source={require("../../img/mypage/store.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>찜한 매장</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('Coupon')} >
                            <Image
                                source={require("../../img/mypage/coupon.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>쿠폰함</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('PointHistory')} >
                            <Image
                                source={require("../../img/mypage/point.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>포인트내역</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('Notice')} >
                            <Image
                                source={require("../../img/mypage/notice.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>공지사항</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={() => movePage('Inquiry')} >
                            <Image
                                source={require("../../img/mypage/inquiry.png")}
                                style={styles.menuIcon}
                                resizeMode="contain"
                            />
                            <Text style={styles.menuTxt}>이용문의</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    menuBox: {
        width: scaleWidth(310),
        paddingHorizontal: scaleWidth(25),
        paddingTop: scaleHeight(25),

        position: 'absolute',
        top: scaleHeight(200),
        marginHorizontal: scaleWidth(25),

        borderRadius: 6,
        borderColor: color.mediumGray,
        borderWidth: 1,
        backgroundColor: color.white,
        // zIndex: 10,
    },
    myMenu: {
        flexDirection: 'row',
        marginBottom: scaleHeight(25),
    },
    menuIcon: {
        width: scaleWidth(24),
        height: scaleHeight(20),
        marginRight: 10
    },
    menuTxt: {
        color: color.black,
        fontFamily: 'NotoSans KR',
        fontSize: scaleFont(13),
        fontWeight: '500',
        lineHeight: scaleFont(20)
    }
});
