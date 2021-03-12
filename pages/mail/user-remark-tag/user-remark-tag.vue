<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title="设置备注和标签" showBack :showRight="true" bgColor="bg-white">
			<!-- <free-icon-button slot="right" :icon="'\ue6fd'" @click="openAction"></free-icon-button> -->
			<free-main-button slot="right" name="完成" @click="submit"></free-main-button>
		</free-nav-bar>
		
		<view class="flex flex-column">
			<text class="font text-secondary px-3 py-2">备注名</text>
			<input type="text" class="font-md border bg-white px-3" placeholder="请填写备注名" style="height: 100rpx;" v-model="nickname" />
		</view>
		
		<view class="flex flex-column">
			<text class="font text-secondary px-3 py-2">标签</text>
			<view class="border bg-white px-3 flex align-center flex-wrap pt-3 pb-2 " @click="openTagSet">
				<view class="border border-main main-text-color rounded-circle px-2 py-1 mr-1 mb-1" v-for="(item,index) in tagList" :key="index">
					<text class="font main-text-color">{{item}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	import auth from '@/common/mixin/auth.js'
	import $H from '@/common/free-lib/request.js'
	export default {
		mixins:[auth],
		components:{
			freeNavBar,
			freeMainButton
		},
		data() {
			return {
				id:0,
				tagList:[],
				nickname:""
			}
		},
		onLoad(e) {
			if(!e.params){
				return this.backToast()
			}
			let params = JSON.parse(e.params)
			
			this.id = params.user_id
			this.nickname = params.nickname
			this.tagList = params.tags === '' ? [] : params.tags.split(',')
			
			uni.$on('updateTag',e => {
				this.tagList = e
			})
		},
		destroyed() {
			uni.$off('updateTag')
		},
		methods: {
			openTagSet(){
				uni.navigateTo({
					url: '../user-tag-set/user-tag-set?detail='+JSON.stringify(this.tagList),
				});
			},
			submit(){
				// uni.$emit('saveRemakTag',{
				// 	nickname:this.nickname,
				// 	tagList:this.tagList
				// })
				// uni.navigateBack({
				// 	delta: 1
				// });
				$H.post('/friend/setremarktag/'+this.id,{
					nickname:this.nickname,
					tags:this.tagList.join(',')
				}).then(res => {
					uni.showToast({
						title: '修改成功',
						icon:'none'
					});
					uni.navigateBack({
						delta: 1
					});
				})
			}
		}
	}
</script>

<style>

</style>
