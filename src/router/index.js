import {createRouter,  createWebHistory} from "vue-router";
import DashLayout from '../components/DashLayout.vue'
import MedicineCreate from '../components/MedicineCreate.vue'
import Medicines from '../views/MedicinesView.vue'
import Promotions from '../views/PromotionsView.vue'
import PromotionCreate from '../components/PromotionCreate.vue'
import Billings from '../views/BillingsView.vue'

const routes = [
    {
        path: '/',
        redirect: '/medicines',
        component: DashLayout,
        children: [
            {path: '/medicines', name: 'Medicines', component: Medicines},
            {path: '/medicines/create', name: 'MedicineCreate', component: MedicineCreate },
            {path: '/promotions', name: 'Promotions', component: Promotions},
            {path: '/promotions/create', name: 'PromotionCreate', component: PromotionCreate },
            {path: '/billings', name: 'Billings', component: Billings}
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;