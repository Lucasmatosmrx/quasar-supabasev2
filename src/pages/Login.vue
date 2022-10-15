<template>
  <q-page padding>
    <q-form class="row justify-center">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10">
        <q-input label="Email" v-model="form.email" outlined />
        <q-input label="Password" v-model="form.password" outlined />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageLogin",

  setup() {
    const form = ref({
      email: "",
      password: "",
    });
    return { form };
  },
});
</script>
