import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';


const myFaqList = [
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

export default function MyFaq({ navigation }) {
    const [openMyFaqs, setOpenMyFaqs] = useState([]);


    const renderItem = ({ item }) => {
        const isOpen = openMyFaqs.includes(item.id);

        return (
            <View style={{ marginBottom: scaleHeight(20) }}>
                <TouchableOpacity
                    onPress={() => {
                        if (item.answer) {
                            navigation.navigate('MyFaqDetail', { faq: item });
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
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    backgroundColor: item.answer ? '#e5e5e5' : '#f6f6f6',
                                    color: item.answer ? '#6e6e6e' : color.black,
                                    marginRight: 10
                                }}>
                                    <Text>{item.answer ? '답변완료' : '답변대기'}</Text>
                                </View>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: scaleFont(15),
                                    lineHeight: scaleFont(24),
                                    marginBottom: 5,
                                }}>
                                    {item.title}
                                </Text>

                            </View>

                            <Text style={{
                                fontWeight: '350',
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(18),
                                color: '#777',
                            }}>
                                {item.date}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>


            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <View style={{ paddingTop: scaleHeight(40) }} />

            {/* 상단 바 */}
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={layout.backBox} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../img/common/backarrow.png')}
                            style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={layout.topText}>나의 문의내역</Text>
                    </View>
                </View>
            </View>

            {/* 리스트 */}
            <FlatList
                contentContainerStyle={{ paddingVertical: scaleHeight(20) }}
                data={myFaqList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}
