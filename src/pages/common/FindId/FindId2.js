import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleHeight, scaleWidth } from '../../../res/layout';

export default function FindId2({ navigation }) {

    const verify = () => {
        navigation.navigate('PageStack', { screen: 'Verify' });
    };

    const findId2 = () => {
        navigation.navigate('PageStack', { screen: 'FindPwd3' });
    };

    const [name, setName] = useState('홍길동');
    const [birth, setBirth] = useState('19880112');
    const [gender, setGender] = useState('남');
    const [phone, setPhone] = useState('01012345678');

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
                            - 본인인증을 누르고 진행하세요.
                        </Text>
                    </View>

                    {/* 본인인증 버튼 */}
                    <View style={[layout.verifyBtn]}>
                        <TouchableOpacity onPress={verify}>
                            <Text style={[layout.bottomButtonTxt]}>본인 인증</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: scaleHeight(30) }}>
                        <FloatingInput
                            label="성명"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.gray300}
                            value={name}
                            onChangeText={setName}
                            editable={false} />
                        <FloatingInput
                            label="휴대전화번호"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.gray300}
                            value={phone}
                            onChangeText={setPhone}
                            editable={false} />
                        <FloatingInput
                            label="생년월일"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.gray300}
                            value={birth}
                            onChangeText={setBirth}
                            editable={false} />
                        <FloatingInput
                            label="성별"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.gray300}
                            value={gender}
                            onChangeText={setGender}
                            editable={false} />
                    </View>

                    <View style={{
                        width: scaleWidth(320), flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../../img/common/circleCheck.png')}
                            style={{ width: scaleWidth(16), height: scaleHeight(16), marginRight: 4 }}
                            resizeMode="contain"
                        />
                        <Text style={{
                            color: color.gray900,
                            fontFamily: 'Noto Sans KR',
                            fontSize: scaleFont(12),
                            fontWeight: '400',
                            lineHeight: scaleFont(16),
                            textAlign: 'center',
                        }}>
                            정상 인증되었어요.
                        </Text>
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity
                        onPress={findId2}
                    >
                        <Text style={[layout.bottomButtonTxt]}>다음</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}
