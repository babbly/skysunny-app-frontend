import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';



export default function CheckCoupon({ navigation }) {

    const couponData = [
        {
            id: '1',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 이용가능',
            type: '이용가능',
        },
        {
            id: '2',
            code: 'EXPD-1234-5678-ABCD',
            title: '만료된 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: -1,
            amount: '3,000원',
            minUse: '5,000원 이상 이용가능',
            type: '만료',
        },
        {
            id: '3',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 이용가능',
            type: '이용가능',
        },
        {
            id: '4',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 이용가능',
            type: '이용가능',
        },
        {
            id: '5',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 이용가능',
            type: '이용가능',
        },
        {
            id: '6',
            code: 'DFRM-J8NN-6YLY-FKSD',
            title: '수험생 특별 할인 쿠폰',
            store: '시작 스터디카페 인천 송도점',
            validDays: 10,
            amount: '5,000원',
            minUse: '10,000원 이상 이용가능',
            type: '이용가능',
        },
    ];

    const filteredCoupons = couponData.filter(coupon => coupon.type === '이용가능');


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
                borderColor: color.mediumGray
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
                        textAlign: 'center',
                        color: color.gray900
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
                        textAlign: 'center',
                        color: color.gray900
                    }}>매장전용</Text>
                </View>
                <Text style={{
                    fontWeight: '500',
                    fontSize: scaleFont(13),
                    lineHeight: scaleFont(20),
                    color: color.black,
                }}>{item.title}</Text>
            </View>

            <Text style={{
                fontWeight: '300',
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
                    style={[layout.icon14]}
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
                    color: color.black,
                }}>{item.amount}</Text>

                <Text style={{
                    fontSize: scaleFont(12),
                    color: color.fontGray,
                }}>{item.minUse}</Text>
            </View>


            <TouchableOpacity
                style={styles.detailButton}
                onPress={() => navigation.navigate('HistoryDetail', { id: item.id })}
            >
                <Text style={styles.detailText}>이용하기</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={[layout.topBar]}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../img/common/backarrow.png")}
                            style={[layout.icon24]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[layout.topTxt]}>쿠폰선택</Text>
                    </View>
                </View>
            </View>



            {/* 쿠폰 리스트 */}
            <View style={{ flex: 1, backgroundColor: color.lightGray }}>
                {filteredCoupons.length > 0 ? (
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
                ) : (
                    <View style={{ flex: 1, alignItems: 'center', marginTop: scaleHeight(120) }}>
                        <Image
                            source={require("../../img/home/noCoupon.png")}
                            style={{ width: scaleWidth(90), height: scaleHeight(90) }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            fontSize: scaleFont(14),
                            lineHeight: scaleFont(16),
                            color: color.grey30,
                        }}>
                            사용 가능한 쿠폰이 없어요.
                        </Text>
                    </View>
                )}
            </View>

        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    detailButton: {
        backgroundColor: color.mainColor,
        borderWidth: 1,
        borderColor: color.gray900,
        borderRadius: 6,
        height: scaleHeight(36),
        justifyContent: 'center',
        marginTop: scaleHeight(10)
    },
    detailText: {
        textAlign: 'center',
        color: color.gray900
    }
});
