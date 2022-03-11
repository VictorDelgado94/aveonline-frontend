<template>
  <ViewComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Simular factura</h1>
      </div>
    </template>

    <div class="totalDiv">
        <span> EL TOTAL DE TU COMPRA SERA: {{totalResponse.total}}</span>
    </div>
    <form @submit.prevent="simulatePurchase" v-if="medicines !== null">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <label for="day" class="block text-sm font-medium text-gray-700">
                        Fecha tentativa de compra 
                    </label>
                    <input type="date" name="day" id="day" v-model="purchaseDay"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div class="max-w-2xl mx-auto sm:py-3 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Selecciona tus productos</h2>

                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div v-for="m in medicines" :key="m.id" class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="../../public/descarga.jpeg" :alt="m.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                            <h3 class="text-sm text-gray-700">
                                <a :href="m.href">
                                <span aria-hidden="true" class="absolute inset-0" />
                                {{ m.name }}
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ m.color }}</p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">{{ m.price }}</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
import store from "../store";

let currentDate = new Date()
let month = currentDate.getMonth()+1;
let montFormat = (month < 10) ? '0'+month : month;
let purchaseDay = ref(`${currentDate.getFullYear()}-${montFormat}-${currentDate.getDate()}`)

let medicines = ref([]);
let totalResponse = ref({});

store.dispatch('getMedicines')
  .then((data) => {
    medicines.value = data;
  })

// todo take the medicinesIDs from the view
function simulatePurchase() {
    store.dispatch('simulateBilling', {day: purchaseDay.value, medicinesIDs: '1,2,3'})
        .then((data) => {
            totalResponse.value = data;
        })
}

</script>

<style scoped>
   .totalDiv {
       display: flex;
       justify-content: center;
   } 
</style>