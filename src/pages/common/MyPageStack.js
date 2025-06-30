import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CafeLike from '../mypage/CafeLike';
import Coupon from '../mypage/Coupon';
import Faq from '../mypage/Faq';
import MyInfo from '../mypage/MyInfo';
import Notice from '../mypage/Notice';
import Payment from '../mypage/Payment';
import StudyTime from '../mypage/StudyTime';

import AppFaq from '../mypage/faq/AppFaq';
import CafeFaq from '../mypage/faq/CafeFaq';
import CafeFaqDetail from '../mypage/faq/CafeFaqDetail';
import CoFaq from '../mypage/faq/CoFaq';
import MyFaq from '../mypage/faq/MyFaq';
import MyFaqDetail from '../mypage/faq/MyFaqDetail';


const Stack = createNativeStackNavigator();
export default function MyPageStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyInfo" component={MyInfo} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="StudyTime" component={StudyTime} />
            <Stack.Screen name="CafeLike" component={CafeLike} />
            <Stack.Screen name="Coupon" component={Coupon} />
            {/* <Stack.Screen name="Point" component={Point} /> */}
            <Stack.Screen name="Notice" component={Notice} />
            <Stack.Screen name="Faq" component={Faq} />

            <Stack.Screen name="AppFaq" component={AppFaq} />
            <Stack.Screen name="CoFaq" component={CoFaq} />
            <Stack.Screen name="CafeFaq" component={CafeFaq} />
            <Stack.Screen name="MyFaq" component={MyFaq} />

            <Stack.Screen name="CafeFaqDetail" component={CafeFaqDetail} />
            <Stack.Screen name="MyFaqDetail" component={MyFaqDetail} />




        </Stack.Navigator>
    );
}