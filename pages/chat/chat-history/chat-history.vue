<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title="聊天记录" showBack :showRight="false">
		</free-nav-bar>
		<!-- 搜索框 -->
		<view class="p-3 bg-light position-fixed  left-0 right-0" :style="'top:'+top+'px'">
			<input type="text" v-model="keyWorld" placeholder="搜索" class="bg-white rounded" placeholder-class="text-center" style="height: 80rpx;" />
		</view>
		<view style="height: 140rpx;"></view>
		<view class="bg-light px-2 py-1">
			<text class="font-sm text-muted">{{keyWorld ? '搜索结果':'最近联系人'}}</text>
		</view>
		
		<!-- 聊天信息列表组件 -->
		<view v-for="(item,index) in allList" :key="index" :id="'chatItem_'+index">
			<free-chat-item :item="item" :key="index" :index="index" ref="chatItem" :pretime="index > 0 ? list[index-1].create_time : 0" :shownickname="true"></free-chat-item>
		</view>
		  
		  <view v-if="keyWorld != '' && searchList == 0" class="flex align-center justify-center" style="height: 100rpx;">
		  	<text class="font text-light-muted">暂无搜索结果</text>
		  </view>
	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	import freeListItem from '@/components/free-ui/free-list-item.vue'
	import freeAvater from '@/components/free-ui/free-avater.vue'
	import freeChatItem from '@/components/free-ui/free-chat-item.vue'
	import { mapState } from 'vuex';
	export default {
		components:{
			freeNavBar,
			freeMainButton,
			freeListItem,
			freeAvater,
			freeChatItem
		},
		data() {
			return {
				keyWorld:"",
				top:0,
				list:[]
			}
		},
		onLoad(e) {
			let res = uni.getSystemInfoSync()
			this.top = res.statusBarHeight + uni.upx2px(90)
			
			this.list = this.chat.getChatDetail()
			
			console.log(this.list);
			 
		},
		computed:{
			...mapState({
				user:state => state.user.user,
				chat:state => state.user.chat,
			}),
			//最终列表
			allList(){
				return  this.keyWorld === "" ? this.list : this.searchList	
			},
			//搜索结果
			searchList(){
				if(this.keyWorld === ""){
					return []
				}
				return this.list.filter(item => {
					return item.data.indexOf(this.keyWorld) !== -1
				})
			},
		},
		methods: {
		}
	}
</script>

<style>

</style>
