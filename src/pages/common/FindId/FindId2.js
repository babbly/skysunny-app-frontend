import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

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
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={editable}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.input]}
            />
            {rightButton && (
                <TouchableOpacity style={styles.button} onPress={rightButton.onPress}>
                    <Text style={styles.buttonText}>{rightButton.label}</Text>
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
                <View style={layout.topBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={layout.backBox} onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../../img/common/backarrow.png')}
                                style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={layout.topText}>비밀번호 재설정</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={{ width: scaleWidth(320), paddingTop: scaleHeight(30), }}>
                        <Text>
                            - 본인인증을 누르고 진행하세요.
                        </Text>
                    </View>
                    {/* 본인인증 버튼 */}
                    <View style={{
                        width: scaleWidth(320),
                        paddingVertical: scaleHeight(15),
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: color.black,
                        backgroundColor: color.mainColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: scaleHeight(30),
                    }}>
                        <TouchableOpacity onPress={verify}>
                            <Text style={styles.bottomButtonText}>본인 인증</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: scaleHeight(30) }}>
                        <FloatingInput
                            label="성명"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.whiteGray}
                            value={name}
                            onChangeText={setName}
                            editable={false} />
                        <FloatingInput
                            label="휴대전화번호"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.whiteGray}
                            value={phone}
                            onChangeText={setPhone}
                            editable={false} />
                        <FloatingInput
                            label="생년월일"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.whiteGray}
                            value={birth}
                            onChangeText={setBirth}
                            editable={false} />
                        <FloatingInput
                            label="성별"
                            placeholder="본인인증 완료시 정보 표시"
                            placeholderTextColor={color.whiteGray}
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
                            textAlign: 'center',
                            color: color.black,
                        }}>
                            정상 인증되었어요.
                        </Text>
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        onPress={findId2}
                    >
                        <Text style={styles.bottomButtonText}>다음</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        width: scaleWidth(320),
        marginBottom: scaleHeight(10),
    },
    inputLabel: {
        position: 'absolute',
        top: scaleHeight(10),
        left: scaleWidth(14),
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        color: color.lightDarkGray,
        zIndex: 1,
        backgroundColor: color.white,
        paddingHorizontal: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 4,
        fontSize: scaleFont(14),
        lineHeight: scaleFont(24),
        // paddingTop 대신 paddingVertical 사용
        paddingTop: Platform.OS === 'ios' ? scaleHeight(10) : scaleHeight(30),
        paddingHorizontal: scaleWidth(18),
        color: color.blackGray,
        backgroundColor: color.white,
        minHeight: scaleHeight(64),
        textAlignVertical: 'center',
    },

    button: {
        position: 'absolute',
        right: scaleWidth(14),
        top: scaleHeight(19),
        backgroundColor: color.lightGray,
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(5),
        borderRadius: 4,
    },
    buttonText: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        color: color.black,
    },
    bottomButtonWrapper: {
        width: scaleWidth(360),
        height: scaleHeight(52),
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
    },


    bottomButtonText: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.blackGray
    }
});
