import React from 'react';
import { Dimensions, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// 오늘 기준 날짜 배열 생성 (7일치)
const today = new Date();
const getDateLabel = (offset) => {
    const d = new Date(today);
    d.setDate(today.getDate() - offset);
    return `${d.getMonth() + 1}/${d.getDate()}`;
};

const labels = Array.from({ length: 7 }, (_, i) => getDateLabel(6 - i));

// 예시 데이터
const data = [2, 4, 6, 4, 5, 3, 10];

export default function CustomBarChart() {
    return (
        <View>
            <BarChart
                data={{
                    labels, // 날짜 라벨 (x축)
                    datasets: [{ data }],
                }}
                width={screenWidth - 60}
                height={260}
                yLabelsOffset={30}
                yAxisSuffix="H"
                fromZero
                barPercentage={0.1}
                // showValuesOnTopOfBars
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0,
                    color: () => '#B8EBF3',
                    labelColor: (opacity = 1) => `#000`,
                    propsForBackgroundLines: {
                        strokeDasharray: '',
                        stroke: '#ccc',
                    },
                    formatYLabel: (yValue) => {
                        const y = Number(yValue);
                        if (y === 0 || y === 5 || y === 10) return `${y}`;
                        return '';
                    },
                    fillShadowGradient: '#B8EBF3',
                    fillShadowGradientOpacity: 1,
                }}
                style={{
                    borderWidth: 1,
                    alignSelf: 'center',
                    borderRadius: 8,
                    // paddingRight: 0,
                    marginLeft: 10
                }}
            />
        </View>
    );
}







// import React from "react";
// import { View } from "react-native";
// import { VictoryAxis, VictoryChart, VictoryLine } from "victory-native";


// // 오늘 날짜 기준 최근 7일 데이터 생성
// const today = new Date();
// const getDateLabel = (date) =>
//     `${date.getMonth() + 1}/${date.getDate()}`; // '7/29' 형태

// // 7일치 데이터 (오늘 포함)
// const data = Array.from({ length: 7 }, (_, i) => {
//     const date = new Date(today);
//     date.setDate(today.getDate() - (6 - i)); // 6일 전부터 오늘까지
//     return {
//         x: date,
//         y: Math.floor(Math.random() * 4) + 6, 
//     };
// });

// export default function Graph() {

//     return (
//         <View style={{ backgroundColor: "#fff", padding: 16 }}>
//             <VictoryChart
//                 // theme={VictoryTheme.material}
//                 domain={{ y: [0, 10] }}
//                 animate={{ duration: 1000 }}
//                 padding={{ top: 20, bottom: 50, left: 60, right: 20 }}
//                 scale={{ x: "time" }} // 중요: x축이 시간 기반임을 선언
//             >
//                 <VictoryAxis
//                     tickFormat={(t) => getDateLabel(new Date(t))}
//                     style={{
//                         axisLabel: { padding: 30, fontSize: 14 },
//                         tickLabels: { fontSize: 12 },
//                         grid: { stroke: "#e0e0e0" },
//                     }}
//                     label="날짜"
//                 />

//                 <VictoryAxis
//                     dependentAxis
//                     label="수면 시간 (h)"
//                     style={{
//                         axisLabel: { padding: 40, fontSize: 14 },
//                         tickLabels: { fontSize: 12 },
//                         grid: { stroke: "#e0e0e0" },
//                     }}
//                 />

//                 <VictoryLine
//                     data={data}
//                     interpolation="monotoneX"
//                     animate={{ duration: 1000, easing: "quadInOut" }}
//                     style={{
//                         data: { stroke: "#4a90e2", strokeWidth: 3 },
//                     }}
//                 />
//             </VictoryChart>
//         </View>
//     );
// }
