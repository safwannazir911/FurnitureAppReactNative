import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  upperRow:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    position:"absolute",
    top:SIZES.large,
    width:SIZES.width,
    zIndex:999,
    paddingHorizontal:SIZES.small
  },
  image: {
    width: SIZES.width,
    height: SIZES.height/3,
  },
  main:{
    padding:SIZES.xSmall,

  },
  details: {
    marginTop: 5,

  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  priceWrapper: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  price: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent:"space-between",
    marginTop: 16,
  },
  rating: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardCount:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    columnGap:5,
    marginRight:SIZES.small
  },
  descriptionWrapper: {
    marginTop: 5,

  },
  description: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    backgroundColor:COLORS.secondary,
    borderRadius:5,
    padding:5
  },
  locationAlign:{
    flexDirection:"row",
    alignItems:"center"
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    alignItems: 'center',
  },
  cartBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  cartTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  addToCart: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 5,
  },
});

export default styles;
