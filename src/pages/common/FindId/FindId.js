import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleHeight } from '../../../res/layout';

export default function FindId({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', {
            screen: screen,
            params: { from: 'FindId' },
        });
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

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
                            <Text style={[layout.topTxt]}>아이디 찾기</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={[layout.guideView]}>
                        <Text style={[layout.guideTxt]}>
                            - 본인인증 버튼을 누르고 인증을 완료하면 성명과 휴대전화 번호를 표시합니다.{"\n"}
                            - 아이디 찾기 버튼을 누르세요. 아이디를 화면에 표시합니다.
                        </Text>
                    </View>

                    {/* 본인인증 버튼 */}
                    <View style={[layout.verifyBtn]}>
                        <TouchableOpacity onPress={() => movePage('Verify')} >
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

                    </View>

                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonGray]}>
                    <TouchableOpacity onPress={() => movePage('FindId2')} >
                        <Text style={[layout.bottomButtonTxt]}>아이디 찾기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}


