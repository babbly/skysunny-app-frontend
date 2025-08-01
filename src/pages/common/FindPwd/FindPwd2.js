import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    TouchableOpacity, View
} from 'react-native';
import FloatingInput from '../../../components/FloatingInput';
import color from '../../../res/color';
import layout, { scaleHeight } from '../../../res/layout';

export default function FindPwd2({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


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
                            <Text style={[layout.topTxt]}>비밀번호 찾기</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>
                    <View style={[layout.guideView]}>
                        <Text style={[layout.guideTxt]}>
                            - 새로운 비밀번호를 입력해주세요. {"\n"} (최서 8자리 이상, 영문/숫자/특수문자 혼용)
                        </Text>
                    </View>

                    <View style={{ marginTop: scaleHeight(30) }}>
                        <FloatingInput
                            label="비밀번호"
                            placeholder="입력하세요"
                            placeholderTextColor={color.gray300}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <FloatingInput
                            label="비밀번호 확인"
                            placeholder="입력하세요"
                            placeholderTextColor={color.gray300}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>

                    <View style={[layout.alertView]}>
                        <Image
                            source={require('../../../img/common/error.png')}
                            style={[layout.icon16, { marginRight: 4 }]}
                            resizeMode="contain"
                        />
                        <Text style={[layout.errorTxt]}>
                            비밀번호가 다릅니다. 다시 확인해주세요.
                        </Text>
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity onPress={() => movePage('Login')} >
                        <Text style={[layout.bottomButtonTxt]}>완료</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}
