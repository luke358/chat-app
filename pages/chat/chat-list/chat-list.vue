<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title="选择" showBack :showRight="true">
			<free-main-button slot="right" :name="muliSelect ? `发送(${selectCount})` : '多选'" @click="handleNavBarBtn"></free-main-button>
		</free-nav-bar>
		<!-- 搜索框 -->
		<view class="p-3 bg-light position-fixed  left-0 right-0" :style="'top:'+top+'px'" style="z-index: 100;">
			<input type="text" v-model="keyWorld" placeholder="搜索" class="bg-white rounded" placeholder-class="text-center" style="height: 80rpx;" />
		</view>
		<view style="height: 140rpx;"></view>
		
		 <free-list-item  v-for="(item,index) in allList" :key="index"
		  :title="item.name" :cover="item.avatar || '/static/logo.png'" :showRight="muliSelect" :showRightIcon="false" @click="selectItem(item)">
		 	<view  class="rounded-circle flex align-center justify-center border" slot="right" style="width: 40rpx;height: 40rpx;">
		 		<view v-if="item.checked" class="main-bg-color rounded-circle" style="width: 30rpx;height: 30rpx;">
		 			
		 		</view>
		 	</view>
		  </free-list-item>
		  
		  <view v-if="keyWorld != '' && searchList == 0" class="flex align-center justify-center" style="height: 100rpx;">
		  	<text class="font text-light-muted">暂无搜索结果</text>
		  </view>
		  
		  
		  <free-confirm title="发送给:" ref="confirm">
			  <scroll-view v-if="selectCount > 0" scroll-x="true" :show-scrollbar="false">
				<view class="flex">
					<view class="mr-1" v-for="(item,index) in selectList" :key="index ">
						<freeAvater size="60" :src="item.avatar"></freeAvater>
					</view>
				</view>
			  </scroll-view>
			  <view class="flex" v-else>
			  	<freeAvater size="60" :src="sendItem.avatar"></freeAvater>
				<text class="font text-muted ml-2">{{sendItem.name}}</text>
			  </view>
			  <view class="my-3 bg-light rounded p-2">
			  	<text class="font text-light-muted">{{message}}</text>
			  </view>
			  <input type="text" class="border-bottom font-md" style="height: 60rpx;" v-model="content" placeholder="给朋友留言" />
		  </free-confirm>
	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	import freeListItem from '@/components/free-ui/free-list-item.vue'
	import freeConfirm from '@/components/free-ui/free-confirm.vue'
	import freeAvater from '@/components/free-ui/free-avater.vue'
	import { mapState } from 'vuex'
	export default {
		components:{
			freeNavBar,
			freeMainButton,
			freeListItem,
			freeConfirm,freeAvater
		}, 
		data() {
			return {
				keyWorld:"",
				muliSelect:false,
				top:0,
				list:[],
				detail:{},
				sendItem:{},
				content:''
			}
		},
		onLoad(e) {
			let res = uni.getSystemInfoSync()
			this.top = res.statusBarHeight + uni.upx2px(90)
			this.list = this.chatList.map(item => {
				console.log(item)
				return {
					...item,
					checked:false
				}
			})
			
			// 接收参数
			if(e.params){
				this.detail = JSON.parse(decodeURIComponent(e.params))
				// console.log(this.detail)
			}
		},
		computed:{
			...mapState({
				chatList: state => state.user.chatList,
				chat: state => state.user.chat
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
					return item.name.indexOf(this.keyWorld) !== -1
				})
			},
			//选中列表
			selectList(){
				return this.list.filter(item => item.checked)
			},
			//选中的数量
			selectCount(){
				return this.selectList.length
			},
			message(){
				let obj = {
					image: "[图片]",
					video:'[视频]',
					audio:'[语音]',
					card:'[名片]',
					emoticon:'[表情]'
				}
				return this.detail.type === 'text' ? this.detail.data : obj[this.detail.type]
			}
		},
		methods: {
			//点击导航栏按钮事件
			handleNavBarBtn(){
				//切换成多选状态
				if(!this.muliSelect){
					return this.muliSelect = true
				}
				// 群发
				if(this.selectCount === 0){
					return uni.showToast({
						title:'请先选择',
						icon:'none'
					})
				}
				this.$refs.confirm.show((close)=> {
					this.selectList.forEach(item => {
						this.send(item)
					})
					close()
					uni.reLaunch({
						url:'/pages/tabbar/index/index'
					})
					console.log("确定")
				})
			},
			//选中或取消选中
			selectItem(item){
				if(this.muliSelect){
					//限制选中数量
					//选中操作
					if(!item.checked && this.selectCount === 9){
							return uni.showToast({
								title:"最多选中9个",
								icon:'none'
							}) 
					}
					//取消选中
					return item.checked = !item.checked
				} 
				console.log(item)
				this.sendItem = item
				// 发送
				this.$refs.confirm.show((close)=> {
					this.send(item)
					close()
					uni.reLaunch({
						url:'/pages/tabbar/index/index'
					})
					console.log("确定")
					
				})
			},
			send(item){
				console.log(this.detail)
				let message = this.chat.formatSendData({
					to_id:item.id,
					to_name:item.name,
					to_avatar:item.avatar,
					data:this.detail.data,
					chat_type:item.chat_type,
					type:this.detail.type,
					options:this.detail.options
				})
				this.chat.send(message)
			},
			toMul(){
				uni.navigateTo({
					url:'/pages/mail/mail/mail'
				})
			}
		}
	}
</script>

<style>

</style>
