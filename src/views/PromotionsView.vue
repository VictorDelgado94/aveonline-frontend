<template>
  <ViewComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Promociones</h1>
        <router-link :to="{name: 'PromotionCreate'}" class="py-2 px-3 rounded-md bg-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg> 
          Crear Promocion 
        </router-link>
      </div>
    </template>
    <table v-if="promotions !== null" >
      <tr>
        <th>Descripcion</th>
        <th>Porcentaje</th>
        <th>Fecha De Inicio</th>
        <th>Fecha De Termino</th>
      </tr>
      <tr v-for="p in promotions" :key="p.id">
        <td>{{p.description}}</td>
        <td>{{p.percentage}}</td>
        <td>{{p.startDate}}</td>
        <td>{{p.endDate}}</td>
      </tr>
    </table>
  </ViewComponent>
</template>

<script setup>
import ViewComponent from "../components/ViewComponent.vue";
import store from "../store";
import {computed, ref} from "vue";

let promotions = ref([]);

store.dispatch('getPromotions')
  .then((data) => {
    promotions.value = data;
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