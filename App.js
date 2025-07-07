// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import TabNavigator from './src/pages/common/Navigation';
import PageStack from './src/pages/common/PageStack';
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
                    <Stack.Screen name="PageStack" component={PageStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
