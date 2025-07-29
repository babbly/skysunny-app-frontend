import React, { useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Checkbox from '../../components/Checkbox';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function Alarm({ navigation }) {

    const home = () => {
        navigation.navigate('MainTabs', { screen: '홈' });
    };

    const [alarmList, setAlarmList] = useState([
        {
            id: 1,
            title: '[24시간 정기권] 30분 후에 유효기간이 만료됩니다.',
            date: '2024-07-03 10:10:30',
        },
        {
            id: 2,
            title: '[주문번호 230100000] 스카스카 운영자가 결제취소 완료하였습니다.',
            date: '2024-07-03 09:10:30',
        },
        {
            id: 3,
            title: '[일일권] 30분 후에 마감됩니다.',
            date: '2024-07-02 14:10:20',
        },
    ]);
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );
    };

    const isAllSelected = selectedIds.length === alarmList.length;
    const toggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedIds([]);
        } else {
            setSelectedIds(alarmList.map((item) => item.id));
        }
    };

    const deleteSelected = () => {
        if (selectedIds.length === 0) return;

        const updatedList = alarmList.filter(item => !selectedIds.includes(item.id));
        setAlarmList(updatedList);
        setSelectedIds([]);
    };


    const renderItem = ({ item }) => {
        const isSelected = selectedIds.includes(item.id);
        return (
            <View style={{
                flexDirection: 'row',
                width: scaleWidth(360),
                paddingHorizontal: scaleWidth(20),
                marginBottom: scaleHeight(30),
            }}>
                <Checkbox
                    checked={isSelected}
                    onPress={() => toggleSelect(item.id)}
                    style={{ alignItems: 'flex-start' }}
                />
                <View style={{ flex: 1 }}>
                    <Text style={{
                        color: color.grey40,
                        fontFamily: 'NotoSans KR',
                        fontWeight: '300',
                        fontSize: scaleFont(11),
                        lineHeight: scaleFont(16)
                    }}>{item.date}</Text>
                    <Text style={{
                        color: color.black,
                        fontFamily: 'NotoSans KR',
                        fontWeight: '500',
                        fontSize: scaleFont(13),
                        lineHeight: scaleFont(20),
                        width: scaleWidth(290)
                    }}>{item.title}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            {/* 상단 바 */}
            <View style={[layout.topBar]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../img/common/backarrow.png')}
                                style={[layout.icon24]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[layout.topTxt]}>알림</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={[layout.backBox]} onPress={deleteSelected}>
                            <Image
                                source={require('../../img/home/trash.png')}
                                style={[layout.icon24]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* ✅ 전체 선택 영역 */}
            <View style={styles.selectAllContainer}>
                <Checkbox
                    checked={isAllSelected}
                    onPress={toggleSelectAll}
                    label="전체선택"
                    labelStyle={styles.selectAllText}
                />
            </View>

            {/* 📋 알림 리스트 */}
            <View style={[layout.container, { backgroundColor: color.white }]}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: scaleHeight(20) }}
                    data={alarmList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>

            {/* ⬇ 하단 버튼 */}
            <View style={[layout.bottomButtonMain]}>
                <TouchableOpacity onPress={home}>
                    <Text style={[layout.bottomButtonTxt]}>완료</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    selectAllContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scaleHeight(12),
        paddingHorizontal: scaleWidth(20),
    },
    selectAllText: {
        fontSize: scaleFont(14),
        color: color.black,
    },

});
