<template>
  <ViewComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Medicamentos</h1>
        <router-link :to="{name: 'MedicineCreate'}" class="py-2 px-3 rounded-md bg-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg> 
          Crear Medicamento
        </router-link>
      </div>
    </template>
    <table v-if="medicines !== null" >
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Ubicacion</th>
      </tr>
      <tr v-for="m in medicines" :key="m.id">
        <td>{{m.name}}</td>
        <td>{{m.price}}</td>
        <td>{{m.location}}</td>
      </tr>
    </table>
  </ViewComponent>
</template>

<script setup>
import ViewComponent from "../components/ViewComponent.vue";
import store from "../store";
import {computed, ref} from "vue";

let medicines = ref([]);

const ready = computed(() => store.setMedicines)
store.dispatch('getMedicines')
  .then((data) => {
    medicines.value = data;
  })

</script>

<style scoped>
  table {
    width: 100%;
  }

  tr {
    text-align: center;
  }
</style>