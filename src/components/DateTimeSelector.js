import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import color from '../res/color';

export default function DateTimeSelector() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const timeSlots = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

    return (
        <View style={{ flex: 1, padding: 20 }}>

            <Calendar
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                    setSelectedTime(null);
                }}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: '#00adf5' }
                }}
            />

            {/*가로 스크롤 */}
            {selectedDate && (
                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginBottom: 10 }}>{selectedDate} 시간 선택:</Text>
                    <FlatList
                        data={timeSlots}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setSelectedTime(item)}
                                style={[
                                    styles.timeBox,
                                    selectedTime === item && styles.selectedTimeBox,
                                ]}
                            >
                                <Text style={{
                                    color: selectedTime === item ? color.white : color.darkGray
                                }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            {selectedDate && selectedTime && (
                <Text style={{ marginTop: 30, fontSize: 16 }}>
                    선택한 시간: {selectedDate} {selectedTime}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    timeBox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#eee',
        borderRadius: 20,
        marginRight: 10,
    },
    selectedTimeBox: {
        backgroundColor: '#007aff',
    },
});
