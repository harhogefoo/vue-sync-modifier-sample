<template>
  <form @submit.prevent="$emit('send')">
    <label>
      メールアドレス
      <input
        type="text"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />
    </label>
    <label>
      名前
      <input
        type="text"
        :value="name"
        @input="$emit('update:name', $event.target.value)"
      />
    </label>
    <button type="submit" @click="$emit('submit')">登録</button>
  </form>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
