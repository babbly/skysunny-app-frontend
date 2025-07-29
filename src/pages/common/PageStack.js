import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Login from './Login';

import FindId from './FindId/FindId';
import FindId2 from './FindId/FindId2';
import FindPwd from './FindPwd/FindPwd';
import FindPwd2 from './FindPwd/FindPwd2';

import Verify from '../common/Verify';
import SignUp from './signup/SignUp';
import SignUp2 from './signup/SignUp2';
import SignUp3 from './signup/SignUp3';
import SignUp4 from './signup/SignUp4';
import SignUp5 from './signup/SignUp5';
import SignUp6 from './signup/SignUp6';

import HistoryDetail from '../history/HistoryDetail';

import Settings from '../mypage/Settings';

import Coupon from '../mypage/Coupon';
import FavoriteStore from '../mypage/FavoriteStore';
import Inquiry from '../mypage/Inquiry';
import MyInfo from '../mypage/MyInfo';
import Notice from '../mypage/Notice';
import PaymentHistory from '../mypage/PaymentHistory';
import PointHistory from '../mypage/PointHistory';
import StudyTime from '../mypage/StudyTime';

import AppInquiry from '../mypage/inquiry/AppInquiry';
import InquiryType from '../mypage/inquiry/InquiryType';
import MyInquiry from '../mypage/inquiry/MyInquiry';
import MyInquiryDetail from '../mypage/inquiry/MyInquiryDetail';
import StoreInquiry from '../mypage/inquiry/StoreInquiry';
import StoreInquiryDetail from '../mypage/inquiry/StoreInquiryDetail';

import CheckCoupon from '../store/CheckCoupon';
import CheckPayment from '../store/CheckPayment';
import Payment from '../store/CompletePayment';
import OneDayPass from '../store/OneDayPass';
import Out from '../store/Out';
import Pass from '../store/Pass';
import PassTicket from '../store/PassTicket';
import PaymentMethod from '../store/PaymentMethod';
import QrCode from '../store/QrCode';
import SelectSeat from '../store/SelectSeat';
import StoreDetail from '../store/StoreDetail';
import StudyRoomPass from '../store/StudyRoomPass';
import StudyRoomTicket from '../store/StudyRoomTicket';


import Alarm from '../home/Alarm';
import Update from './../../components/Update';



const Stack = createNativeStackNavigator();
export default function PageStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* common stack */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="FindId" component={FindId} />
            <Stack.Screen name="FindId2" component={FindId2} />

            <Stack.Screen name="FindPwd" component={FindPwd} />
            <Stack.Screen name="FindPwd2" component={FindPwd2} />

            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUp2" component={SignUp2} />
            <Stack.Screen name="SignUp3" component={SignUp3} />
            <Stack.Screen name="SignUp4" component={SignUp4} />
            <Stack.Screen name="SignUp5" component={SignUp5} />
            <Stack.Screen name="SignUp6" component={SignUp6} />
            <Stack.Screen name="Verify" component={Verify} />

            {/* history stack */}
            <Stack.Screen name="HistoryDetail" component={HistoryDetail} />


            {/* mypage stack */}
            <Stack.Screen name="Settings" component={Settings} />

            <Stack.Screen name="MyInfo" component={MyInfo} />
            <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
            <Stack.Screen name="StudyTime" component={StudyTime} />
            <Stack.Screen name="FavoriteStore" component={FavoriteStore} />
            <Stack.Screen name="Coupon" component={Coupon} />
            <Stack.Screen name="PointHistory" component={PointHistory} />
            <Stack.Screen name="Notice" component={Notice} />
            <Stack.Screen name="Inquiry" component={Inquiry} />

            <Stack.Screen name="AppInquiry" component={AppInquiry} />
            <Stack.Screen name="InquiryType" component={InquiryType} />
            <Stack.Screen name="StoreInquiry" component={StoreInquiry} />
            <Stack.Screen name="MyInquiry" component={MyInquiry} />

            <Stack.Screen name="StoreInquiryDetail" component={StoreInquiryDetail} />
            <Stack.Screen name="MyInquiryDetail" component={MyInquiryDetail} />

            {/* store stack */}
            <Stack.Screen name="StoreDetail" component={StoreDetail} />
            <Stack.Screen name="Out" component={Out} />
            <Stack.Screen name="OneDayPass" component={OneDayPass} />
            <Stack.Screen name="Pass" component={Pass} />
            <Stack.Screen name="PassTicket" component={PassTicket} />
            <Stack.Screen name="CheckPayment" component={CheckPayment} />
            <Stack.Screen name="CheckCoupon" component={CheckCoupon} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="StudyRoomTicket" component={StudyRoomTicket} />
            <Stack.Screen name="StudyRoomPass" component={StudyRoomPass} />
            <Stack.Screen name="QrCode" component={QrCode} />

            <Stack.Screen name="Alarm" component={Alarm} />


            <Stack.Screen name="Update" component={Update} />
            <Stack.Screen name="SelectSeat" component={SelectSeat} />


        </Stack.Navigator>
    );
}