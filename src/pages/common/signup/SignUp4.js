import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleHeight } from '../../../res/layout';

export default function SignUp4({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
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
            {rightButton && (
                <TouchableOpacity style={layout.inputInnerButton} onPress={rightButton.onPress}>
                    <Text style={layout.inputInnerButtonTxt}>{rightButton.label}</Text>
                </TouchableOpacity>
            )}
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
                            <Text style={[layout.topTxt]}>회원가입 (4/5)</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={[layout.guideView]}>
                        <Text style={[layout.guideTxt]}>
                            -  비밀번호를 입력하세요. {"\n"}
                            (최소 8자리 이상, 영문/숫자/특수문자 혼용)
                        </Text>
                    </View>

                    <View style={{ marginTop: scaleHeight(30) }}>
                        <FloatingInput
                            label="비밀번호(최소 8자리 이상, 영문/숫자/특수문자 혼용)"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            placeholder="비밀번호 변경시 입력하세요"
                            placeholderTextColor='#c2c2c2'
                        />

                        <FloatingInput
                            label="비밀번호 확인"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            placeholder="동일하게 한번 더 입력하세요"
                            placeholderTextColor='#c2c2c2'
                        />
                    </View>

                    <View style={[layout.errorView]}>
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
                <View style={styles.bottomWrapper}>
                    <View style={[layout.bottomButtonGray2]}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={[layout.bottomButtonTxt]}>이전</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[layout.bottomButtonMain2]}>
                        <TouchableOpacity onPress={() => movePage('SignUp5')} >
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
