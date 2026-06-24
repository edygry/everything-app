import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface OwnershipRecord {
  id: string
  userId: string
  tokens: number
  vestedTokens: number
  lastActivity: Date
  joinDate: Date
  recruits: number
  rank: string
}

export const useOwnershipStore = defineStore('ownership', () => {
  const user = ref<OwnershipRecord | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  function login(userId: string) {
    // Simulate loading user data
    user.value = {
      id: userId,
      userId,
      tokens: 100000, // Initial signup bonus
      vestedTokens: 0, // 0% vested in first 30 days
      lastActivity: new Date(),
      joinDate: new Date(),
      recruits: 0,
      rank: 'Recruit',
    }
    localStorage.setItem('everything-app-auth', 'true')
  }

  function logout() {
    user.value = null
    localStorage.removeItem('everything-app-auth')
  }

  function addRecruits(count: number) {
    if (user.value) {
      user.value.recruits += count
      user.value.tokens += count * 100000 // 100K per direct recruit
      updateRank()
    }
  }

  function updateRank() {
    if (!user.value) return
    const { recruits } = user.value
    if (recruits >= 100) user.value.rank = 'Tycoon'
    else if (recruits >= 50) user.value.rank = 'Magnate'
    else if (recruits >= 20) user.value.rank = 'Baron'
    else if (recruits >= 10) user.value.rank = 'Leader'
    else if (recruits >= 5) user.value.rank = 'Recruiter'
    else if (recruits >= 1) user.value.rank = 'Agent'
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    addRecruits,
    updateRank,
  }
})
