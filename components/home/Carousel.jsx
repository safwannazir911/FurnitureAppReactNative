import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'
import styles from "./carousel.style"

const Carousel = () => {
    const slides = [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                ImageComponentStyle={
                    {
                        borderRadius: 15,
                        width: "95%",
                        marginTop: 15
                    }
                }
                autoplay
                circleLoop
            />
        </View>
    )
}

export default Carousel

