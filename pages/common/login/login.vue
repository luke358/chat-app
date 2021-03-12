<template>
	<view class="">
		<view v-if="!show" class="position-fixed top-0 left-0 right-0 bottom-0 bg-light flex align-center justify-center">
			<text class="text-muted font">正在加载...</text>
		</view>
		
		<view v-else>
			<view class="flex align-center justify-center font-lg" style="height: 350rpx;">
				<text style="font-size: 50rpx;">YOU-START</text>
			</view>
			<view class="px-3">
				<input type="text" value="" class="bg-light  px-3 mb-3 font" style="height: 100rpx;" placeholder="请输入用户名" v-model="form.username" />
				<input type="text" value="" class="bg-light px-3 mb-3 font" style="height: 100rpx;" placeholder="请输入密码" v-model="form.password" />
				<input v-if="type==='reg'" type="text" value="" class="bg-light px-3 mb-3 font" style="height: 100rpx;" placeholder="确认密码" v-model="form.repassword" />
			</view>
			<view class="p-3 flex align-center justify-center">
				<view class="main-bg-color rounded p-3 flex align-center justify-center flex-1" hover-class="main-bg-hover-color" @click="submit">
					<text class="text-white font-md">{{type==='login' ? '登陆' : '注册'}}</text>
				</view>
			</view>
			
			<view class="flex align-center justify-center">
				<text class="text-light-muted font p-2" @click="changeType">{{type==='login' ? '注册账号' : '马上登陆'}}</text>
				<text class="text-light-muted font">|</text>
				<text class="text-light-muted font p-2">找回密码</text>
			</view>
		</view>
	</view>
</template>

<script>
	import $H from '@/common/free-lib/request.js'
	import $U from '@/common/free-lib/utils.js'
	export default {
		data() {
			return {
				type:'login',
				show:false,
				form:{
					username:"",
					password:"",
					repassword:""
				}
			}
		},
		created() {
			let token = $U.getStorage('token')
			if(!token){
				return this.show = true
			}
			
			uni.switchTab({
				url:'/pages/tabbar/index/index'
			})
			
		},
		methods: {
			changeType(){
				this.type = this.type ==='login' ? 'reg' : 'login'
				Object.keys(this.form).forEach(key => (this.form[key] = ''));
			},
			submit(){
				$H.post('/'+this.type,this.form,{token:false}).then(res => {
					// console.log(res)
					// 登陆
					if(this.type === 'login'){
						this.$store.dispatch('login',res)
						uni.showToast({
							title:'登陆成功'
						});
						return uni.switchTab({
							url:'/pages/tabbar/index/index'
						})
					}
					//注册
					this.changeType()
					uni.showToast({
						title:'注册成功'
					})
				})
			}
		}
	}
</script>

<style>
.page-loading {
	background-color: #C8C7CC;
	/* #ifndef APP-PLUS-NVUE */
	min-height: 100%;
	height: auto;
	/* #endif */
	/* #ifdef APP-PLUS-NVUE */
	flex: 1;
	/* #endif */
}
</style>
