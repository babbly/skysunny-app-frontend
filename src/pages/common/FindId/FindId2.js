import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    TouchableOpacity, View
} from 'react-native';
import color from '../../../res/color';
import layout, { scaleHeight, scaleWidth } from '../../../res/layout';

export default function FindId2({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

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
                            <Text style={[layout.topTxt]}>아이디찾기</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: color.white }]}>


                    <Image
                        source={require("../../../img/common/loginsuccess.png")}
                        style={{ width: scaleWidth(150), height: scaleHeight(150), }}
                        resizeMode="contain"
                    />
                    <Text style={[layout.bottomButtonTxt, { color: color.grey30 }]}>
                        홍길동 회원님의 아이디는 {"\n"}
                        <Text style={{ color: color.black }}>sampleID@gmail.com</Text> 입니다.
                    </Text>
                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity onPress={() => movePage('Login')} >
                        <Text style={[layout.bottomButtonTxt]}>다음</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}
