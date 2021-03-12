<template>
	<view class="page">
		<free-nav-bar :title="true" title="二维码名片" showBack :showRight="false"></free-nav-bar>
		
		<view class="p-5">
			<view class="bg-white rounded p-4">
				<view class="flex align-center mb-4">
					<free-avater :src="detail.avatar || '/static/logo.png'"></free-avater>
					<view class="pl-4 flex flex-column">
						<text class="font-md">{{detail.name}}</text>
						<text class="font text-light-muted">地区</text>
					</view>
				</view>
				
				<view class="flex flex-column align-center justify-center">
					<image :src="src" mode="" style="width: 550rpx;height: 550rpx;" class="bg-secondary mb-4"></image>
					<text class="font text-light-muted">扫一扫上边二维码图案,加我仿微信</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import freeAvater from '@/components/free-ui/free-avater.vue'
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	
	import { mapState } from 'vuex'
	import $C from '@/common/free-lib/config.js'
	export default {
		components:{
			freeAvater,
			freeNavBar
		},
		data() {
			return {
				detail:{
					id:0,
					name:"",
					avatar:''
				},
				src:''
			}
		},
		computed:{
			...mapState({
				user: state => state.user.user
			})
		},
		onLoad(e) {
			if(e.params){
				this.detail = JSON.parse(e.params)
				this.src = `${$C.codeUrl}/${e.type}_qrcode/${this.detail.id}?token=${this.user.token}`
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
