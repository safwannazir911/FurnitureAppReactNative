import { StyleSheet } from "react-native";
import {COLORS,SIZES,SHADOWS} from "../../constants/index"

const styles=StyleSheet.create({
    container: {
        paddingVertical: SIZES.small,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.white,
        marginTop:SIZES.small,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray2,
        ...SHADOWS.medium,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headerTitle: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: COLORS.black,
      },
})

export default styles