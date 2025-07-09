import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';



export default function Coupon({ navigation }) {
    const [selectedTab, setSelectedTab] = useState('전체보기');

    const couponData = [
        {
            id: '1',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 사용가능',
            type: '이용가능',
        },
        {
            id: '2',
            code: 'EXPD-1234-5678-ABCD',
            title: '만료된 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: -1,
            amount: '3,000원',
            minUse: '5,000원 이상 사용가능',
            type: '만료',
        },
        {
            id: '3',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 사용가능',
            type: '이용가능',
        },
        {
            id: '4',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 사용가능',
            type: '이용가능',
        },
        {
            id: '5',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 사용가능',
            type: '이용가능',
        },
        {
            id: '6',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 사용가능',
            type: '이용가능',
        },
    ];

    const filteredCoupons = selectedTab === '전체보기'
        ? couponData
        : couponData.filter(coupon => coupon.type === selectedTab);


    const renderCouponItem = ({ item }) => (
        <View style={{
            width: scaleWidth(330),
            borderRadius: 6,
            borderWidth: 1,
            borderColor: "#e5e5e5",
            backgroundColor: "#fff",
            paddingHorizontal: scaleWidth(10),
            paddingVertical: scaleHeight(10),
            marginBottom: scaleHeight(20),
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                paddingBottom: scaleHeight(10),
                marginBottom: scaleHeight(10),
                borderColor: '#e5e5e5'
            }}>
                <Text style={{
                    fontWeight: '400',
                    fontSize: scaleFont(13),
                    lineHeight: scaleFont(16),
                    color: color.fontGray,
                }}>{item.code}</Text>

                <View style={{
                    backgroundColor: color.lightGray,
                    borderRadius: 4,
                    width: scaleWidth(60),
                    height: scaleHeight(20),
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: scaleFont(12),
                        textAlign: 'center'
                    }}>{item.type}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scaleHeight(5) }}>
                <View style={{
                    backgroundColor: color.lightGray,
                    borderRadius: 4,
                    width: scaleWidth(60),
                    height: scaleHeight(20),
                    justifyContent: 'center',
                    marginRight: scaleWidth(5)
                }}>
                    <Text style={{
                        fontSize: scaleFont(12),
                        textAlign: 'center'
                    }}>매장전용</Text>
                </View>
                <Text style={{
                    fontWeight: '500',
                    fontSize: scaleFont(13),
                    lineHeight: scaleFont(20),
                }}>{item.title}</Text>
            </View>

            <Text style={{
                fontWeight: '350',
                fontSize: scaleFont(12),
                lineHeight: scaleFont(20),
                color: color.fontGray,
                marginBottom: scaleHeight(5)
            }}>{item.store}</Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image
                    source={require("../../img/mypage/redclock.png")}
                    style={{ width: 14, height: 14, marginRight: 3 }}
                    resizeMode="contain"
                />
                <Text style={{
                    fontWeight: '700',
                    fontSize: scaleFont(12),
                    lineHeight: scaleFont(16),
                    color: 'red'
                }}>
                    {item.validDays > 0 ? `유효기간 ${item.validDays}일` : '만료됨'}
                </Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: scaleHeight(10),
            }}>
                <Text style={{
                    fontWeight: '400',
                    fontSize: scaleFont(18),
                    lineHeight: scaleFont(24),
                }}>{item.amount}</Text>

                <Text style={{
                    fontSize: scaleFont(12),
                    color: color.fontGray,
                }}>{item.minUse}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={layout.backBox} onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../img/common/backarrow.png")}
                            style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={layout.topText}>쿠폰함</Text>
                    </View>
                </View>
            </View>

            {/* 상단 탭 */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                paddingVertical: scaleHeight(20),
            }}>
                {['전체보기', '이용가능', '만료', '환불'].map(tab => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setSelectedTab(tab)}
                        style={[layout.toggleButton, {
                            backgroundColor: selectedTab === tab ? color.mainColor : color.buttonGray,
                            borderWidth: selectedTab === tab ? 1 : 0,
                            marginBottom: scaleHeight(5),
                        }]}>
                        <Text>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 쿠폰 리스트 */}
            <View style={{
                flex: 1, backgroundColor: color.lightGray
            }}>
                <FlatList
                    data={filteredCoupons}
                    renderItem={renderCouponItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingVertical: scaleHeight(20),
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
