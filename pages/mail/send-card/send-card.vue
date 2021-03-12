<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar title="选择" showBack :showRight="true">
			<free-main-button slot="right" :name="muliSelect ? `发送(${selectCount})` : '多选'" @click="handleNavBarBtn"></free-main-button>
		</free-nav-bar>
		<!-- 搜索框 -->
		<view class="p-3 bg-light position-fixed  left-0 right-0" :style="'top:'+top+'px'">
			<input type="text" v-model="keyWorld" placeholder="搜索" class="bg-white rounded" placeholder-class="text-center" style="height: 80rpx;" />
		</view>
		<view style="height: 140rpx;"></view>
		<!-- 联系人列表 -->
		<free-list-item title="更多联系人" :border="false" :showLeftIcon="false" @click="toMul"></free-list-item>
		<view class="bg-light px-2 py-1">
			<text class="font-sm text-muted">{{keyWorld ? '搜索结果':'最近联系人'}}</text>
		</view>
<!-- 		<free-list-item  v-for="(item,index) in list" :key="index"
		 :title="item.username" :cover="item.avatar" :showRight="muliSelect" :showRightIcon="false" @click="selectItem(item)">
			<view  class="rounded-circle flex align-center justify-center border" slot="right" style="width: 40rpx;height: 40rpx;">
				<view v-if="item.checked" class="main-bg-color rounded-circle" style="width: 30rpx;height: 30rpx;">
					
				</view>
			</view>
		 </free-list-item> -->
		 <free-list-item  v-for="(item,index) in allList" :key="index"
		  :title="item.username" :cover="item.avatar" :showRight="muliSelect" :showRightIcon="false" @click="selectItem(item)">
		 	<view  class="rounded-circle flex align-center justify-center border" slot="right" style="width: 40rpx;height: 40rpx;">
				<view v-if="muliSelect" slot="right" class="border rounded-circle flex align-center justify-center" style="width: 40rpx;height: 40rpx;">
					<view v-if="item.checked" class="main-bg-color rounded-circle" style="width: 30rpx;height: 30rpx;">
					</view>
				</view>
		 	</view>
		  </free-list-item>
		  
		  <view v-if="keyWorld != '' && searchList == 0" class="flex align-center justify-center" style="height: 100rpx;">
		  	<text class="font text-light-muted">暂无搜索结果</text>
		  </view>
		  
		  
		  <free-confirm title="发送给:" ref="confirm">
			  <scroll-view scroll-y="true" class="flex" :show-scrollbar="false">
			  	<view class="mr-1" v-for="i in 20" :key="i">
			  		<freeAvater size="60" src="/static/images/mail/contact_top-friend-notify.png"></freeAvater>
			  	</view>
			  </scroll-view>
			  <view class="my-3 bg-light rounded p-2">
			  	<text class="font text-light-muted">[个人名片] 昵称</text>
			  </view>
			  <input type="text" class="border-bottom font-md" style="height: 60rpx;" placeholder="给朋友留言" />
		  </free-confirm>
	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	import freeListItem from '@/components/free-ui/free-list-item.vue'
	import freeConfirm from '@/components/free-ui/free-confirm.vue'
	import freeAvater from '@/components/free-ui/free-avater.vue'
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
				list:[
					{
						username:"昵称1",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称2",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称3",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称4",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称5",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称6",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称7",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称8",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称9",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称10",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称11",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称12",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称13",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
					{
						username:"昵称14",
						avatar:"/static/images/mail/contact_top-friend-notify.png",
						checked:false
					},
				]
			}
		},
		onLoad() {
			let res = uni.getSystemInfoSync()
			this.top = res.statusBarHeight + uni.upx2px(90)
		},
		computed:{
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
					return item.username.indexOf(this.keyWorld) !== -1
				})
			},
			//选中列表
			selectList(){
				return this.list.filter(item => item.checked)
			},
			//选中的数量
			selectCount(){
				return this.selectList.length
			}
		},
		methods: {
			//点击导航栏按钮事件
			handleNavBarBtn(){
				//切换成多选状态
				if(!this.muliSelect){
					return this.muliSelect = true
				}
				console.log("发送")
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
				this.$refs.confirm.show((close)=> {
					close()
					console.log("确定")
				})
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
