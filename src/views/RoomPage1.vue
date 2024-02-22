<template>
    <v-container>
    <v-card>
      <v-card-title>{{ roomInfo.name }}</v-card-title>
      <v-card-subtitle>
        Game Type: {{ roomInfo.gameType }} |
      </v-card-subtitle>
      <v-card-subtitle>
        Track: {{ roomInfo.track === 1 ? 'Pro' : 'Beginner' }}   
      </v-card-subtitle>
      <v-card-subtitle>
        Players: {{ roomInfo.currentPlayers }}/{{ roomInfo.maxPlayers }}
      </v-card-subtitle>
      <v-card-subtitle>
        RoomID: {{ roomInfo.id}}   
      </v-card-subtitle>
      <v-card-text >
        <div min-height="100vh">
          <v-row align="start">
            <v-col cols="auto" v-for="(player, index) in roomInfo.players" :key="index">
              <v-list>
                  <v-list-item-content :class="player.isPrepared == 1 ? 'prepared' : 'unprepared'">
                    {{ player.name }}
                  </v-list-item-content>
              </v-list>

            </v-col>
          </v-row>
        </div>

      </v-card-text>
      <v-card-actions style="min-width: 600px;overflow-x: auto;">
        <v-btn color="error" @click="exitRoom">Exit Room</v-btn>
        <!-- <v-btn color="success" @click="RinkuSutāto" v-if="isOwner && isReady">Start Game</v-btn> -->
        <v-btn color="success" @click="RinkuSutāto" v-if="isOwner">Start Game</v-btn>
        <v-btn color="warning" @click="dissolveRoom" v-if="isOwner">Dissolve Room</v-btn>
        <v-btn @click="togglePreparation" v-if="!isOwner">
          {{ userPrepared === 0 ? 'Finish Preparation' : 'Quit Preparation' }}
        </v-btn>
      </v-card-actions>
        <v-textarea
          label="Enter Your Prompt"
          v-if="roomInfo.track == 0"
          auto-grow
          v-show="userPrepared === 0"
        ></v-textarea>
        <v-file-input label="Upload Your Program" v-if="roomInfo.track == 1" v-show="userPrepared === 0"></v-file-input>

      
    </v-card>
  </v-container>
</template>
  
<script>
  export default {
    props: ['roomId'], // 接收 `roomId` 作为prop
    data() {
    return {
      roomInfo: {
        id: '123456',
        isPrivate: 0,
        name: 'WDBIBABU',
        maxPlayers: 8,
        currentPlayers: 4,
        gameType: 'WHO IS THE SPY?',
        track: 1,
        players: [
          { name: '玩家1', isPrepared: 1},
          { name: '玩家2', isPrepared: 0 },
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          { name: '玩家1', isPrepared: 1},
          // 更多玩家...
        ],
      },
      isOwner: 0, // 假设当前用户是房主
      isReady: true, // 假设满足开始游戏的条件
      userPrepared: 0, //假设还没准备好
    };
   },
    methods: {
      exitRoom() {
        // 实现退出房间逻辑
        alert('退出房间');
      },
      RinkuSutāto() {
        // 实现开始游戏逻辑
        alert('游戏开始');
      },
      dissolveRoom() {
        // 实现解散房间逻辑
        alert('解散房间');
      },
      togglePreparation() {
        this.userPrepared = this.userPrepared === 0 ? 1 : 0;
        alert('userPrepared' + this.userPrepared);
        //实现准备相关逻辑
      },
    },
  };
</script>
  
  
<style scoped>
.unprepared {
  color: #F5A9B8;
}
.prepared {
  color: #5BCAF6;
}
</style>