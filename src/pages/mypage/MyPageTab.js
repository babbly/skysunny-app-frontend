import React from 'react';
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function MyPageTab({ navigation }) {

    const settings = () => {
        navigation.navigate('PageStack', {
            screen: 'Settings'
        });
    };

    const myinfo = () => {
        navigation.navigate('PageStack', {
            screen: 'MyInfo'
        });
    };
    const payment = () => {
        navigation.navigate('PageStack', {
            screen: 'Payment'
        });
    };
    const studyTime = () => {
        navigation.navigate('PageStack', {
            screen: 'StudyTime'
        });
    };

    const favoriteStore = () => {
        navigation.navigate('PageStack', {
            screen: 'FavoriteStore'
        });
    };

    const coupon = () => {
        navigation.navigate('PageStack', {
            screen: 'Coupon'
        });
    };

    //     const point = () => {
    //     navigation.navigate('PageStack', {
    //         screen: 'Point'
    //     });
    // };

    const notice = () => {
        navigation.navigate('PageStack', {
            screen: 'Notice'
        });
    };

    const inquiry = () => {
        navigation.navigate('PageStack', {
            screen: 'Inquiry'
        });
    };


    return (
        <SafeAreaProvider>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
            <View style={{ paddingTop: scaleHeight(40) }} />
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
                                <TouchableOpacity style={layout.backBox}
                                    onPress={() => navigation.goBack()}>
                                    <Image
                                        source={require("../../img/common/backarrow.png")}
                                        style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                <View style={{
                                    justifyContent: 'center',
                                }}>
                                    <Text style={layout.topText}>마이페이지</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={layout.backBox}
                                    onPress={settings}>
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
                                fontWeight: '400',
                                fontSize: 18,
                                lineHeight: scaleFont(26),
                                marginBottom: scaleHeight(8)
                            }}>홍길동 회원님, 반가워요!</Text>
                            <Text style={{
                                fontWeight: '400',
                                fontSize: scaleFont(14),
                                lineHeight: scaleFont(26),
                            }}>오늘도 스카스카와 함께 열공해볼까요?</Text>
                        </View>
                    </View>

                    {/* 메뉴박스 */}
                    <View style={styles.menuBox}>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={myinfo}>
                            <Image
                                source={require("../../img/mypage/myinfo.png")}
                                style={{ width: 24, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>내 정보관리</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={payment}>
                            <Image
                                source={require("../../img/mypage/payment.png")}
                                style={{ width: 24, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>결제내역</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={studyTime}>
                            <Image
                                source={require("../../img/mypage/studyTime.png")}
                                style={{ width: 24, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>내 공부시간</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={favoriteStore}>
                            <Image
                                source={require("../../img/mypage/store.png")}
                                style={{ width: 24, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>찜한 매장</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={coupon}>
                            <Image
                                source={require("../../img/mypage/coupon.png")}
                                style={{ width: 24, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>쿠폰함</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.myMenu}
                    onPress={point}>
                    <Image
                        source={require("../../img/mypage/point.png")}
                        style={{ width: 24, height: 20, marginRight: 10 }}
                        resizeMode="contain"
                    />
                    <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>포인트내역</Text>
                </TouchableOpacity> */}
                        <TouchableOpacity style={styles.myMenu}
                            onPress={notice}>
                            <Image
                                source={require("../../img/mypage/notice.png")}
                                style={{ width: 24, height: 20, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>공지사항</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.myMenu}
                            onPress={inquiry}>
                            <Image
                                source={require("../../img/mypage/inquiry.png")}
                                style={{ width: scaleWidth(24), height: scaleHeight(20), marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{ fontSize: scaleFont(13), fontWeight: '500', lineHeight: scaleFont(20) }}>이용문의</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={layout.container}></View>


                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    menuBox: {
        position: 'absolute',
        top: scaleHeight(200),
        marginHorizontal: scaleWidth(20),
        width: scaleWidth(310),
        backgroundColor: color.white,
        borderRadius: 12,
        paddingHorizontal: scaleWidth(25),
        paddingTop: scaleHeight(25),
        zIndex: 10,
    },
    myMenu: {
        flexDirection: 'row',
        marginBottom: scaleHeight(25),
    }
});
