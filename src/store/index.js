import { createStore } from "vuex";

const store  = createStore({
    state: {
        medicines: [],
        promotions: [],
    },
    getters: { },
    actions: { 
        getMedicines() {
            return fetch(`http://localhost:8000/aveonline/pharmacy/medicine`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                },
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                return data;
            });
        },
        createMedicine({commit}, data) {
            return fetch(`http://localhost:8000/aveonline/pharmacy/medicine`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            }).then(({resp}) => {
                console.log("ressssssss in store", resp);
            });
        },
        getPromotions() {
            return fetch(`http://localhost:8000/aveonline/pharmacy/promotion`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                },
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => {
                return data;
            });
        },
        createPromotion({commit}, data) {
            return fetch(`http://localhost:8000/aveonline/pharmacy/promotion`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                return data;
            })
        },
        simulateBilling({commit}, data) {
            return fetch(`http://localhost:8000/aveonline/pharmacy/simulator/purchase?date=${data.day}&medicinesIDs=${data.medicinesIDs}`, {
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json',
                },
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                return data;
            })
        },
    },
    mutations: { 
        setMedicines: (state, medicines) => {
            state.medicines = medicines;
        },
        setPromotions: (state, promotions) => {
            state.promotions = promotions;
        }
    },
});

export default store;