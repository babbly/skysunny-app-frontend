import React, { useEffect, useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity, View
} from 'react-native';
import Checkbox from '../../../components/Checkbox';
import color from '../../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../../res/layout';

export default function SignUp({ navigation }) {

    const home = () => {
        navigation.navigate('MainTabs', { screen: '홈' });
    };
    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    const [agreeAll, setAgreeAll] = useState(false);
    const [agreeItems, setAgreeItems] = useState({
        terms: false,
        privacy: false,
        push: false,
        location: false,
        marketing: false,
    });

    const toggleAgreeAll = () => {
        const newValue = !agreeAll;
        setAgreeAll(newValue);
        setAgreeItems({
            terms: newValue,
            privacy: newValue,
            push: newValue,
            location: newValue,
            marketing: newValue,
        });
    };

    const toggleItem = (key) => {
        const newAgreeItems = {
            ...agreeItems,
            [key]: !agreeItems[key]
        };
        setAgreeItems(newAgreeItems);
    };

    useEffect(() => {
        const allChecked = Object.values(agreeItems).every(Boolean);
        setAgreeAll(allChecked);
    }, [agreeItems]);

    const renderCheckbox = (label, key, isRequired = true, showButton = true) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scaleHeight(19) }}>
            <Checkbox
                checked={agreeItems[key]}
                label={`${isRequired ? '(필수)' : '(선택)'} ${label}`}
                onPress={() => toggleItem(key)}
                style={{ flex: 1 }}
                labelStyle={{ color: agreeItems[key] ? color.black : color.grey30 }}
            />
            {showButton && (
                <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>전문보기</Text>
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
                        <TouchableOpacity style={[layout.backBox]} onPress={home}>
                            <Image
                                source={require('../../../img/common/backarrow.png')}
                                style={[layout.icon24]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[layout.topTxt]}>회원가입(1/5)</Text>
                        </View>
                    </View>
                </View>

                <View style={[layout.container, { backgroundColor: color.white }]}>
                    <View style={[layout.guideView]}>
                        <Text style={[layout.guideTxt]}>
                            - 필수 항목에 동의하셔야 서비스를 이용하실 수 있습니다. {"\n"}
                            - 전체 동의에는 선택항목에 대한 동의도 포함되어 있습니다.
                        </Text>
                    </View>

                    {/* 전체동의 */}
                    <TouchableOpacity
                        style={[styles.checkboxRow, { marginTop: scaleHeight(30), marginBottom: scaleHeight(14) }]}
                        onPress={toggleAgreeAll}
                    >
                        <Checkbox
                            checked={agreeAll}
                            label="약관 전체동의"
                            onPress={toggleAgreeAll}
                        />
                    </TouchableOpacity>

                    {/* 개별 동의 항목 */}
                    <View style={{ width: scaleWidth(320), paddingHorizontal: scaleWidth(14) }}>
                        {renderCheckbox('이용약관', 'terms')}
                        {renderCheckbox('개인정보 처리방침', 'privacy')}
                        {renderCheckbox('이용상태 PUSH 알림 수신', 'push', true, false)}
                        {renderCheckbox('위치정보 이용약관', 'location', false)}
                        {renderCheckbox('광고 알림 수신', 'marketing', false, false)}
                    </View>
                </View>

                {/* 하단 버튼 */}
                <View style={[layout.bottomButtonMain]}>
                    <TouchableOpacity onPress={() => movePage('SignUp2')} >
                        <Text style={[layout.bottomButtonTxt]}>동의합니다</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scaleWidth(15),
        paddingVertical: scaleHeight(15),
        width: scaleWidth(320)
    },
    viewButton: {
        width: scaleWidth(60),
        height: scaleHeight(20),
        backgroundColor: color.lightGray,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewButtonText: {
        textAlign: 'center',
        fontSize: scaleFont(10),
        lineHeight: scaleFont(16),
        color: color.black
    },
});


