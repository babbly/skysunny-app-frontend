import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function HistoryDetail({ navigation }) {

    const back = () => {
        navigation.goBack();
    }



    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <View style={{ paddingTop: scaleHeight(40) }}></View>
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={layout.backBox}
                        onPress={back}>
                        <Image
                            source={require("../../img/common/backarrow.png")}
                            style={{ width: 10.06, height: 18.73, }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={layout.topText}>이용내역 상세보기</Text>
                    </View>
                </View>
            </View>

            {/* 상세내역 */}
            <View style={[layout.container, { backgroundColor: color.white }]}>
                <View style={{
                    width: scaleWidth(360),
                    paddingVertical: scaleHeight(16),
                    paddingHorizontal: scaleWidth(20),
                    borderWidth: 1,
                    backgroundColor: color.lightGray
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={require("../../img/history/ticket.png")}
                                style={{ width: 14, height: 14, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{
                                fontWeight: '400',
                                fontSize: scaleFont(13),
                                lineHeight: scaleFont(16),
                                justifyContent: 'bottom', //세로정렬
                            }}>캐시정기권</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(16),
                                alignItems: 'center',
                                alignContent: 'center',
                                marginRight: 10
                            }}>2024-03-01 10:00:20</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: scaleHeight(10), }}>
                        <View style={{
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
                                    marginRight: 5
                                }}>50,000 캐시권 |</Text>

                                <Text style={{
                                    fontSize: scaleFont(12),
                                    lineHeight: scaleFont(20),
                                    marginRight: 5
                                }}>30일 |</Text>

                                <Text style={{
                                    fontSize: scaleFont(12),
                                    lineHeight: scaleFont(20),
                                    marginRight: 5
                                }}>좌석당 10% 할인</Text>

                            </View>
                        </View>

                    </View>
                    <View style={{
                        paddingTop: scaleHeight(10),
                        borderTopWidth: 1,
                        borderColor: '#e5e5e5',
                    }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(20),
                                marginRight: 5
                            }}>잔여정보 |</Text>

                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(20),
                                marginRight: 5
                            }}>30,000캐시 |</Text>

                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(20),
                                marginRight: 5
                            }}>유효기간 20일</Text>

                        </View>
                    </View>
                    {/* <TouchableOpacity style={{
                        backgroundColor: '#f4f4f5',
                        height: 36,
                        borderRadius: 6,
                        paddingVertical: 8,
                        paddingHorizontal: 16

                    }}
                        onPress={() => detail(item)}>
                      
                    <Text style={{

                        textAlign: 'center',
                    }}>이용내역 상세보기</Text>
                   
                </TouchableOpacity> */}
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
