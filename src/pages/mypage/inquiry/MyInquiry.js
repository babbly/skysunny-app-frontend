import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';


const myInquiryList = [
    {
        id: 1,
        title: '서비스예약 관련 문의 드립니다.',
        date: '2022-12-30 13:30:30',
        content: '안녕하세요. 이용권 예약 문의 드립니다.',
        answer: '안녕하세요. 스카스카입니다. 문의하신 내용에 대한 답변입니다.',
        answerDate: '2023-02-07'
    },
    {
        id: 2,
        title: '서비스예약 관련 문의 드립니다.',
        date: '2022-12-30 13:30:30',
        content: '안녕하세요. 이용권 예약 문의 드립니다.',
        answer: '',
        answerDate: ''
    },
    {
        id: 3,
        title: '서비스예약 관련 문의 드립니다.',
        date: '2022-12-30 13:30:30',
        content: '안녕하세요. 이용권 예약 문의 드립니다.',
        answer: '',
        answerDate: ''
    },
];

export default function MyInquiry({ navigation }) {
    const [openMyInquirys, setOpenMyInquirys] = useState([]);


    const renderItem = ({ item }) => {
        const isOpen = openMyInquirys.includes(item.id);

        return (
            <View style={{ marginBottom: scaleHeight(20) }}>
                <TouchableOpacity
                    onPress={() => {
                        if (item.answer) {
                            navigation.navigate('MyInquiryDetail', { inquiry: item });
                        }
                    }}
                >
                    <View
                        style={{
                            width: scaleWidth(310),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    borderRadius: 4,
                                    paddingHorizontal: scaleWidth(10),
                                    paddingVertical: Platform.OS === 'ios' ? scaleHeight(8) : scaleHeight(5),
                                    backgroundColor: item.answer ? color.mediumGray : color.lightGray,
                                    color: item.answer ? color.fontGray : color.black,
                                    marginRight: 10
                                }}>
                                    <Text style={{
                                        color: color.black,
                                        fontFamily: 'NotoSans KR',
                                        fontSize: scaleFont(12),
                                        fontWeight: '300',
                                        lineHeight: scaleFont(16),
                                        textAlign: 'center',
                                    }}>{item.answer ? '답변완료' : '답변대기'}</Text>
                                </View>
                                <Text style={[layout.titleTxt]}>
                                    {item.title}
                                </Text>
                            </View>

                            <Text style={[layout.dateTxt]}>
                                {item.date}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity >
            </View >
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>

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
                        <Text style={[layout.topTxt]}>나의 문의내역</Text>
                    </View>
                </View>
            </View>

            {/* 리스트 */}
            <View style={[layout.container, { backgroundColor: color.white }]}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: scaleHeight(20) }}
                    data={myInquiryList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    );
}
