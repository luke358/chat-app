<template>
	<div @longpress="long">
		<!-- 时间显示 -->
		<view v-if="showTime" class="flex align-center justify-center pb-4 pt-2">
			<text class="font-sm text-light-muted">{{showTime}}</text>
		</view>
		<!-- 撤回消息 -->
		<view v-if="item.isremove" ref="isremove" class="flex align-center justify-center pb-4 pt-1">
			<text class="font-sm text-light-muted">{{isself ? '你撤回了一条信息' : '对方撤回了一条信息'}}</text>
		</view>
		<!-- 系统消息 -->
		<view v-if="item.type === 'system'" class="flex align-center justify-center pb-4 pt-1 ">
			<text class="font-sm text-light-muted">{{item.data}}</text>
		</view>
		<!-- 气泡内容 -->
		<view v-if="item.type !== 'system' && !item.isremove" class="flex align-start  position-relative mb-3 mx-3" :class="!isself ? 'justify-start' : 'justify-end'">
			<!-- 好友 -->
			<template v-if="!isself">
				<free-avater @click="openUser" size="70" :src="item.from_avatar"></free-avater>
				<text v-if="hasLabelClass" class="iconfont text-white font-md position-absolute chat-left-icon" :style="shownickname ? 'top:45rpx;' : 'top:20rpx'">&#xe609;</text>
			</template>
			
			<view class="flex flex-column">
				<!-- 昵称开始 -->
				<div v-if="shownickname" :class="nicknameClass" class="px-2 flex" style="max-width:500rpx;background-color: rgba(0,0,0,0);" :style="labelStyle">
					<text class="font-sm text-muted">{{item.from_name}}</text>
				</div>
				<!-- 昵称结束 -->
				<div :class="labelClass" class="rounded p-2 " style="max-width:500rpx" :style="labelStyle">
					<!-- 发送文字 -->
					<text v-if="item.type==='text'" class="font-md">{{item.data}}</text>
					
					<!-- 表情包 图片 -->
					<free-image v-else-if="item.type === 'emoticon' || item.type=== 'image'" :src="item.data" @click="preview(item.data)" imageClass="rounded" :maxWidth="450" :maxHeight="350"></free-image>
					
					<!-- 音频 -->
					<view @click="openAudio" v-else-if="item.type === 'audio'" class="flex align-center">
						<image v-if="isself" :src="!audioPlaying ? '/static/audio/audio3.png': '/static/audio/play.gif'" style="width: 50rpx;height: 50rpx;" class="mx-1"></image>
						<text  class="font">{{item.options.time+'"'}}</text>
						<image v-if="!isself" :src="!audioPlaying ? '/static/audio/audio3.png': '/static/audio/play.gif'" style="width: 50rpx;height: 50rpx;" class="mx-1"></image>
					</view>
					
					<!-- 视频 -->
					<view v-else-if="item.type === 'video'" class="position-relative rounded" @click="openVideo">
						<free-image :src="item.options.poster" :maxWidth="450" :maxHeight="350" @load="loadPoster"></free-image>
						<text class="iconfont text-white position-absolute" style="font-size: 80rpx;width: 80rpx;height: 80rpx;" :style="posterIconStyle">&#xe737;</text>
					</view>
					
					<!-- 名片 -->
					<view v-else-if="item.type === 'card'" class="bg-white" style="width: 400rpx;" hover-class="bg-light">
						<view class="p-3 flex align-center border-bottom border-light-secondary">
							<free-avater clickType="navigate" size="70" :src="item.options.avatar"></free-avater>
							<text class="font ml-2">{{item.data}}</text>
						</view>
						<view class="flex align-center p-2">
							<text class="font-small text-muted">个人名片</text>
						</view>
					</view>
					
				</div> 
				
			</view>
			<!-- 本人 -->
			<template v-if="isself">
				<text v-if="hasLabelClass" class="iconfont text-chat-item font-md position-absolute chat-right-icon" :style="shownickname ? 'top:45rpx;' : 'top:20rpx'">&#xe640;</text>
				<free-avater @click="openUser" size="70" :src="item.from_avatar"></free-avater>
			</template>
		</view>
		
		<view v-if="item.sendStatus && item.sendStatus !== 'success'" class="flex align-center justify-end px-4">
			<text class="font-sm " :class="item.sendStatus === 'fail' ? 'text-danger' : 'text-muted'">{{item.sendStatus === 'fail' ? '发送失败' : '发送中...'}}</text>
		</view>
	</div>
</template>

