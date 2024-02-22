<template>
    <v-container class="d-flex align-center" style="min-height: 100vh;">
      <v-card class="mx-auto" max-width="400" min-width="300">
        <v-card-title class="text-h5 text-center">Welcome</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="handleSubmit">
            <v-text-field
              v-model="studentInfo.Id"
              label="Student ID"
              required
            ></v-text-field>
            <v-text-field
              v-model="studentInfo.name"
              label="name"
              required
            ></v-text-field>
            <v-select
              v-model="studentInfo.school"
              :items="schools"
              label="Choose your school"
              required
            ></v-select>
            <v-btn type="submit" class="mt-3" color="primary" block>Sign Up/Log In</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        studentInfo: {
          Id: '',
          name: '',
          school: null,
          isAdmin: 0,
        },
        schools: ["BUPT", "CUC", "UESTC"]
      };
    },
    methods: {
      handleSubmit() {
        // 这里添加发送数据的逻辑
        // 假设数据发送成功并且验证通过，执行页面跳转
        this.$router.push({ name: 'MainPage' }); // 使用路由的name属性进行跳转
      }
    }
  };
  </script>
  
   <!-- <style scoped>
 
        
        .v-card {
        border-radius: 10px !important; /* 使用!important确保覆盖默认样式 */
        }
        body {
            align-items: center !important;
        }
    </style>
   -->