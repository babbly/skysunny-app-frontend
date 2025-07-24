import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

export default function FindPwd2({ navigation }) {

    const login = () => {
        navigation.navigate('PageStack', {
            screen: 'Login'
        });
    };

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const FloatingInput = ({ label, value, onChangeText, secureTextEntry, editable = true, placeholder, rightButton, placeholderTextColor }) => (
        <View style={[layout.inputContainer]}>
            <Text style={[layout.inputLabel]}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={editable}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[layout.input]}
            />
        </View>
    );


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
                            <Text style={[layout.topTxt]}>비밀번호 재설정</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={{ width: scaleWidth(320), paddingTop: scaleHeight(30), }}>
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

                    <View style={{
                        width: scaleWidth(320), flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../img/common/error.png')}
                            style={{ width: scaleWidth(16), height: scaleHeight(16), marginRight: 4 }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            color: 'red',
                            fontFamily: 'Noto Sans KR',
                            fontSize: scaleFont(12),
                            fontWeight: '400',
                            lineHeight: scaleFont(16),
                            textAlign: 'center',
                        }}>
                            비밀번호가 다릅니다. 다시 확인해주세요.
                        </Text>
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity
                        onPress={login}
                    >
                        <Text style={[layout.bottomButtonTxt]}>완료</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}
