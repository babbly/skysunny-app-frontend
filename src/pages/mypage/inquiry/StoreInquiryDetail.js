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

export default function StoreInquiryDetail({ navigation, route }) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { store } = route.params;


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
                        paddingBottom: scaleHeight(50)
                    }}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* 안내 문구 */}
                    <View style={{ marginTop: 20, }}>
                        <Text style={[layout.titleTxt]}>
                            지점 문의 내용을 남겨주세요.
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: scaleHeight(11), marginBottom: scaleHeight(20) }}>
                            <Text style={[layout.f12w300]}>
                                - 매장명
                            </Text>
                            <View style={[layout.rightLine, { marginHorizontal: 5, alignSelf: 'center' }]} />
                            <Text style={[layout.f12w300]}>{store.name}</Text>
                        </View>
                    </View>

                    {/* 제목 */}
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


                    {/* 내용 */}
                    <View>
                        <TextInput
                            value={content}
                            onChangeText={setContent}
                            placeholder="문의하실 내용을 입력해주세요"
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