import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function StudyTime({ navigation }) {


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
                        <Text style={layout.topText}>내 공부시간</Text>
                    </View>
                </View>
            </View>


            {/* 상단바 */}
            <View style={{
                paddingVertical: scaleHeight(15),
                paddingHorizontal: scaleWidth(15),
            }}>
                <View style={{
                    flexDirection: 'row',
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
                        }}>공부시간</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: color.buttonGray,
                        width: scaleWidth(117),
                        height: scaleHeight(36),
                        borderRadius: 4,
                        justifyContent: 'center',
                        marginRight: scaleWidth(5)
                    }}
                        onPress={detail}>
                        <Text style={{
                            textAlign: 'center',
                        }}>원 평균 출석일 수</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* 공부시간 */}
            <View style={[layout.container, { backgroundColor: color.white }]}>
                <View style={{
                    width: scaleWidth(320),
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#dbdcdd",
                    backgroundColor: color.white,
                    paddingHorizontal: scaleWidth(20),
                    paddingVertical: scaleHeight(20),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scaleHeight(20),
                }}>
                    <View style={{
                        width: scaleWidth(160),
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#979797',
                            fontSize: scaleFont(14),
                            lineHeight: scaleFont(18)
                        }}>총 공부시간</Text>
                        <Text
                            style={{
                                fontWeight: '700',
                                fontSize: scaleFont(18),
                                lineHeight: scaleFont(26)
                            }}>21:30</Text>
                    </View>
                    <View style={{
                        width: scaleWidth(160),
                        alignItems: 'center'

                    }}>
                        <Text style={{
                            color: '#979797',
                            fontSize: scaleFont(14),
                            lineHeight: scaleFont(18)
                        }}>평균 공부시간</Text>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: scaleFont(18),
                            lineHeight: scaleFont(26)
                        }}>04:00</Text>
                    </View>
                </View>

                <View style={{
                    width: scaleWidth(330),
                    borderWidth: 1,
                    height: scaleHeight(290)
                }}>
                    <Text>그래프 공간</Text>
                </View>
                <View style={{
                    width: scaleWidth(320),
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#dbdcdd",
                    backgroundColor: "#fff",
                    paddingHorizontal: scaleWidth(20),
                    paddingVertical: scaleHeight(20),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: scaleHeight(20),
                }}>
                    <View style={{
                        width: scaleWidth(160),
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#979797',
                            fontSize: scaleFont(14),
                            lineHeight: scaleFont(18)
                        }}>월 평균 공부시간</Text>
                        <Text
                            style={{
                                fontWeight: '700',
                                fontSize: scaleFont(18),
                                lineHeight: scaleFont(26)
                            }}>21:30</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
