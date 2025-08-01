import React, { useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';


export default function StudyRoomTicket({ navigation }) {

    const movePage = (screen) => {
        navigation.navigate('PageStack', { screen });
    };

    // 한글 요일 및 월 이름 설정
    LocaleConfig.locales['ko'] = {
        monthNames: [
            '1월', '2월', '3월', '4월', '5월', '6월',
            '7월', '8월', '9월', '10월', '11월', '12월'
        ],
        monthNamesShort: [
            '1월', '2월', '3월', '4월', '5월', '6월',
            '7월', '8월', '9월', '10월', '11월', '12월'
        ],
        dayNames: [
            '일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'
        ],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        today: '오늘'
    };

    // 사용할 로케일 설정
    LocaleConfig.defaultLocale = 'ko';

    const buyPass = () => {
        navigation.navigate('PageStack', { screen: 'BuyStudyRoom' });
    };


    const generateTimeSlots = () => {
        const slots = [];

        for (let hour = 22; hour < 24; hour++) {
            slots.push({ time: `${hour.toString().padStart(2, '0')}:00`, labelDayOffset: -1, id: `prev-${hour}-00`, status: 'available' });
            slots.push({ time: `${hour.toString().padStart(2, '0')}:30`, labelDayOffset: -1, id: `prev-${hour}-30`, status: 'available' });
        }

        for (let hour = 0; hour < 24; hour++) {
            slots.push({ time: `${hour.toString().padStart(2, '0')}:00`, labelDayOffset: 0, id: `today-${hour}-00`, status: 'available' });
            slots.push({ time: `${hour.toString().padStart(2, '0')}:30`, labelDayOffset: 0, id: `today-${hour}-30`, status: 'available' });
        }

        slots.push({ time: '00:00', labelDayOffset: 1, id: `next-00-00`, status: 'available' });
        slots.push({ time: '00:30', labelDayOffset: 1, id: `next-00-30`, status: 'available' });

        return slots;
    };



    const timeSlots = generateTimeSlots();

    // const [selectedType, setSelectedType] = useState('cash');

    // 달력
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedRange, setSelectedRange] = useState({ start: null, end: null });

    const onTimePress = (time) => {
        if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
            // 시작시간 선택, 종료시간 초기화
            setSelectedRange({ start: time, end: null });
        } else {
            // 종료시간 선택 (시작시간 이후여야 함)
            if (time > selectedRange.start) {
                setSelectedRange({ start: selectedRange.start, end: time });
            } else {
                // 종료시간이 시작시간 이전이면 시작시간 변경
                setSelectedRange({ start: time, end: null });
            }
        }
    };


    const renderTimeSlot = ({ item }) => {
        const isHour = item.time.endsWith(':00');
        const isSelected = () => {
            if (!selectedRange.start) return false;
            if (!selectedRange.end) return selectedRange.start === item.time;
            return item.time >= selectedRange.start && item.time <= selectedRange.end;
        };

        let backgroundColor = '#fff';
        if (item.status === 'unavailable') backgroundColor = '#ddd';
        else if (isSelected()) backgroundColor = '#B3E5FC';

        const label = isHour ? `${item.time.split(':')[0].padStart(2, '0')}시` : null;


        return (
            <View style={{ alignItems: 'center' }}>
                {label && <Text style={styles.hourLabelText}>{label}</Text>}
                <TouchableOpacity
                    onPress={() => item.status === 'available' && onTimePress(item.time)}
                    style={[styles.slotBox, { backgroundColor }]}
                />
            </View>
        );
    };

    // const formatTimeLabel = (time) => {
    //     const [hourStr, minute] = time.split(':');
    //     return `${parseInt(hourStr, 10)}:${minute}`;
    // };

    const formatTimeLabel = (time, id) => {
        const [hourStr, minuteStr] = time.split(':');
        const hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10);

        const selected = new Date(selectedDate);
        const displayDate = new Date(selected); // 복사본

        // id에 따라 날짜 조정
        if (id.startsWith('prev-')) {
            displayDate.setDate(selected.getDate() - 1);
        } else if (id.startsWith('next-')) {
            displayDate.setDate(selected.getDate() + 1);
        }

        displayDate.setHours(hour, minute, 0, 0);
        const dateStr = displayDate.toISOString().split('T')[0];

        return `${dateStr} ${hourStr.padStart(2, '0')}:${minuteStr}`;
    };


    const getOffsetFromTime = (time) => {
        const target = timeSlots.find(slot => slot.time === time);
        return target ? target.labelDayOffset : 0;
    };




    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
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
                            <Text style={[layout.topTxt]}>이용권 구매</Text>
                        </View>
                    </View>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} keyboardShouldPersistTaps="handled">
                    <View style={{ width: scaleWidth(360), justifyContent: 'center', alignItems: 'center', paddingVertical: scaleWidth(20), }}>
                        <Text style={{
                            fontSize: scaleFont(16),
                            lineHeight: scaleFont(24),
                            color: color.gray900
                        }}>시작 스터디카페 인천 송도점</Text>
                        <Text style={{
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(24),
                            color: color.gray900
                        }}>인천 연수구 해돋이로 165 8층 (803호)</Text>

                    </View>
                    <Image
                        source={require('../../img/home/example2.png')}
                        style={{ width: scaleWidth(360), height: scaleHeight(240) }}
                        resizeMode="contain"
                    />
                    <View style={{ width: scaleWidth(360), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: scaleWidth(15) }}>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Image
                                source={require("../../img/mypage/studyroom.png")}
                                style={[layout.icon14]}
                                resizeMode="contain"
                            />

                            <Text style={[styles.title,]}>
                                4인룸 1번방</Text>
                        </View>
                        <View style={{
                        }}>
                            <Text style={[layout.f12w400, {
                                color: color.gray900,
                                paddingVertical: scaleHeight(5),
                                paddingHorizontal: scaleWidth(5)
                            }]}>
                                4,000원 / 30분
                            </Text>
                        </View>
                    </View>

                    {/* 하단 설명 */}
                    <View style={[layout.container, { backgroundColor: color.white }]}>
                        <View style={{
                            flex: 1,
                            width: scaleWidth(360),
                            paddingVertical: scaleHeight(20),
                            paddingHorizontal: scaleWidth(15),
                            backgroundColor: color.lightGray,
                        }}>

                            {/* 이용권 */}
                            <View style={{ alignItems: 'center', paddingVertical: scaleHeight(20), }}>

                                <Text>화이트보드, 모니터 구비(HDMI 연결가능) 완료 과외 수업 및 스터디 모임용으로 이용 가능합니다.</Text>
                                <View style={{ borderWidth: 1, marginTop: scaleHeight(20), paddingHorizontal: scaleWidth(10) }}>
                                    <Text>정시/30분 단위로 예약이 가능하며 30분 기준 금액(캐시)입니다.</Text>
                                    <Text>스터디룸은 보유한 cash(캐시정기권)를 사용하여 예약이 가능하며 해당 금액이 차감됩니다.</Text>
                                    <Text style={{ marginTop: scaleHeight(20) }}>취소기준</Text>
                                    <Text>- 예약 시간 1일 전까지는 50% 환불(캐시적립)가능</Text>
                                    <Text>- 예약 당일 취소는 환불불가함</Text>
                                </View>
                            </View>
                            <View style={[layout.line]} />
                            <Text style={{ paddingVertical: scaleHeight(20) }}>스터디룸 사용날짜 및 시간대를 선택하세요.</Text>
                            {/* 달력 */}
                            <View style={{ backgroundColor: color.lightGray, }}>
                                <Calendar
                                    onDayPress={(day) => {
                                        setSelectedDate(day.dateString);
                                        setSelectedRange({ start: null, end: null });
                                    }}
                                    markedDates={{
                                        [selectedDate]: {
                                            selected: true,
                                            selectedColor: color.mainColor,
                                            selectedTextColor: '#000000',
                                        }
                                    }}
                                    renderArrow={(direction) => (
                                        <Text style={{ color: '#333', fontSize: 18 }}>{direction === 'left' ? '〈' : '〉'}</Text>
                                    )}
                                    theme={{
                                        calendarBackground: color.lightGray, // ✅ 달력 배경
                                        textSectionTitleColor: '#222222', // ✅ 월(예: July 2025) 텍스트 색
                                        selectedDayBackgroundColor: '#FFB800', // ✅ 선택된 날짜
                                        selectedDayTextColor: '#000000',
                                        todayTextColor: color.black,
                                        dayTextColor: '#000000',
                                        textDisabledColor: '#d9e1e8',
                                        dotColor: '#00adf5',
                                        selectedDotColor: '#ffffff',
                                        arrowColor: '#333333', // ✅ 상단 화살표 색
                                        monthTextColor: '#000000',
                                        indicatorColor: 'blue',
                                        textDayFontFamily: 'System',
                                        textMonthFontFamily: 'System',
                                        textDayHeaderFontFamily: 'System',
                                        textDayFontWeight: '400',
                                        textMonthFontWeight: '600',
                                        textDayHeaderFontWeight: '400',
                                        textDayFontSize: scaleFont(14),
                                        textMonthFontSize: scaleFont(13),
                                        textDayHeaderFontSize: scaleFont(13),
                                    }}
                                />
                            </View>
                            <View style={[layout.line, { marginVertical: scaleHeight(20) }]} />
                            <Text style={{ paddingVertical: scaleHeight(20) }}>최소 30분 ~ 최대 24시간 이용가능</Text>
                            {/* 시간 선택 - 가로 스크롤 */}

                            <FlatList
                                data={timeSlots}
                                horizontal
                                keyExtractor={(item) => item.id}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.timeScrollContainer}
                                renderItem={renderTimeSlot}
                            />



                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>


            {/* 하단 버튼 */}
            <View style={{
                width: scaleWidth(360),
                paddingVertical: scaleHeight(15),
                paddingHorizontal: scaleWidth(15),
                backgroundColor: color.white,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <View>
                    <Text style={{
                        fontSize: scaleFont(14),
                        lineHeight: scaleFont(20),
                        color: color.black,
                        fontWeight: '400'
                    }}>
                        4인룸 1번방
                    </Text>
                    <Text style={{
                        fontSize: scaleFont(12),
                        lineHeight: scaleFont(16),
                        color: color.black,
                        fontWeight: '300'
                    }}>
                        {selectedDate && selectedRange.start && (
                            `${formatTimeLabel(selectedRange.start, timeSlots.find(slot => slot.time === selectedRange.start)?.id)}${selectedRange.end
                                ? ` ~ ${formatTimeLabel(selectedRange.end, timeSlots.find(slot => slot.time === selectedRange.end)?.id)}`
                                : ''
                            }`
                        )}
                    </Text>

                </View>
                <View>
                    <Text style={{
                        fontSize: scaleFont(15),
                        lineHeight: scaleFont(16),
                        color: color.black,
                        fontWeight: '500'
                    }}>
                        45,000원
                    </Text>
                </View>
            </View>
            <View style={styles.bottomButtonMain2}>
                <TouchableOpacity onPress={() => movePage('CheckPayment')} >
                    <Text style={styles.bottomButtonTxt}>다음 단계로</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    passCard: {
        width: scaleWidth(330),
        height: scaleHeight(100),
        justifyContent: 'center',
        paddingHorizontal: scaleWidth(30),
        paddingVertical: scaleWidth(18),
    },
    title: {
        fontSize: scaleFont(13),
        lineHeight: scaleFont(16),
        fontWeight: 400,
        textAlign: 'center'
    },
    text1: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(15),
        color: color.gray900
    },
    text2: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        fontWeight: 350,
    },
    bottomButtonMain2: {
        width: scaleWidth(360),
        height: scaleHeight(52),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.mainColor,
    },
    bottomButtonTxt: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(26),
        color: color.gray900
    },
    timeBox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#eee',
        borderRadius: 20,
        marginRight: 10,
    },
    selectedRangeBox: {
        backgroundColor: '#007aff',
    },
    timeSlotBox: {
        width: scaleWidth(25),
        height: scaleHeight(30),
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: color.mediumGray,
        backgroundColor: '#fff',
        paddingTop: scaleHeight(8),
        marginRight: -1, // 칸막이처럼 붙이기
    },
    selectedRangeSlotBox: {
        backgroundColor: color.mainColor,
    },
    timeText: {
        fontSize: scaleFont(12),
        color: color.darkGray,
    },
    selectedRangeText: {
        fontWeight: 'bold',
        color: color.white,
    },
    timeScrollContainer: {
        paddingHorizontal: scaleWidth(10),
        alignItems: 'flex-end',
    },
    slotBox: {
        width: scaleWidth(25),
        height: scaleHeight(30),
        borderLeftWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 0,
    },
    hourLabelContainer: {
        flexDirection: 'row',
        paddingHorizontal: scaleWidth(10),
        marginBottom: 5,
    },
    hourSlot: {
        borderLeftWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.5)',
    },
    hourLabel: {
        width: scaleWidth(1200), // 30분 * 2
        alignItems: 'center',
        borderLeftWidth: 1,
        borderColor: '#ccc',
    },
    hourLabelText: {
        marginBottom: 5,
        fontSize: scaleFont(8),
        color: color.fontGray,
    },
    selectedSlot: {
        backgroundColor: color.mainColor,
    },

});
