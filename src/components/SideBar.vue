<template>
    <nav class="sidebar">
        <div class="header">
            <h2>The Love Hub</h2>
            <span>爱情枢纽</span>
        </div>
        <ul>
            <li><router-link to="/">🏠 仪表盘</router-link></li>
            <li><router-link to="/quests">✨ 甜蜜任务板</router-link></li>
            <li><router-link to="/boutique">🎁 心愿精品店</router-link></li>
            <li><router-link to="/timeline">⏳ 我们的时光机</router-link></li>
        </ul>
        <div class="footer">
            For My Dearest ❤️
        </div>
    </nav>
</template>

<style scoped>
/* (这里使用之前提供的 sidebar 样式，可以根据喜好微调颜色) */
.sidebar {
    width: 240px;
    background-color: #4a4a68;
    color: #f0f0f8;
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
}

.header {
    text-align: center;
    margin-bottom: 40px;
}

.header h2 {
    margin: 0;
    color: #fff;
    font-family: 'Dancing Script', cursive;
    /* 可以引入一个漂亮的手写字体 */
    font-size: 2em;
}

.header span {
    color: #f0f0f8;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
}

.sidebar ul li a {
    display: block;
    padding: 15px 20px;
    color: #f0f0f8;
    text-decoration: none;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    font-size: 1.1em;
}

.sidebar ul li a:hover {
    background-color: #5c5c82;
    transform: translateX(5px);
}

.sidebar ul li a.router-link-exact-active {
    background-color: #ff6b81;
    font-weight: bold;
    color: #fff;
    box-shadow: 0 4px 8px rgba(255, 107, 129, 0.4);
}

.footer {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #5c5c82;
    color: #f0f0f8;
}
</style>