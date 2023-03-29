import {createStore} from "vuex";
import req from "@/services/Request.js";

const store = createStore({
    state: {
        user: null,
        authenticated: false,
        token: null,
        products: [
            {
                "id": 1,
                "image": "/assets/crystal chandaliers/cc1.jpg",
                "name": "Crystal Chandelier 1",
                "description": "A proper smart light for your home",
                "price": 40,
                "category_id": 1
            },
            {
                "id": 3,
                "image": "/assets/crystal chandaliers/cc3.jpg",
                "name": "Crystal Chandelier 3",
                "description": "A proper decoration light for your home",
                "price": 70,
                "category_id": 1
            },
            {
                "id": 4,
                "image": "/assets/crystal chandaliers/cc4.jpg",
                "name": "Crystal Chandelier 4",
                "description": "A proper modern chandeliers light for your home",
                "price": 4000,
                "category_id": 1
            },
            {
                "image": "/assets/crystal chandaliers/cc12.jpg",
                "name": "Crystal chandelier new",
                "description": "Describing product",
                "price": "400",
                "category_id": "1",
                "id": 5
            }
        ],
        "categories": [
            {
                "id": 1,
                "name": "crystal chandeliers"
            }
        ]
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data.user;
            state.token = data.token;
            state.authenticated = true;
        }
    },
    getters: {
        getProductByID: state => id => {
            return state.products.find(product => product.id === id);
        },
        getProducts: state => {
            return state.products;
        }
    },
    actions: {
        register({commit}, value) {
            return req.post('register', value)
                .then(({data}) => {
                    console.log(data);
                    commit('SET_USER', data);
                })
        }
    }
});

export default store;