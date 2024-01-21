import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    margin: SIZES.small,
    borderRadius: SIZES.small,
    ...SHADOWS.small,
  },
  imageContainer: {
    flex: 1,
    width:170,
    overflow: 'hidden',
    borderTopLeftRadius: SIZES.small,
    borderBottomLeftRadius: SIZES.small,
  },
  image: {
    aspectRatio:1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginBottom: SIZES.small,
  },
  supplier: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    marginBottom: SIZES.small,
  },
  price: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  addBtn:{
    position:"absolute",
    
  }
});

export default styles;
