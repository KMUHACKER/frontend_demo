import React from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RecipBoard() {
    const navigation = useNavigation();

    const recipes = [
        { title: '15분이면 불고기 만들기', author: '소담소담', views: 15, image: 'https://example.com/sandwich.jpg' },
        { title: '불고기샌드위치 불고기 파니니 만들기', author: '문지곡', views: 15, image: 'https://example.com/sandwich.jpg' },
        { title: '냉동삼겹살요리, 백종원 대패두루치기 (파불고기) 레시피', author: 'minitori', views: 36, image: 'https://example.com/frozen_pork.jpg' },
        { title: '궁중 떡볶이 레시피 간장떡볶이 불고기떡볶이 만드는 법', author: '심플쥐', views: 37, image: 'https://example.com/kungjung_tteokbokki.jpg' },
        { title: '오리주물럭 만드는 법 생오리고기 오리불고기 양념 레시피', author: '심플쥐', views: 94, image: 'https://example.com/duck_bulgogi.jpg' },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* 검색창 */}
                <View style={styles.header}>
                    <TextInput style={styles.searchInput} placeholder="불고기" />
                </View>

                {/* 레시피 목록 */}
                <ScrollView>
                    {recipes.map((recipe, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.recipeCard}
                            onPress={() => {
                                if (recipe.title === '15분이면 불고기 만들기') {
                                    navigation.navigate('NoticeBoard');
                                }
                            }}
                        >
                            <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
                            <View style={styles.recipeInfo}>
                                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                                <Text style={styles.recipeAuthor}>by {recipe.author}</Text>
                                <Text style={styles.recipeViews}>조회수 {recipe.views}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    searchInput: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    recipeCard: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    recipeImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    recipeInfo: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    recipeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    recipeAuthor: {
        color: '#555',
        marginTop: 5,
    },
    recipeViews: {
        color: '#888',
        marginTop: 5,
    },
});