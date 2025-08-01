import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BannerSlider from '../../components/BannerSlider';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function PassTicket({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const [selectedType, setSelectedType] = useState(null);

    const bannerImages3 = [
        require('../../img/home/banner2.png'),
        require('../../img/home/banner2.png'),
        require('../../img/home/banner2.png'),
    ];

    const passList = [
        { id: '1', title: '10,000', duration: '1개월', price: '10,000원' },
        { id: '2', title: '30,000', duration: '1개월', price: '30,000원' },
        { id: '3', title: '50,000', duration: '2개월', price: '50,000원' },
        { id: '4', title: '100,000', duration: '3개월', price: '100,000원' },
        { id: '5', title: '150,000', duration: '4개월', price: '150,000원' },
        { id: '6', title: '200,000', duration: '5개월', price: '200,000원' },
        { id: '7', title: '10,000', duration: '1개월', price: '10,000원' },
        { id: '8', title: '30,000', duration: '1개월', price: '30,000원' },
        { id: '9', title: '50,000', duration: '2개월', price: '50,000원' },
        { id: '10', title: '100,000', duration: '3개월', price: '100,000원' },
        { id: '11', title: '150,000', duration: '4개월', price: '150,000원' },
        { id: '12', title: '200,000', duration: '5개월', price: '200,000원' },
    ];

    const renderItem = ({ item }) => {
        const isSelected = selectedType === item.id;
        return (
            <TouchableOpacity
                style={styles.cardWrapper}
                onPress={() => setSelectedType(item.id)}
            >
                <ImageBackground
                    source={
                        isSelected
                            ? require('../../img/home/ticketBg-b.png')
                            : require('../../img/home/ticketBg-w.png')
                    }
                    style={styles.passCard}
                    resizeMode="contain"
                >
                    <Text style={[styles.title, { color: isSelected ? color.gray900 : color.gray700 }]}>{item.title}</Text>
                    <Text style={[styles.title, { color: isSelected ? color.gray900 : color.gray700 }]}>캐시권</Text>
                    <Text style={[styles.text1, { color: isSelected ? color.gray900 : color.gray700 }]}>이용기간 : {item.duration}</Text>
                    <Text style={[styles.text2, { color: isSelected ? color.gray900 : color.gray700 }]}>{item.price}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                {/* 상단 바 */}
                <View style={[layout.topBar]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                            <Image source={require('../../img/common/backarrow.png')}
                                style={[layout.icon24]}
                                resizeMode="contain" />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[layout.topTxt]}>캐시권 구매</Text>
                        </View>
                    </View>
                </View>

                {/* 헤더 정보 */}
                <View style={{ width: scaleWidth(360), justifyContent: 'center', alignItems: 'center', paddingVertical: scaleWidth(20) }}>
                    <Text style={{ fontSize: scaleFont(16), lineHeight: scaleFont(24), color: color.gray900 }}>시작 스터디카페 인천 송도점</Text>
                    <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(24), color: color.gray900 }}>인천 연수구 해돋이로 165 8층 (803호)</Text>
                </View>

                {/* 내용 영역 */}
                <View style={[layout.container, { backgroundColor: color.white }]}>
                    <View style={{ flex: 1, width: scaleWidth(360), paddingTop: scaleHeight(20), paddingBottom: scaleHeight(10), paddingHorizontal: scaleWidth(15), backgroundColor: color.lightGray }}>
                        {/* 배너 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../../img/history/ticket.png")} style={{ width: 14, height: 14, marginRight: 10 }} resizeMode="contain" />
                            <Text style={{ fontWeight: '400', fontSize: scaleFont(12), lineHeight: scaleFont(16) }}>좌석안내</Text>
                        </View>
                        <View style={{ marginVertical: scaleHeight(10) }}>
                            <BannerSlider banners={bannerImages3} type='bottom' bannerHeight={scaleHeight(130)} borderRadius={6} />
                        </View>

                        {/* 이용권 안내 */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scaleHeight(20), }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Image source={require('../../img/home/information.png')} style={[layout.icon14]} resizeMode="contain" />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(20), color: color.black }}>개방형</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: scaleWidth(10) }}>
                                    <Image source={require('../../img/home/tableWidth.png')} style={[layout.icon14]} resizeMode="contain" />
                                    <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(20), color: color.black }}>72cm</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: scaleWidth(10) }}>
                                    <Image source={require('../../img/home/seat.png')} style={[layout.icon14]} resizeMode="contain" />
                                    <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(20), color: color.black }}>카페형</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Image source={require('../../img/home/light.png')} style={[layout.icon14]} resizeMode="contain" />
                                    <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(20), color: color.black }}>LED 스탠드</Text>
                                </View>
                            </View>
                        </View>

                        {/* 상품 선택 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scaleHeight(10) }}>
                            <Image source={require("../../img/history/ticket.png")} style={{ width: 14, height: 14, marginRight: 10 }} resizeMode="contain" />
                            <Text style={{ fontWeight: '400', fontSize: scaleFont(12), lineHeight: scaleFont(16) }}>상품을 선택해주세요.</Text>
                        </View>

                        {/* 상품 리스트 */}
                        <FlatList
                            data={passList}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={3}
                            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: scaleHeight(10) }}
                            scrollEnabled={true}
                            style={{ maxHeight: scaleHeight(1500) }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>

            {/* 하단 버튼 */}
            <View style={styles.bottomButtonMain2}>
                <TouchableOpacity onPress={() => movePage('CheckPayment')} >
                    <Text style={styles.bottomButtonTxt}>다음 단계로</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: scaleWidth(105),
    },
    passCard: {
        width: scaleWidth(105),
        height: scaleHeight(90),
        justifyContent: 'center',
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(10),
    },
    title: {
        fontSize: scaleFont(13),
        lineHeight: scaleFont(16),
        fontWeight: '400',
    },
    text1: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        fontWeight: '500',
    },
    text2: {
        fontSize: scaleFont(11),
        lineHeight: scaleFont(12),
        fontWeight: '300',
    },
    bottomButtonMain2: {
        width: scaleWidth(360),
        height: scaleHeight(52),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.mainColor,
    },
    bottomButtonTxt: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.gray900
    }
});