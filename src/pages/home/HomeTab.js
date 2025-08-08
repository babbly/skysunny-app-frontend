import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BannerSlider from '../../components/BannerSlider';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function HomeTab({ navigation, item }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const bannerImages = [
        require('../../img/home/banner1.png'),
        require('../../img/home/banner1.png'),
        require('../../img/home/banner1.png'),
    ];

    const bannerImages2 = [
        require('../../img/home/bannerexample.png'),
        require('../../img/home/bannerexample.png'),
        require('../../img/home/bannerexample.png'),
    ];

    return (

        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>

            {/* 상단 바 + 로고 */}
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={[layout.topBar]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Image
                            source={require("../../img/home/logo2.png")}
                            style={{ width: scaleWidth(110), height: scaleHeight(21), }}
                            resizeMode="contain"
                        />
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity style={[layout.backBox, { marginRight: scaleWidth(12) }]}
                                onPress={() => movePage('Alarm')} >
                                <Image
                                    source={require("../../img/home/alarm.png")}
                                    style={[layout.icon24]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={[layout.backBox, { marginRight: scaleWidth(12) }]}
                                onPress={() => navigation.goBack()}>
                                <Image
                                    source={require("../../img/home/map.png")}
                                    style={[layout.icon24]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={[layout.backBox, { marginRight: scaleWidth(0) }]}
                                onPress={() => movePage('SearchTab')} >
                                <Image
                                    source={require("../../img/common/search2.png")}
                                    style={[layout.icon24]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                {/* 배너부터  */}
                <View style={[layout.container, {}]}>
                    <View style={{
                        width: scaleWidth(360),
                        height: scaleHeight(160),
                    }}>
                        <BannerSlider banners={bannerImages} type='main2' />
                    </View>

                    {/* 로그인, 티켓 */}
                    <View style={{
                        width: scaleWidth(360),
                        backgroundColor: color.white,
                        paddingHorizontal: scaleWidth(15),
                    }}>
                        <View style={{ width: scaleWidth(330), flexDirection: 'row', justifyContent: 'space-between', paddingVertical: scaleHeight(15) }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.loginBox, {
                                    borderWidth: 1,
                                    backgroundColor: color.mainColor,
                                    marginRight: scaleWidth(5),
                                }]}>
                                    <TouchableOpacity onPress={() => movePage('Login')} >
                                        <Text style={[styles.loginTxt, {
                                            color: color.gray900,
                                        }]}>로그인</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.loginBox, {
                                    backgroundColor: color.black,
                                }]}>
                                    <TouchableOpacity onPress={() => movePage('SignUp')} >
                                        <Text style={[styles.loginTxt, {
                                            color: color.white,
                                        }]}>회원가입</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: color.lightGray,
                                width: scaleWidth(180),
                                borderRadius: 4,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: scaleWidth(8),
                                paddingVertical: scaleHeight(3.5),
                            }}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: color.gray200,
                                    borderRadius: 4,
                                    width: scaleWidth(42),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>

                                    <Text style={{
                                        fontFamily: 'NotoSans KR',
                                        fontWeight: '500',
                                        fontSize: scaleFont(12),
                                        lineHeight: scaleFont(18),
                                        textAlign: 'center',
                                        color: color.gray200,
                                    }}>이용중</Text>
                                </View>
                                <View style={{
                                    width: scaleWidth(106),
                                    justifyContent: 'center',
                                }}>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                        style={{
                                            fontFamily: 'NotoSans KR',
                                            fontWeight: '300',
                                            fontSize: scaleFont(12),
                                            lineHeight: scaleFont(12),
                                            color: color.gray300,
                                            textAlign: 'center',
                                        }}>
                                        이용중인 매장이 없습니다.
                                    </Text>
                                </View>
                                <Image
                                    source={require("../../img/home/grayQr.png")}
                                    style={[layout.icon18]}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>


                        <View style={{}}>
                            <ImageBackground
                                source={require("../../img/home/showpass.png")}
                                style={{
                                    width: scaleWidth(330),
                                    height: scaleHeight(28),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                resizeMode="stretch"
                            >
                                <Text style={{
                                    fontFamily: 'NotoSans KR',
                                    fontWeight: '300',
                                    fontSize: scaleFont(12),
                                    lineHeight: scaleFont(12),
                                    color: color.gray300,
                                    textAlign: 'center',
                                }}>
                                    보유하신 이용권이 없습니다.
                                </Text>
                            </ImageBackground>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: scaleHeight(15), paddingBottom: scaleHeight(25) }}>
                            <TouchableOpacity
                                onPress={() => movePage('PaymentHistory')} >
                                <Image
                                    source={require("../../img/home/g-payment.png")}
                                    style={[layout.icon50]}
                                    resizeMode="contain"
                                />
                                <Text style={[styles.iconTxt]}>결제내역</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => movePage('StudyTime')} >
                                <Image
                                    source={require("../../img/home/g-studytime.png")}
                                    style={[layout.icon50]}
                                    resizeMode="contain"
                                />
                                <Text style={[styles.iconTxt]}>공부시간</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => movePage('Coupon')} >
                                <Image
                                    source={require("../../img/home/g-coupon.png")}
                                    style={[layout.icon50]}
                                    resizeMode="contain"
                                />
                                <Text style={[styles.iconTxt]}>쿠폰함</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => movePage('PointHistory')} >
                                <Image
                                    source={require("../../img/home/g-point.png")}
                                    style={[layout.icon50]}
                                    resizeMode="contain"
                                />
                                <Text style={[styles.iconTxt]}>포인트</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => movePage('Notice')} >
                                <Image
                                    source={require("../../img/home/g-notice.png")}
                                    style={[layout.icon50]}
                                    resizeMode="contain"
                                />
                                <Text style={[styles.iconTxt]}>공지사항</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    {/* 찜한매장 */}
                    <View style={{
                        width: scaleWidth(360),
                        paddingVertical: scaleHeight(20),
                        paddingHorizontal: scaleWidth(15),
                        // borderWidth: 1,
                        backgroundColor: color.white
                    }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontFamily: 'BMDoHyeon',
                                    fontSize: scaleFont(14),
                                    lineHeight: scaleFont(20),
                                    marginRight: scaleWidth(5)
                                }}>찜한 매장</Text>
                                <Image
                                    source={require("../../img/home/favStore.png")}
                                    style={[layout.icon16]}
                                    resizeMode="contain"
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => movePage('FavoriteStore')} >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{
                                        fontFamily: 'NotoSans KR',
                                        fontSize: scaleFont(14),
                                        lineHeight: scaleFont(20),
                                        marginRight: scaleWidth(5),
                                    }}>더보기</Text>
                                    <Image
                                        source={require("../../img/common/backarrow2.png")}
                                        style={[layout.icon16]}
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            height: scaleHeight(120),
                            paddingHorizontal: scaleWidth(44),
                            paddingVertical: scaleHeight(27),
                            marginVertical: scaleHeight(20),
                            backgroundColor: color.white,
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: color.lightGray
                        }}>
                            <Image
                                source={require("../../img/home/store.png")}
                                style={{ width: scaleWidth(30), height: scaleHeight(30), marginBottom: scaleHeight(6) }}
                                resizeMode="contain"
                            />
                            <Text style={{
                                color: color.fontGray,
                                fontFamily: 'NotoSans KR',
                                fontWeight: '300',
                                textAlign: 'center',
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(14)
                            }}>아직 찜한 매장이 없어요.{"\n"}즐겨찾는 매장을 찜하면 편리하게 이용 가능해요.</Text>
                        </View>
                    </View>

                    {/* 배너 */}
                    <View style={{ width: scaleWidth(360) }}>
                        <BannerSlider banners={bannerImages2} type='sub1' />
                    </View>

                    {/* 주변매장 거리순 */}
                    <View style={{
                        width: scaleWidth(360),
                        paddingVertical: scaleHeight(20),
                        paddingHorizontal: scaleWidth(15),
                        // borderWidth: 1
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: scaleHeight(15)
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontFamily: 'BMDoHyeon',
                                    fontSize: scaleFont(14),
                                    lineHeight: scaleFont(20),
                                    marginRight: scaleWidth(5)
                                }}>주변 매장</Text>
                                <Image
                                    source={require("../../img/home/near.png")}
                                    style={[layout.icon16]}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontFamily: 'NotoSans KR',
                                    fontSize: scaleFont(14),
                                    lineHeight: scaleFont(20),
                                    marginRight: scaleWidth(5),
                                }}>거리순</Text>
                                <Image
                                    source={require("../../img/home/updown.png")}
                                    style={[layout.icon16]}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <View style={{
                            height: scaleHeight(120),
                            paddingHorizontal: scaleWidth(44),
                            paddingVertical: scaleHeight(27),
                            backgroundColor: color.white,
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image
                                source={require("../../img/home/map-on.png")}
                                style={{ width: scaleWidth(30), height: scaleHeight(30), marginBottom: scaleHeight(6) }}
                                resizeMode="contain"
                            />
                            <Text style={{
                                color: color.fontGray,
                                fontFamily: 'NotoSans KR',
                                fontWeight: '300',
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(14)
                            }}>나의 위치를 설정해주세요.</Text>
                        </View>
                    </View>
                    {/* 하단 이용내역 */}
                    <View style={{
                        alignItems: 'left',
                        justifyContent: 'left',
                        width: scaleWidth(360),
                        paddingHorizontal: scaleWidth(20),
                        paddingVertical: scaleHeight(15),
                    }}>
                        <View style={{ flexDirection: 'row', width: scaleWidth(146), marginBottom: scaleHeight(10) }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: scaleFont(12),
                                    lineHeight: scaleFont(16),
                                    marginRight: scaleWidth(10),
                                    color: color.fontDarkGray,
                                }}>이용내역</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: scaleFont(12),
                                    lineHeight: scaleFont(16),
                                    color: color.fontDarkGray,
                                }}>개인정보처리방침</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: color.fontLightGray, fontSize: scaleFont(11), lineHeight: scaleFont(16) }}>
                                (주)스카스카 | 대표 : 김스카 {"\n"}
                                주소 : 경기도 용인시 처인구 양지면 중부대로 1881, 1층{"\n"}
                                사업자등록번호 : 429-86-02464 | 통신판매업신고번호 : 미정{"\n"}
                                SKASKA All rights reserved
                            </Text>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    loginBox: {
        borderRadius: 4,
        width: scaleWidth(65),
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTxt: {
        fontFamily: 'BMDoHyeon',
        fontWeight: '400',
        fontSize: scaleFont(12),
        lineHeight: scaleFont(20),
        textAlign: 'center'
    },
    iconTxt: {
        color: color.gray900,
        fontFamily: 'NotoSans KR',
        fontWeight: '300',
        fontSize: scaleFont(12),
        lineHeight: scaleFont(13),
        textAlign: 'center'
    }
});
