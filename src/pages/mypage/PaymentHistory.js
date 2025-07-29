import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function PaymentHistory({ navigation }) {

    const [year, setYear] = useState('2024');
    const [month, setMonth] = useState('06');

    const yearOptions = [
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' },
    ];

    const monthOptions = Array.from({ length: 12 }, (_, i) => {
        const value = (i + 1).toString().padStart(2, '0');
        return {
            label: `${value}`,
            value,
        };
    });

    const paymentData = [
        {
            id: '1',
            orderNumber: '22123022889934',
            date: '2024.02.30 13:30:30',
            status: '결제완료',
            product: '캐시정기권',
            place: '시작 스터디카페 인천송도점',
            details: ['200,000 캐시권', '30일', '좌석당 10% 할인'],
            amount: '200,000원',
        },
    ];

    const PaymentCard = ({ item }) => {
        return (
            <View style={{
                width: scaleWidth(320),
                paddingVertical: scaleHeight(20),
                paddingHorizontal: scaleWidth(20),
                borderRadius: 6,
                borderWidth: 1,
                borderColor: "#e5e5e5",
                backgroundColor: color.white,
                marginBottom: scaleHeight(20),
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: scaleHeight(8),
                }}>
                    <Text style={{
                        color: color.black,
                        fontFamily: 'NotoSans KR',
                        fontSize: scaleFont(13),
                        fontWeight: '300',
                        lineHeight: scaleFont(16),
                    }}>{item.orderNumber}</Text>
                    <Text style={[layout.dateTxt]}>{item.date}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        paddingVertical: scaleHeight(5),
                        paddingHorizontal: scaleWidth(10),
                        borderRadius: 4,
                        backgroundColor: color.lightGray,
                        marginRight: scaleWidth(10)
                    }}>
                        <Text style={{
                            color: color.black,
                            fontFamily: 'NotoSans KR',
                            fontSize: scaleFont(12),
                            fontWeight: '500',
                            lineHeight: scaleHeight(16),
                        }}>{item.status}</Text>
                    </View>
                    <Text style={{
                        color: color.black,
                        fontFamily: 'NotoSans KR',
                        fontSize: scaleFont(14),
                        fontWeight: '500',
                        lineHeight: scaleFont(24),
                    }}>{item.product}</Text>
                </View>

                <View style={{ marginTop: scaleHeight(9), marginBottom: scaleHeight(14) }}>
                    <Text style={{
                        color: color.black,
                        fontFamily: 'NotoSans KR',
                        fontSize: scaleFont(13),
                        fontWeight: '500',
                        lineHeight: scaleFont(20),
                    }}>{item.place}</Text>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                        {item.details.map((text, index) => (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.infoTxt}>{text}</Text>
                                {index !== item.details.length - 1 && (
                                    <View style={[layout.rightLine, { marginHorizontal: 5, alignSelf: 'center' }]} />
                                )}
                            </View>
                        ))}
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: scaleHeight(15),
                    borderTopWidth: 1,
                    borderColor: color.grey80,
                }}>
                    <Text style={{
                        color: color.black,
                        fontFamily: 'NotoSans KR',
                        fontSize: scaleFont(16),
                        fontWeight: '700',
                        lineHeight: scaleFont(24),
                    }}>{item.amount}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            borderRadius: 4,
                            borderWidth: 1,
                            borderColor: color.black,
                            paddingVertical: scaleHeight(5),
                            paddingHorizontal: scaleWidth(10),
                            marginRight: scaleWidth(10)
                        }}>
                            <Text style={[layout.f12w400, {
                                color: color.black,
                            }]}>환불신청</Text>
                        </View>
                        <View style={{
                            borderRadius: 4,
                            borderWidth: 1,
                            backgroundColor: color.black,
                            paddingVertical: scaleHeight(5),
                            paddingHorizontal: scaleWidth(10),
                        }}>
                            <Text style={[layout.f12w400, {
                                color: color.white,
                            }]}>영수증 출력</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={[layout.topBar]}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={[layout.backBox]}
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../img/common/backarrow.png")}
                            style={[layout.icon24]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={[layout.topTxt]}>결제내역</Text>
                    </View>
                </View>
            </View>

            {/* 상단 내용 */}
            <View style={{
                paddingVertical: scaleHeight(15),
                paddingHorizontal: scaleWidth(25),
            }}>

                {/* 날짜 드롭다운 */}
                <View style={styles.dateWrapper}>
                    <View style={styles.dropdownBox}>
                        <RNPickerSelect
                            onValueChange={(value) => setYear(value)}
                            items={yearOptions}
                            value={year}
                            style={pickerSelectStyles}
                            useNativeAndroidPickerStyle={false}
                            placeholder={{ label: '연도 선택', value: null }}
                            Icon={() => (
                                <Image
                                    source={require('../../img/common/underarrow.png')}
                                    style={[layout.icon24]}
                                    resizeMode="contain"
                                />
                            )}
                        />
                    </View>

                    <View style={styles.dropdownBox}>
                        <RNPickerSelect
                            onValueChange={(value) => setMonth(value)}
                            items={monthOptions}
                            value={month}
                            style={pickerSelectStyles}
                            useNativeAndroidPickerStyle={false}
                            placeholder={{ label: '월 선택', value: null }}
                            Icon={() => (
                                <Image
                                    source={require('../../img/common/underarrow.png')}
                                    style={[layout.icon24]}
                                    resizeMode="contain"
                                />
                            )}
                        />
                    </View>

                    <TouchableOpacity style={styles.searchBtn} onPress={() => onSearch(year, month)}>
                        <Image
                            source={require("../../img/common/search2.png")}
                            style={layout.icon24}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: scaleWidth(310),
                    paddingVertical: scaleHeight(15),
                    paddingHorizontal: scaleWidth(20),
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#e5e5e5",
                }}>
                    <Text style={{
                        color: color.black,
                        fontFamily: 'NotoSans KR',
                        fontSize: scaleFont(12),
                        fontWeight: '300',
                        lineHeight: scaleFont(17),
                        marginBottom: 6,
                    }}>- 환불 및 결제 취소 안내</Text>
                    <Text
                        style={[layout.guideTxt]}>환불 및 결제 취소 안내입니다. {"\n"}내용 준비중입니다.</Text>
                </View>
            </View>


            <View style={[layout.container, { paddingVertical: scaleHeight(20) }]}>
                <FlatList
                    data={paymentData}
                    renderItem={({ item }) => <PaymentCard item={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
                {/* 더보기 버튼 */}
                <TouchableOpacity style={{
                    paddingVertical: scaleHeight(5),
                    paddingHorizontal: scaleWidth(16),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 40,
                    borderWidth: 1,
                    borderColor: color.grey80,
                    backgroundColor: color.white
                }}>
                    <Text style={[layout.f12w400, {
                        color: color.grey40,
                    }]}>더보기</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    dateWrapper: {
        flexDirection: 'row',
        marginBottom: scaleHeight(10),
    },
    dropdownBox: {
        width: scaleWidth(120),
        height: scaleHeight(48),
        borderWidth: 1,
        borderColor: color.mediumGray,
        borderRadius: 4,
        justifyContent: 'center',
        paddingHorizontal: scaleWidth(14),
        marginRight: scaleWidth(10),
    },
    searchBtn: {
        width: scaleWidth(50),
        height: scaleHeight(48),
        borderWidth: 1,
        borderColor: color.mediumGray,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoTxt: {
        color: color.fontGray,
        fontFamily: 'NotoSans KR',
        fontSize: scaleFont(12),
        fontWeight: '300',
        lineHeight: scaleFont(20),
    }
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: scaleFont(12),
        color: color.black,
        paddingVertical: scaleHeight(14),
    },
    inputAndroid: {
        fontSize: scaleFont(12),
        color: color.black,
    },
    iconContainer: {
        position: 'absolute',
        top: scaleHeight(5),
        width: scaleWidth(24),
        height: scaleHeight(24),
        justifyContent: 'center',
        alignItems: 'center',
    },
};
