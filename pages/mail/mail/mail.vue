<template>
	<view>
		
		<!-- 导航栏 -->
		<free-nav-bar title="选择" showBack :showRight="true">
			<free-main-button :name="btnText" slot="right" @click="submit"></free-main-button>
			<!-- <block slot="title">微信</block> -->
		</free-nav-bar>
		
		<!-- 通讯录列表 -->
		<scroll-view  scroll-y="true" :style="'height:'+scrollHeight+ ';'" :scroll-into-view="scrollInto">
			 <view v-for="(item,index) in list" :key="index" :id="'item-'+item.title">
				<view v-if="item.list.length" class="py-2 px-3 border-bottom bg-light">
					 <text class="font-md text-dark">{{item.title}}</text>
				 </view>
				 <free-list-item v-for="(item2,index2) in item.list" :key="index2" showRight :showRightIcon="false" 
				  :title="item2.name" :cover="item2.avatar ? item2.avatar : '/static/images/mail/contact_top-friend-notify.png'" @click="selectItem(item2)">
					<view slot="right" style="width: 40rpx;height: 40rpx;" class="border rounded-circle flex align-center justify-center mr-4">
							<view v-if="item2.checked" style="width: 30rpx;height: 30rpx;" class="main-bg-color rounded-circle">
							</view>
					</view>
				  </free-list-item>
			 </view>
		</scroll-view>
		 
		 <!-- 侧边导航条 -->
		 <view class="position-fixed right-0 bottom-0 bg-light flex flex-column" :style="'top:'+this.top+';'" style="width: 50rpx;" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
		 	<view class="flex-1 flex align-center justify-center" v-for="(item,index) in list" :key="index">
		 		<text class="font-sm text-muted">{{item.title}}</text>
		 	</view>
		 </view>
		 <view class="position-fixed rounded-circle bg-light border flex align-center justify-center" style="width: 150rpx;height: 150rpx;left: 300rpx;" :style="'top:'+modalTop+'px'" v-if="current">
		 	<text class="font-lg">{{current}}</text>
		 </view>
	</view>
</template>

<script
>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeListItem from '@/components/free-ui/free-list-item.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	
	import auth from '@/common/mixin/auth.js'
	import $H from '@/common/free-lib/request.js'
	import { mapState } from 'vuex'
	export default {
		mixins:[auth],
		components:{
			freeNavBar,
			freeListItem,
			freeMainButton
		},
		data() {
			return { 
				current:"",
				scrollInto:'',
				top:0,
				scrollHeight:0,
				selectList:[],
				type:""
			}
		},
		onLoad(e) {
			if(e.type){
				this.type = e.type
			}
			let res = uni.getSystemInfoSync()
			// #ifdef APP-PLUS-NVUE
			this.top = res.statusBarHeight + uni.upx2px(90)
			// #endif
			// this.top = uni.upx2px(90)
			this.scrollHeight = res.windowHeight - this.top
			
			this.$store.dispatch('getMailList')
			// console.log(this.list)
		},
		computed:{
			...mapState({
				applyCount:state => state.user.apply.count,
				list: state => state.user.mailList
			}),
			selectCount(){
				return this.selectList.length
			},
			modalTop(){
				return (this.scrollHeight-uni.upx2px(150)) / 2
			},
			itemHeight(){
				let count = this.list.length
				if(count<1) return 0
				else return this.scrollHeight / count
			},
			btnText(){
				let text = '发送'
				if(this.type === 'createGroup') text = '创建群组' 
				return text+'('+this.selectCount+')'
			}
		},
		methods: {
			touchstart(e){
				this.changeScrollInto(e)
			},
			touchmove(e){
				this.changeScrollInto(e)
			},
			touchend(){
				this.current = ""
			},
			//联动
			changeScrollInto(e){
				let Y = e.touches[0].pageY
				let index = Math.floor(Y / this.itemHeight)
				let item = this.list[index]
				// console.log(item)
				if(item){
					this.scrollInto = 'item-'+item.title
					this.current = item.title
				}
			},
			selectItem(item){
				// item.checked = true
				// console.log(item.username)
				if(!item.checked && this.selectCount === 9){
					return uni.showToast({
						title: '最多选中9个',
						icon:'none'
					});
				}
				item.checked = !item.checked
				if(item.checked){ // 选中
					this.selectList.push(item)
				} else {
					let index = this.selectList.findIndex(v => v === item)
					if(index > -1){
						this.selectList.splice(index,1)
					}
				}
			},
			submit(){
				if(this.selectCount === 0 ) return uni.showToast({
					title: '请选择用户',icon:'none'
				});
				$H.post('/group/create',{
					ids:this.selectList.map(item => item.user_id)
				}).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>

</style>
