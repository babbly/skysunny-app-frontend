import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

export default function MyInquiryDetail({ route, navigation }) {

    const { inquiry } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[layout.container, { backgroundColor: color.white }]}>
                {/* 상단 바 */}
                <View style={[layout.topBar]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                        <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../../img/common/close.png')}
                                style={[layout.icon24]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 문의 */}
                <View style={{
                    width: scaleWidth(360),
                    paddingHorizontal: scaleWidth(20),
                    paddingVertical: scaleHeight(30),
                    alignSelf: 'center',
                }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                        <View style={{
                            borderRadius: 4,
                            paddingVertical: scaleHeight(5),
                            paddingHorizontal: scaleWidth(10),
                            backgroundColor: inquiry.answer ? color.mediumGray : color.lightGray,
                            marginBottom: scaleHeight(8),
                            marginRight: 10,
                        }}>
                            <Text style={{
                                color: color.black,
                                fontFamily: 'NotoSans KR',
                                fontSize: scaleFont(12),
                                fontWeight: '300',
                                lineHeight: scaleFont(16),
                                textAlign: 'center',
                            }}>{inquiry.answer ? '답변완료' : '답변대기'}</Text>
                        </View>
                        <Text style={[layout.titleTxt]}>
                            {inquiry.title}
                        </Text>
                    </View>
                    <Text style={[layout.dateTxt, {
                        marginBottom: scaleHeight(20)
                    }]}>{inquiry.date}</Text>
                    <Text style={[layout.dateTxt, {
                        color: color.grey10,
                    }]}>{inquiry.content}</Text>
                </View>

                {/* 답변 */}
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: color.lightGray,
                            paddingHorizontal: scaleWidth(20),
                            paddingVertical: scaleHeight(30),
                        }}>
                        <Text style={{
                            color: color.grey10,
                            fontFamily: 'NotoSans KR',
                            fontSize: scaleFont(18),
                            fontWeight: '700',
                            lineHeight: (26),
                        }}>A.</Text>
                        <Text style={[styles.txt, {
                            color: color.grey10,
                            marginVertical: scaleHeight(10)
                        }]}>
                            {inquiry.answer}
                        </Text>
                        <Text style={[layout.dateTxt]}>
                            {inquiry.answerDate}
                        </Text>
                    </View>
                </View>

            </View>
        </SafeAreaView >
    );
}

