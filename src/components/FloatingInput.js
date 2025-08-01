import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput, TouchableOpacity, View
} from 'react-native';
import color from '../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../res/layout';


const FloatingInput = ({
    label,
    value,
    onChangeText,
    secureTextEntry,
    editable = true,
    placeholder,
    rightButton,
    twoButtons,
    rightText,
    arrowButton,
    placeholderTextColor,
    toggleValue,
    onArrowPress,
    arrowUp
}) => {
    return (
        <View style={[layout.inputContainer]}>
            <Text style={[layout.inputLabel]}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={editable}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[layout.input]}
            />

            {/* 오른쪽 싱글 버튼 */}
            {rightButton && (
                <TouchableOpacity style={styles.rightButton} onPress={rightButton.onPress}>
                    <Text style={[layout.f12w300, { color: color.white }]}>{rightButton.label}</Text>
                </TouchableOpacity>
            )}


            {/* 두 개의 버튼이 있는 경우 */}
            {twoButtons?.length === 2 && (
                <View style={styles.twoButtonWrapper}>
                    {twoButtons.map((btn, index) => {
                        const isSelected = toggleValue === btn.label;
                        // const isSelected = value === btn.label;
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.twoButton,
                                    {
                                        backgroundColor: isSelected ? color.mainColor : color.white,
                                        borderColor: isSelected ? color.black : color.gray200,
                                    },
                                    index === 0 && { marginRight: scaleWidth(6) },
                                ]}
                                onPress={btn.onPress}
                            >
                                <Text style={[
                                    layout.f12w300,
                                    { color: isSelected ? color.black : color.gray200 },
                                ]}>{btn.label}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            )}

            {rightText && (
                <TouchableOpacity
                    style={styles.rightTextButton}
                    onPress={rightText.onPress}
                >
                    <Text style={styles.underlineText}>{rightText.label}</Text>
                </TouchableOpacity>
            )}

            {arrowButton && (
                <TouchableOpacity
                    style={styles.arrowButton}
                    onPress={onArrowPress}
                >
                    <Image
                        source={require('../img/common/arrow-down.png')}
                        style={[
                            layout.icon24,
                            {
                                transform: [{ scaleY: arrowUp ? -1 : 1 }],
                            },
                        ]}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}

        </View>
    );
};
export default FloatingInput;

const styles = StyleSheet.create({
    rightButton: {
        position: 'absolute',
        right: scaleWidth(10),
        top: scaleHeight(25),
        backgroundColor: color.black,
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(6),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    twoButtonWrapper: {
        position: 'absolute',
        right: scaleWidth(10),
        top: scaleHeight(25),
        flexDirection: 'row',
    },
    twoButton: {
        width: scaleWidth(60),
        height: scaleHeight(26),
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scaleWidth(6),
    },
    rightTextButton: {
        position: 'absolute',
        right: scaleWidth(10),
        top: scaleHeight(25),
        paddingHorizontal: scaleWidth(6),
        paddingVertical: scaleHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    underlineText: {
        color: color.gray900,
        fontFamily: 'NotoSans KR',
        fontSize: scaleFont(12),
        lineHeight: scaleFont(20),
        textDecorationLine: 'underline',
        fontWeight: '300',
    },
    arrowButton: {
        position: 'absolute',
        right: scaleWidth(10),
        top: scaleHeight(15),
        padding: scaleWidth(6),
        justifyContent: 'center',
        alignItems: 'center',
    },

});