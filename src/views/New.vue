<template>
  <div>
    <user-input-form
      :email.sync="user.email"
      :name.sync="user.name"
      @submit="createUser"
    />
  </div>
</template>

<script>
import { defaultUser } from "@/helper/user";
import UserInputForm from "@/components/UserInputForm.vue";
export default {
  components: {
    UserInputForm
  },
  data() {
    return {
      user: defaultUser() // { email: '', name: '', ... }
    };
  },
  methods: {
    createUser() {
      console.log(this.user);
    }
  }
};
</script>
