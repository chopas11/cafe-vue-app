import { createStore } from "vuex"

const store = createStore({
    state: {
        _items: [],
        _place: "",
        _sale: 0,
        _price: 0,
        _order: {},
    },
    getters: {
        items: (state) => state._items,
        // itemsCount: (state) => state._items.length,
        itemsCount: (state) => {
            if (state._items.length === 0) return 0;
            else return state._items.reduce((acc, item) => acc + item.count, 0)
        },
    },
    mutations: {
        toggleInCart (state, newItem) {
            if (state._items.filter(item => item.name === newItem.name).length === 0) {
                state._items.push(newItem);
            } else {
                state._items = state._items.filter(item => item.name !== newItem.name);
            }
        },
        IncrementCount (state, name) {
            state._items = state._items.map(item => {
                if (item.name === name) {
                    return {
                        ...item,
                        count: item.count + 1,
                    }
                } else return item
            })
        },
        DecrementCount (state, name) {
            let nullFlag = 0;
            state._items = state._items.map(item => {
                if (item.name === name) {
                    if (item.count === 1) {
                        nullFlag = 1;
                        console.log("Ага");
                    }
                    return {
                        ...item,
                        count: item.count - 1,
                    }
                } else return item
            })
            if (nullFlag > 0) {
                state._items = state._items.filter(item => item.name !== name);
            }
        },
        clearItems (state) {
            state._items = [];
        }
    },
    actions: {
        toggleInCart({ commit }, elems) {
            commit("toggleInCart", elems);
        },
        IncrementCount({ commit }, elems) {
            commit("IncrementCount", elems);
        },
        DecrementCount({ commit }, elems) {
            commit("DecrementCount", elems);
        },
        clearItems({ commit }, elems) {
            commit("clearItems", elems);
        }
    },
})

export default store
