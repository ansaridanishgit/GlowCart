import React, { useState, useEffect } from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from 'react-native';
import { Text } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { Filter, X } from 'lucide-react-native';
import { useFilters } from '../../Context/FiltersContext';

const { height } = Dimensions.get('window');

const states = [
    { label: 'Maharashtra', value: 'maharashtra' },
    { label: 'Delhi', value: 'delhi' },
];

const cities = {
    maharashtra: [
        { label: 'Mumbai', value: 'mumbai' },
        { label: 'Pune', value: 'pune' },
    ],
    delhi: [
        { label: 'New Delhi', value: 'newdelhi' },
        { label: 'Dwarka', value: 'dwarka' },
    ],
};

const businessData = {
    food: ['Restaurants', 'Cafes', 'Tea Stalls'],
    digital: ['Mobile Phones', 'Laptops'],
};

const businessTypes = [
    { label: 'Food & Beverage', value: 'food' },
    { label: 'Digital Appliances', value: 'digital' },
];

const FiltersModal = ({ visible, onClose }) => {
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [cityOptions, setCityOptions] = useState([]);
    const [businessType, setBusinessType] = useState(null);
    const [subType, setSubType] = useState(null);
    const [subTypeOptions, setSubTypeOptions] = useState([]);

    const { filters, updateFilters } = useFilters();

    useEffect(() => {
        if (visible) {
            setBusinessType(filters.businessType);
            setSubType(filters.subType);
            setState(filters.state);
            setCity(filters.city);
        }
    }, [visible]);

    const handleApply = () => {
        updateFilters({
            businessType,
            subType,
            state,
            city,
        });
        onClose();
    };
    useEffect(() => {
        if (state) {
            setCityOptions(cities[state] || []);
            setCity(null);
        }
    }, [state]);

    useEffect(() => {
        if (businessType) {
            const subs = businessData[businessType] || [];
            setSubTypeOptions(subs.map(item => ({ label: item, value: item })));
            setSubType(null);
        }
    }, [businessType]);

    const clearAndClose = () => {
        setState(null);
        setCity(null);
        setBusinessType(null);
        setSubType(null);
        onClose();
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={clearAndClose}
        >
            <TouchableWithoutFeedback onPress={clearAndClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <ScrollView
                                contentContainerStyle={styles.scrollContent}
                                showsVerticalScrollIndicator={false}
                            >
                                <View style={styles.header}>
                                    <Filter color="#546E7A" size={20} />
                                    <Text style={styles.title}>Filters</Text>
                                </View>

                                {/* Section 1 - About Business */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>About Business</Text>

                                    <Text style={styles.label}>Business Type</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        data={businessTypes}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select business type"
                                        search
                                        value={businessType}
                                        onChange={item => setBusinessType(item.value)}
                                    />

                                    <Text style={styles.label}>Sub-Type</Text>
                                    <Dropdown
                                        style={styles.dropdown}
                                        data={subTypeOptions}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select sub-type"
                                        search
                                        value={subType}
                                        onChange={item => setSubType(item.value)}
                                        disabled={!businessType}
                                    />
                                </View>

                                {/* Section 2 - Location */}
                                <View style={styles.section}>
                                    <Text style={styles.sectionTitle}>Location Details</Text>

                                    <View style={styles.row}>
                                        <View style={{ width: '48%' }}>
                                            <Text style={styles.label}>State</Text>
                                            <Dropdown
                                                style={styles.dropdown}
                                                data={states}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="Select state"
                                                search
                                                value={state}
                                                onChange={item => setState(item.value)}
                                            />
                                        </View>

                                        <View style={{ width: '48%' }}>
                                            <Text style={styles.label}>City</Text>
                                            <Dropdown
                                                style={styles.dropdown}
                                                data={cityOptions}
                                                labelField="label"
                                                valueField="value"
                                                placeholder="Select city"
                                                search
                                                value={city}
                                                onChange={item => setCity(item.value)}
                                                disabled={!state}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>

                            {/* Bottom Buttons */}
                            <View style={styles.buttonRow}>
                                <TouchableOpacity
                                    onPress={clearAndClose}
                                    style={[styles.button, styles.closeBtn]}
                                >
                                    <X size={16} style={{ marginRight: 5 }} color="#546E7A" />
                                    <Text style={styles.btnText}>Close</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={handleApply}
                                    disabled={!businessType && !subType && !state && !city}
                                    style={[
                                        styles.button,
                                        styles.applyBtn,
                                        { opacity: !businessType && !subType && !state && !city ? 0.5 : 1 },
                                    ]}
                                >
                                    <Text style={[styles.btnText, { color: 'white' }]}>Apply</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default FiltersModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    container: {
        height: height * 0.8,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#546E7A',
    },
    section: {
        backgroundColor: '#F5F7FA',
        borderRadius: 12,
        padding: 15,
        marginBottom: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#37474F',
        marginBottom: 10,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5,
        color: '#546E7A',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#CED4DA',
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
        height: 45,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 3,
        elevation: 1,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },
    button: {
        width: '45%',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
    },
    applyBtn: {
        backgroundColor: '#546E7A',
    },
    closeBtn: {
        borderWidth: 1,
        borderColor: '#546E7A',
        backgroundColor: '#F3F4F6',
    },
    btnText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#546E7A',
    },
});
