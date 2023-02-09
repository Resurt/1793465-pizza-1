import Vue from 'vue'
import Vuex from 'vuex'
import pizza from "@/static/pizza.json";

Vue.use(Vuex);

const state = {
  doughs: pizza.dough,
  ingredients: pizza.ingredients,
  sauces: pizza.sauces,
  sizes: pizza.sizes,
  pizzaName: "",
  selectedDough: pizza.dough[0],
  selectedSauce: pizza.sauces[0],
  selectedSize: pizza.sizes[0],
  ingredientsCount: new Array(pizza.ingredients.length).fill(0),
};
const getters = {
  finishSum(state) {
    return (
      (state.selectedSauce.price +
        state.selectedDough.price +
        state.ingredientsSum) *
      state.selectedSize.multiplier
    );
  },
  ingredientsSum(state) {
    let sum = 0;
    state.ingredientsCount.forEach((item, index) => {
      sum += pizza.ingredients[index].price * item;
    });
    return sum;
  },
};

const mutations = {
  setSelectedDough(state, selectedDough) {
    state.selectedDough = selectedDough;
  },
  setSelectedSauce(state, selectedSauce) {
    state.selectedSauce = selectedSauce;
  },
  setSelectedSize(state, selectedSize) {
    state.selectedSize = selectedSize;
  },
  DecrementIngredientsCount(state, index) {
    Vue.set(state.ingredientsCount, index, state.ingredientsCount[index] - 1);
  },
  IncrementIngredientsCount(state, index) {
    Vue.set(state.ingredientsCount, index, state.ingredientsCount[index] + 1);
  },
  setPizzaName(state, pizzaName) {
    state.pizzaName = pizzaName;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
