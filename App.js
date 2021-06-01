/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import { QUESTIONS } from './data/dummy-data';
import { NavigationContainer } from '@react-navigation/native';
import QuestionStackScreen from './src/navigation/StackScreen';
import { combineReducers, createStore } from 'redux';
import questionsReducer from './src/store/reducers/questions';

import { Provider } from 'react-redux';
import QuestionsScreen from './src/screens/QuestionsScreen';




const App: () => Node = () => {

  const rootReducer = combineReducers({ questions: questionsReducer });

  const store = createStore(rootReducer);


  return (


        <Provider store={store}>
          <NavigationContainer>
            {console.log("hi te")}
            <QuestionStackScreen />
          </NavigationContainer>
        </Provider>
    
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default App;
