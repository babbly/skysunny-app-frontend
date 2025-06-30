// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import MyPageStack from './src/pages/common/MyPageStack';
import TabNavigator from './src/pages/common/Navigation';
import HistoryDetail from './src/pages/history/HistoryDetail';
import configureStore from './src/store/configureStore';

const store = configureStore();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MainTabs" component={TabNavigator} />
                    <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
                    <Stack.Screen name="MyPageStack" component={MyPageStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
