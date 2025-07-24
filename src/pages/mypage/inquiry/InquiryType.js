import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
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
    const [inputHeight, setInputHeight] = useState(scaleHeight(180));

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('입력 오류', '제목과 내용을 모두 입력해주세요.');
            return;
        }

        Alert.alert('문의 제출 완료', '성공적으로 제출되었습니다.');
        setTitle('');
        setContent('');
        setInputHeight(scaleHeight(180));
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >

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
                            <Text style={[layout.topTxt]}>입점/제휴문의</Text>
                        </View>
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: scaleWidth(20),
                        paddingBottom: scaleHeight(50)
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* 안내 문구 */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            color: color.black,
                            fontFamily: 'Noto Sans KR',
                            fontSize: scaleFont(15),
                            fontWeight: '500',
                            lineHeight: scaleFont(24),
                            marginBottom: scaleHeight(10)
                        }}>
                            스카스카에게 문의를 남겨주세요.
                        </Text>
                        <Text style={[layout.guideTxt]}>
                            - 원하시는 문의 유형을 선택하신 후 작성해주세요.{"\n"}
                            운영자 검토 후 최대한 신속하게 답변해드릴게요.
                        </Text>
                    </View>

                    {/* 입점/제휴 버튼 */}
                    <View style={{ paddingVertical: scaleHeight(20) }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={[layout.toggleButton, {
                                    backgroundColor: inquiryMode === 'join' ? color.mainColor : "#F6F6F6",
                                    borderWidth: inquiryMode === 'join' ? 1 : 0,
                                    marginRight: scaleWidth(5),
                                }]}
                                onPress={() => setInquiryMode('join')}
                            >
                                <Text style={[layout.btnTxt, {
                                    color: inquiryMode === 'join' ? color.black : color.fontGray
                                }]}>
                                    입점
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[layout.toggleButton, {
                                    backgroundColor: inquiryMode === 'cooperate' ? color.mainColor : "#F6F6F6",
                                    borderWidth: inquiryMode === 'cooperate' ? 1 : 0,
                                }]}
                                onPress={() => setInquiryMode('cooperate')}
                            >
                                <Text style={[layout.btnTxt, {
                                    color: inquiryMode === 'cooperate' ? color.black : color.fontGray
                                }]}>
                                    제휴
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 제목 입력 */}
                    <View style={{ position: 'relative', marginBottom: 10 }}>
                        <Text style={[layout.inputLabel]}>
                            제목
                        </Text>
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            placeholder="제목을 입력해주세요"
                            style={[layout.input]}
                        />
                    </View>


                    {/* 내용 입력 */}
                    <View>
                        <TextInput
                            value={content}
                            onChangeText={setContent}
                            placeholder="문의하실 내용을 입력해주세요"
                            onContentSizeChange={(e) =>
                                setInputHeight(e.nativeEvent.contentSize.height)
                            }
                            multiline
                            numberOfLines={10}
                            textAlignVertical="top"
                            style={styles.contentInput}
                        />
                    </View>
                </ScrollView>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={[layout.bottomButtonTxt]}>
                            제출하기
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    contentInput: {
        borderWidth: 1,
        borderColor: color.grey80,
        padding: 10,
        borderRadius: 4,
        fontSize: scaleFont(14),
        lineHeight: scaleFont(24),
        height: scaleHeight(180),
        paddingVertical: scaleHeight(10),
        paddingHorizontal: scaleWidth(14),
        color: color.grey70
    }
});