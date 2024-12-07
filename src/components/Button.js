import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const Button = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.button,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: colors.text,
        fontWeight: 'bold',
    },
});

export default Button;
