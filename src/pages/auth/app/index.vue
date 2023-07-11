<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" />
		<button class="wx-login-button" type="default">微信用户一键登录</button>
		<text class="other-login-text">其他登录方式</text>
	</view>
</template>

<script setup lang="ts">

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
	}

	.other-login-text {
		 position:absolute;
		 bottom: 200rpx;
	}
</style>