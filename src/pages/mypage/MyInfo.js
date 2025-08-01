import React, { useState } from 'react';
import {
    Image, SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity, View
} from 'react-native';
import FloatingInput from '../../components/FloatingInput';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight } from '../../res/layout';

export default function MyInfo({ navigation }) {
    const [id, setId] = useState('test@test.com');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('홍길동');
    const [birth, setBirth] = useState('19880112');
    const [gender, setGender] = useState('남');
    const [phone, setPhone] = useState('01012345678');
    const [address, setAddress] = useState('인천시 연수구 송도과학로 32');
    const [study, setStudy] = useState('수능');
    const [parentPhone, setParentPhone] = useState('010-1234-5678');
    const [parentId, setParentId] = useState('test@test.com');



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>

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
                        <Text style={[layout.topTxt]}>내 정보관리</Text>
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: scaleHeight(10) }}>
                <View style={{ marginTop: scaleHeight(30), }}>
                    <FloatingInput label="아이디(E-mail)" value={id} onChangeText={setId} editable={false} />

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

                    <FloatingInput label="성명" value={name} onChangeText={setName} editable={false} />
                    <FloatingInput label="생년월일" value={birth} onChangeText={setBirth} editable={false} />
                    <FloatingInput label="성별" value={gender} onChangeText={setGender} />
                    <FloatingInput
                        label="휴대전화번호"
                        value={phone}
                        onChangeText={setPhone}
                        rightButton={{ label: '본인인증', onPress: () => alert('인증') }}
                    />
                    <Text style={{
                        color: color.grey30,
                        fontFamily: 'NotoSans KR',
                        fontSize: scaleFont(12),
                        lineHeight: scaleFont(17),
                        marginBottom: scaleHeight(10),
                    }}>- 휴대전화번호를 변경하시려면 본인인증을 완료하고 저장하세요.</Text>
                    <FloatingInput
                        label="주소"
                        value={address}
                        onChangeText={setAddress}
                        rightButton={{ label: '주소검색', onPress: () => alert('주소 검색') }}
                    />
                    <FloatingInput label="하고있는 공부" value={study} onChangeText={setStudy} />
                    <FloatingInput label="보호자 연락처" value={parentPhone} onChangeText={setParentPhone} />
                    <FloatingInput label="보호자 아이디" value={parentId} onChangeText={setParentId} />

                </View>
            </ScrollView>
            {/* 하단 버튼 */}
            <View style={[layout.bottomButtonMain]}>
                <TouchableOpacity
                // onPress={save}
                >
                    <Text style={[layout.bottomButtonTxt]}>저장</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

