import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchBox from '../../components/SearchBox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function CafeLike({ navigation }) {
    const [selectedTab, setSelectedTab] = useState('nearby');

    const nearbyData = [
        { id: '1', name: '시작 스터디카페 인천 송도점', distance: '0.5km', walk: '도보 5분' },
        { id: '2', name: '시작 스터디카페 인천 송도점', distance: '0.8km', walk: '도보 8분' },
    ];
    const likedData = [
        { id: '3', name: '시작 스터디카페 인천 송도점', distance: '1.2km', walk: '도보 12분' },
        { id: '4', name: '시작 스터디카페 인천 송도점', distance: '1.5km', walk: '도보 15분' },
    ];
    const popularData = [
        { id: '5', name: '시작 스터디카페 인천 송도점', distance: '2.1km', walk: '도보 20분' },
        { id: '6', name: '시작 스터디카페 인천 송도점', distance: '2.5km', walk: '도보 25분' },
    ];

    const getCurrentData = () => {
        switch (selectedTab) {
            case 'nearby': return nearbyData;
            case 'liked': return likedData;
            case 'popular': return popularData;
            default: return [];
        }
    };

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', height: scaleHeight(130), marginBottom: scaleHeight(15) }}>
            <View style={{
                width: scaleWidth(330),
                backgroundColor: "#fff",
                borderRadius: 6,
                flexDirection: 'row'
            }}>
                <Image
                    source={require("../../img/mypage/example.png")}
                    style={{
                        width: scaleWidth(130),
                        height: scaleHeight(130),
                        borderTopLeftRadius: 6,
                        borderBottomLeftRadius: 6
                    }}
                    resizeMode="cover"
                />
                <View style={{
                    width: scaleWidth(200),
                    paddingVertical: scaleHeight(5),
                    paddingHorizontal: scaleWidth(5)
                }}>
                    {/* 거리 정보 */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        paddingBottom: scaleHeight(4),
                        borderColor: '#e5e5e5'
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require("../../img/mypage/distance.png")}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                            <Text style={{
                                fontWeight: '400',
                                fontSize: scaleFont(13),
                                color: color.fontGray,
                            }}>{item.distance}</Text>
                        </View>
                        <Text style={{ fontSize: scaleFont(12) }}>{item.walk}</Text>
                    </View>

                    {/* 매장 정보 */}
                    <View style={{ marginVertical: scaleHeight(14), }}>
                        <Text style={{ fontWeight: '500', fontSize: scaleFont(13), marginBottom: 4 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../../img/mypage/time.png")} style={styles.icon} />
                            <Text style={{ fontSize: scaleFont(12), color: color.fontGray, marginBottom: 4 }}>00:00 ~ 24:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../../img/mypage/discount.png")} style={styles.icon} />
                            <Text style={{ fontWeight: '700', fontSize: scaleFont(12) }}>2인 동반 등록시 20% 할인</Text>
                        </View>
                    </View>

                    {/* 좌석,지점,사물함 정보 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../../img/mypage/seat.png")} style={styles.icon} />
                        <Text style={{ fontSize: scaleFont(12), marginRight: 5 }}>30/90 |</Text>
                        <Image source={require("../../img/mypage/seat2.png")} style={styles.icon} />
                        <Text style={{ fontSize: scaleFont(12), marginRight: 5 }}>01/05 |</Text>
                        <Image source={require("../../img/mypage/locker.png")} style={styles.icon} />
                        <Text style={{ fontSize: scaleFont(12) }}>10/45</Text>
                    </View>
                </View>
            </View>
        </View >
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white, }}>
            <View style={{ paddingTop: scaleHeight(40) }} />
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
                        <Text style={layout.topText}>찜한 매장</Text>
                    </View>
                </View>
            </View>

            {/* 버튼 + 검색창 */}
            <View style={{
                paddingVertical: scaleHeight(20),
                paddingHorizontal: scaleWidth(15),
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <View style={{ flexDirection: 'row', marginBottom: scaleHeight(20) }}>
                    {['nearby', 'liked', 'popular'].map((type) => (
                        <TouchableOpacity
                            key={type}
                            style={[layout.toggleButton, {
                                backgroundColor: selectedTab === type ? color.mainColor : color.buttonGray,
                                borderWidth: selectedTab === type ? 1 : 0,
                            }]}
                            onPress={() => setSelectedTab(type)}
                        >
                            <Text style={{ color: '#000' }}>
                                {type === 'nearby' ? '가까운 순' : type === 'liked' ? '내가 찜한 순' : '찜 많은 순'}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <SearchBox />
            </View>

            {/* 매장 리스트 */}
            <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                <FlatList
                    data={getCurrentData()}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingVertical: scaleHeight(20),
                        flexGrow: 1,
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    icon: {
        width: 14,
        height: 14,
        marginRight: 3,
    },

});