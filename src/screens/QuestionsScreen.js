import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, FlatList, StatusBar, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';



const QuestionsScreen = (props) => {

    const questionList = useSelector((state) => state.questions.questions);

    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    borderTopWidth: 0.5,
                    width: "100%",
                    backgroundColor: "#000",
                    borderTopColor: '#022e57'
                }}
            />
        );
    }

    return (

        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar barStyle={Platform.OS !== 'android' ? 'light-content' : 'dark-content'} backgroundColor="#000" />
            <FlatList
                data={questionList}
                showsVerticalScrollIndicator={false}
                // contentContainerStyle={{width : Dimensions.get('window').width}}
                keyExtractor={(item, index) => item.id}
                renderItem={(item, index) => {
                    let touchableBgColor = item.index % 2 === 0 ? '#005792' : 'grey';
                    let questionColor = item.index % 2 === 0 ? 'white' : 'white';
                    return (
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Polling') }} style={{ justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width - 20, marginVertical: 10, minHeight: 50, flex: 1, justifyContent: 'center', borderColor: 'grey', borderWidth: 1, borderRadius: 10, backgroundColor: touchableBgColor }}>
                            <Text style={{ textAlign: 'center', fontSize: 14, color: questionColor }}>{item.item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
                ItemSeparatorComponent={FlatListItemSeparator}
            />
        </SafeAreaView>
    )

};



const styles = StyleSheet.create({

});

export default QuestionsScreen;

export const headerStyle = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                activeOpacity={0.6}
                style={{ borderRadius: 10, marginRight: 10, backgroundColor: '#493323', width: 50, height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    navigation.navigate('Add Question')
                }}
            >
                <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
        ),
    }
}