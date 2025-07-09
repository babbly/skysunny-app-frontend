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

export default function FindId({ navigation }) {
    const verify = () => {
        navigation.navigate('PageStack', { screen: 'Verify' });
    };
    const findId = () => {
        navigation.navigate('PageStack', { screen: 'FindId2' });
    };



    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


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
                            <Text style={layout.topText}>아이디 찾기</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={{ width: scaleWidth(320), paddingTop: scaleHeight(30), }}>
                        <Text>
                            - 본인인증 버튼을 누르고 인증을 완료하면 성명과 휴대전화 번호를 표시합니다.{"\n"}
                            - 아이디 찾기 버튼을 누르세요. 아이디를 화면에 표시합니다.
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

                    </View>

                </View>

                {/* 하단 버튼 */}
                <View style={styles.bottomButtonWrapper}>
                    <TouchableOpacity
                        onPress={findId}
                    >
                        <Text style={styles.bottomButtonText}>아이디찾기</Text>
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
        backgroundColor: color.buttonGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtonText: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.blackGray
    }
});
