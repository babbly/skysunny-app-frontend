import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { httpGet, httpUrl } from '../../api/httpClient';
import SearchBox from '../../components/SearchBox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function FavoriteStore({ navigation }) {

    useEffect(() => {
        favoriteStores();
    }, [selectedTab]);

    const storeDetail = () => {
        navigation.navigate('PageStack', {
            screen: 'StoreDetail'
        });
    };
    const [selectedTab, setSelectedTab] = useState('nearest');
    const [storeData, setStoreData] = useState([]);

    const favoriteStores = async () => {
        try {
            const result = await httpGet(
                httpUrl.favoriteStore,
                [selectedTab === 'nearest' ? 'nearest' : selectedTab, '스터디카페'],
                null,
                false
            );
            setStoreData(result.result);
        } catch (err) {
            console.error('찜한 매장 API 실패:', err);
        }
    };;

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', height: scaleHeight(130), marginBottom: scaleHeight(15) }}>
            <TouchableOpacity style={{
                width: scaleWidth(330),
                backgroundColor: color.white,
                borderRadius: 6,
                flexDirection: 'row'
            }}
                onPress={storeDetail}>
                <View style={{ position: 'relative' }}>
                    <Image
                        source={require("../../img/mypage/example.png")}
                        style={{
                            width: scaleWidth(130),
                            height: scaleHeight(130),
                            borderTopLeftRadius: 6,
                            borderBottomLeftRadius: 6,
                        }}
                        resizeMode="cover"
                    />

                    {/* 좋아요 표시 */}
                    <View style={{
                        position: 'absolute',
                        left: scaleWidth(8),
                        bottom: scaleHeight(5),
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image
                            source={require('../../img/home/like-fill.png')}
                            style={{
                                width: scaleWidth(10),
                                height: scaleHeight(10),
                                marginRight: 4,
                            }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            color: color.white,
                            fontSize: scaleFont(12),
                            fontWeight: '500',
                        }}>{item.favoriteCount}</Text>
                    </View>
                </View>

                <View style={{
                    width: scaleWidth(200),
                    paddingVertical: scaleHeight(5),
                    paddingHorizontal: scaleWidth(5)
                }}>
                    {/* 거리 정보 */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require("../../img/mypage/distance.png")}
                                style={[layout.icon14]}
                                resizeMode="contain"
                            />
                            <Text style={{
                                color: color.black,
                                fontFamily: 'Noto Sans KR',
                                fontSize: scaleFont(14),
                                fontWeight: '700',
                                lineHeight: scaleFont(16)
                            }}>{item.distance}</Text>
                        </View>
                        {/* <Text style={{
                            color: color.black,
                            fontFamily: 'Noto Sans KR',
                            fontSize: scaleFont(12),
                            fontWeight: '700',
                            lineHeight: scaleFont(16)
                        }}>{item.walk}</Text> */}
                    </View>
                    <View style={[layout.line, { paddingBottom: scaleHeight(4) }]} />
                    {/* 매장 정보 */}
                    <View style={{ marginVertical: scaleHeight(14), }}>
                        <Text style={[styles.favInfoTxt, { fontFamily: 'BM DoHyeon', }]}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../../img/mypage/time.png")} style={[layout.icon14]} />
                            <Text style={[styles.favInfoTxt, { fontFamily: 'Noto Sans KR', marginVertical: scaleHeight(4) }]}>{item.businessHours}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../../img/mypage/discount.png")} style={[layout.icon14]} />
                            <Text style={[styles.favInfoTxt, { fontFamily: 'Noto Sans KR', }]}>{item.eventDescription}</Text>
                        </View>
                    </View>

                    {/* 좌석,스터디룸,사물함 정보 */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../../img/mypage/seat.png")} style={[layout.icon14]} />
                        <Text style={styles.favInfoTxt2}>{item.seats}</Text>
                        <View style={[layout.rightLine, { marginHorizontal: 5, alignSelf: 'center' }]} />
                        <Image source={require("../../img/mypage/studyroom.png")} style={[layout.icon14]} />
                        <Text style={[styles.favInfoTxt2, { marginVertical: scaleHeight(4) }]}>{item.studyRooms}</Text>
                        <View style={[layout.rightLine, { marginHorizontal: 5, alignSelf: 'center' }]} />
                        <Image source={require("../../img/mypage/locker.png")} style={[layout.icon14]} />
                        <Text style={styles.favInfoTxt2}>{item.lockers}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View >
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white, }}>
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
                        <Text style={[layout.topTxt]}>찜한 매장</Text>
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
                    {['nearest', 'myFavorite', 'popular'].map((type) => (
                        <TouchableOpacity
                            key={type}
                            style={[layout.toggleButton, {
                                backgroundColor: selectedTab === type ? color.mainColor : color.gray100,
                                borderWidth: selectedTab === type ? 1 : 0,
                            }]}
                            onPress={() => setSelectedTab(type)}
                        >
                            <Text style={[layout.btnTxt]}>
                                {type === 'nearest' ? '가까운 순' : type === 'myFavorite' ? '내가 찜한 순' : '찜 많은 순'}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <SearchBox />
            </View>

            {/* 매장 리스트 */}
            <View style={[layout.container]}>
                <FlatList
                    data={storeData}
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
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    favInfoTxt: {
        color: color.black,
        fontSize: scaleFont(12),
        fontWeight: '400',
        lineHeight: scaleFont(16),
    },
    favInfoTxt2: {
        color: color.gray900,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(12),
        fontWeight: '400',
        lineHeight: scaleFont(16)
    }

});