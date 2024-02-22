<template>
    <v-app>
        
      <v-app-bar color="primary"  density="comfortable" >
        <v-toolbar-title floating elevation=2>Room List</v-toolbar-title>
        <v-form @submit.prevent="joinRoom" class="d-flex mt-6" >
            <v-responsive
                class="mx-auto"
                min-width="150"
            >
            <v-text-field
                v-model="roomInfo.id"
                placeholder="1145141919180"
                label="Room Code"
                variant="underlined"
                class="mr-2 ml-4 mb-1"
                elevation=2 
            ></v-text-field>
            </v-responsive>
            
          <v-btn class="mr-4 mb-4" type="submit" elevation="2" density="prominent">Join Room</v-btn>
          <v-btn @click="createRoom"  elevation=2 class="mr-2 mb-4" density="prominent">Create Room</v-btn>
        </v-form>
      </v-app-bar>
  
      <v-main>
        <div style="min-height: 100vh; display: flex; justify-content: center;">
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="3" v-for="(room, index) in rooms" :key="index" style="display: flex; justify-content: center;">
                <RoomCard :room="room" @joinRoom="joinRoom" style="max-width: 200px;" />
                </v-col>
            </v-row>
        </div>


        <v-dialog v-model="dialog" >
            <RoomPage @close="dialog = false" />
        </v-dialog>
      </v-main>
    </v-app>
  </template>
  
  
  <script>
  import RoomCard from '../components/RoomCard.vue';
  import RoomPage from '../components/RoomPage.vue';
  export default {
    components: {
      RoomCard,
      RoomPage,
    },
    data() {
      return {
        dialog: false, // 控制v-dialog的显示
        roomInfo: {
            id: '',

            // isPrivate: 0,
            // name: '房间示例',
            // maxPlayers: 8,
            // currentPlayers: 4,
            // gameType: '游戏类型示例',
            // track:1,
            // players: [
            //     { name: '玩家1', IsPrepared: 1},
            //     { name: '玩家2', IsPrepared: 0 },
            // 更多玩家...
            // ],
        },
        rooms: [
          { name: 'Room Name',isPrivate: 0, gameType: 'WHO IS THE SPY?',track:1, id: 'lgz@CUC', currentPlayers: '5', maxPlayers: '8' },
          { name: 'Chill Zone',isPrivate: 0, gameType: 'A place to relax...',track:1, id: 'Xyn223', currentPlayers: '5', maxPlayers: '6' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
          { name: 'Epic Battles',isPrivate: 0, gameType: 'Conquer the  ...',track:0, id: '0101', currentPlayers: '2', maxPlayers: '8' },
        ],
      };
    },
    methods: {
        async joinRoom() {
            // 处理房间加入逻辑
            console.log("Room code to join:", this.roomInfo.id);
            // 假设服务器响应成功
            this.$router.push('/room/'+this.roomInfo.id);
            // 这里使用哈希路由便于调试，生产环境要与服务器数据交换
        },
        createRoom() {
            // 处理房间创建逻辑
            // this.$router.push('/room/'+this.roomInfo.id);
            this.dialog = true; // 显示创建房间的对话框
        },
        confirmCreateRoom() {
          // 确认创建房间的逻辑
        //   console.log("确认创建房间");
          this.dialog = false; // 关闭对话框
          // 进一步处理，例如提交表单数据
        },
        closeDialog() {
          this.$emit('close');
        },
    },
  };
  </script>
  
  <style scoped>

  /* Custom styles for Vuetify components if needed */
  </style>
  