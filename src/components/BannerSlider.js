
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { scaleFont, scaleHeight, scaleWidth } from '../res/layout';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const BannerSlider = ({ banners, type = 'sub1', bannerHeight, borderRadius }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const IS_MAIN2 = type === 'main2';

    const ITEM_WIDTH = IS_MAIN2 ? 360 : SCREEN_WIDTH;

    const totalItemWidth = ITEM_WIDTH + 2 * 2;

    const imageHeight = bannerHeight ?? (IS_MAIN2 ? scaleHeight(160) : scaleHeight(100));
    const imageBorder = borderRadius ?? (IS_MAIN2 ? 8 : 0);

    const extendedBanners = IS_MAIN2
        ? [banners[banners.length - 1], ...banners, banners[0]]
        : banners;

    useEffect(() => {
        if (IS_MAIN2 && flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: 1, animated: false });
            setCurrentIndex(0);
        }
    }, [banners]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!flatListRef.current) return;

            if (IS_MAIN2) {
                let nextIndex = currentIndex + 2;
                if (nextIndex >= extendedBanners.length) {
                    nextIndex = 1;
                }
                flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
            } else {
                let nextIndex = (currentIndex + 1) % banners.length;
                flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
                setCurrentIndex(nextIndex);
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex, banners.length, IS_MAIN2]);

    const onMomentumScrollEnd = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / totalItemWidth);

        if (IS_MAIN2) {
            if (index === 0) {
                flatListRef.current.scrollToIndex({ index: banners.length, animated: false });
                setCurrentIndex(banners.length - 1);
            } else if (index === banners.length + 1) {
                flatListRef.current.scrollToIndex({ index: 1, animated: false });
                setCurrentIndex(0);
            } else {
                setCurrentIndex(index - 1);
            }
        } else {
            setCurrentIndex(index);
        }
    };

    return (
        <View style={{ position: 'relative' }}>
            <FlatList
                ref={flatListRef}
                data={extendedBanners}
                horizontal
                pagingEnabled
                snapToInterval={totalItemWidth}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: IS_MAIN2 ? 17 : 0,
                }}
                getItemLayout={(_, index) => ({
                    length: totalItemWidth,
                    offset: totalItemWidth * index,
                    index,
                })}
                onMomentumScrollEnd={onMomentumScrollEnd}
                renderItem={({ item }) => (
                    <Image
                        source={item}
                        style={{
                            width: ITEM_WIDTH,
                            height: imageHeight,
                            resizeMode: 'cover',
                            borderRadius: imageBorder,
                            marginHorizontal: IS_MAIN2 ? 3 : 0,
                        }}
                    />
                )}
            />

            {/* 페이지 인디케이터 */}
            <View style={styles.pageIndicator}>
                <Text style={styles.pageText}>
                    {currentIndex + 1} / {banners.length}
                </Text>
            </View>
        </View>
    );
};

export default BannerSlider;

const styles = StyleSheet.create({
    pageIndicator: {
        position: 'absolute',
        right: scaleWidth(10),
        bottom: scaleHeight(10),
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
    },
    pageText: {
        color: 'white',
        fontSize: scaleFont(10),
    },
});
