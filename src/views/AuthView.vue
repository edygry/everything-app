<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1 class="logo">Everything App</h1>
      <p class="tagline">One app. Own everything.</p>

      <div class="auth-form">
        <div class="input-group">
          <label for="phone">Phone Number</label>
          <input
            id="phone"
            v-model="phoneNumber"
            type="tel"
            placeholder="+1 (555) 000-0000"
            @keyup.enter="handleLogin"
          />
        </div>

        <button class="btn-primary" @click="handleLogin" :disabled="!phoneNumber">
          Get Started
        </button>

        <div class="divider">
          <span>or</span>
        </div>

        <button class="btn-secondary" @click="handleLogin">
          Continue with Email
        </button>
      </div>

      <p class="terms">
        By continuing, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useOwnershipStore } from '../stores/ownership'

const router = useRouter()
const ownership = useOwnershipStore()
const phoneNumber = ref('')

function handleLogin() {
  const userId = phoneNumber.value || `user_${Date.now()}`
  ownership.login(userId)
  router.push('/dashboard')
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
}

.auth-card {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.logo {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.tagline {
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  text-align: left;
}

.input-group label {
  display: block;
  color: #aaa;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.input-group input {
  width: 100%;
  padding: 14px 16px;
  background: #1a1a2e;
  border: 1px solid #333;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #667eea;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  width: 100%;
  padding: 14px;
  background: #1a1a2e;
  border: 1px solid #333;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: #2a2a3e;
}

.divider {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #555;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #333;
}

.terms {
  margin-top: 24px;
  font-size: 0.8rem;
  color: #666;
}
</style>
