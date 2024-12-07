import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { OysterContext } from '../context/OysterContext';
import Button from '../components/Button';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
    const { balance } = useContext(OysterContext);

    const actions = [
        { id: 1, title: 'Topups', screen: 'TopUp' },
        { id: 2, title: 'Journey History', screen: 'JourneyHistory' },
        { id: 3, title: 'Add Cards', screen: null },
    ];

    return (
        <View style={styles.container}>
            <Card title="Balance" value={`£${balance.toFixed(2)}`} />
            <FlatList
                data={actions}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Button
                        title={item.title}
                        onPress={() => item.screen && navigation.navigate(item.screen)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5DC', // Beige
    },
});

export default HomeScreen;
