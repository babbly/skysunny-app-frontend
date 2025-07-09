import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

export default function MyInquiryDetail({ route, navigation }) {

    const { inquiry } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
            <View style={{ flex: 1, paddingTop: scaleHeight(40) }}>
                {/* 상단 바 */}
                <View style={[layout.topBar]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                        <TouchableOpacity style={layout.backBox} onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../../img/common/close.png')}
                                style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 문의 */}
                <View style={{
                    width: scaleWidth(360),
                    paddingHorizontal: 20,
                    paddingVertical: 30,
                    alignSelf: 'center',
                }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                        <View style={{
                            borderRadius: 4,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            backgroundColor: inquiry.answer ? '#e5e5e5' : '#f6f6f6',
                            marginRight: 10,
                            marginBottom: 8
                        }}>
                            <Text>{inquiry.answer ? '답변완료' : '답변대기'}</Text>
                        </View>
                        <Text style={{ fontSize: scaleFont(16), fontWeight: 'bold' }}>
                            {inquiry.title}
                        </Text>
                    </View>
                    <Text style={{ color: '#888', marginBottom: 20 }}>{inquiry.date}</Text>
                    <Text style={{ fontSize: scaleFont(14), marginBottom: 30 }}>{inquiry.content}</Text>
                </View>

                {/* 답변 */}
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: color.lightGray,
                            paddingHorizontal: 20,
                            paddingTop: 30,
                        }}>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: scaleFont(18),
                            lineHeight: (26),
                            marginBottom: 10,
                            color: '#2d2d2d'
                        }}>A.</Text>
                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(18),
                            color: '#2d2d2d',
                            marginBottom: 10
                        }}>
                            {inquiry.answer}
                        </Text>
                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(16),
                            color: color.fontGray
                        }}>
                            {inquiry.answerDate}
                        </Text>
                    </View>
                </View>

            </View>
        </SafeAreaView >
    );
}
