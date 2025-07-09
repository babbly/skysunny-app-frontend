import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import GoogleMapScreen from '../../components/GoogleMap';
import SearchBox from '../../components/SearchBox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function SearchTab({ navigation }) {
    const [searchMode, setSearchMode] = useState('map');
    const [hasResults, setHasResults] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>


            {/* 상단 바 */}
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
                        <Text style={layout.topText}>매장검색</Text>
                    </View>
                </View>
            </View>

            <View style={[layout.container, { backgroundColor: color.white }]}>
                {/* 상단부분 */}
                <View style={{ paddingVertical: scaleHeight(20), }}>
                    <View style={{ flexDirection: 'row', marginBottom: scaleHeight(20) }}>
                        <TouchableOpacity
                            style={{
                                borderRadius: 4,
                                borderWidth: 1,
                                borderColor: searchMode === 'map' ? color.black : "#F6F6F6",
                                backgroundColor: searchMode === 'map' ? color.mainColor : "#F6F6F6",
                                paddingVertical: scaleHeight(8),
                                paddingHorizontal: scaleWidth(12),
                                marginRight: scaleWidth(5),
                            }}
                            onPress={() => setSearchMode('map')}
                        >
                            <Text style={{ textAlign: 'center', color: searchMode === 'map' ? color.black : color.fontGray }}>
                                지도검색
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                borderRadius: 4,
                                borderWidth: 1,
                                borderColor: searchMode === 'name' ? color.black : "#F6F6F6",
                                backgroundColor: searchMode === 'name' ? color.mainColor : "#F6F6F6",
                                paddingVertical: scaleHeight(8),
                                paddingHorizontal: scaleWidth(12),
                            }}
                            onPress={() => {
                                setSearchMode('name');
                                setHasResults(false);
                            }}
                        >
                            <Text style={{ textAlign: 'center', color: searchMode === 'name' ? color.black : color.fontGray }}>
                                매장명 검색
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <SearchBox
                    />
                </View>

                {searchMode === 'map' ?
                    <View>
                        <GoogleMapScreen
                            onRegionChange={(region) => {
                                console.log('지도 영역 변경됨:', region);
                            }}
                            style={{ flex: 1 }}
                        />
                    </View>
                    :
                    <View>

                    </View>
                }
                {/* 결과없을때 */}
                {searchMode === 'name' && !hasResults && (
                    <View style={[layout.container, { justifyContent: 'center', flex: 1 }]}>
                        <Image
                            source={require("../../img/search/noCafe.png")}
                            style={{ width: 90, height: 90 }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            fontSize: scaleFont(16),
                            lineHeight: scaleFont(26),
                            textAlign: 'center'
                        }}>
                            검색된 매장이 없습니다.{"\n"}주소 검색은 지도 검색을 이용해주세요.
                        </Text>
                    </View>

                )}

                {/* 결과있을때 */}
                {searchMode === 'name' && hasResults && (
                    <View style={{ flex: 1, width: scaleWidth(360) }}>
                        <Text style={{ padding: 10 }}>🔍 검색 결과 리스트 출력 영역</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}
