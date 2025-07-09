import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

export default function InquiryType({ navigation }) {
    const [inquiryMode, setInquiryMode] = useState('join');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('입력 오류', '제목과 내용을 모두 입력해주세요.');
            return;
        }

        Alert.alert('문의 제출 완료', '성공적으로 제출되었습니다.');
        setTitle('');
        setContent('');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >

                {/* 상단 바 */}
                <View style={layout.topBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={layout.backBox} onPress={() => navigation.goBack()}>
                            <Image
                                source={require("../../../img/common/backarrow.png")}
                                style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={layout.topText}>입점/제휴문의</Text>
                        </View>
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: scaleWidth(15),
                        paddingBottom: scaleHeight(50)
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* 안내 문구 */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            marginBottom: 10,
                            fontWeight: '500',
                            fontSize: scaleFont(15),
                            lineHeight: scaleFont(24)
                        }}>
                            스카스카에게 문의를 남겨주세요.
                        </Text>
                        <Text>
                            - 원하시는 문의 유형을 선택하신 후 작성해주세요.{"\n"}
                            운영자 검토 후 최대한 신속하게 답변해드릴게요.
                        </Text>
                    </View>

                    {/* 입점/제휴 버튼 */}
                    <View style={{ paddingVertical: scaleHeight(20) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: inquiryMode === 'join' ? color.black : "#F6F6F6",
                                    backgroundColor: inquiryMode === 'join' ? color.mainColor : "#F6F6F6",
                                    paddingVertical: scaleHeight(8),
                                    paddingHorizontal: scaleWidth(12),
                                    marginRight: scaleWidth(5),
                                }}
                                onPress={() => setInquiryMode('join')}
                            >
                                <Text style={{
                                    textAlign: 'center',
                                    color: inquiryMode === 'join' ? color.black : color.fontGray
                                }}>
                                    입점
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: inquiryMode === 'cooperate' ? color.black : "#F6F6F6",
                                    backgroundColor: inquiryMode === 'cooperate' ? color.mainColor : "#F6F6F6",
                                    paddingVertical: scaleHeight(8),
                                    paddingHorizontal: scaleWidth(12),
                                }}
                                onPress={() => setInquiryMode('cooperate')}
                            >
                                <Text style={{
                                    textAlign: 'center',
                                    color: inquiryMode === 'cooperate' ? color.black : color.fontGray
                                }}>
                                    제휴
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 제목 입력 */}
                    <View style={{ position: 'relative', marginBottom: 10 }}>
                        <Text style={{
                            position: 'absolute',
                            top: 6,
                            left: 10,
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(16),
                            color: color.lightDarkGray,
                            paddingHorizontal: 4,
                            zIndex: 10,
                        }}>
                            제목
                        </Text>
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            placeholder="제목을 입력해주세요"
                            style={{
                                borderWidth: 1,
                                borderColor: '#e0e0e0',
                                paddingHorizontal: 14,
                                borderRadius: 4,
                                fontSize: scaleFont(14),
                                lineHeight: scaleFont(24),
                                height: scaleHeight(64),
                                paddingTop: scaleHeight(18),
                                color: color.blackGray
                            }}
                        />
                    </View>


                    {/* 내용 입력 */}
                    <View>
                        <TextInput
                            value={content}
                            onChangeText={setContent}
                            placeholder="문의하실 내용을 입력해주세요"
                            multiline
                            numberOfLines={10}
                            textAlignVertical="top"
                            style={{
                                borderWidth: 1,
                                borderColor: '#e0e0e0',
                                padding: 10,
                                borderRadius: 4,
                                fontSize: scaleFont(14),
                                lineHeight: scaleFont(24),
                                height: scaleHeight(180),
                                color: '#c4c4c4'
                            }}
                        />
                    </View>
                </ScrollView>

                {/* 하단 버튼 */}
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: scaleHeight(52),
                    backgroundColor: color.mainColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={{
                            fontSize: scaleFont(16),
                            lineHeight: scaleFont(26),
                            color: color.blackGray
                        }}>
                            제출하기
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
