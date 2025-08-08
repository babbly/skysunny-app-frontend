import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getProfile as getKakaoProfile,
    login as kakaologin
} from '@react-native-seoul/kakao-login';
import React, { useState } from 'react';
import {
    Image, SafeAreaView,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity, View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../../../src/redux/slices/authSlice'; // 파일 경로에 맞게 수정
import Checkbox from '../../components/Checkbox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';
import { httpPost, httpUrl } from './../../api/httpClient';


export default function Login({ navigation }) {
    const home = () => {
        navigation.navigate('MainTabs', { screen: '홈' });
    };
    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [saveId, setSaveId] = useState(false);
    const [autoLogin, setAutoLogin] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const toggleSaveId = () => setSaveId(!saveId);
    const toggleAutoLogin = () => setAutoLogin(!autoLogin);

    const dispatch = useDispatch();

    const loginEmail = () => {
        login({
            type: 'email',
            id,
            password,
            saveId,
            autoLogin,
        });
    };

    const login = async ({ type, id, password, snsId, accessToken }) => {
        try {
            const data = { type, id };

            if (type === 'email') {
                data.password = password;
            } else if (type === 'kakao') {
                data.snsId = snsId;
                // data.accessToken = accessToken;
            }
            const result = await httpPost(httpUrl.login, [], data); // params는 배열로!

            if (result.code === 100 && result.result) {
                const user = result.result;
                // setUserId(user.id);
                dispatch(loginAction(user));
                console.log('useruseruser', JSON.stringify(user), user.id);
                await AsyncStorage.setItem('accessToken', user.accessToken);
                await AsyncStorage.setItem('refreshToken', user.refreshToken);

                if (type === 'email') {
                    if (saveId) await AsyncStorage.setItem('savedId', id);
                    else await AsyncStorage.removeItem('savedId');

                    if (autoLogin) await AsyncStorage.setItem('autoLogin', 'true');
                    else await AsyncStorage.removeItem('autoLogin');
                }

                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainTabs', params: { userId: user.id } }],
                    });
                }, 100);
            } else {
                console.warn("로그인 실패 응답:", result);
                setLoginError(true);
            }

        } catch (e) {
            console.error('로그인 오류:', e);
            setLoginError(true);
        }
    };



    // const loginKakao = async () => {
    //     try {
    //         const token = await kakaologin();
    //         const profile = await getKakaoProfile();

    //         await login({
    //             type: 'kakao',
    //             id: profile.email,
    //             snsId: String(profile.id),
    //             // accessToken: token.accessToken,
    //         });
    //     } catch (e) {
    //         console.error('카카오 로그인 오류:', e);
    //     }
    // };

    const loginKakao = async () => {
        try {
            console.log('[Kakao] 로그인 시도');

            const token = await kakaologin();
            console.log('[Kakao] 로그인 성공, 토큰:', token);

            const profile = await getKakaoProfile();
            console.log('[Kakao] 프로필 정보:', profile);

            await login({
                type: 'kakao',
                id: profile.email,
                snsId: String(profile.id),
                // accessToken: token.accessToken,
            });

            console.log('[Kakao] 서버 로그인 호출 완료');

        } catch (e) {
            console.error('카카오 로그인 오류:', e);
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
            {/* 상단 바 */}
            <View style={[layout.topBar]}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[layout.backBox]} onPress={home}>
                        <Image
                            source={require('../../img/common/backarrow.png')}
                            style={[layout.icon24]}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[layout.container, { backgroundColor: color.white, paddingBottom: scaleHeight(50) }]}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: scaleHeight(64),
                    paddingBottom: scaleHeight(45),
                    paddingHorizontal: scaleWidth(75),
                }}>
                    <Image
                        source={require('../../img/common/mainlogo.png')}
                        style={{ width: scaleWidth(170), height: scaleHeight(163) }}
                        resizeMode="contain"
                    />
                </View>

                {/* 아이디 비밀번호 입력 */}
                <TextInput
                    placeholder="아이디(E-mail)를 입력하세요"
                    placeholderTextColor={color.gray300}
                    value={id}
                    onChangeText={text => {
                        setId(text);
                        setLoginError(false);
                    }}
                    style={[
                        styles.loginInput,
                        { color: color.black },
                        // loginError && { borderColor: 'red' },
                    ]}
                />

                <TextInput
                    placeholder="비밀번호를 입력하세요"
                    placeholderTextColor={color.gray300}
                    value={password}
                    onChangeText={text => {
                        setPassword(text);
                        setLoginError(false);
                    }}
                    secureTextEntry
                    style={[
                        styles.loginInput,
                        loginError && { borderColor: 'red' },
                    ]}
                />
                {loginError && (
                    <View style={[layout.alertView, { marginBottom: 12 }]}>
                        <Image
                            source={require('../../img/common/error.png')}
                            style={[layout.icon16, { marginRight: 4 }]}
                            resizeMode="contain"
                        />
                        <Text style={[layout.errorTxt]}>
                            아이디 또는 비밀번호가 다릅니다.
                        </Text>
                    </View>
                )}


                {/* 체크박스 영역 */}
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        checked={saveId}
                        label="아이디 저장"
                        onPress={toggleSaveId}
                        style={{ marginRight: scaleWidth(12) }}
                        labelStyle={[layout.f12w400]}
                    />
                    <Checkbox
                        checked={autoLogin}
                        label="자동 로그인"
                        onPress={toggleAutoLogin}
                        labelStyle={[layout.f12w400]}
                    />
                </View>


                {/* 로그인 버튼 */}
                <TouchableOpacity style={[styles.button, { backgroundColor: '#2F3032', }]} onPress={loginEmail}>
                    <Text style={[styles.buttonTxt, { color: color.white }]}>로그인</Text>
                </TouchableOpacity>

                {/* 아이디,비밀번호 찾기 버튼 */}
                <View style={{ flexDirection: 'row', width: scaleWidth(320), marginTop: scaleHeight(7), justifyContent: 'space-between', }}>
                    <View style={{
                        width: '50%',
                    }}>
                        <TouchableOpacity onPress={() => movePage('FindId')} >
                            <Text style={[layout.f12w300, { color: color.grey40 }]}>아이디찾기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={layout.rightLine}></View>
                    <View style={{
                        width: '50%'
                    }}>
                        <TouchableOpacity onPress={() => movePage('FindPwd')} >
                            <Text style={[layout.f12w300, { color: color.grey40 }]}>비밀번호찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    position: 'absolute',
                    bottom: scaleHeight(30),
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FEE500', }]} onPress={loginKakao}>
                        <Text style={[styles.buttonTxt, { color: color.black }]}>카카오 로그인</Text>
                    </TouchableOpacity>
                    {/* 회원가입 버튼 */}
                    <TouchableOpacity style={[styles.button, { backgroundColor: color.gray100, }]} onPress={() => movePage('SignUp')} >
                        <Text style={[styles.buttonTxt, { color: color.gray900 }]}>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    loginInput: {
        borderWidth: 1,
        borderColor: color.gray200,
        borderRadius: 4,
        width: scaleWidth(320),
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: scaleHeight(10),
        paddingHorizontal: scaleWidth(14),
        marginBottom: scaleHeight(12),

        color: color.gray300,
        fontFamily: 'NotoSans KR',
        fontSize: scaleFont(14),
        fontWeight: '400',
        lineHeight: scaleFont(24),
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        width: scaleWidth(320),
        marginBottom: scaleHeight(7),
        flexDirection: 'row',
    },
    button: {
        width: scaleWidth(320),
        height: scaleHeight(52),
        marginVertical: scaleHeight(5),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTxt: {
        fontFamily: 'NotoSans KR',
        fontSize: scaleFont(14),
        fontWeight: '300',
        lineHeight: scaleFont(26),
        textAlign: 'center',
    },

});
