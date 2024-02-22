<template>
    <form @submit.prevent="handleSubmit">
      <!-- 表单内容 -->
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    methods: {
      handleSubmit() {
        // 这里是发送表单数据的逻辑
        // 假设表单数据已经成功发送，然后跳转到成功页面
        this.$router.push({ name: 'Home' });
      }
    }
  }
  </script>
  