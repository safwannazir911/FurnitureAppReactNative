import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../../constants/index"

const styles=StyleSheet.create({
    container:{
        width:"100%",
        marginHorizontal:5
    }
    ,welcomeTxt:(color,top)=>({
        fontFamily:"bold",
        fontSize:40 ,
        marginTop:top,
        color:color
    }),
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
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
    },
    cameraBtn:{
        marginRight:SIZES.xSmall,
        backgroundColor:COLORS.gray,
        padding:SIZES.xSmall,
        borderRadius:SIZES.xSmall
    }
})

export default styles