import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 使用 setup store 风格，更接近 Vue 3 Composition API 的习惯
export const useLoveStore = defineStore('love', () => {
  // --- STATE (我们的核心数据) ---
  const totalPoints = ref(1250) // 我们的甜蜜能量值
  const userName = ref('你的昵称')
  const partnerName = ref('她的昵称')

  // 任务列表
  const tasks = ref([
    {
      id: 'task1',
      name: '情绪垃圾桶',
      icon: '🫂',
      description: '在我需要时，给我一个温暖的拥抱和倾听',
      points: 50,
      completed: false,
    },
    {
      id: 'task2',
      name: '惊喜大厨',
      icon: '🍳',
      description: '为我做一顿意想不到的爱心餐',
      points: 40,
      completed: false,
    },
    {
      id: 'task3',
      name: '步行搭档',
      icon: '🚶‍♀️',
      description: '陪我饭后散步，聊聊今天发生的事',
      points: 20,
      completed: false,
    },
    {
      id: 'task4',
      name: '夸夸仙子',
      icon: '✨',
      description: '今天至少认真地夸我三次！',
      points: 15,
      completed: false,
    },
  ])

  // 奖励列表
  const rewards = ref([
    { id: 'rew1', name: '女王专属按摩服务', image: '👑', cost: 200 },
    { id: 'rew2', name: '电影之夜包场券', image: '🎬', cost: 150 },
    { id: 'rew3', name: '一日“随便使唤”卡', image: '🎟️', cost: 500 },
    { id: 'rew4', name: '周末短途旅行基金', image: '✈️', cost: 1000 },
  ])

  // 时光机记录
  const timeline = ref([
    { id: 't1', date: '2023-10-26', text: `我们的甜蜜之旅开始了！`, type: 'system', photo: null },
    // 之后会动态添加记录...
  ])

  // --- GETTERS (计算属性，方便我们在组件里直接用) ---
  const recentMagic = computed(() => timeline.value.slice(0, 3)) // 获取最新的3条动态

  // --- ACTIONS (改变数据的唯一方式，我们的核心逻辑) ---

  // 模拟发送通知给“你”
  function notifyDeveloper(message) {
    console.log(`--- NOTIFICATION TO ${userName.value} ---`)
    console.log(message)
    // 在真实世界里，这里可以换成邮件、微信推送等
    alert(`[开发者提示]\n${message}`)
  }

  // 完成任务
  function completeQuest(questId) {
    const quest = tasks.value.find((q) => q.id === questId)
    if (quest) {
      totalPoints.value += quest.points
      const log = {
        id: `t${Date.now()}`,
        date: new Date().toLocaleDateString(),
        text: `${partnerName.value} 完成了 "${quest.name}" 任务，为我们的爱情+${quest.points}能量！`,
        type: 'quest',
        photo: null,
      }
      timeline.value.unshift(log) // unshift 把新纪录加到最前面
      notifyDeveloper(`${partnerName.value} 完成了任务: ${quest.name}。快去表扬她！`)
    }
  }

  // 兑换奖励
  function redeemReward(rewardId) {
    const reward = rewards.value.find((r) => r.id === rewardId)
    if (reward && totalPoints.value >= reward.cost) {
      totalPoints.value -= reward.cost
      const log = {
        id: `t${Date.now()}`,
        date: new Date().toLocaleDateString(),
        text: `${partnerName.value} 兑换了 "${reward.name}"！这是我们最棒的回忆！`,
        type: 'reward',
        photo: null,
      }
      timeline.value.unshift(log)
      notifyDeveloper(`${partnerName.value} 兑换了奖励: ${reward.name}。请尽快为她安排！👑`)
      return true // 表示兑换成功
    }
    return false // 兑换失败
  }

  // 上传照片到时光机
  function addPhotoToTimeline(timelineId, photoUrl) {
    const event = timeline.value.find((t) => t.id === timelineId)
    if (event) {
      event.photo = photoUrl
    }
  }

  // 每日情话
  const loveNotes = [
    '遇到你，是我生命中最美的意外。❤️',
    '今天也超级爱你哦！比昨天多一点，比明天少一点。',
    '我的世界，因为你而闪亮。✨',
    '想把所有温柔都给你，你就是我的宝藏。',
  ]
  const dailyLoveNote = computed(() => {
    const dayOfYear = Math.floor(
      (new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24),
    )
    return loveNotes[dayOfYear % loveNotes.length]
  })

  // 把所有需要暴露给组件的数据和方法都 return 出去
  return {
    totalPoints,
    userName,
    partnerName,
    tasks,
    rewards,
    timeline,
    recentMagic,
    completeQuest,
    redeemReward,
    addPhotoToTimeline,
    dailyLoveNote,
  }
})
