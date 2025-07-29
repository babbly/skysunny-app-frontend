import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/color';
import layout, { scaleHeight, scaleWidth } from '../../res/layout';

const noticeList = [
    {
        id: 1,
        title: '3월 공지안내',
        date: '2022-03-07',
        content: '3월 공지사항 내용입니다.3월 공지사항 내용입니다.3월 공지사항 내용입니다.3월 공지사항 내용입니다.3월 공지사항 내용입니다.3월 공지사항 내용입니다.3월 공지사항 내용입니다.3월 공지사항 내용입니다.3월 공지사항 내용입니다.',
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

    const toggleNotice = (id) => {
        setOpenNotices((prev) =>
            prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }) => {
        const isOpen = openNotices.includes(item.id);

        return (
            <View style={{ marginBottom: scaleHeight(30) }}>
                <TouchableOpacity onPress={() => toggleNotice(item.id)}>
                    <View
                        style={{
                            width: scaleWidth(310),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <View>
                            <Text style={[layout.titleTxt]}>
                                {item.title}
                            </Text>
                            <Text style={[layout.dateTxt]}>
                                {item.date}
                            </Text>
                        </View>
                        <Image
                            source={require('../../img/common/downarrow.png')}
                            style={[layout.icon24, {
                                transform: [{ scaleY: isOpen ? -1 : 1 }],
                            }]}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>

                {/* 내용 */}
                {isOpen && (
                    <View
                        style={{
                            width: scaleWidth(310),
                            paddingVertical: scaleHeight(25),
                            paddingHorizontal: scaleWidth(25),
                            marginTop: scaleHeight(25),
                            backgroundColor: color.lightGray,
                            borderRadius: 6,
                        }}
                    >
                        <Text style={[layout.dateTxt, {
                            color: color.grey10
                        }]}>{item.content}</Text>
                    </View>
                )}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>

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
                        <Text style={[layout.topTxt]}>공지사항</Text>
                    </View>
                </View>
            </View>

            {/* 리스트 */}
            <View style={[layout.container, { backgroundColor: color.white }]}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: scaleHeight(20) }}
                    data={noticeList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    );
}
