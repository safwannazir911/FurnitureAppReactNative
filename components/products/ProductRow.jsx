import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './productRow.style';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
const ProductRow = () => {
    
    const { data, isLoading, error, refetch } = useFetch();

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <ProductCardView product={item} />}
                    horizontal
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            )}
        </View>
    );
};

export default ProductRow;
