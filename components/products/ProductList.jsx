import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import styles from "./productList.style";
import useFetch from "../../hooks/useFetch";
import ProductCardView from './ProductCardView';
import { COLORS, SIZES } from '../../constants';

const ProductList = () => {
    const { data, isLoading, error } = useFetch();

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.large} color={COLORS.primary}></ActivityIndicator>
            ) : error ? (
                <Text>Error: {error.message}</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <ProductCardView product={item} />
                    )}
                />
            )}
        </View>
    );
};

export default ProductList;
