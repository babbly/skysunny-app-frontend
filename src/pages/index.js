import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import Login from './common/Login';
import SignUp from './common/signup/SignUp';
import CommunityTab from './community/CommunityTab';
import HistoryDetail from './history/HistoryDetail';
import HistoryTab from './history/HistoryTab';
import HomeTab from './home/HomeTab';


import SearchTab from './search/SearchTab';

export function registerScreens(store) {
    //use store
    Navigation.registerComponent('navigation.common.Navigation', () => (props) => (<Provider store={store}><Navigation {...props} /></Provider>), () => Navigation);

    //Login,SignUpNavigation
    Navigation.registerComponent('navigation.common.Login', () => (props) => (<Provider store={store}><Login {...props} /></Provider>), () => Login);
    Navigation.registerComponent('navigation.common.SignUp', () => (props) => (<Provider store={store}><SignUp {...props} /></Provider>), () => SignUp);

    Navigation.registerComponent('navigation.search.SearchTab', () => (props) => (<Provider store={store}><SearchTab {...props} /></Provider>), () => SearchTab);

    Navigation.registerComponent('navigation.home.HomeTab', () => (props) => (<Provider store={store}><HomeTab {...props} /></Provider>), () => HomeTab);

    Navigation.registerComponent('navigation.community.CommunityTab', () => (props) => (<Provider store={store}><CommunityTab {...props} /></Provider>), () => CommunityTab);


    Navigation.registerComponent('navigation.history.HistoryTab', () => (props) => (<Provider store={store}><HistoryTab {...props} /></Provider>), () => HistoryTab);
    Navigation.registerComponent('navigation.history.HistoryDetail', () => (props) => (<Provider store={store}><HistoryDetail {...props} /></Provider>), () => HistoryDetail);




}
