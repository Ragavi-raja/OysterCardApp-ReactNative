import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const Card = ({ title, value }) => (
    <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        color: colors.text,
        fontSize: 16,
    },
    value: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Card;
