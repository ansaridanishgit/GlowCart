import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ArrowLeft, ShoppingBag } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProductDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const { product } = route.params;
    const insets = useSafeAreaInsets();

    const imageUrl = product.images?.[0] || product.thumbnail || '';
    const originalPrice = product.discountPercentage
        ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
        : null;
    const reviews = Array.isArray(product.reviews) ? product.reviews : [];

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent={true} />
            <ScrollView >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()}>
                        <ArrowLeft size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerBack}>
                        <ShoppingBag size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Image */}
                <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />

                {/* View Similar */}
                <TouchableOpacity style={styles.viewSimilar}>
                    <Text style={styles.viewSimilarText}>View Similar</Text>
                </TouchableOpacity>

                {/* Title, Description, Rating */}
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.rating}>⭐ {product.rating ?? '2.56'}/5</Text>
                <View style={{ width: '100%', borderBottomWidth: 0.5, borderColor: '#333333', marginVertical: 5 }}></View>
                <Text style={styles.soldBy}>Sold by: {product.brand || 'Essence'}</Text>

                {/* Price + Add to Bag */}
                <View style={styles.priceRow}>
                    <View>
                        <Text style={styles.price}>${product.price}</Text>
                        {originalPrice && <Text style={styles.strikePrice}>${originalPrice}</Text>}
                    </View>
                    <TouchableOpacity style={styles.addToBag}>
                        <Text style={styles.addToBagText}>Add to Bag</Text>
                    </TouchableOpacity>
                </View>

                {/* Highlights */}
                <Text style={styles.sectionTitle}>Highlights</Text>
                <View style={styles.highlights}>
                    <View style={[styles.highlightItem, { borderRightWidth: 0.5, borderColor: '#333333' }]}>
                        <Text style={styles.highlightLabel}>Width</Text>
                        <Text style={styles.highlightValue}>{product.dimensions?.width || 'N/A'}</Text>
                    </View>
                    <View style={styles.highlightItem}>
                        <Text style={styles.highlightLabel}>Height</Text>
                        <Text style={styles.highlightValue}>{product.dimensions?.height || 'N/A'}</Text>
                    </View>
                    <View style={[styles.highlightItem, { borderRightWidth: 0.5, borderColor: '#333333' }]}>
                        <Text style={styles.highlightLabel}>Warranty</Text>
                        <Text style={styles.highlightValue}>{product.warrantyInformation || 'No Warranty'}</Text>
                    </View>
                    <View style={styles.highlightItem}>
                        <Text style={styles.highlightLabel}>Shipping</Text>
                        <Text style={styles.highlightValue}>{product.shippingInformation || 'In 3-5 business days'}</Text>
                    </View>
                </View>

                {/* Reviews */}
                <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <View key={index} style={styles.reviewCard}>
                            <Text style={styles.reviewerName}>{review.reviewerName}</Text>
                            <Text style={styles.reviewerEmail}>{review.reviewerEmail}</Text>
                            <Text style={styles.reviewRating}>⭐ {review.rating}/5</Text>
                            <Text style={styles.reviewText}>{review.comment}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={{ marginBottom: 20 }}>No reviews yet.</Text>
                )}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFEDEA', padding: 16 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    headerBack: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    image: {
        height: 280,
        width: '100%',
        borderRadius: 12,
        marginVertical: 10,
    },
    viewSimilar: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#E91E63'
    },
    viewSimilarText: {
        fontSize: 12,
        color: '#E91E63',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
    },
    rating: {
        fontSize: 14,
        marginBottom: 8,
    },
    soldBy: {
        fontSize: 14,
        marginBottom: 10,
        color: '#777',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'space-between'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    strikePrice: {
        fontSize: 16,
        color: '#888',
        textDecorationLine: 'line-through',
    },
    addToBag: {
        backgroundColor: '#C34B59',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    addToBagText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    highlights: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    highlightItem: {
        width: '48%',
        paddingBottom: 8,
    },
    highlightLabel: {
        fontSize: 13,
        color: '#888',
    },
    highlightValue: {
        fontSize: 14,
        color: '#222',
    },
    reviewCard: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    },
    reviewerName: {
        fontWeight: '600',
        fontSize: 14,
    },
    reviewerEmail: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
    },
    reviewRating: {
        fontSize: 14,
        marginBottom: 4,
    },
    reviewText: {
        fontSize: 14,
    },
});
