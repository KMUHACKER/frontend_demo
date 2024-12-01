import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FoodieaApp() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(`검색어: ${searchText}`);

        // RecipBoard로 검색어를 전달
        navigation.navigate('RecipBoard', { query: searchText });
    };

    const navigateToNoticeBoard = (recipe) => {
        navigation.navigate('NoticeBoard', { recipe });
    };

    return (
        <View style={styles.container}>
            {/* 헤더 */}
            <View style={styles.header}>
                <Text style={styles.logoText}>FOODIEA</Text>

                {/* 검색바 */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={[styles.searchInput, { fontFamily: 'System' }]}
                        placeholder="요리를 검색해 주세요"
                        placeholderTextColor="#aaa"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Text style={styles.searchButtonText}>검색</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 추천 요리 섹션 */}
            <Text style={styles.sectionTitle}>추천 요리</Text>
            <ScrollView contentContainerStyle={styles.recipeGrid}>
                {recipeData.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => navigateToNoticeBoard(item)}
                    >
                        <Image source={item.image} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>{item.title}</Text>
                        <Text style={styles.recipeInfo}>{item.author}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* 하단 네비게이션 */}
            <View style={styles.navBar}>
                <TouchableOpacity>
                    <Icon name="home-outline" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="bookmark-outline" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="camera-outline" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MyID')}>
                    <Icon name="person-outline" size={24} color="#333" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const recipeData = [
    {
        title: '소불고기 황금 양념 레시피',
        author: '소담다담',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '오징어 볶음',
        author: 'hancy02',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '김치찌개 레시피',
        author: '레시피 고수',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '닭갈비 맛있게 만들기',
        author: '요리 대가',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '참치마요 덮밥',
        author: '간편요리',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '된장찌개 레시피',
        author: '집밥 요리사',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '잡채 황금 레시피',
        author: '전문 요리사',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '계란말이 레시피',
        author: '심플 키친',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '떡볶이 맛있게 만들기',
        author: '분식 마스터',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
    {
        title: '치즈 스파게티',
        author: '이탈리안 키친',
        image: require('../../assets/Image/cowbulgogi.jpg'),
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff5a5f',
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '90%',
        height: 40,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        paddingVertical: 0,
    },
    searchButton: {
        backgroundColor: '#ff5a5f',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
        paddingHorizontal: 20,
    },
    recipeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    card: {
        width: '48%',
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
    },
    recipeImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    recipeTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 8,
    },
    recipeInfo: {
        color: '#888',
        fontSize: 12,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});