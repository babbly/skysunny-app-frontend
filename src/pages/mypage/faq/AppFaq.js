import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

const appFaqList = [
    {
        id: 1,
        title: '캐시구매 및 사용방법',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 솜ㄹ되어 잔여시간 환불과 재입장이 불가능해요.',
    },
    {
        id: 2,
        title: '당일권',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 솜ㄹ되어 잔여시간 환불과 재입장이 불가능해요.',
    },
    {
        id: 3,
        title: '캐시정기권',
        content: '구매한 매장에서만 이용가능한 일일 이용권이에요',
        content2: '퇴실 처리시 잔여시간이 모두 솜ㄹ되어 잔여시간 환불과 재입장이 불가능해요.',
    },
];

export default function AppFaq({ navigation }) {
    const [openAppFaq, setOpenAppFaqs] = useState([]);


    const toggleAppFaq = (id) => {
        setOpenAppFaqs((prev) =>
            prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }) => {
        const isOpen = openAppFaq.includes(item.id);

        return (
            <View style={{ justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => toggleAppFaq(item.id)}>
                    <View
                        style={{
                            width: scaleWidth(360),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: color.buttonGray,
                            paddingVertical: scaleHeight(15),
                            paddingHorizontal: scaleWidth(15),
                        }}
                    >
                        <View>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: scaleFont(15),
                                lineHeight: scaleFont(24),
                            }}>
                                {item.title}
                            </Text>
                        </View>
                        <Image
                            source={require('../../../img/common/underarrow.png')}
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
                            backgroundColor: color.buttonGray,
                            paddingVertical: 15,
                            paddingHorizontal: 20,
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(18),
                            marginBottom: 10
                        }}>{item.content}</Text>
                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(18)
                        }}>{item.content2}</Text>
                    </View>
                )}
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
                        <Text style={layout.topText}>앱 이용문의</Text>
                    </View>
                </View>
            </View>

            {/* 리스트 */}
            <FlatList
                contentContainerStyle={{ paddingVertical: scaleHeight(20) }}
                data={appFaqList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <View style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: scaleHeight(52),
                backgroundColor: color.mainColor,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                // onPress={handleSubmit}
                >
                    <Text style={{
                        fontSize: scaleFont(16),
                        lineHeight: scaleFont(26),
                        color: '#262626'
                    }}>
                        카카오톡 이용문의
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
