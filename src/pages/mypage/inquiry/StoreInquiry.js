import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import SearchBox from '../../../components/SearchBox';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';


const stores = [
    {
        id: 1,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },
    {
        id: 2,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },
    {
        id: 3,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },
    {
        id: 4,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },
    {
        id: 5,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },
    {
        id: 6,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },

    {
        id: 7,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },

    {
        id: 8,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    }, {
        id: 9,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },
    {
        id: 10,
        name: '시작 스터디카페 인천송도점',
        address: '인천 연수구 해돋이로 165 8층 (803호)',
        image: require("../../../img/history/example.png"),
    },
];

export default function StoreInquiry({ navigation }) {
    const [search, setSearch] = useState('');


    const filteredStores = stores.filter((store) =>
        store.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={[layout.topBar]}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../../img/common/backarrow.png")}
                            style={[layout.icon24]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[layout.topTxt]}>지점 이용문의</Text>
                    </View>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: scaleWidth(20),
                    paddingBottom: scaleHeight(50),
                }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={{ marginTop: scaleHeight(20) }}>
                    <Text style={styles.boldTxt}>
                        문의하실 지점을 선택해주세요.
                    </Text>
                </View>


                <View style={{ marginVertical: scaleHeight(20) }}>
                    <SearchBox />
                </View>

                {/* 매장 리스트 */}
                {filteredStores.map((store) => (
                    <TouchableOpacity
                        key={store.id}
                        onPress={() => navigation.navigate('StoreInquiryDetail', { store })}
                        style={{
                            flexDirection: 'row',
                            paddingVertical: scaleHeight(10),
                            paddingHorizontal: scaleWidth(10),
                            borderRadius: 6,
                            borderWidth: 1,
                            borderColor: color.mediumGray,
                            marginBottom: scaleHeight(10),
                        }}
                    >
                        <Image
                            source={store.image}
                            style={{ width: scaleWidth(50), height: scaleHeight(50), borderRadius: 8 }}
                            resizeMode="contain"
                        />
                        <View style={{ paddingLeft: 10, paddingVertical: 5 }}>
                            <Text style={{
                                color: color.black,
                                fontFamily: 'Noto Sans KR',
                                fontSize: scaleFont(13),
                                fontWeight: '500',
                                lineHeight: scaleFont(20),
                            }}>
                                {store.name}
                            </Text>
                            <Text style={{
                                color: color.fontGray,
                                fontFamily: 'Noto Sans KR',
                                fontSize: scaleFont(12),
                                fontWeight: '300',
                                lineHeight: scaleFont(20),
                            }}>
                                {store.address}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    boldTxt: {
        color: color.black,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(15),
        fontWeight: '500',
        lineHeight: scaleFont(24)
    }
});