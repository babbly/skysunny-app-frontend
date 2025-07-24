import React, { useState } from 'react';
import {
    FlatList,
    Image, SafeAreaView, StyleSheet,
    Text, TouchableOpacity, View
} from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function HistoryTab({ navigation }) {

    const [categoryTab, setCategoryTab] = useState('캐시정기권');
    const [statusTab, setStatusTab] = useState('전체보기');

    const historyData = [
        { id: '1', category: '캐시정기권', status: '이용가능', title: '캐시 50,000원', date: '23.12.24', remaining: '30,000캐시', valid: '유효기간 20일' },
        { id: '2', category: '캐시정기권', status: '만료', title: '캐시 30,000원', date: '23.10.01', remaining: '0캐시', valid: '유효기간 종료' },
        { id: '3', category: '기간정기권', status: '환불', title: '기간권 7일', date: '23.11.11', remaining: '-', valid: '-' },
        { id: '4', category: '1일이용권', status: '이용가능', title: '하루권', date: '24.01.15', remaining: '-', valid: '오늘 하루만 이용 가능' },
    ];

    const filteredData = historyData.filter(item =>
        item.category === categoryTab &&
        (statusTab === '전체보기' || item.status === statusTab)
    );

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require("../../img/history/ticket.png")} style={{ width: 14, height: 14, marginRight: 10 }} />
                    <Text style={styles.cardCategory}>{categoryTab}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.cardDate}>{item.date}</Text>
                    <View style={styles.statusBadge}>
                        <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cardBody}>
                <Image source={require("../../img/history/example.png")} style={styles.cardImage} />
                <View style={{ paddingLeft: scaleWidth(10) }}>
                    <Text style={styles.cardTitle}>{`시작 스터디카페 인천송도점`}</Text>
                    <Text style={styles.cardDetail}>{`${item.title} | ${item.date.includes('.') ? '' : ''}`}</Text>
                </View>
            </View>

            <View style={styles.cardFooter}>
                <Text style={styles.cardDetail}>{`${item.remaining} | ${item.valid}`}</Text>
            </View>

            <TouchableOpacity
                style={styles.detailButton}
                onPress={() => navigation.navigate('HistoryDetail', { id: item.id })}
            >
                <Text style={styles.detailText}>이용내역 상세보기</Text>
            </TouchableOpacity>
        </View>
    );

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
                        <Text style={[layout.topTxt]}>이용내역</Text>
                    </View>
                </View>
            </View>

            {/* 카테고리 탭 */}
            <View style={styles.tabsRow}>
                {['캐시정기권', '기간정기권', '1일이용권', '스터디룸', '사물함'].map(cat => (
                    <TouchableOpacity
                        key={cat}
                        style={[styles.tabBtn, categoryTab === cat && styles.tabBtnActive]}
                        onPress={() => setCategoryTab(cat)}
                    >
                        <Text style={categoryTab === cat ? styles.tabTextActive : styles.tabText}>{cat}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 상태 탭 */}
            <View style={[styles.tabsRow, { paddingVertical: scaleHeight(10), paddingHorizontal: scaleWidth(15) }]}>
                {['전체보기', '이용가능', '만료', '환불'].map(st => (
                    <TouchableOpacity
                        key={st}
                        style={[styles.statusBtn, statusTab === st && styles.statusBtnActive]}
                        onPress={() => setStatusTab(st)}
                    >
                        <Text style={statusTab === st ? styles.tabTextActive : styles.tabText}>{st}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 카드 리스트 */}
            <FlatList
                data={filteredData}
                keyExtractor={item => item.id}
                renderItem={renderCard}
                contentContainerStyle={{ paddingBottom: scaleHeight(20) }}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tabsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    tabBtn: {
        paddingVertical: scaleHeight(7),
        paddingHorizontal: scaleWidth(11),
        borderBottomWidth: 1,
        borderColor: color.gray200,
    },
    tabBtnActive: {
        borderColor: color.black,
    },
    tabText: {
        color: color.gray300,
    },
    tabTextActive: {
        color: color.black,
    },
    statusBtn: {
        backgroundColor: color.gray100,
        width: scaleWidth(78.75),
        height: scaleHeight(36),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scaleWidth(5)
    },
    statusBtnActive: {
        backgroundColor: color.mainColor,
        borderWidth: 1,
    },
    card: {
        width: scaleWidth(330),
        backgroundColor: color.white,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: color.mediumGray,
        marginBottom: scaleHeight(15),
        padding: scaleWidth(12),
        alignSelf: 'center'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    cardCategory: {
        color: color.black,
        fontFamily: Platform.OS === 'ios' ? 'BM DoHyeon' : '배달의민족 도현',
        fontSize: scaleFont(13),
        // fontWeight: '400',
        lineHeight: scaleFont(16)
    },
    cardDate: {
        fontSize: scaleFont(12),
        color: color.grey20
    },
    statusBadge: {
        backgroundColor: color.lightGray,
        borderRadius: 4,
        width: scaleWidth(60),
        height: scaleHeight(20),
        marginLeft: scaleWidth(5),
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        fontSize: scaleFont(12)
    },
    cardBody: {
        flexDirection: 'row',
        marginVertical: scaleHeight(10)
    },
    cardImage: {
        width: scaleWidth(50),
        height: scaleHeight(50),
        borderRadius: 8
    },
    cardTitle: {
        fontSize: scaleFont(13),
        fontWeight: '500'
    },
    cardDetail: {
        fontSize: scaleFont(12),
        color: color.grey20,
        marginTop: scaleHeight(4)
    },
    cardFooter: {
        borderTopWidth: 1,
        borderColor: color.mediumGray,
        paddingTop: scaleHeight(8)
    },
    detailButton: {
        backgroundColor: color.gray100,
        borderRadius: 6,
        height: scaleHeight(36),
        justifyContent: 'center',
        marginTop: scaleHeight(10)
    },
    detailText: {
        textAlign: 'center',
        color: color.black
    }
});
