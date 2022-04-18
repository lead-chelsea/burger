const actions = {
  onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null);

      // redirect from here
      this.$router.push({
        path: '/login',
      });
    } else {
      const { uid, email, displayName } = authUser;
      state.commit('SET_USER', {
        uid,
        email,
        displayName,
      });
    }
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  addItem(state, selectedItem) {
    const index = state.orders.findIndex((item) => {
      return item.name == selectedItem.name;
    });
    if (index == -1) {
      const { name, price } = selectedItem;
      state.orders.push({ name, price, quantity: 1 });
    } else {
      state.orders[index].quantity++;
    }
  },
  removeItem(state, item) {
    state.orders.splice(item, 1);
  },
};

const state = () => ({
  user: null,
  orders: [],
});

const getters = {
  getUser(state) {
    return state.user;
  },
  getOrders(state) {
    return state.orders;
  },
  totalItems(state, getters) {
    return state.orders.length;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