<script>
	import freeAvater from '@/components/free-ui/free-avater.vue'
	import freeImage from '@/components/free-ui/free-image.vue'
	import $T from '@/common/free-lib/time.js'
	import { mapState,mapActions } from 'vuex'
	// #ifdef APP-PLUS-NVUE
	const animation = weex.requireModule('animation')
	// #endif
	export default {
		components: {
			freeAvater,freeImage
		},
		data(){
			return {
				innerAudioContext:null,
				audioPlaying:false,
				//默认封面宽高
				poster:{
					w:100,
					h:100
				}
			}
		},
		props:{
			item:Object,
			index:Number,
			// 上一条消息时间戳
			pretime:[Number,String],
			shownickname:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			...mapState({
				user: state => state.user.user
			}),
			nicknameClass(){
				let c = this.isself ? 'justify-end' : ''
				return c + ' ' + this.labelClass
			},
			// 发送者是否是本人
			isself(){
				//获取本人id 
				let id = this.user.id ? this.user.id : 0
				return this.item.from_id === id
			},
			//显示时间
			showTime(){
				return $T.getChatTime(this.item.create_time,this.pretime)
			},
			//是否需要气泡演示
			hasLabelClass(){
				return this.item.type === 'text' || this.item.type === 'audio'
			},
			//气泡样式
			labelClass(){
				let label = this.hasLabelClass ? 'bg-chat-item mr-3' : 'mr-3'
				return this.isself ? label : 'bg-white ml-3'
			},
			labelStyle(){
				if(this.item.type === 'audio'){
					let time = this.item.options.time
					let width = parseInt(time) / (60/500)
					width = width < 150 ? 150 : width
					return `width:${width}rpx;`
				}
			},
			//短视频封面图标为位置
			posterIconStyle(){
				let w = this.poster.w/2 - uni.upx2px(80)/2
				let h = this.poster.h/2 - uni.upx2px(80)/2
				return `left:${w}px;top:${h}px`
			}
		},
		mounted(){
			//注册全局事件
			if(this.item.type === 'audio'){
				this.audioOn(this.onPlayAudio)
			}
			//监听是否撤回消息
			// #ifdef APP-PLUS-NVUE
			this.$watch('item.isremove',(newVal,oldVal)=>{
				if(newVal){
					this.$nextTick(()=>{
						animation.transition(this.$refs.isremove, {
						    styles: {
								opacity: 1
						    },
						    duration: 100, //ms
						    timingFunction: 'ease',
						    },  () =>{
						        console.log("动画 结束")
						    })
					})
				}
			})
			// #endif
		},
		//组件销毁
		destroyed() {
			if(this.item.type === 'audio'){
				this.audioOff(this.onPlayAudio)
			}
			//销毁音频
			if(this.innerAudioContext){
				this.innerAudioContext.destroy()
				this.innerAudioContext = null
			}
		},
		methods:{
			...mapActions(['audioOn','audioEmit','audioOff']),
			openUser(id){
				uni.navigateTo({
					url: '/pages/mail/user-base/user-base?user_id='+this.item.from_id,
				});
			}, 
			//加载封面
			loadPoster(e){
				this.poster.w = e.w
				this.poster.h = e.h
			},
			//监听播放音频全局事件
			onPlayAudio(index){
				if(this.innerAudioContext){
					if(this.index !== index){
						this.innerAudioContext.stop()
					}
				}
			},
			//播放音频
			openAudio(){
				if(!this.innerAudioContext){
					this.innerAudioContext = uni.createInnerAudioContext();
					this.innerAudioContext.autoplay = true;
					this.innerAudioContext.src = this.item.data;
					this.innerAudioContext.onPlay(); 
					
					//监听播放
					this.innerAudioContext.onPlay(()=>{
						this.audioPlaying = true
					})
					//监听暂停
					this.innerAudioContext.onPause(()=>{
						this.audioPlaying = false
					})
					//监听停止
					this.innerAudioContext.onStop(()=>{
						this.audioPlaying = false
					})
					//监听错误
					this.innerAudioContext.onError(()=>{
						this.audioPlaying = false
					})
					
					//通知停止其他音频
					this.audioEmit(this.index)
				} else {  //存在音频的话
					if(this.innerAudioContext.paused){
						this.innerAudioContext.play()
						//通知停止其他音频
						this.audioEmit(this.index)
					} else {
						this.innerAudioContext.pause()
					}
				}
			},
			//预览图片
			preview(url){
				this.$emit('preview',url)
			},
			long(e){
				let x = 0
				let y = 0
				// #ifdef APP-PLUS-NVUE
				if(Array.isArray(e.changedTouches) && e.changedTouches.length > 0){
					x = e.changedTouches[0].screenX
					y = e.changedTouches[0].screenY
				}
				// #endif
				// #ifdef H5
				x = e.changedTouches[0].pageX
				y = e.changedTouches[0].pageY
				// #endif
				// #ifdef MP
				x = e.detail.x
				y = e.detail.y
				// #endif
							
				this.$emit('long',{x,y,index:this.index})
			},
			//打开视频
			openVideo(){
				uni.navigateTo({
					url:'/pages/chat/video/video?url='+this.item.data,
				})
			}
		}
	}
</script>

<style scoped>
	.chat-left-icon{
		left: 80rpx;
	}
	.chat-right-icon{
		right: 80rpx;
	}
	.chat-animate{
		/* #ifndef APP-PLUS-NVUE */
		opacity: 0;
		/* #endif */
	}
</style>
