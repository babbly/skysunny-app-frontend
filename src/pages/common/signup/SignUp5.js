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

export default function SignUp5({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const [address, setAddress] = useState('');
    const [study, setStudy] = useState('');
    const [parentPhone, setParentPhone] = useState('');

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
                            <Text style={[layout.topTxt]}>회원가입 (5/5)</Text>
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
                            label="주소"
                            placeholder="기본주소"
                            placeholderTextColor={color.gray300}
                            value={address}
                            onChangeText={setAddress}
                            rightButton={{ label: '주소검색', onPress: () => alert('주소 검색') }}
                        />
                        <FloatingInput
                            label="하고있는 공부 (선택)"
                            placeholder="정보를 입력하세요"
                            placeholderTextColor={color.gray300}
                            value={study}
                            onChangeText={setStudy} />

                        <FloatingInput
                            label="보호자 연락처 (선택)"
                            placeholder="휴대전화번호 숫자만 입력하세요"
                            placeholderTextColor={color.gray300}
                            value={parentPhone}
                            onChangeText={setParentPhone} />
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
                        <TouchableOpacity onPress={() => movePage('SignUp6')} >
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
