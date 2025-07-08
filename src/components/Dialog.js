
import React from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../res/layout';

const Dialog = ({ visible, title, message, leftBtnText, rightBtnText, onConfirm, onClose, type = 'twoBtn', }) => {

    return (

        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.dialog}>
                    {type === 'out' ? (
                        <>
                            <View style={{}}>
                                <Text style={styles.title}>퇴실하기</Text>
                                <Text style={styles.message}>이용하신 정보를 확인해보세요.</Text>
                            </View>
                            <View style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require("../img/history/ticket.png")} style={{ width: 14, height: 14, marginRight: 5 }} />
                                        <Text style={styles.cardCategory}>캐시정기권</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.cardDate}>23.12.24</Text>
                                        <View style={styles.statusBadge}>
                                            <Text style={styles.statusText}>이용중</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.cardBody}>
                                    <Image source={require("../img/history/example.png")} style={styles.cardImage} />
                                    <View style={{ paddingLeft: scaleWidth(10) }}>
                                        <Text style={styles.cardTitle}>{`시작 스터디카페 인천송도점`}</Text>
                                        <Text style={styles.cardDetail}>{`50,000 캐시권 |20일|좌석당 10%할인`}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardFooter}>
                                <Text style={styles.cardDetail2}>{`입장 후 2시간 30분 사용했어요. \n 2,000캐시가 차감돼요.`}</Text>
                            </View>
                            <View style={[layout.line, { marginBottom: scaleHeight(15) }]} />
                            <View style={styles.cardFooter}>
                                <Text style={styles.cardDetail2}>{`유효기간 : 10일| 잔여정보 :38,200 캐시`}</Text>
                            </View>
                        </>
                    ) : (
                        // 기본 textBox
                        <View style={styles.textBox}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.message}>{message}</Text>
                        </View>
                    )}

                    {/* 하단버튼 */}
                    <View style={styles.buttons}>
                        {type === 'oneBtn' && (
                            <TouchableOpacity onPress={onClose} style={styles.buttonFull}>
                                <Text style={styles.buttonTxt}>닫기</Text>
                            </TouchableOpacity>
                        )}

                        {(type === 'twoBtn' || type === 'out') && (
                            <>
                                <TouchableOpacity onPress={onConfirm} style={styles.button}>
                                    <Text style={styles.buttonTxt}>{leftBtnText}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onClose} style={styles.button}>
                                    <Text style={styles.buttonTxt}>{rightBtnText}</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>

                    {type === 'out' && (
                        <>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: scaleHeight(15),
                            }}>
                                <Image
                                    source={require('../img/home/information.png')}
                                    style={{ width: scaleWidth(14), height: scaleHeight(14), marginRight: 4 }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: scaleFont(12), lineHeight: scaleFont(20), color: color.black }}>
                                    안내사항</Text>
                            </View>
                            <Text style={{ marginTop: scaleHeight(8), fontSize: scaleFont(12), lineHeight: scaleFont(15), color: color.black }}>
                                안내사항 텍스트입니다.</Text>
                        </>
                    )}


                </View>
            </View>
        </Modal>
    );
};

export default Dialog;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: scaleWidth(340),
        paddingVertical: scaleHeight(15),
        paddingHorizontal: scaleWidth(15),
        backgroundColor: color.lightGray,
        borderRadius: 6,
        elevation: 6,
    },
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scaleHeight(15),
    },
    title: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(16),
        color: color.black,
        marginBottom: scaleHeight(5),
    },
    message: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(16),
        color: color.black,
    },
    buttons: {
        width: scaleWidth(310),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: scaleWidth(150),
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 6,
        paddingVertical: scaleHeight(4.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
    },
    buttonTxt: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(20),
        color: color.black,
        textAlign: 'center',
    },
    buttonFull: {
        width: scaleWidth(310),
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 6,
        paddingVertical: scaleHeight(4.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
    },
    card: {
        width: scaleWidth(320),
        marginVertical: scaleHeight(15),
        backgroundColor: color.white,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        paddingVertical: scaleHeight(12),
        paddingHorizontal: scaleWidth(7),
        alignSelf: 'center',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaleHeight(12)
    },
    cardCategory: {
        fontSize: scaleFont(13),
        lineHeight: scaleFont(16),
    },
    cardDate: {
        fontSize: scaleFont(12),
        color: color.lightDarkGray,
    },
    statusBadge: {
        backgroundColor: color.lightGray,
        borderRadius: 4,
        width: scaleWidth(60),
        height: scaleHeight(20),
        marginLeft: scaleWidth(5),
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        fontSize: scaleFont(12),
    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: scaleWidth(50),
        height: scaleHeight(50),
        borderRadius: 8,
    },
    cardTitle: {
        fontSize: scaleFont(13),
        fontWeight: '500',
    },
    cardDetail: {
        fontSize: scaleFont(12),
        color: color.lightDarkGray,
        textAlign: 'center'
    },
    cardDetail2: {
        fontSize: scaleFont(12),
        color: color.lightDarkGray,
        marginBottom: scaleHeight(15),
        textAlign: 'center'
    },
    cardFooter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
