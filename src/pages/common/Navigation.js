// Navigation.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';

import CommunityTab from '../community/CommunityTab';
import HistoryTab from '../history/HistoryTab';
import HomeTab from '../home/HomeTab';
import MyPageTab from '../mypage/MyPageTab';
import SearchTab from '../search/SearchTab';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='홈'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconSource;
                    switch (route.name) {
                        case '매장검색':
                            iconSource = require('../../img/common/search.png');
                            break;
                        case '이용내역':
                            iconSource = require('../../img/common/history.png');
                            break;
                        case '홈':
                            iconSource = require('../../img/common/home.png');
                            break;
                        case '커뮤니티':
                            iconSource = require('../../img/common/community.png');
                            break;
                        case '마이페이지':
                            iconSource = require('../../img/common/mypage.png');
                            break;
                    }
                    return (
                        <Image
                            source={iconSource}
                            style={{ width: 18.83, height: 19.56, tintColor: color }}
                            resizeMode="contain"
                        />
                    );
                },
                tabBarActiveTintcolor: '#000',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="매장검색" component={SearchTab} />
            <Tab.Screen name="이용내역" component={HistoryTab} />
            <Tab.Screen name="홈" component={HomeTab} />
            <Tab.Screen name="커뮤니티" component={CommunityTab} />
            <Tab.Screen name="마이페이지" component={MyPageTab} />
        </Tab.Navigator>
    );
}
