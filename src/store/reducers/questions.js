// File for marking the meal as a favorite and managing filters.
import {QUESTIONS} from '../../../data/dummy-data';
import { ADD_QUESTION,LOCK_USER_CHOOSEN_OPTION } from "../actions/questions";
const initialState = {
	questions: QUESTIONS,
};
const mealsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_QUESTION :
			// const existingIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);
			// if (existingIndex >= 0) {
			// 	const updatedFavMeals = [ ...state.favoriteMeals ];
			// 	updatedFavMeals.splice(existingIndex, 1);
			// 	return { ...state, favoriteMeals: updatedFavMeals };
			// } else {
			// 	const meal = state.meals.find((meal) => meal.id === action.mealId);
			// 	return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
			// }
            return {}
        case LOCK_USER_CHOOSEN_OPTION :
            return {};    
		default:
			return state; // is actually first reached when app starts
	}
};

export default mealsReducer;
