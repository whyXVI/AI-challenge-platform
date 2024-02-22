<template>
    <v-card class="mb-4" max-width="280px" min-width="280px">
      <v-card-title>
        {{ room.name }}
      </v-card-title>
      <v-card-text>
        <div>Game Type: {{ room.gameType }}</div>
        <div>Track: {{  room.track === 1 ? 'Pro' : 'Beginner' }}</div>
        <div class="text-right ">Room ID: {{ room.id }}</div>
        <div :class="textColorClass" class="text-right">Players: {{ room.currentPlayers }}/{{ room.maxPlayers }}</div>    
      </v-card-text>
      <v-card-actions class="justify-end pa-0" >
        <v-btn color="primary" @click="joinRoom" block>Join</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      room: {
        type: Object,
        required: true,
      },
    },
    methods: {
      joinRoom() {
        //假设跳转到/room/${room.id}，依据实际需要修改
        this.$router.push('/room/'+this.room.id);
      },
    },
    computed: {
        textColorClass() {
            const ratio = this.room.currentPlayers / this.room.maxPlayers;
            const remaining = this.room.maxPlayers - this.room.currentPlayers;

            if (ratio >= 2/3 && remaining <= 2) {
            return 'text-red';
            } else {
            return 'text-green';
            }
        }
    }

  };
  </script>
  
  <!-- <style scoped>
  .nopadding {
    padding: 0 !important;
  }
  /* Add any specific styles for your room card here */
  </style> -->
  