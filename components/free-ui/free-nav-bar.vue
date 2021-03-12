<template>
	<!-- 导航栏 -->
	<view >
		<view  :class="getClass">
			<!-- 状态栏 -->
			<view :style="'height:'+ statusBarHeight+'px'"></view>
			<!-- 导航栏 -->
			<view class="w-100 flex align-center justify-between" style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 返回按钮 -->
					<free-icon-button v-if="showBack" :icon="'\ue60d'" @click="back"></free-icon-button>
					<!-- 标题 -->
					<slot>
						<text v-if="title"  class="font-md ml-3">{{getTitle}}</text>
					</slot>
 				</view>
				<!-- 右边 -->
				<view class="flex align-center" v-if="showRight">
					<slot name="right">
						<free-icon-button :icon="'\ue6e3'" @click="search"></free-icon-button>
						<free-icon-button :icon="'\ue682'" @click="openExtend"></free-icon-button>
					</slot>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="fixed" :style="fixedStyle"></view>
		
		<!-- 扩展菜单 -->
		<free-popup ref="extend" :bodyWidth="320" :bodyHeight="525"
			bodyBgColor="bg-dark" transformOrigin="right top">
			<view class="flex flex-column" 
				style="width: 320rpx;height: 525rpx;">
				<view class="flex-1 flex align-center"
				 hover-class="bg-hover-dark" v-for="(item,index) in menus"
				  :key="index"
				  @click="clickEvent(item.event)">
					<text class="iconfont pl-3 pr-2 font-md text-white">{{item.icon}}</text>
					<text class="font-md  text-white">{{item.name}}</text>
				</view>
			</view>
		</free-popup>
		
	</view>
</template>

<script>
	import freeIconButton from '@/components/free-ui/free-icon-button.vue'
	import freePopup from '@/components/free-ui/free-popup.vue'
	export default {
		components:{
			freeIconButton,
			freePopup,
		},
		props:{ 
			backEvent:{
				type:Boolean,
				default:true
			},
			showBack:{
				type:Boolean,
				default:false
			},
			title:{
				type:[Boolean,String],
				default:false
			},
			fixed:{
				type:Boolean,
				default:true
			},
			noreadnum:{
				type:[Number,String],
				default:0
			},
			bgColor:{
				type:String,
				default:'bg-light'
			},
			showRight:{
				type:Boolean,
				default:true
			}
		},
	
		data(){
			return {
				statusBarHeight:0,
				navBarHeight:0,
				menus:[
					{
						name:"发起群聊",
						event:"",
						icon:"\ue633"
					},
					{
						name:"添加好友",
						event:"",
						icon:"\ue65d"
					},
					{
						name:"扫一扫",
						event:"",
						icon:"\ue614"
					},
					{
						name:"收付款",
						event:"",
						icon:"\ue66c"
					},
					{
						name:"帮助与反馈",
						event:"",
						icon:"\ue66c"
					}
				],
			}
		},
		mounted() {
			// #ifdef APP-PLUS-NVUE
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		computed:{
			fixedStyle(){
				return `height:${this.navBarHeight}px`
			},
			getTitle(){
				let noreadnum = this.noreadnum > 0 ? `(${this.noreadnum})`:""
				return `${this.title}${noreadnum}`
			},
			getClass(){
				let fixed = this.fixed?'fixed-top':''
				return `${fixed} ${this.bgColor}`
			}
		},
		methods:{
			openExtend(){
				this.$refs.extend.show(uni.upx2px(415),uni.upx2px(150))
			},
			//返回
			back(){
				if(this.backEvent){
					uni.navigateBack({
						delta: 1
					});
				}
				this.$emit('back')
			},
			search(){
				uni.navigateTo({
					url:"/pages/common/search/search"
				})
			}
		}
	}
</script>

<style>
</style>
