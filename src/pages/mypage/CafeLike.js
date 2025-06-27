import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import SearchBox from '../../components/SearchBox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function CafeLike({ navigation }) {


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
                        <Text style={layout.topText}>찜한 매장</Text>
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
                    marginBottom: scaleHeight(20)
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
                        }}>가까운 순</Text>
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
                        }}>내가 찜한 순</Text>
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
                        }}>찜 많은 순</Text>
                    </TouchableOpacity>
                </View>
                <SearchBox />
            </View>


            {/* 찜한 매장 */}
            <View style={[layout.container, { paddingVertical: scaleHeight(20), }]}>
                <View style={{ flexDirection: 'row', height: scaleHeight(130) }}>
                    <View style={{
                        width: scaleWidth(330),
                        backgroundColor: "#fff",
                        borderRadius: 6,
                        flexDirection: 'row'
                    }}>
                        <Image
                            source={require("../../img/mypage/example.png")}
                            style={{ width: scaleWidth(130), height: scaleHeight(130), borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}
                            resizeMode="cover"
                        />
                        <View style={{
                            width: scaleWidth(200),
                            paddingVertical: scaleHeight(4),
                            paddingHorizontal: scaleWidth(4)
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderBottomWidth: 1,
                                paddingBottom: scaleHeight(4),
                                borderColor: '#e5e5e5'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../img/mypage/distance.png")}
                                        style={{ width: 14, height: 14, marginRight: 3 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        fontWeight: '400',
                                        fontSize: scaleFont(13),
                                        lineHeight: scaleFont(16),
                                        color: color.fontGray,
                                        justifyContent: 'bottom',
                                    }}>0.5km</Text>
                                </View>
                                <View style={{
                                }}>
                                    <Text style={{
                                        fontSize: scaleFont(12),
                                        justifyContent: 'center',
                                    }}>도보 20분</Text>
                                </View>

                            </View>
                            <View style={{
                                marginVertical: scaleHeight(14)
                            }}>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: scaleFont(13),
                                    lineHeight: scaleFont(20),
                                }}>시작 스터디카페 인천 송도점</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Image
                                        source={require("../../img/mypage/time.png")}
                                        style={{ width: 14, height: 14, marginRight: 3 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        fontWeight: '350',
                                        fontSize: scaleFont(12),
                                        lineHeight: scaleFont(20),
                                        color: color.fontGray,
                                    }}>00:00 ~ 24:00</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../img/mypage/discount.png")}
                                        style={{ width: 14, height: 14, marginRight: 3 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        fontWeight: '700',
                                        fontSize: scaleFont(12),
                                        lineHeight: scaleFont(16),
                                    }}>2인 동반 등록시 20% 할인</Text>

                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Image
                                        source={require("../../img/mypage/seat.png")}
                                        style={{ width: 14, height: 14, marginRight: 3 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        fontSize: scaleFont(12),
                                        lineHeight: scaleFont(20),
                                        marginRight: 5
                                    }}>30/90 |</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>

                                    <Image
                                        source={require("../../img/mypage/seat2.png")}
                                        style={{ width: 14, height: 14, marginRight: 3 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        fontSize: scaleFont(12),
                                        lineHeight: scaleFont(20),
                                        marginRight: 5
                                    }}>01/05 |</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../img/mypage/locker.png")}
                                        style={{ width: 14, height: 14, marginRight: 3 }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        fontSize: scaleFont(12),
                                        lineHeight: scaleFont(20),
                                    }}>10/45</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
}