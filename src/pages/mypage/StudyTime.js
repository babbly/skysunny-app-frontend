import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function StudyTime({ navigation }) {

    const [activeTab, setActiveTab] = useState('study');


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>

            {/* 상단 바 */}
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={layout.backBox}
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../../img/common/backarrow.png")}
                            style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={layout.topText}>내 공부시간</Text>
                    </View>
                </View>
            </View>


            {/* 상단 버튼*/}
            <View style={{ paddingVertical: scaleHeight(15), paddingHorizontal: scaleWidth(15) }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[layout.toggleButton, {
                            backgroundColor: activeTab === 'study' ? color.mainColor : color.buttonGray,
                            borderWidth: activeTab === 'study' ? 1 : 0,
                        }]}
                        onPress={() => setActiveTab('study')}
                    >
                        <Text>공부시간</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[layout.toggleButton2, {
                            backgroundColor: activeTab === 'attendance' ? color.mainColor : color.buttonGray,
                            borderWidth: activeTab === 'attendance' ? 1 : 0,
                        }]}
                        onPress={() => setActiveTab('attendance')}
                    >
                        <Text>월 평균 출석일 수</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* 공부시간 */}
            <ScrollView
                contentContainerStyle={{ backgroundColor: color.white, paddingBottom: scaleHeight(50), alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                {activeTab === 'study' && (
                    <>
                        <View style={styles.timeBox}>
                            <View style={styles.timeBox2}>
                                <Text style={styles.mainText}>총 공부시간</Text>
                                <Text style={styles.timeText}>21:30</Text>
                            </View>
                            <View style={styles.timeBox2}>
                                <Text style={styles.mainText}>평균 공부시간</Text>
                                <Text style={styles.timeText}>04:00</Text>
                            </View>
                        </View>

                        <View style={styles.graphBox}>
                            <Text>그래프 공간</Text>
                        </View>
                        <View style={styles.timeBox}>
                            <View style={{ width: scaleWidth(160), alignItems: 'center' }}>
                                <Text style={styles.mainText}>월 평균 공부시간</Text>
                                <Text style={styles.timeText}>21:30</Text>
                            </View>
                        </View>
                        <View style={styles.graphBox}>
                            <Text>그래프 공간</Text>
                        </View>
                    </>
                )}

                {activeTab === 'attendance' && (
                    <>
                        <View style={styles.timeBox}>
                            <View style={{ width: scaleWidth(160), alignItems: 'center' }}>
                                <Text style={styles.mainText}>월 평균 공부시간</Text>
                                <Text style={styles.timeText}>21:30</Text>
                            </View>
                        </View>
                        <View style={{
                            width: scaleWidth(330),
                            borderWidth: 1,
                            height: scaleHeight(290),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text>그래프 공간</Text>
                        </View>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    timeBox: {
        width: scaleWidth(320),
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#dbdcdd",
        backgroundColor: "#fff",
        paddingHorizontal: scaleWidth(20),
        paddingVertical: scaleHeight(20),
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: scaleHeight(20),

    },
    timeBox2: {
        width: scaleWidth(160),
        alignItems: 'center',
    },
    mainText: {
        color: '#979797',
        fontSize: scaleFont(14),
        lineHeight: scaleFont(18),
    },
    timeText: {
        fontWeight: '700',
        fontSize: scaleFont(18),
        lineHeight: scaleFont(26),
    },
    graphBox: {
        width: scaleWidth(330),
        borderWidth: 1,
        height: scaleHeight(290),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scaleHeight(20)
    }
});
