import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index"

const styles = StyleSheet.create({
    searchImage:{
        resizeMode:"cover",
        width:SIZES.width -100,
        height:SIZES.height -300
    }
})

export default styles