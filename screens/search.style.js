import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../constants/index"

const styles=StyleSheet.create({
    textStyle:{
        fontFamily:"bold",
        fontSize:40,
        marginHorizontal:5
    },
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        marginHorizontal:5
    },
    searchIcon:{
       margin:10,
       color:COLORS.gray 
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small,
        padding:5
    },
    searchInput:{
        fontFamily:"regular",
    },
    cameraBtn:{
        marginRight:SIZES.xSmall,
    },
    searchImage:{
        resizeMode:"cover",
        width:SIZES.width -100,
        height:SIZES.height -300
    }
})

export default styles