import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function Coupon({ navigation }) {


    const back = () => {
        navigation.goBack();
    }

    const detail = () => {

        navigation.navigate('HistoryDetail', {
            // id: itemId
        });

    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
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
                        <Text style={layout.topText}>쿠폰함</Text>
                    </View>
                </View>
            </View>


            {/* 상단바 */}
            <View style={{
                flexDirection: 'row', paddingVertical: scaleHeight(15),
                paddingHorizontal: scaleWidth(15),
            }}>
                <TouchableOpacity style={{
                    backgroundColor: color.mainColor,
                    width: scaleWidth(78.75),
                    height: scaleHeight(36),
                    borderRadius: 4,
                    justifyContent: 'center',
                    borderWidth: 1,
                    marginRight: scaleWidth(5)

                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                    }}>전체보기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: color.buttonGray,
                    width: scaleWidth(78.75),
                    height: scaleHeight(36),
                    borderRadius: 4,
                    justifyContent: 'center',
                    marginRight: scaleWidth(5)

                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                    }}>이용가능</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: color.buttonGray,
                    width: scaleWidth(78.75),
                    height: scaleHeight(36),
                    borderRadius: 4,
                    justifyContent: 'center',
                    marginRight: scaleWidth(5)

                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                    }}>만료</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: color.buttonGray,
                    width: scaleWidth(78.75),
                    height: scaleHeight(36),
                    borderRadius: 4,
                    justifyContent: 'center',
                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                    }}>환불</Text>
                </TouchableOpacity>
            </View>



            {/* 쿠폰 */}
            <View style={[layout.container, { paddingVertical: scaleHeight(20), }]}>
                <View style={{
                    width: scaleWidth(330),
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#e5e5e5",
                    backgroundColor: "#fff",
                    paddingHorizontal: scaleWidth(10),
                    paddingVertical: scaleHeight(10),
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
                            justifyContent: 'bottom',
                        }}>DFRM-J8NN-6YLY-FKSD</Text>

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
                            }}>사용가능</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scaleHeight(5) }}>
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
                            }}>매장전용</Text>
                        </View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: scaleFont(13),
                            lineHeight: scaleFont(20),
                        }}>수험생 특별 할인 쿠폰</Text>
                    </View>
                    <Text style={{
                        fontWeight: '350',
                        fontSize: scaleFont(12),
                        lineHeight: scaleFont(20),
                        color: color.fontGray,
                        marginBottom: scaleHeight(5)
                    }}>시작 스터디카페 인천 송도점</Text>
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
                        }}>유효기간 10일</Text>

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
                        }}>5,000원</Text>

                        <View style={{
                        }}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                justifyContent: 'center',
                                color: color.fontGray,
                            }}>10,000원 이상 사용가능</Text>
                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
