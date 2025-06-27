import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function HistoryTab({ navigation }) {

    useEffect(() => {
        console.log('dsafadsfasdfasd',);
    }, []);



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
                            style={{ width: 10.06, height: 18.73, }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={layout.topText}>이용내역</Text>
                    </View>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity style={{
                    paddingVertical: scaleHeight(7),
                    paddingHorizontal: scaleWidth(11.5),
                    borderBottomWidth: 1,
                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                    }}>캐시정기권</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingVertical: scaleHeight(7),
                    paddingHorizontal: scaleWidth(11.5),
                    borderBottomWidth: 1,
                    borderColor: '#dbdcdd'
                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#c1c3c5'
                    }}>기간정기권</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingVertical: scaleHeight(7),
                    paddingHorizontal: scaleWidth(11.5),
                    borderBottomWidth: 1,
                    borderColor: '#dbdcdd'
                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#c1c3c5'
                    }}>1일이용권</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingVertical: scaleHeight(7),
                    paddingHorizontal: scaleWidth(11.5),
                    borderBottomWidth: 1,
                    borderColor: '#dbdcdd'
                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#c1c3c5'
                    }}>스터디룸</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingVertical: scaleHeight(7),
                    paddingHorizontal: scaleWidth(11.5),
                    borderBottomWidth: 1,
                    borderColor: '#dbdcdd'
                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#c1c3c5'
                    }}>사물함</Text>
                </TouchableOpacity>


            </View>


            <View style={{
                flexDirection: 'row', paddingVertical: scaleHeight(15),
                paddingHorizontal: scaleWidth(15),
            }}>
                <TouchableOpacity style={{
                    backgroundColor: color.mainColor,
                    width: scaleWidth(78.75),
                    height: scaleHeight(36),
                    borderRadius: 4,
                    paddingVertical: scaleHeight(8),
                    paddingHorizontal: scaleWidth(12),
                    borderWidth: 1,
                    marginRight: scaleWidth(10)

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
                    paddingVertical: scaleHeight(8),
                    paddingHorizontal: scaleWidth(12),
                    marginRight: scaleWidth(10)

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
                    paddingVertical: scaleHeight(8),
                    paddingHorizontal: scaleWidth(12),
                    marginRight: scaleWidth(10)

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
                    paddingVertical: scaleHeight(8),
                    paddingHorizontal: scaleWidth(12),
                }}
                    onPress={detail}>
                    <Text style={{
                        textAlign: 'center',
                    }}>환불</Text>
                </TouchableOpacity>
            </View>




            <View style={[layout.container, { paddingHorizontal: scaleHeight(15), paddingTop: scaleHeight(20), marginBottom: scaleHeight(15) }]}>
                <View style={{
                    width: scaleWidth(330),
                    height: scaleHeight(188),
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#e5e5e5",
                    backgroundColor: "#fff",
                    paddingHorizontal: scaleWidth(12),
                    paddingVertical: scaleHeight(12)
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // borderWidth: 1,
                        width: scaleWidth(306),

                    }}>
                        <View style={{ flexDirection: 'row', width: scaleWidth(82), alignItems: 'center', }}>
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
                        <View style={{ flexDirection: 'row', width: scaleWidth(116), alignItems: 'center', }}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(16),
                                alignItems: 'center',
                                alignContent: 'center',
                                marginRight: 10
                            }}>23.12.24</Text>
                            <View style={{
                                // width: 60,
                                height: 20,
                                backgroundColor: color.lightGray,
                                borderRadius: 4,
                                paddingHorizontal: 5
                            }}>
                                <Text style={{
                                    fontSize: scaleFont(12),
                                    justifyContent: 'center',
                                }}>이용가능</Text>

                            </View>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: scaleWidth(5), paddingVertical: 10 }}>
                        <Image
                            source={require("../../img/history/example.png")}
                            style={{ width: 50.68, height: 50, borderRadius: 8 }}
                            resizeMode="contain"
                        />

                        <View style={{
                            paddingLeft: 10,
                            paddingVertical: 5,
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
                        paddingVertical: scaleHeight(10),
                        marginHorizontal: scaleWidth(5),
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
                    <TouchableOpacity style={{
                        backgroundColor: color.buttonGray,
                        width: scaleWidth(296),
                        height: scaleHeight(36),
                        borderRadius: 6,
                        paddingVertical: scaleHeight(8),
                        paddingHorizontal: scaleWidth(16),
                        marginHorizontal: scaleWidth(5),

                    }}
                        onPress={detail}>
                        <Text style={{

                            textAlign: 'center',
                        }}>이용내역 상세보기</Text>
                    </TouchableOpacity>
                    {/* <FlatList
                        data={tableData}
                        renderItem={renderItem}
                        keyExtractor={item => item.idx}
                    refreshing={refreshing}
                    onRefresh={reloadList}
                    onEndReached={getList}
                    showsVerticalScrollIndicator={false}
                    /> */}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
