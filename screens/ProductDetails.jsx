import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './productDetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { useRoute } from '@react-navigation/native';


export default function ProductDetails({ navigation }) {
    const route=useRoute()
    const {product}=route.params
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons
                        name='chevron-back-circle'
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Ionicons
                        name='heart'
                        size={30}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>
            </View>


            <Image
                source={{
                    uri: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                }
                style={styles.image}
            />

            <View style={styles.main}>
                <View style={styles.details}>
                    <View style={styles.titleRow}>
                        <Text style={styles.title}>{product.title}</Text>
                        <View style={styles.priceWrapper}>
                            <Text style={styles.price}>{product.price}</Text>
                        </View>
                    </View>

                    <View style={styles.ratingRow}>
                        <View style={styles.rating}>
                            {[1, 2, 3, 4, 5].map((index) =>
                            (<Ionicons
                                key={index}
                                name='star'
                                size={24}
                                color="gold"
                            />)
                            )}
                        </View>


                        <View style={styles.cardCount}>
                            <TouchableOpacity onPress={() => { increment() }}>
                                <SimpleLineIcons
                                    name='plus'
                                    size={24}
                                />
                            </TouchableOpacity>
                            <Text style={styles.ratingText}>{count}</Text>
                            <TouchableOpacity onPress={() => { decrement() }}>
                                <SimpleLineIcons
                                    name='minus'
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descriptionText}>{product.description}</Text>
                </View>



                <View style={styles.location}>

                    <View style={styles.locationAlign}>
                        <Ionicons
                            name='location-outline'
                            size={20}
                        />
                        <Text>{product.product_location}</Text>

                    </View>

                    <View style={styles.locationAlign}>
                        <MaterialCommunityIcons
                            name='truck-delivery-outline'
                            size={20}
                        />
                        <Text>Free Delivery</Text>
                    </View>

                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => { }} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>Buy Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.addToCart}>
                        <Fontisto
                            name='shopping-bag'
                            size={24}
                            color={COLORS.lightWhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>



        </ScrollView>
    )
}
