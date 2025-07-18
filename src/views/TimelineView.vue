<template>
    <div class="page-container">
        <h1 class="page-title">我们的时光机</h1>
        <div class="timeline-container">
            <div v-for="event in store.timeline" :key="event.id" class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content card">
                    <div class="date">{{ event.date }}</div>
                    <p>{{ event.text }}</p>
                    <div v-if="event.photo" class="photo-container">
                        <img :src="event.photo" alt="回忆照片">
                    </div>
                    <div v-else-if="event.type !== 'system'">
                        <button @click="triggerFileUpload(event.id)" class="btn btn-upload">上传照片</button>
                        <input type="file" ref="fileInput" @change="onFileChange(event.id)" style="display: none;"
                            accept="image/*">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLoveStore } from '../store/loveStore';
const store = useLoveStore();
const fileInput = ref(null);

let currentEventId = null;

function triggerFileUpload(eventId) {
    currentEventId = eventId;
    // 由于可能有多个input，我们通过ref数组来定位
    // 更简单的方式是只用一个input，通过js逻辑来控制
    // 为了简单，我们假设只有一个file input，或者用更高级的方法
    // 这里我们用一个简化的逻辑
    const input = document.querySelector('input[type=file]'); // 简化查找
    if (input) input.click();
}

function onFileChange(eventId, event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // e.target.result 是图片的 base64 编码
            store.addPhotoToTimeline(eventId, e.target.result);
        };
        reader.readAsDataURL(file);
    }
}
</script>

<style scoped>
.timeline-container {
    position: relative;
    padding: 20px 0;
}

.timeline-container::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #ffdde1;
}

.timeline-item {
    position: relative;
    margin-bottom: 30px;
    padding-left: 60px;
}

.timeline-dot {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ff6b81;
    border: 4px solid #fff;
}

.date {
    font-weight: bold;
    color: #aaa;
    margin-bottom: 10px;
}

.photo-container img {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 15px;
}

.btn-upload {
    background: #eee;
    color: #555;
}
</style>