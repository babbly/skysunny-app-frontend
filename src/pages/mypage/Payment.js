import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function Payment({ navigation }) {

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

    const back = () => {
        navigation.goBack();
    }

    const detail = () => {

        navigation.navigate('HistoryDetail', {
            // id: itemId
        });

    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
            <View style={{ paddingTop: scaleHeight(40) }}></View>
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={layout.backBox}
                        onPress={back}>
                        <Image
                            source={require("../../img/common/backarrow.png")}
                            style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={layout.topText}>결제내역</Text>
                    </View>
                </View>
            </View>


            {/* 상단바 */}
            <View style={{
                paddingVertical: scaleHeight(15),
                paddingHorizontal: scaleWidth(25),
            }}>

                <View style={styles.container}>
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
                                    style={styles.arrowIcon}
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
                                    style={styles.arrowIcon}
                                    resizeMode="contain"
                                />
                            )}
                        />
                    </View>

                    <TouchableOpacity style={styles.searchBtn} onPress={() => onSearch(year, month)}>
                        <Image
                            source={require("../../img/common/search2.png")}
                            style={{ width: scaleWidth(24), height: scaleHeight(24), }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: scaleWidth(310),
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#dbdcdd",
                    backgroundColor: color.white,
                    paddingHorizontal: scaleWidth(20),
                    paddingVertical: scaleHeight(20),
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontWeight: '350',
                        fontSize: scaleFont(12),
                        lineHeight: scaleFont(17)
                    }}>- 환불 및 결제 취소 안내</Text>
                    <Text
                        style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(17),
                            color: '#666'
                        }}>환불 및 결제 취소 안내입니다. {"\n"}내용 준비중입니다.</Text>
                </View>
            </View>


            {/* 공부시간 */}
            <View style={[layout.container, { paddingVertical: scaleHeight(20) }]}>


                {/* 결제내역 */}
                <View style={{
                    width: scaleWidth(320),
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#e5e5e5",
                    backgroundColor: "#fff",
                    paddingHorizontal: scaleWidth(20),
                    paddingVertical: scaleHeight(20),
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: scaleHeight(8),
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: scaleFont(13),
                            lineHeight: scaleFont(16),
                        }}>22123022889934</Text>


                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(16),
                            color: '#c2c2c2'

                        }}>2024.02.30 13:30:30</Text>


                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{
                            backgroundColor: color.lightGray,
                            borderRadius: 4,
                            paddingHorizontal: scaleWidth(10),
                            paddingVertical: scaleHeight(5),
                            marginRight: scaleWidth(10)
                        }}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                justifyContent: 'center',
                            }}>결제완료</Text>
                        </View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: scaleFont(14),
                            lineHeight: scaleFont(24),
                        }}>캐시정기권</Text>
                    </View>



                    <View style={{
                        marginTop: scaleHeight(8),
                        marginBottom: scaleHeight(12)
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: scaleFont(13),
                            lineHeight: scaleFont(20),
                        }}>시작 스터디카페 인천송도점</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(20),
                                marginRight: 5,
                                color: '#6e6e6e'
                            }}>200,000 캐시권 |</Text>

                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(20),
                                marginRight: 5,
                                color: '#6e6e6e'
                            }}>30일 |</Text>

                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(20),
                                color: '#6e6e6e'
                            }}>좌석당 10% 할인</Text>

                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: scaleHeight(15),
                        borderTopWidth: 1,
                        borderColor: '#e0e0e0',
                    }}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: scaleFont(16),
                            lineHeight: scaleFont(24),
                        }}>200,000원</Text>

                        <View style={{
                            borderColor: '#e0e0e0',
                            borderRadius: 4,
                            borderWidth: 1,
                            paddingHorizontal: scaleWidth(10),
                            paddingVertical: scaleHeight(5)
                        }}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                justifyContent: 'center',
                                color: '#8c8c8c'
                            }}>환불신청</Text>
                        </View>

                    </View>
                </View>


            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: scaleHeight(10),
    },
    dropdownBox: {
        width: scaleWidth(120),
        height: scaleHeight(48),
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 4,
        justifyContent: 'center',
        paddingHorizontal: scaleWidth(14),
        marginRight: scaleWidth(10),
    },
    searchBtn: {
        width: scaleWidth(50),
        height: scaleHeight(48),
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchText: {
        color: '#fff',
        fontSize: scaleFont(12),
    },
    arrowIcon: {
        width: scaleWidth(24),
        height: scaleHeight(24),
    },
});

// RNPickerSelect 전용 스타일
const pickerSelectStyles = {
    inputIOS: {
        fontSize: scaleFont(12),
        color: '#000',
    },
    inputAndroid: {
        fontSize: scaleFont(12),
        color: '#000',
    },
    iconContainer: {
        position: 'absolute',
        right: scaleWidth(8),
        height: scaleHeight(36),
        justifyContent: 'center',
        alignItems: 'center',
    },
};
