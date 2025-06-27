import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

const noticeList = [
    {
        id: 1,
        title: '3월 공지안내',
        date: '2022-03-07',
        content: '3월 공지사항 내용입니다.',
    },
    {
        id: 2,
        title: '2월 공지안내',
        date: '2022-02-07',
        content: '2월 공지사항 내용입니다.',
    },
    {
        id: 3,
        title: '1월 공지안내',
        date: '2022-01-07',
        content: '1월 공지사항 내용입니다.',
    },
];

export default function Notice({ navigation }) {
    const [openNotices, setOpenNotices] = useState([]);

    const back = () => {
        navigation.goBack();
    };

    const toggleNotice = (id) => {
        setOpenNotices((prev) =>
            prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }) => {
        const isOpen = openNotices.includes(item.id);

        return (
            <View style={{ marginBottom: scaleHeight(20) }}>
                <View
                    style={{
                        width: scaleWidth(310),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: scaleFont(15),
                            lineHeight: scaleFont(24),
                            marginBottom: 5,
                        }}>
                            {item.title}
                        </Text>
                        <Text style={{
                            fontWeight: '350',
                            fontSize: scaleFont(12),
                            lineHeight: scaleFont(18),
                            color: '#777',
                        }}>
                            {item.date}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => toggleNotice(item.id)}>
                        <Image
                            source={require('../../img/common/underarrow.png')}
                            style={{
                                width: scaleWidth(24),
                                height: scaleHeight(24),
                                transform: [{ scaleY: isOpen ? -1 : 1 }],
                            }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                {/* 내용 */}
                {isOpen && (
                    <View
                        style={{
                            width: scaleWidth(310),
                            backgroundColor: '#f6f6f6',
                            borderRadius: 6,
                            padding: 20,
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ fontSize: scaleFont(13), lineHeight: scaleFont(20) }}>{item.content}</Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <View style={{ paddingTop: scaleHeight(40) }} />

            {/* 상단 바 */}
            <View style={layout.topBar}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={layout.backBox} onPress={back}>
                        <Image
                            source={require('../../img/common/backarrow.png')}
                            style={{ width: scaleWidth(24), height: scaleHeight(24) }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={layout.topText}>공지사항</Text>
                    </View>
                </View>
            </View>

            {/* 리스트 */}
            <FlatList
                contentContainerStyle={{ paddingVertical: scaleHeight(20) }}
                data={noticeList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}
