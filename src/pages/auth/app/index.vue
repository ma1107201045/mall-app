<template>
	<view class="content">
		<view>
			<image class="logo" src="/static/logo.png" />
		</view>
		<view v-if="data.isAccountLogin">
			<view class="uni-form-item uni-column">
				<input class="uni-input" focus placeholder="手机号" />
			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input" focus placeholder="验证码" />
			</view>
			<view>
				<button class="wx-login-button" type="primary" @click="test">登录</button>
			</view>
		</view>
		<view v-if="data.isTripartiteLogin">
			<button class="wx-login-button" type="default">微信用户一键登录</button>
		</view>
		<view>
			<text class="other-login-text">其他登录方式</text>
			<view>
				<view class="other-account-login-button" v-if="!data.isAccountLogin" @click="switch01(1)">账号登录
				</view>
				<view class="other-tripartite-login-button" v-if="!data.isTripartiteLogin" @click="switch01(2)">
					第三方登录</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import AppApi from '@/api/auth/app';
	import { reactive } from 'vue';
	let data = reactive({
		isAccountLogin: true,
		isTripartiteLogin: false
	})
	let appApi = AppApi.getInstance();
	let test = function () {
		appApi.login({});
	}
	let switch01 = function (type : number) {
		if (type === 1) {
			data.isAccountLogin = true;
			data.isTripartiteLogin = false;
		} else {
			data.isAccountLogin = false;
			data.isTripartiteLogin = true;
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #C0C4CC;
	}

	.logo {
		height: 100rpx;
		width: 100rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.wx-login-button {
		background-color: #FA436A;
		color: #C0C4CC;
		height: 90rpx;
		width: 660rpx;
		text-align: center;
	}

	.other-login-text {
		position: absolute;
		bottom: 150rpx;
		margin-left: -100rpx;
	}

	.other-account-login-button {
		position: absolute;
		bottom: 100rpx;
		margin-left: -100rpx;
	}

	.other-tripartite-login-button {
		position: absolute;
		bottom: 100rpx;
		margin-left: -100rpx;
	}
</style>