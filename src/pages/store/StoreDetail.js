import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BannerSlider from '../../components/BannerSlider';
import Dialog from '../../components/Dialog';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function StoreDetail({ navigation }) {

    const update = () => {
        navigation.navigate('PageStack', { screen: 'Update' });
    };

    const out = () => {
        setOutStoreVisbile(false);
        setTimeout(() => {
            navigation.navigate('PageStack', { screen: 'Out' });
        }, 200);
    };

    const oneDay = () => {
        navigation.navigate('PageStack', { screen: 'OneDayPass' });
    };

    const pass = () => {
        navigation.navigate('PageStack', { screen: 'Pass' });
    };

    const studyRoom = () => {
        navigation.navigate('PageStack', { screen: 'StudyRoomPass' });
    };

    const [kakaoVisible, setKakaoVisible] = useState(false);
    const [usePassVisible, setUsePassVisible] = useState(false);
    const [nonePassVisible, setNonePassVisible] = useState(false);

    const [outStoreVisible, setOutStoreVisbile] = useState(false);


    const bannerImages3 = [
        require('../../img/home/banner2.png'),
        require('../../img/home/banner2.png'),
        require('../../img/home/banner2.png'),
    ];




    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: color.white, }}>
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    backgroundColor: color.white
                }}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.bannerWrapper}>
                    <BannerSlider banners={bannerImages3} type='bottom' bannerHeight={scaleHeight(240)} />

                    <View style={styles.topOverlay}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    source={require('../../img/home/w-backarrow.png')}
                                    style={[layout.icon24]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    source={require('../../img/home/share.png')}
                                    style={[layout.icon24, { marginRight: 15 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    source={require('../../img/home/like.png')}
                                    style={[layout.icon24]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                {/* 배너부터  */}
                <View style={[layout.container, { backgroundColor: color.white }]}>
                    {/* 매장명 */}
                    <View style={{ width: scaleWidth(200), paddingTop: scaleHeight(20), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginBottom: 5, fontSize: scaleFont(16), lineHeight: scaleFont(24), color: color.black }}>{item.name}</Text>
                        <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(16), color: color.black }}>{item.address}</Text>
                    </View>
                    {/* 좌석,스터디룸,사물함 정보 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                        <Image source={require("../../img/mypage/seat.png")} style={[layout.icon14]} />
                        <Text style={{ fontSize: scaleFont(12), marginRight: 5 }}>{item.seats} |</Text>
                        <Image source={require("../../img/mypage/studyroom.png")} style={[layout.icon14]} />
                        <Text style={{ fontSize: scaleFont(12), marginRight: 5 }}>{item.studyRooms} |</Text>
                        <Image source={require("../../img/mypage/locker.png")} style={[layout.icon14]} />
                        <Text style={{ fontSize: scaleFont(12) }}>{item.lockers}</Text>
                    </View>
                    {/* 이벤트문구 */}
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: color.lightGray,
                        width: scaleWidth(330),
                        paddingHorizontal: scaleWidth(8),
                        paddingVertical: scaleHeight(6),
                        borderRadius: 6,
                        alignItems: 'center',
                        marginTop: scaleHeight(20)

                    }}>
                        <Image source={require("../../img/mypage/discount.png")} style={[layout.icon14]} />
                        <Text style={{ fontSize: scaleFont(12), color: color.black, marginRight: 5 }}>
                            {item.eventDescription}
                        </Text>
                    </View>
                    {/* 시간, 문의 */}
                    <View style={{ width: scaleWidth(330), flexDirection: 'row', justifyContent: 'space-between', marginTop: scaleHeight(20) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../img/mypage/time.png')}
                                style={{
                                    width: scaleWidth(12),
                                    height: scaleHeight(12),
                                    marginRight: 6
                                }}
                                resizeMode="contain"
                            />
                            <Text>{item.businessHours}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {/* 카카오 */}
                            <TouchableOpacity onPress={() => setKakaoVisible(true)}
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
                            <Dialog
                                visible={kakaoVisible}
                                title="등록된 카카오톡이 없어요."
                                message={`문의사항이 있을 경우 전화문의를 이용해주세요.`}
                                onClose={() => setKakaoVisible(false)}
                                type="oneBtn"
                            />
                            {/* 전화 */}
                            <TouchableOpacity
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
                        </View>
                    </View>

                    {/*이용권 버튼 */}
                    <View style={{ width: scaleWidth(330), marginTop: scaleHeight(20) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginRight: scaleWidth(9) }}>
                                {/* 정기권사용 */}
                                <TouchableOpacity onPress={() => setUsePassVisible(true)}
                                    style={{
                                        paddingHorizontal: scaleWidth(12),
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderColor: color.gray200,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: scaleWidth(217),
                                        height: scaleHeight(40),
                                        marginBottom: scaleHeight(9)
                                    }}>
                                    <Image
                                        source={require('../../img/home/ticketPass.png')}
                                        style={{
                                            width: scaleWidth(49),
                                            height: scaleHeight(40),
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text>정기권 사용</Text>
                                </TouchableOpacity>
                                <Dialog
                                    visible={usePassVisible}
                                    title="시작 스터디카페 인천 송도점"
                                    message={`매장에서 이용 가능한 보유 정기권을 확인하세요.`}
                                    onClose={() => setUsePassVisible(false)}
                                    type="passDetail"
                                />
                                {/* <Dialog
                                    visible={usePassVisible}
                                    title="현재 00매장을 이용중이에요."
                                    message={`입실 중이신 매장 퇴실처리 후 다시 이용해주세요.`}
                                    onClose={() => setUsePassVisible(false)}
                                    type="oneBtn"
                                /> */}
                                {/* <Dialog
                                    visible={nonePassVisible}
                                    title="구매하신 정기권이 없어요."
                                    message={`정기이용권을 구매하신 후 사용해주세요.`}
                                    onClose={() => setNonePassVisible(false)}
                                    type="oneBtn"
                                /> */}

                                <TouchableOpacity onPress={oneDay}
                                    style={{
                                        paddingHorizontal: scaleWidth(12),
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderColor: color.gray200,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: scaleWidth(217),
                                        height: scaleHeight(40),
                                        marginBottom: scaleHeight(9)
                                    }}>
                                    <Image
                                        source={require('../../img/home/1dayPass.png')}
                                        style={{
                                            width: scaleWidth(49),
                                            height: scaleHeight(40),
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text>1일권 사용</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={pass}
                                    style={{
                                        paddingHorizontal: scaleWidth(12),
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderColor: color.gray200,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: scaleWidth(217),
                                        height: scaleHeight(40),
                                        marginBottom: scaleHeight(9)
                                    }}>
                                    <Image
                                        source={require('../../img/home/cashPass.png')}
                                        style={{
                                            width: scaleWidth(49),
                                            height: scaleHeight(40),
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text>정기권 구매</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{}}>
                                <TouchableOpacity onPress={() => setOutStoreVisbile(true)}
                                    style={{
                                        paddingHorizontal: scaleWidth(12),
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        borderColor: color.gray200,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: scaleWidth(104),
                                        height: scaleHeight(138),
                                        paddingVertical: scaleHeight(32.5)
                                    }}>
                                    <Image
                                        source={require('../../img/home/out.png')}
                                        style={{
                                            width: scaleWidth(49),
                                            height: scaleHeight(40),
                                            marginBottom: 5
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text>퇴실하기</Text>
                                </TouchableOpacity>
                                {/* dialog */}
                                <Dialog
                                    visible={outStoreVisible}
                                    leftBtnText="계속 이용하기"
                                    onConfirm={() => setOutStoreVisbile(false)}
                                    rightBtnText="퇴실하기"
                                    onClose={out}
                                    type='out'
                                />
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={studyRoom}
                                style={{
                                    paddingHorizontal: scaleWidth(12),
                                    paddingVertical: scaleHeight(9),
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: color.gray200,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: scaleWidth(104),
                                    marginRight: scaleWidth(9)
                                }}>
                                <Image
                                    source={require('../../img/home/studyroom.png')}
                                    style={{
                                        width: scaleWidth(49),
                                        height: scaleHeight(40),
                                    }}
                                    resizeMode="contain"
                                />
                                <Text>스터디룸</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                paddingHorizontal: scaleWidth(12),
                                paddingVertical: scaleHeight(9),
                                borderRadius: 4,
                                borderWidth: 1,
                                borderColor: color.gray200,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: scaleWidth(104),
                                marginRight: scaleWidth(9)
                            }}>
                                <Image
                                    source={require('../../img/home/locker1.png')}
                                    style={{
                                        width: scaleWidth(49),
                                        height: scaleHeight(40),
                                    }}
                                    resizeMode="contain"
                                />
                                <Text>사물함</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                paddingHorizontal: scaleWidth(12),
                                paddingVertical: scaleHeight(9),
                                borderRadius: 4,
                                borderWidth: 1,
                                borderColor: color.gray200,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: scaleWidth(104),
                                marginRight: scaleWidth(9)
                            }}>
                                <Image
                                    source={require('../../img/home/moveseat.png')}
                                    style={{
                                        width: scaleWidth(49),
                                        height: scaleHeight(40),
                                    }}
                                    resizeMode="contain"
                                />
                                <Text>자리이동</Text>
                            </TouchableOpacity>

                        </View>

                    </View>






                    {/* 편의시설 */}
                    <View style={{
                        width: scaleWidth(360),
                        backgroundColor: color.white,
                        paddingHorizontal: scaleWidth(15),
                    }}>
                        <Text style={{
                            fontSize: scaleFont(13),
                            lineHeight: scaleFont(24),
                            color: color.black,
                            paddingTop: scaleHeight(20),
                            paddingBottom: scaleHeight(10)
                        }}>편의시설</Text>

                        <View style={{
                            justifyContent: 'space-between', flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={update}>
                                <Image
                                    source={require("../../img/home/g-payment.png")}
                                    style={{ width: scaleWidth(50), height: scaleHeight(50), }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(13), textAlign: 'center' }}>임시</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={update}>
                                <Image
                                    source={require("../../img/home/g-studytime.png")}
                                    style={{ width: scaleWidth(50), height: scaleHeight(50), }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(13), textAlign: 'center' }}>임시</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={update}>
                                <Image
                                    source={require("../../img/home/g-coupon.png")}
                                    style={{ width: scaleWidth(50), height: scaleHeight(50), }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(13), textAlign: 'center' }}>임시</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={update}>
                                <Image
                                    source={require("../../img/home/g-point.png")}
                                    style={{ width: scaleWidth(50), height: scaleHeight(50), }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(13), textAlign: 'center' }}>임시</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={update}>
                                <Image
                                    source={require("../../img/home/g-notice.png")}
                                    style={{ width: scaleWidth(50), height: scaleHeight(50), }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(13), textAlign: 'center' }}>임시</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    {/* 이용안내 */}
                    <View style={{
                        width: scaleWidth(360),
                        backgroundColor: color.white,
                        paddingHorizontal: scaleWidth(15),
                    }}>
                        <Text style={{
                            fontSize: scaleFont(13),
                            lineHeight: scaleFont(24),
                            color: color.black,
                            paddingTop: scaleHeight(20),
                            paddingBottom: scaleHeight(10)
                        }}>이용안내</Text>

                        <View style={{
                            justifyContent: 'space-between', flexDirection: 'row',
                        }}>
                            <Text>
                                시작 스터디카페는 개읜의 학습 취향과 컨디션, 학습패턴에 따라 선택 가능한 다양한 유형의 프리미엄 공간을 제공합니다.{"\n"}
                                시작 스터디카페 인천 송도점에서 최적의 학습 효과를 경험하세요.
                                {item.guide}
                            </Text>

                        </View>
                    </View>
                    {/* 지도 */}
                    <View style={{ flex: 1, paddingTop: scaleHeight(20), height: scaleHeight(270) }}>
                        <Map
                            width={scaleWidth(360)}
                            height={scaleHeight(500)}
                            centerPoint={{ lat: 37.5665, lng: 126.9780 }}
                        />



                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    bannerWrapper: {
        width: '100%',
        position: 'relative',
    },
    topOverlay: {
        position: 'absolute',
        top: scaleHeight(10),
        left: scaleWidth(15),
        right: scaleWidth(15),
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10,
        justifyContent: 'space-between'
    },

});
