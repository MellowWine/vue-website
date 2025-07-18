<template>
    <div class="page-container">
        <h1 class="page-title">心愿精品店</h1>
        <div class="rewards-grid">
            <div v-for="reward in store.rewards" :key="reward.id" class="card reward-card">
                <div class="image">{{ reward.image }}</div>
                <h3>{{ reward.name }}</h3>
                <div class="cost">标价: {{ reward.cost }} ❤️</div>
                <button @click="handleRedeem(reward)" :disabled="store.totalPoints < reward.cost"
                    class="btn btn-primary">
                    {{ store.totalPoints >= reward.cost ? '立即兑换' : `还差 ${reward.cost - store.totalPoints}❤️` }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLoveStore } from '../store/loveStore';
const store = useLoveStore();

function handleRedeem(reward) {
    const success = store.redeemReward(reward.id);
    if (success) {
        alert(`恭喜！您已成功兑换【${reward.name}】！${store.userName} 已收到通知，将尽快为您安排！👑`);
    }
}
</script>

<style scoped>
.rewards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.reward-card {
    text-align: center;
    display: flex;
    flex-direction: column;
}

.image {
    font-size: 4em;
    margin-bottom: 15px;
}

.reward-card h3 {
    flex-grow: 1;
}

.cost {
    font-weight: bold;
    color: #ff6b81;
    margin: 10px 0;
}
</style>