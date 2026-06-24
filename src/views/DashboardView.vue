<template>
  <div class="dashboard">
    <header class="header">
      <h1>Dashboard</h1>
      <button class="btn-logout" @click="handleLogout">Logout</button>
    </header>

    <div class="balance-card">
      <p class="balance-label">Your Ownership</p>
      <p class="balance-amount">{{ formatTokens(ownership.user?.tokens || 0) }}</p>
      <p class="balance-vested">Vested: {{ formatTokens(ownership.user?.vestedTokens || 0) }}</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <p class="stat-label">Rank</p>
        <p class="stat-value">{{ ownership.user?.rank }}</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">Recruits</p>
        <p class="stat-value">{{ ownership.user?.recruits }}</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">Daily Decay</p>
        <p class="stat-value">-0.15%</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">Activity Bonus</p>
        <p class="stat-value">+0.08%</p>
      </div>
    </div>

    <div class="recruit-section">
      <h2>Recruit Friends</h2>
      <p class="recruit-info">
        Earn 100,000 tokens per direct recruit. Break even at ~12-15 active recruits.
      </p>
      <button class="btn-recruit" @click="simulateRecruit">
        + Simulate Recruit
      </button>
    </div>

    <div class="tokenomics-card">
      <h2>Tokenomics</h2>
      <div class="tokenomics-grid">
        <div class="tokenomics-item">
          <span class="tokenomics-label">Total Supply</span>
          <span class="tokenomics-value">1T tokens</span>
        </div>
        <div class="tokenomics-item">
          <span class="tokenomics-label">SPV Equity Pool</span>
          <span class="tokenomics-value">20%</span>
        </div>
        <div class="tokenomics-item">
          <span class="tokenomics-label">Revenue Share</span>
          <span class="tokenomics-value">20% quarterly</span>
        </div>
        <div class="tokenomics-item">
          <span class="tokenomics-label">Vesting</span>
          <span class="tokenomics-value">30-day cliff</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useOwnershipStore } from '../stores/ownership'

const router = useRouter()
const ownership = useOwnershipStore()

function formatTokens(tokens: number): string {
  return tokens.toLocaleString() + ' tokens'
}

function simulateRecruit() {
  ownership.addRecruits(1)
}

function handleLogout() {
  ownership.logout()
  router.push('/')
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding: 20px;
  background: #0a0a0a;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

.btn-logout {
  padding: 8px 16px;
  background: #1a1a2e;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
}

.balance-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  margin-bottom: 24px;
}

.balance-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
}

.balance-amount {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 4px;
}

.balance-vested {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.stat-card {
  background: #1a1a2e;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}

.stat-label {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 700;
}

.recruit-section {
  background: #1a1a2e;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.recruit-section h2 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.recruit-info {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.btn-recruit {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.tokenomics-card {
  background: #1a1a2e;
  border-radius: 12px;
  padding: 20px;
}

.tokenomics-card h2 {
  font-size: 1.3rem;
  margin-bottom: 16px;
}

.tokenomics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.tokenomics-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tokenomics-label {
  font-size: 0.8rem;
  color: #888;
}

.tokenomics-value {
  font-size: 1rem;
  font-weight: 600;
}
</style>
