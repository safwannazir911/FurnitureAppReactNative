import { SafeAreaView, StyleSheet, Text, View, FlatList ,Image} from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import axios from 'axios'; // Import axios library
import { COLORS, SIZES } from '../constants/index';
import styles from "./search.style";
import { ProductCardView } from '../components';
import image from "../assets/images/Pose23.png"

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Perform axios request for search
      const response = await axios.get(`http://192.168.29.135:3000/api/products/search/${searchKey}`);

      // Handle the response
      setSearchResults(response.data);
    } catch (error) {
      // Handle error
      console.error("Search Error:", error.message);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Search</Text>
      <View style={styles.searchContainer}>


        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={(text) => setSearchKey(text)} // Update searchKey state
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.cameraBtn} onPress={() => { handleSearch() }}>
          <Feather name='search' size={SIZES.large} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>


      {
        searchResults.length === 0 ? (
          <View style={{ flex: 1 }}>
            <Image source={image}
            style={styles.searchImage}
            />
          </View>
        ) : (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            renderItem={
              ({ item }) => (
                <ProductCardView product={item} />
              )}
          />
        )
      }

    </SafeAreaView>
  );
};

export default Search;
