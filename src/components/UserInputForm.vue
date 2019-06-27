<template>
  <form @submit.prevent="$emit('send')">
    <label>
      メールアドレス
      <input type="text" v-model="user.email" />
    </label>
    <label>
      名前
      <input type="text" v-model="user.name" />
    </label>
    <button type="submit" @click="$emit('submit')">登録</button>
  </form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
