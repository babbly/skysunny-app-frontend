import React, { useState } from 'react';
import {
    Image, SafeAreaView,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity, View
} from 'react-native';
import Checkbox from '../../components/Checkbox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function Login({ navigation }) {
    const home = () => {
        navigation.navigate('MainTabs', { screen: '홈' });
    };
    const signUp = () => {
        navigation.navigate('SignUp');
    };
    const findId = () => {
        navigation.navigate('PageStack', { screen: 'FindId' });
    };
    const findPwd = () => {
        navigation.navigate('PageStack', { screen: 'FindPwd' });
    };


    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [saveId, setSaveId] = useState(false);
    const [autoLogin, setAutoLogin] = useState(false);

    const toggleSaveId = () => setSaveId(!saveId);
    const toggleAutoLogin = () => setAutoLogin(!autoLogin);

    const handleLogin = () => {
        console.log('로그인:', { id, password, saveId, autoLogin });
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
            {/*   */}
            {/* 상단 바 -추후 삭제*/}
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={layout.backBox} onPress={home}>
                        <Image
                            source={require('../../img/common/backarrow.png')}
                            style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={layout.topText}>로그인</Text>
                    </View>
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


                {/* 아이디 입력 */}
                <TextInput
                    placeholder="아이디(E-mail)를 입력하세요"
                    placeholderTextColor={'#c1c3c5'}
                    value={id}
                    onChangeText={setId}
                    style={styles.input}
                />

                {/* 비밀번호 입력 */}
                <TextInput
                    placeholder="비밀번호를 입력하세요"
                    placeholderTextColor={'#c1c3c5'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />

                {/* 체크박스 영역 */}
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        checked={saveId}
                        label="아이디 저장"
                        onPress={toggleSaveId}
                        style={{ marginRight: scaleWidth(12) }}
                        labelStyle={styles.checkboxLabel}
                    />
                    <Checkbox
                        checked={autoLogin}
                        label="자동 로그인"
                        onPress={toggleAutoLogin}
                        labelStyle={styles.checkboxLabel}
                    />
                </View>


                {/* 로그인 버튼 */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>로그인</Text>
                </TouchableOpacity>

                {/* 아이디,비밀번호 찾기 버튼 */}
                <View style={{ flexDirection: 'row', width: scaleWidth(320), justifyContent: 'space-between', }}>
                    <View style={{
                        width: '50%',
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={findId}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleHeight(16),
                                textAlign: 'center'

                            }}>아이디찾기</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>|</Text>
                    <View style={{
                        width: '50%'
                    }}>
                        <TouchableOpacity onPress={findPwd}>
                            <Text style={{
                                fontSize: scaleFont(12),
                                lineHeight: scaleHeight(16),
                                textAlign: 'center'
                            }}>비밀번호찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 회원가입 버튼 */}
                <TouchableOpacity style={styles.signUpButton} onPress={signUp}>
                    <Text style={styles.signUpButtonText}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#dbdcdd',
        borderRadius: 4,
        width: scaleWidth(320),
        paddingVertical: scaleHeight(10),
        paddingHorizontal: scaleWidth(14),
        marginBottom: scaleHeight(12),
        fontSize: scaleFont(14),
        lineHeight: scaleFont(24),
    },
    checkboxContainer: {
        width: scaleWidth(320),
        flexDirection: 'row',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: scaleWidth(12),
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: '#999',
        marginRight: 8,
        borderRadius: 3,
    },
    checkboxChecked: {
        backgroundColor: '#007AFF',
    },
    checkboxLabel: {
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: color.black,
        width: scaleWidth(320),
        height: scaleHeight(52),
        marginVertical: scaleHeight(12),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: color.white,
        fontSize: scaleFont(14),
        lineHeight: scaleFont(26),
        textAlign: 'center'
    },
    signUpButton: {
        backgroundColor: color.lightGray,
        width: scaleWidth(320),
        height: scaleHeight(52),
        marginVertical: scaleHeight(12),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleHeight(105)
    },
    signUpButtonText: {
        color: color.black,
        fontSize: scaleFont(14),
        lineHeight: scaleFont(26),
        textAlign: 'center'
    }

});
