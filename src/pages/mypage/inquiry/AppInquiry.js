import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

const appInquiryList = [
    {
        id: 1,
        title: '캐시구매 및 사용방법',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 소멸되며 잔여시간 환불과 재입장이 불가능해요.',
    },
    {
        id: 2,
        title: '당일권',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 소멸되며 잔여시간 환불과 재입장이 불가능해요.',
    },
    {
        id: 3,
        title: '캐시정기권',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 소멸되며 잔여시간 환불과 재입장이 불가능해요.',
    },
    {
        id: 4,
        title: '기간정기권',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 소멸되며 잔여시간 환불과 재입장이 불가능해요.',
    },
    {
        id: 5,
        title: '스터디룸',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 소멸되며 잔여시간 환불과 재입장이 불가능해요.',
    },
    {
        id: 6,
        title: '기타',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 소멸되며 잔여시간 환불과 재입장이 불가능해요.',
    },
];

export default function AppInquiry({ navigation }) {
    const [openAppInquiry, setOpenAppInquirys] = useState([]);


    const toggleAppInquiry = (id) => {
        setOpenAppInquirys((prev) =>
            prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }) => {
        const isOpen = openAppInquiry.includes(item.id);

        return (
            <View style={{ justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => toggleAppInquiry(item.id)}>
                    <View
                        style={{
                            width: scaleWidth(360),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: color.gray100,
                            paddingVertical: scaleHeight(15),
                            paddingHorizontal: scaleWidth(15),
                        }}
                    >
                        <View>
                            <Text style={{
                                color: color.black,
                                fontFamily: 'Noto Sans KR',
                                fontSize: scaleFont(15),
                                fontWeight: '500',
                                lineHeight: scaleFont(24),
                            }}>
                                {item.title}
                            </Text>
                        </View>
                        <Image
                            source={require('../../../img/common/downarrow.png')}
                            style={{
                                width: scaleWidth(24),
                                height: scaleHeight(20),
                                transform: [{ scaleY: isOpen ? -1 : 1 }],
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

                {/* 내용 */}
                {isOpen && (
                    <View
                        style={{
                            width: scaleWidth(360),
                            backgroundColor: color.gray100,
                            paddingVertical: scaleHeight(15),
                            paddingHorizontal: scaleWidth(20),
                        }}
                    >
                        <Text style={[styles.contentTxt, { fontWeight: '700', marginBottom: scaleHeight(10) }]}>{item.content}</Text>
                        <Text style={[styles.contentTxt]}>{item.content2}</Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={[layout.topBar]}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../img/common/backarrow.png')}
                            style={[layout.icon24]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[layout.topTxt]}>앱 이용문의</Text>
                    </View>
                </View>
            </View>

            {/* 리스트 */}
            <FlatList
                contentContainerStyle={{ paddingVertical: scaleHeight(20) }}
                data={appInquiryList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <View style={[layout.bottomButtonMain]}>
                <TouchableOpacity
                // onPress={handleSubmit}
                >
                    <Text style={[layout.bottomButtonTxt]}>
                        카카오톡 이용문의
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    contentTxt: {
        color: color.gray900,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(12),
        lineHeight: scaleFont(18)
    },
});