import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SearchBox from '../../components/SearchBox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function SearchTab({ navigation }) {
    const back = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <View style={{ paddingTop: scaleHeight(40) }}></View>
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row' }}>
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
                        <Text style={layout.topText}>매장찾기</Text>
                    </View>
                </View>
            </View>


            <View style={[layout.container, {
                backgroundColor: color.white,
            }]}>
                <View style={{
                    paddingVertical: scaleHeight(20),
                    // borderWidth: 3,
                    // alignItems: 'left',
                }}>
                    <View style={{
                        // borderWidth: 1,
                        borderRadius: 4,
                        flexDirection: 'row',
                        marginBottom: scaleHeight(20),

                    }}>
                        <TouchableOpacity style={{
                            borderRadius: 4,
                            borderWidth: 1,
                            backgroundColor: color.mainColor,
                            paddingVertical: scaleHeight(8),
                            paddingHorizontal: scaleWidth(12),
                            marginRight: scaleWidth(5),
                        }}
                            onPress={{}}>
                            <Text style={{ textAlign: 'center', }}>지도검색</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            borderRadius: 4,
                            borderWidth: 1,
                            borderColor: "#F6F6F6",
                            backgroundColor: "#F6F6F6",
                            paddingVertical: scaleHeight(8),
                            paddingHorizontal: scaleWidth(12),

                        }}
                            onPress={{}}>
                            <Text style={{ textAlign: 'center', color: color.fontGray }}>매장명 검색</Text>
                        </TouchableOpacity>
                    </View>
                    <SearchBox />
                </View>
                {/* {data == 0 ? */}

                <View style={{ borderWidth: 1, flex: 1, width: scaleWidth(360), }}>

                    <Text>지도</Text>
                </View>
                {/* : */}
                <View style={[layout.container, { justifyContent: 'center', }]}>
                    <Image
                        source={require("../../img/search/noCafe.png")}
                        style={{ width: 90, height: 90, }}
                        resizeMode="contain"
                    />
                    <Text style={{
                        fontWeight: '350',
                        fontSize: scaleFont(16),
                        lineHeight: scaleFont(26),
                        textAlign: 'center'
                    }}>
                        검색된 매장이 없습니다.{"\n"}주소 검색은 지도 검색을 이용해주세요.
                    </Text>
                </View>
                {/* } */}

            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
