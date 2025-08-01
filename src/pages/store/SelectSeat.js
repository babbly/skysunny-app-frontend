import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import color from '../../res/color';
import layout, { scaleFont, scaleHeight, scaleWidth } from '../../res/layout';

export default function SelectSeat({ navigation }) {

    const [passVisible, setPassVisible] = useState(false);
    const [selectedType, setSelectedType] = useState('new');

    const URI = `http://192.168.0.194:3000/webview/seat/1`;

    const injectedJavaScript = `
      (function() {
        const send = (level, args) => {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'console',
            level: level,
            message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ')
          }));
        };

        ['log', 'warn', 'error', 'info'].forEach(level => {
          const original = console[level];
          console[level] = function(...args) {
            original.apply(console, args);
            send(level, args);
          };
        });

        window.addEventListener('error', function(e) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'error',
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno
          }));
        });
      })();
      true;
    `;

    const handleWebViewMessage = (event) => {
        try {
            const data = JSON.parse(event.nativeEvent.data);
            const { type, payload } = { ...data };

            // 웹뷰 수신 데이터
            console.log("type -->", type);
            console.log("payload -->", payload);

            if (type === "SELECTED") {
                // TODO: 좌석 선택 시 모달 표시 등 처리
            } else if (type === "DESELECTED") {
                // TODO: 선택 해제 처리
            }
        } catch (error) {
            console.log("[WebView Message]:", event.nativeEvent.data);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                {/* 상단 바 */}
                <View style={[layout.topBar]}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[layout.backBox]} onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../../img/common/backarrow.png')}
                                style={[layout.icon24]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[layout.topTxt]}>이용권 구매</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: scaleWidth(360), justifyContent: 'center', alignItems: 'center', paddingVertical: scaleHeight(20) }}>
                    <Text style={{
                        fontSize: scaleFont(16),
                        lineHeight: scaleFont(24),
                        color: color.gray900
                    }}>시작 스터디카페 인천 송도점</Text>
                    <Text style={{
                        fontSize: scaleFont(12),
                        lineHeight: scaleFont(24),
                        color: color.gray900
                    }}>인천 연수구 해돋이로 165 8층 (803호)</Text>

                </View>

                {/* 상세내역 */}
                <View style={[layout.container, { backgroundColor: color.white }]}>
                    <View style={{
                        flex: 1,
                        width: scaleWidth(360),
                        paddingVertical: scaleHeight(20),
                        paddingHorizontal: scaleWidth(15),
                        backgroundColor: color.lightGray
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image
                                source={require("../../img/history/ticket.png")}
                                style={{ width: 14, height: 14, marginRight: 10 }}
                                resizeMode="contain"
                            />
                            <Text style={{
                                fontWeight: '400',
                                fontSize: scaleFont(12),
                                lineHeight: scaleFont(16),
                                justifyContent: 'bottom',
                            }}>좌석선택</Text>
                        </View>
                        {/* 이용권 */}
                        <View style={{ alignItems: 'center', paddingVertical: scaleHeight(15), borderWidth: 1, flex: 1 }}>
                            <View style={styles.webviewBox}>
                                <WebView
                                    source={{ uri: URI }}
                                    style={styles.webview}
                                    startInLoadingState={true}
                                    originWhitelist={['*']}
                                    javaScriptEnabled={true}
                                    injectedJavaScript={injectedJavaScript}
                                    onMessage={handleWebViewMessage}
                                    onError={(e) => console.warn("WebView Error:", e.nativeEvent)}
                                    onLoad={() => console.log("WebView loading started")}
                                    onLoadStart={() => console.log("WebView loading ended")}

                                    onLoadEnd={() => console.log("WebView loading ended")}
                                    onContentProcessDidTerminate={() => console.warn("WebView process terminated")}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    webviewBox: {
        flex: 1,
        paddingHorizontal: 20,
    },
    webview: {
        flex: 1,
    },
});
