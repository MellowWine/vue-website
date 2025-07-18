<template>
    <div class="page-container">
        <h1 class="page-title">甜蜜任务板</h1>
        <div class="quests-list">
            <div v-for="quest in store.tasks" :key="quest.id" class="card quest-card">
                <div class="icon">{{ quest.icon }}</div>
                <div class="details">
                    <h3>{{ quest.name }}</h3>
                    <p>{{ quest.description }}</p>
                </div>
                <div class="action">
                    <div class="points">+{{ quest.points }} ❤️</div>
                    <button @click="handleComplete(quest)" class="btn btn-primary">我完成啦！</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLoveStore } from '../store/loveStore';
const store = useLoveStore();

function handleComplete(quest) {
    store.completeQuest(quest.id);
    alert(`太棒了！已发送给 ${store.userName} 进行闪亮亮的认证！✨`);
}
</script>

<style scoped>
.quests-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.quest-card {
    display: flex;
    align-items: center;
    gap: 20px;
}

.icon {
    font-size: 3em;
}

.details {
    flex-grow: 1;
}

.action {
    text-align: center;
}

.points {
    font-size: 1.5em;
    font-weight: bold;
    color: #ff6b81;
    margin-bottom: 10px;
}
</style>