<template>
    <div class="page-container">
        <h1 class="page-title">The Love Hub</h1>

        <div class="energy-card card">
            <div class="avatars">
                <span>{{ store.userName.charAt(0) }}</span>
                <span class="heart-icon">❤️</span>
                <span>{{ store.partnerName.charAt(0) }}</span>
            </div>
            <h2>我们的甜蜜能量值</h2>
            <div class="points">{{ store.totalPoints }} ❤️</div>
            <div class="energy-bar">
                <div class="energy-fill" :style="{ width: energyPercentage + '%' }"></div>
            </div>
        </div>

        <div class="dashboard-grid">
            <div class="main-content">
                <div class="card link-card">
                    <h3>✨ 甜蜜任务板</h3>
                    <p>完成任务，收集能量！</p>
                    <router-link to="/quests" class="btn btn-primary">查看全部任务</router-link>
                </div>
                <div class="card link-card">
                    <h3>🎁 心愿精品店</h3>
                    <p>用能量兑换你的专属心愿！</p>
                    <router-link to="/boutique" class="btn btn-primary">进入精品店</router-link>
                </div>
            </div>

            <div class="side-content">
                <div class="card">
                    <h4>💌 每日情话</h4>
                    <p class="love-note">"{{ store.dailyLoveNote }}"</p>
                </div>
                <div class="card">
                    <h4>🪄 最新动态</h4>
                    <ul class="activity-feed">
                        <li v-for="item in store.recentMagic" :key="item.id">{{ item.text }}</li>
                        <li v-if="!store.recentMagic.length">还没有动态哦~</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useLoveStore } from '../store/loveStore';
const store = useLoveStore();
const energyPercentage = computed(() => Math.min((store.totalPoints / 2000) * 100, 100)); // 假设满能量是2000
</script>

<style scoped>
/* 省略部分样式，主要展示布局 */
.energy-card {
    text-align: center;
    background: linear-gradient(135deg, #ffdde1, #ee9ca7);
    color: white;
}

.avatars {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: 1.5em;
}

.avatars span {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: grid;
    place-content: center;
    font-weight: bold;
}

.heart-icon {
    background: none;
    font-size: 2em;
    animation: pulse 1.5s infinite;
}

.points {
    font-size: 3em;
    font-weight: bold;
    margin: 10px 0;
}

.energy-bar {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    height: 20px;
    overflow: hidden;
}

.energy-fill {
    background: white;
    height: 100%;
    border-radius: 10px;
    transition: width 0.5s ease;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-top: 20px;
}

.main-content,
.side-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.link-card {
    text-align: center;
}

.love-note {
    font-style: italic;
    color: #e85a71;
}

.activity-feed {
    list-style: '🪄 ';
    padding-left: 20px;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>