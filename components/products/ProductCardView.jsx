import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './productCardView.style';
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({ product }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { product })}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        }}
                        style={styles.image} // Corrected line
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        {product.title}
                    </Text>
                    <Text style={styles.supplier} numberOfLines={1}>
                        {product.supplier}
                    </Text>
                    <Text style={styles.price} numberOfLines={1}>
                        {product.price}
                    </Text>
                </View>

                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons
                        name='add-circle'
                        size={35}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    );
};

export default ProductCardView;
