<template>
  <ViewComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Crear Promocion</h1>
      </div>
    </template>
    {{errMesage}}
    <form @submit.prevent="savePromotion">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">
                        Descripcion 
                    </label>
                    <input type="text" name="description" id="description" v-model="promotion.description"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div>
                    <label for="percentage" class="block text-sm font-medium text-gray-700">
                        Porcentaje
                    </label>
                    <input type="number" name="percentage" id="percentage" v-model="promotion.percentage"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div>
                    <label for="startDate" class="block text-sm font-medium text-gray-700">
                       Fecha de inicio 
                    </label>
                    <input type="date" name="startDate" id="startDate" v-model="promotion.startDate"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div>
                    <label for="endDate" class="block text-sm font-medium text-gray-700">
                       Fecha de termino 
                    </label>
                    <input type="date" name="endDate" id="endDate" v-model="promotion.endDate"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="button" @click="goToPromotions" class="back-button inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                       Atras 
                    </button>
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    </form>
  </ViewComponent>
</template>


<script setup>
import ViewComponent from "../components/ViewComponent.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();

let errMesage = ref('');
let promotion = {
    description: '',
    percentage: 0, 
    startDate: '',
    endDate: '',
};

function goToPromotions(){
    router.push({
        name: "Promotions"
    });
}

function savePromotion() {
    // missing the time piker to select the hours
    promotion.startDate = `${promotion.startDate}T00:00:00Z`;
    promotion.endDate = `${promotion.endDate}T00:00:00Z`;
    store.dispatch('createPromotion', promotion)
    .then((resp) => {
        if (resp.error) {
            errMesage.value = resp.error;
            let promotion = {
                description: '',
                percentage: 0, 
                startDate: '',
                endDate: '',
            };
        } else {
            router.push({
                name: "Promotions"
            });
        }
    })
}
</script>

<style scoped>
    .back-button {
        margin-right: 8px;
    }
</style>