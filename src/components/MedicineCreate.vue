<template>
  <ViewComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Crear Medicamento</h1>
      </div>
    </template>
    <form @submit.prevent="saveMedicine">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input type="text" name="name" id="name" v-model="medicine.name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700">
                        Precio
                    </label>
                    <input type="number" name="price" id="price" v-model="medicine.price"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div>
                    <label for="location" class="block text-sm font-medium text-gray-700">
                        Ubicacion
                    </label>
                    <input type="text" name="location" id="location" v-model="medicine.location"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md " />
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="button" @click="goToMedicines" class="back-button inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
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

let medicine = {
    name: '',
    price: 0, 
    location: '',
};

function goToMedicines(){
    router.push({
        name: "Medicines"
    });
}

function saveMedicine() {
    store.dispatch('createMedicine', medicine)
    .then(() => {
        router.push({
            name: "Medicines"
        });
    })
}
</script>

<style scoped>
    .back-button {
        margin-right: 8px;
    }
</style>