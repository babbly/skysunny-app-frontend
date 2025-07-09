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
    },
    backBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scaleWidth(10)
    },
    topText: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: scaleFont(15),
        color: color.black,
    },
    container: {
        flex: 1,
        width: scaleWidth(360),
        alignItems: 'center',
        backgroundColor: color.lightGray,
        // borderWidth: 2,
        // borderColor: 'red'
    },
    toggleButton: {
        width: scaleWidth(78.75),
        height: scaleHeight(36),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scaleWidth(5),
    },
    toggleButton2: {
        width: scaleWidth(117),
        height: scaleHeight(36),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scaleWidth(5),
    },
    line: {
        borderBottomWidth: 1,
        borderColor: '#dbdcdd',
        // width: scaleWidth(300)

    }

});

export default layout;
