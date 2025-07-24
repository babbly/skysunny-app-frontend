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

export default function SignUp3({ navigation }) {

    const agree = () => {
        navigation.navigate('PageStack', { screen: 'SignUp4' });
    };

    const [id, setId] = useState('');

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
                <TouchableOpacity style={styles.inputInnerButton} onPress={rightButton.onPress}>
                    <Text style={styles.inputInnerButtonTxt}>{rightButton.label}</Text>
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
                            <Text style={[layout.topTxt]}>회원가입 (3/5)</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={{ width: scaleWidth(320), paddingTop: scaleHeight(30), }}>
                        <Text style={[layout.guideTxt]}>
                            - 아이디를 입력하세요.
                        </Text>
                    </View>
                    <View style={{ marginTop: scaleHeight(30) }}>
                        <FloatingInput label="아이디(E-mail)" value={id} onChangeText={setId} rightButton={{ label: '중복확인', onPress: () => alert('인증') }} />
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
                            사용 가능한 아이디입니다.
                        </Text>
                        {/* <Image
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
                            이미 사용중인 아이디입니다.
                        </Text> */}
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={styles.bottomWrapper}>
                    <View style={styles.bottomButtonWrapper2}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={[layout.bottomButtonTxt]}>이전</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomButtonWrapper}>
                        <TouchableOpacity onPress={agree}>
                            <Text style={[layout.bottomButtonTxt]}>다음</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    inputInnerButton: {
        position: 'absolute',
        right: scaleWidth(14),
        top: scaleHeight(19),
        backgroundColor: color.black,
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(5),
        borderRadius: 4,
    },
    inputInnerButtonTxt: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        color: color.white,
    },
    bottomWrapper: {
        flexDirection: 'row',
    },
    bottomButtonWrapper: {
        width: scaleWidth(240),
        height: scaleHeight(52),
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButtonWrapper2: {
        width: scaleWidth(120),
        height: scaleHeight(52),
        backgroundColor: color.gray100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
