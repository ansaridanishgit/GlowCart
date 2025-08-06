import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import MainHeader from '../../Components/Headers/MainHeader';
import { ChevronDown, Heart } from 'lucide-react-native';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
        setDisplayedProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setDisplayedProducts(filtered);
  };

  const renderProduct = ({ item }) => {
    const isFavorited = favorites.includes(item.id);
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails', { product:item })} style={styles.card}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 5,
          }}
        >
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
            <Heart
              size={22}
              color={isFavorited ? 'red' : '#636363'}
              fill={isFavorited ? 'red' : 'none'}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />

      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 15,
          borderBottomWidth: 0.5,
          borderColor: '#333333',
        }}
      >
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for all products"
            placeholderTextColor="#999"
            style={styles.searchInput}
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Products</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Apply Filter</Text>
          <ChevronDown size={14} color="#636363" />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 14, color: '#636363' }}>
          {displayedProducts.length} products
        </Text>
      </View>

      {loading ? (
        <View style={{ alignItems: 'center', marginVertical: 30 }}>
          <ActivityIndicator size="small" color="#000" />
        </View>
      ) : (
        <FlatList
          data={displayedProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ gap: 8 }}
          contentContainerStyle={styles.productList}
          renderItem={renderProduct}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 40 }}>
              No products found.
            </Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE6E3',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderColor: '#8F8F8F',
    borderWidth: 1,
    borderRadius: 25,
    width: '90%',
    paddingHorizontal: 15,
  },
  searchInput: {
    fontSize: 14,
    color: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  filterBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
  },
  filterText: {
    fontSize: 12,
    color: '#000',
    marginRight: 5,
  },
  productList: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    rowGap: 12,
  },
  card: {
    backgroundColor: '#fff',
    width: '50%',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  price: {
    fontSize: 13,
    color: '#333',
    marginTop: 4,
  },
});
