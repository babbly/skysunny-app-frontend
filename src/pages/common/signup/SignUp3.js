import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';
import { httpPost, httpUrl } from '../../../api/httpClient';
import FloatingInput from '../../../components/FloatingInput';
import color from '../../../res/color';
import layout, { scaleHeight } from '../../../res/layout';

export default function SignUp3({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const [id, setId] = useState('');
    const [checkEmail, setCheckEmail] = useState(null);

    const checkEmailDuplication = async () => {

        if (!id.includes('@')) {
            alert('이메일 형식으로 입력해주세요.');
            return;
        }
        try {
            const response = await httpPost(httpUrl.checkEmail, [], { email: id });
            console.log('이메일 중복 확인 응답:', response);
            setCheckEmail(response.code === 100); // 100이면 사용 가능
        } catch (err) {
            console.error(err);
            alert('오류가 발생했습니다.');
        }
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
                                source={require('../../../img/common/backarrow.png')}
                                style={[layout.icon24]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[layout.topTxt]}>회원가입 (3/5)</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={[layout.guideView]}>
                        <Text style={[layout.guideTxt]}>
                            - 아이디를 입력하세요.
                        </Text>
                    </View>
                    <View style={{ marginTop: scaleHeight(30) }}>
                        <FloatingInput
                            label="아이디(E-mail)"
                            value={id} onChangeText={(text) => {
                                setId(text);
                                setCheckEmail(null); // 입력 변경 시 초기화
                            }}
                            rightButton={{ label: '중복확인', onPress: checkEmailDuplication }} />
                    </View>
                    {checkEmail !== null && (
                        <View style={[layout.alertView]}>
                            <Image
                                source={
                                    checkEmail
                                        ? require('../../../img/common/circleCheck.png')
                                        : require('../../../img/common/error.png')
                                }
                                style={[layout.icon16, { marginRight: 4 }]}
                                resizeMode="contain"
                            />
                            <Text
                                style={[
                                    checkEmail ? layout.f12w400 : layout.errorTxt,
                                    { color: checkEmail ? color.gray900 : undefined },
                                ]}
                            >
                                {checkEmail
                                    ? '사용 가능한 아이디입니다.'
                                    : '이미 사용중인 아이디입니다.'}
                            </Text>
                        </View>
                    )}

                </View>

                {/* 하단 버튼 */}
                <View style={styles.bottomWrapper}>
                    <View style={layout.bottomButtonGray2}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={[layout.bottomButtonTxt]}>이전</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={checkEmail ? layout.bottomButtonMain2 : layout.bottomButtonGray1}>
                        <TouchableOpacity
                            onPress={() => movePage('SignUp4')}
                            disabled={!checkEmail}
                        >
                            <Text style={[layout.bottomButtonTxt]}>다음</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    bottomWrapper: {
        flexDirection: 'row',
    },
});
