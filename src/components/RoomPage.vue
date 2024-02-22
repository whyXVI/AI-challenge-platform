<template>
    <v-card class="pa-4">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="roomName"
        label="Room Name"
        type="string"
        :rules="[rules.required]"
        required
      ></v-text-field>
      <v-text-field
        v-model="maxPeople"
        label="Player Count"
        type="number"
        :rules="[rules.required, rules.number]"
        required
      ></v-text-field>
      <v-select
        v-model="gameType"
        :items="gameTypes"
        label="Game Type"
        :rules="[rules.required]"
        required
      ></v-select>
      <v-radio-group v-model="selectedOption" row :rules="[rules.optionRequired]">
        <v-radio label="Pro" value="Option1"></v-radio>
        <v-radio label="Beginner" value="Option2"></v-radio>
      </v-radio-group>
      <v-btn :disabled="!valid" @click="submit">Create Room</v-btn>
    </v-form>
  </v-card>
  </template>
  
  <script>
  export default {
    data: () => ({
    valid: true,
    roomName:'',
    maxPeople: '',
    gameType: '',
    gameTypes: ['WHO IS THE SPY?', 'B', 'C'],
    selectedOption: null,
    rules: {
      required: value => !!value || 'Required',
      number: value => (!isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value && value > 0) || 'A positive integer is required',
      optionRequired: value => !!value || 'An option must be selected',
    }
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // 这里处理表单提交逻辑
        console.log(`最大人数: ${this.maxPeople}, 游戏类型: ${this.gameType}`);
        // 清空表单或执行其他操作
        this.resetForm();
      }
    },
    async resetForm() {
      //假设得到了服务器成功的响应
      this.$refs.form.reset();
      this.$emit('close');
      // 这里使用哈希路由便于调试，生产环境要与服务器数据交换
      this.$router.push('/room/'+this.roomCode);
    },
    
  },
    
  
  }
  </script>