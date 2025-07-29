import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet, Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import Checkbox from '../../components/Checkbox';
import Dialog from '../../components/Dialog';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function Verify({ navigation, route }) {

    const from = route?.params?.from ?? '';

    const movePage = (screen) => {
        navigation.navigate('PageStack', {
            screen: screen,
        });
    };
    const [agreeItems, setAgreeItems] = useState({
        termsOfService: false,
        privacyPolicy: false,
        uniqueIdConsent: false,
    });

    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState('');
    const [isNative, setIsNative] = useState('내국인'); // 내국인/외국인
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('남'); // 남/여
    const [phone, setPhone] = useState('');
    const [carrier, setCarrier] = useState('SKT'); // 통신사

    const [veriCode, setVeriCode] = useState('');
    const [veriCodeError, setVeriCodeError] = useState(false);

    const carriers = ['SKT', 'LGU+', 'KT'];
    const termsList = [
        { key: 'termsOfService', label: '서비스 이용약관 동의' },
        { key: 'privacyPolicy', label: '개인정보 수집 및 이용, 취급위탁 동의' },
        { key: 'uniqueIdConsent', label: '고유식별정보 처리 동의' },
    ];
    const [dialogVisible, setDialogVisible] = useState(false);

    const dialog = () => {
        setDialogVisible(true);
    };

    const signUp = () => {
        setDialogVisible(false);
        setTimeout(() => {
            navigation.navigate('PageStack', { screen: 'SignUp' });
        }, 200);
    };

    const login = () => {
        setDialogVisible(false);
        setTimeout(() => {
            navigation.navigate('PageStack', { screen: 'Login' });
        }, 200);
    };

    const handleClose = () => {
        setDialogVisible(false);
    };


    const FloatingInput = ({ label, value, onChangeText, secureTextEntry, editable = true, placeholder, rightButton, twoButtons, placeholderTextColor }) => {
        return (
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

                {/* 오른쪽 싱글 버튼 */}
                {rightButton && (
                    <TouchableOpacity style={styles.rightButtonInside} onPress={rightButton.onPress}>
                        <Text style={[layout.f12w300, { color: color.white }]}>{rightButton.label}</Text>
                    </TouchableOpacity>
                )}


                {/* 두 개의 버튼이 있는 경우 */}
                {twoButtons?.length === 2 && (
                    <View style={styles.twoButtonWrapper}>
                        {twoButtons.map((btn, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.twoButtonInside, index === 0 && { marginRight: scaleWidth(8) }]}
                                onPress={btn.onPress}
                            >
                                <Text style={[layout.f12w300, { color: color.white }]}>{btn.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        );
    };
    const isAllAgreed = Object.values(agreeItems).every(Boolean);

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
                                source={require('../../img/common/backarrow.png')}
                                style={[layout.icon24]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[layout.topTxt]}>본인인증</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>

                    <View style={[layout.guideView]}>
                        <Text style={[layout.guideTxt]}>
                            - 서비스의 안전한 사용을 위해 본인인증해주세요.
                        </Text>
                    </View>

                    <View style={{ marginTop: scaleHeight(30) }}>
                        <View style={[layout.inputContainer]}>
                            <View style={[styles.input1, { flexDirection: 'row', justifyContent: 'space-between', }]}>
                                <Checkbox
                                    checked={isAllAgreed}
                                    label="약관 전체동의"
                                    onPress={() => {
                                        const newValue = !isAllAgreed;
                                        setAgreeItems({
                                            termsOfService: newValue,
                                            privacyPolicy: newValue,
                                            uniqueIdConsent: newValue,
                                        });
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => setIsOpen(!isOpen)}>
                                    <Image
                                        source={require('../../img/common/arrow-down.png')}
                                        style={[layout.icon24, {
                                            transform: [{ scaleY: isOpen ? -1 : 1 }],
                                        }]}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                        {/* 내용 */}
                        {isOpen && (
                            <View style={styles.dropdownSection}>
                                {termsList.map(({ key, label }, index) => (
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                        <TouchableOpacity
                                            key={key}
                                            onPress={() =>
                                                setAgreeItems(prev => ({
                                                    ...prev,
                                                    [key]: !prev[key],
                                                }))
                                            }
                                            style={[
                                                styles.termRow,
                                            ]}
                                        >
                                            <Image
                                                source={
                                                    agreeItems[key]
                                                        ? require('../../img/common/check.png')
                                                        : require('../../img/common/unCheck.png')
                                                }
                                                style={{
                                                    width: scaleWidth(15),
                                                    height: scaleHeight(15),
                                                    marginRight: scaleWidth(10),
                                                }}
                                                resizeMode="contain"
                                            />
                                            <Text style={{
                                                color: color.black,
                                                fontFamily: 'NotoSans KR',
                                                fontWeight: '400',
                                                fontSize: scaleFont(12),
                                                lineHeight: scaleFont(24),
                                            }}>{label}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={[styles.termRow, {
                                            backgroundColor: color.lightGray, borderRadius: 6, width: scaleWidth(60),
                                            justifyContent: 'center', alignItems: 'center'
                                        }]}>
                                            <Text style={{
                                                color: color.black,
                                                fontFamily: 'NotoSans KR',
                                                fontWeight: '300',
                                                foontSize: scaleFont(10),
                                                lineHeight: scaleFont(16),
                                                textAlign: 'center',
                                            }}>전문보기</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        )}
                        <FloatingInput
                            label="이름"
                            placeholderTextColor={color.gray300}
                            value={name}
                            onChangeText={setName}
                            // rightButton={[
                            //     { label: '내국인', onPress: () => alert('내국인') },
                            //     { label: '외국인', onPress: () => alert('외국인') },
                            // ]}
                            rightButton={{ label: '인증하기', onPress: () => alert('인증') }}
                        />
                        <FloatingInput
                            label="생년월일"
                            placeholder="생년월일 8자리 입력"
                            placeholderTextColor={color.gray300}
                            value={birth}
                            onChangeText={setBirth}
                        />
                        <FloatingInput
                            label="통신사"
                            placeholder="선택하기"
                            placeholderTextColor={color.gray300}
                            value={carrier}
                            onChangeText={setCarrier}
                        />
                        <FloatingInput
                            label="휴대전화번호"
                            placeholder="정보를 입력하세요"
                            placeholderTextColor={color.gray300}
                            value={phone}
                            onChangeText={setPhone}
                            rightButton={{ label: '인증하기', onPress: () => alert('인증') }}
                        />
                        <FloatingInput
                            label="인증번호"
                            // label="인증번호를 보내드렸어요. (0분 00초)"
                            placeholder="인증번호 6자리 입력"
                            placeholderTextColor={color.gray300}
                            value={veriCode}
                            onChangeText={setVeriCode}
                        />
                        {veriCodeError && (
                            <View style={[layout.errorView, { marginBottom: 12 }]}>
                                <Image
                                    source={require('../../img/common/error.png')}
                                    style={[layout.icon16, { marginRight: 4 }]}
                                    resizeMode="contain"
                                />
                                <Text style={[layout.errorTxt]}>
                                    입력하신 정보를 확인 후 다시 시도해주세요.
                                </Text>
                                <Text style={[layout.errorTxt]}>
                                    인증시간이 만료되었습니다. 인증번호를 재요청해주세요.
                                </Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity onPress={() => movePage('FindId2')} >
                        <Text style={[layout.bottomButtonTxt]}>다음</Text>
                    </TouchableOpacity>
                </View>
                {/* dialog */}

                {/* {아이디찾기에서} */}
                {from === 'FindId' && (
                    <Dialog
                        visible={dialogVisible}
                        title="등록된 회원이 아닙니다!"
                        message={`가입하신 정보를 찾을 수 없습니다.\n신규 회원 가입 후 이용해주세요.`}
                        leftBtnText="회원가입"
                        onConfirm={signUp}
                        rightBtnText="닫기"
                        onClose={handleClose}
                    />
                )}

                {/* {비밀번호찾기에서} */}
                {from === 'FindPwd' && (
                    <Dialog
                        visible={dialogVisible}
                        title="이미 가입되어있는 회원입니다!"
                        message={`가입하신 아이디/비밀번호를 잊으신 경우,\n로그인 화면의 아이디/비밀번호 찾기를 이용해주세요.`}
                        leftBtnText="로그인"
                        onConfirm={login}
                        rightBtnText="닫기"
                        onClose={handleClose}
                    />
                )}
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    rightButtonInside: {
        position: 'absolute',
        right: scaleWidth(10),
        top: scaleHeight(10),
        backgroundColor: color.black,
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(6),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightTwoButtons: {
        position: 'absolute',
        right: scaleWidth(10),
        top: scaleHeight(10),
        flexDirection: 'row',
    },
    twoButtonInside: {
        backgroundColor: color.black,
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(6),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scaleWidth(6),
    },

    input1: {
        borderWidth: 1,
        borderColor: color.grey80,
        borderRadius: 4,
        paddingHorizontal: scaleWidth(14),
        paddingVertical: scaleHeight(14),
        backgroundColor: color.white,
    },
    dropdownSection: {
        width: scaleWidth(320),
        paddingHorizontal: scaleWidth(14),
        paddingTop: scaleHeight(4),
        paddingBottom: scaleHeight(10),
    },
    termRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleHeight(18),
    },
});
