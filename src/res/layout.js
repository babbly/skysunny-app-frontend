import { Dimensions, StyleSheet } from 'react-native';
import color from '../res/color';

const { height: deviceH, width: deviceW } = Dimensions.get('window');
const guidelineHeight = 780;
const guidelineWidth = 360;

export const scaleHeight = (size) => (deviceH / guidelineHeight) * size;
export const scaleWidth = (size) => (deviceW / guidelineWidth) * size;
export const scaleFont = (size) => (deviceW / guidelineWidth) * size;


const layout = StyleSheet.create({
    topBar: {
        justifyContent: 'center',
        width: scaleWidth(360),
        height: scaleHeight(40),
        paddingVertical: 9,
        paddingHorizontal: 15,
        backgroundColor: color.white,
        marginTop: 30
    },
    backBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scaleWidth(10)
    },
    topTxt: {
        color: color.black,
        fontFamily: 'Noto Sans KR',
        fontWeight: '400',
        fontSize: scaleFont(15),
        lineHeight: scaleFont(15),
    },
    container: {
        flex: 1,
        width: scaleWidth(360),
        alignItems: 'center',
        backgroundColor: color.lightGray,
        borderWidth: 1,
        borderColor: 'red'
    },
    toggleButton: {
        paddingVertical: scaleHeight(8),
        paddingHorizontal: scaleWidth(12),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scaleWidth(5),
    },
    line: {
        borderBottomWidth: 1,
        borderColor: color.gray200,
        // width: scaleWidth(300)
    },
    rightLine: {
        borderRightWidth: 1,
        borderColor: color.grey80,
        height: scaleHeight(9),
        alignSelf: 'center',
    },
    guideTxt: {
        color: color.grey30,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(12),
        fontWeight: '300',
        lineHeight: scaleFont(17)
    },
    dateTxt: {
        color: color.fontGray,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(12),
        fontWeight: '300',
        lineHeight: scaleFont(18),
    },
    verifyBtn: {
        width: scaleWidth(320),
        paddingVertical: scaleHeight(15),
        borderRadius: 4,
        borderWidth: 1,
        borderColor: color.black,
        backgroundColor: color.mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleHeight(30),
    },
    inputContainer: {
        position: 'relative',
        width: scaleWidth(320),
        height: scaleHeight(64),
        marginBottom: scaleHeight(10),
    },
    inputLabel: {
        position: 'absolute',
        top: scaleHeight(10),
        left: scaleWidth(14),
        zIndex: 1,

        color: color.grey20,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(12),
        fontWeight: '400',
        lineHeight: scaleFont(16),
    },
    input: {
        width: scaleWidth(320),
        paddingTop: Platform.OS === 'ios' ? scaleHeight(10) : scaleHeight(30),
        paddingHorizontal: scaleWidth(14),

        borderRadius: 4,
        borderWidth: 1,
        borderColor: color.gray200,

        color: color.gray900,
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(14),
        fontWeight: '400',
        lineHeight: scaleFont(24),
    },
    bottomButtonGray: {
        width: scaleWidth(360),
        height: scaleHeight(52),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.gray100,
    },
    bottomButtonMain: {
        width: scaleWidth(360),
        height: scaleHeight(52),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.mainColor,
    },
    bottomButtonTxt: {
        color: color.gray900,
        textAlign: 'center',
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(16),
        fontWeight: '300',
        lineHeight: scaleFont(26),
    },
    btnTxt: {
        color: color.gray900,
        textAlign: 'center',
        fontFamily: 'Noto Sans KR',
        fontSize: scaleFont(13),
        fontWeight: '300',
        lineHeight: scaleFont(20)
    },
    icon14: {
        width: 14,
        height: 14,
        marginRight: 4,
    },
    icon24: {
        width: scaleWidth(24),
        height: scaleHeight(24),
    },


});

export default layout;
