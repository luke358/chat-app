<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar :title="detail.name" showBack :noreadnum="totalNoreadnum" >
			<!-- <block slot="title">微信</block> -->
			<free-icon-button slot="right" :icon="'\ue6fd'" @click="toChatSet"></free-icon-button>
		</free-nav-bar>
		
		<!-- 聊天内容区域 -->
		<scroll-view scroll-y class="bg-light position-fixed left-0 right-0 px-3" style="bottom: 105rpx;box-sizing: border-box;" :style="chatBodyBottom" :show-scrollbar="false" :scroll-into-view="scrollIntoView" :scroll-with-animation="true">
			
			<!-- 聊天信息列表组件 -->
			<view v-for="(item,index) in list" :key="index" :id="'chatItem_'+index">
				<free-chat-item :item="item" :key="index" :index="index" ref="chatItem" :pretime="index > 0 ? list[index-1].create_time : 0" @long="long" @preview="previewImage" :shownickname="currentChatItem.shownickname"></free-chat-item>
			</view>
		</scroll-view>
		
		<!-- #ifdef APP-PLUS-NVUE -->
		<div class="position-fixed top-0 right-0 left-0"
		  :style="'bottom:'+maskBottom+'px'"
		 @tap="tapPage" v-if="mode === 'action' || mode === 'emoticon'"> </div>
		<!-- #endif -->
		
		<!-- 底部输入框 -->
		<view class="position-fixed left-0 right-0 border-top flex align-center"
		style="background-color: #f7f7f6; height: 105rpx;" :style="'bottom:'+KeyboardHeight+'px'">
		
			<free-icon-button @click="changeVoiceOrText" :icon="(mode === 'audio') ? '\ue607' : '\ue606'"></free-icon-button>
			
			<view class="flex-1" >
				
				<view @touchstart="voiceTouchStart" @touchend="voiceTouchEnd" @touchcancel="voiceTouchCancel" @touchmove="voiceTouchMove" v-if="mode === 'audio'" class="rounded  flex align-center justify-center" style="height: 80rpx;" :class="isRecording ? 'bg-hover-light':'bg-white'">
					<text class="font">{{isRecording? '松开 结束' : '按住 说话'}}</text>
				</view>
				
				<textarea v-else  fixed class="bg-white rounded p-2 font-md" style="height: 50rpx;max-width: 450rpx;" :focus="false" :adjust-position="false" v-model="text" @click="mode = 'text'" :value="mode"/>
			</view>
			<!-- 表情 -->
			<free-icon-button :icon="'\ue605'" @click="openActionOrEmoticon('emoticon')"></free-icon-button>
			<!-- 扩展菜单 -->
			<template v-if="text.trim().length === 0">
				<free-icon-button v-show="text.length==0" :icon="'\ue603'" @click="openActionOrEmoticon('action')"></free-icon-button>
			</template>
			<!-- 发送按钮 -->
			<view v-else class="flex-shrink">
				<free-main-button @click="send('text')" name="发送"></free-main-button>
			</view>
		</view>
		
		<!-- 扩展菜单 -->
		<free-popup ref="action" bottom transformOrigin="center bottom"  :mask="false">
			<view :style="'height:' +242+'px'" class="border-top border-light-secondary bg-light" >
				<swiper :indicator-dots="emoticonOrActionList.length > 1" :style="'height:' +242+'px'">
					<swiper-item class="row" v-for="(item,index) in emoticonOrActionList" :key="index">
						<view v-for="(item2,index2) in item"  class="col-3 flex flex-column align-center justify-center" :key="index2" style="height: 255rpx;" @click="actionEvent(item2)">
							<image :src="item2.icon" style="width: 90rpx;height: 90rpx;" mode="widthFix"></image>
							<text class="font-sm text-muted mt-2">{{item2.name}}</text>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</free-popup>
		
		
		<!-- 弹出层 -->
		<free-popup ref="extend" :bodyWidth="240" :bodyHeight="getMenusHeight" :tabbarHeight="105">
			<view style="width: 240rpx;"
			 :style="getMenusStyle" class="flex flex-column">
				<view class="flex-1 flex align-center"
				 hover-class="bg-light" v-for="(item,index) in menusList"
				  :key="index"
				  @click="clickEvent(item.event)"
				>
					<text class="font-md pl-3">{{item.name}}</text>
				</view>
			</view>
		</free-popup>
		
		<!-- 录音提示 -->
		<view v-if="isRecording" class="position-fixed top-0 left-0 right-0 flex align-center justify-center" style="bottom: 105rpx;">
			<view style="width: 360rpx;height: 360rpx;background-color: rgba(0,0,0,0.5);" class="rounded flex align-center justify-center flex-column">
				<image src="/static/audio/play.gif" style="width: 150rpx;height: 150rpx;"></image>
				<text class="font text-white mt-3">{{unRecord ? '松开手指,取消发送':'手指上划,取消发送'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	// #ifdef APP-PLUS-NVUE
	const dom = weex.requireModule('dom')
	// #endif
	
	// const RECORD = uni.getRecorderManager()
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeIconButton from '@/components/free-ui/free-icon-button.vue'
	import freeChatItem from '@/components/free-ui/free-chat-item.vue'
	import freePopup from '@/components/free-ui/free-popup.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	
	import { mapState,mapMutations } from 'vuex'
	import auth from '@/common/mixin/auth.js'
	import $U from '@/common/free-lib/utils.js'
	import $H from '@/common/free-lib/request.js'
	export default {
		mixins:[auth],
		components: {
			freeNavBar,
			freeIconButton,
			freeChatItem,
			freePopup,freeMainButton
		},
		data() {
			return {
				scrollIntoView:'',
				//模式 text 输入文字 ，emoticon 表情 action 操作 audio 音频
				mode:'text',
				emoticonList:[
					[
						{
							name:"test1",
							icon:"/static/emotion/1.gif",
							event:""
						},
						{
							name:"test2",
							icon:"/static/emotion/2.gif",
							event:""
						},
						{
							name:"test3",
							icon:"/static/emotion/3.gif",
							event:""
						},
						{
							name:"test4",
							icon:"/static/emotion/4.gif",
							event:""
						},
						{
							name:"test5",
							icon:"/static/emotion/5.gif",
							event:""
						},
						{
							name:"test6",
							icon:"/static/emotion/6.gif",
							event:""
						},
						{
							name:"test7",
							icon:"/static/emotion/7.gif",
							event:""
						},
						{
							name:"test8",
							icon:"/static/emotion/8.gif",
							event:""
						},
					]
				],
				//扩展菜单列表
				actionList:[
					[
						{
							name:"相册",
							icon:"/static/chat/xiangce.png",
							// icon:'/static/emotion/8.gif',
							event:"uploadImage"
						},
						{
							name:"拍摄",
							icon:"/static/chat/paishe.png",
							event:"uploadVideo"
						},
						{
							name:"语音通话",
							icon:"/static/chat/yuyintonghua.png",
							event:""
						},
						{
							name:"位置",
							icon:"/static/chat/weizhi.png",
							event:""
						},
						{
							name:"红包",
							icon:"/static/chat/hongbao.png",
							event:""
						},
						{
							name:"语音输入",
							icon:"/static/chat/maikefeng.png",
							event:""
						},
						{
							name:"收藏",
							icon:"/static/chat/shoucang.png",
							event:""
						},
						{
							name:"名片",
							icon:"/static/chat/mingpian.png",
							event:""
						},
					],
				],
				//键盘高度
				KeyboardHeight:0,
				//当前操作的气泡索引
				propIndex:-1,
				navBarHeight:0,
				list:[],
				
				menusList:[],
				//输入文字
				text:"",
				//扩展菜单高度
				getActionHeight:242,
				//音频录制状态
				isRecording:false,
				RecordingStart:0,
				//取消录音
				unRecord:false,
				//录音时长
				// RecordTime:0,
				// RECORDTIMER:null
				detail:{
					id:0,
					name:"",
					avatar:"",
					chat_type:"user"
				}
			}
		},
		computed:{
			...mapState({
				chatList: state => state.user.chatList,
				RECORD:state => state.audio.RECORD,
				RecordTime:state => state.audio.RecordTime,
				chat: state => state.user.chat,
				totalNoreadnum: state => state.user.totalNoreadnum,
				user: state => state.user.user
			}),
			// 当前会话信息
			currentChatItem(){
				let index = this.chatList.findIndex(item => item.id === this.detail.id && item.chat_type === this.detail.chat_type)
				if(index === -1)return {}
				return this.chatList[index]
			},
			//获取操作或者表情列表
			emoticonOrActionList(){
				if(this.mode === 'emoticon' || this.mode === 'action'){
					return this[this.mode+'List']
				}
				return []
			},
			//获取蒙版的位置
			maskBottom(){
				return this.KeyboardHeight + uni.upx2px(105)
			},
			//获取菜单高度
			getMenusHeight(){
				let H = 100
				return this.menusList.length * H
			},
			//获取菜单样式
			getMenusStyle(){
				return `height: ${this.getMenusHeight}rpx`
			},
			// 判断是否操作本人信息
			isdoSelf(){
				//获取本人id
				let id = 1
				let user_id = this.propIndex > -1 ? this.list[this.propIndex].user_id : 0
				return user_id === id
			},
			//聊天区域bottom
			chatBodyBottom(){
				return `bottom:${uni.upx2px(105) + this.KeyboardHeight}px;top:${this.navBarHeight}px`
			},
			//所有信息的图片地址
			imageList(){
				let arr = []
				this.list.forEach(item => {
					if(item.type === 'emoticon' || item.type === 'image')
					arr.push(item.data)
				})
				return arr
			}
		},
		mounted() {
			// console.log(this.RecordTime)
			var statusBarHeight = 0
			// #ifdef APP-PLUS-NVUE
			statusBarHeight = plus.navigator.getStatusbarHeight()
			// #endif
			this.navBarHeight = statusBarHeight + uni.upx2px(90)
			//监听键盘高度变化
			uni.onKeyboardHeightChange(res=>{
				
				if(this.mode !== 'action' && this.mode !== 'emoticon'){
					this.KeyboardHeight = res.height
				}
				if(this.KeyboardHeight){
					this.pageToBottom()
				}
			}) 
			
			this.regSendVioceEvent((url)=>{
				if(!this.unRecord){
					this.send('audio',url,{
						time:this.RecordTime
					})
				}
				
			})
			
			this.pageToBottom()
		},
		watch:{
			mode(newVal,oldVal){
				if(newVal !== 'action' && newVal !== 'emoticon'){
					this.$refs.action.hide()
				}
			}
		},
		onLoad(e) {
			if(!e.params){
				return this.backToast()
			}
			// 聊天用户数据
			this.detail = JSON.parse(decodeURIComponent(e.params))
			console.log(this.detail)
			//初始化
			this.__init()
			// 创建聊天对象
			this.chat.createChatObject(this.detail)
			// 获取历史记录
			this.list = this.chat.getChatDetail()
			// this.list = [{
			// 	id: 0, //唯—id，后端生成唯一id, 用户撤回指定消息
			// 	from_avatar: this.user.avatar, //·发送者头像
			// 	from_name: this.user.nickname || this.user.username, // 发送者昵称
			// 	from_id: this.user.id, // 发送者id
			// 	to_id:0, // 接收人/群id
			// 	to_name: '', // 接收人/群名称
			// 	to_avatar: '', // 接收人/群头像
			// 	chat_type: this.detail.chat_type, // 接收类型
			// 	type: 'card', // 消息类型
			// 	data: '昵称', // 消息内容
			// 	options:{
			// 		avatar:"",
			// 		id:1
			// 	}, // 其他参数
			// 	create_time: (new Date()).getTime(), // 创建时间
			// 	isremove: 0, //·是否撤回
			// 	sendStatus: 'success'				
			// }]
			// 监听接收聊天信息
			uni.$on('onMessage',this.onMessage)
			uni.$on('updateHistory',this.updateHistory)
		},
		destroyed() {
			// 销毁聊天对象
			this.chat.destroyChatObject()
			// 销毁接收消息
			uni.$off('onMessage',this.onMessage)
			uni.$off('updateHistory',this.updateHistory)
		},
		methods: {
			...mapMutations(['regSendVioceEvent']),
			onMessage(message) {
				console.log('[聊天页]',message)
				console.log(this.detail)
				if((message.from_id === this.detail.id && message.chat_type === 'user') || (message.chat_type==='group' && message.to_id === this.detail.id)){
					if(message.isremove !== 1){
						this.list.push(message)
						// 置于底部
						return this.pageToBottom()
					} else {
						let index = this.list.findIndex(item => item.id === message.id)
						if(index !== -1){
							this.list[index].isremove = 1
						}
					}
				}
			},
			updateHistory(isclear = true){
				if(isclear){
					this.list = []
				} else {
					// 获取历史记录
					this.list = this.chat.getChatDetail()
				}
			},
			__init(){
				let total = 14
				let page = Math.ceil(total / 8)
				var arr = []
				for (var i=0;i<page;i++) {
					let start = (i) * 8
					arr[i] = []
					for (var j =1;j<9;j++){
						let no = start+j
						if(no > total){
							break;
						}
						arr[i].push({
							name:"表情"+no,
							icon:"/static/emotion/"+no+".gif",
							event:'sendEmoticon'
						})
					}
				}
				this.emoticonList = arr
			},
			//打开表情包
			//打开扩展菜单
			openActionOrEmoticon(mode ='action'){
				this.mode = mode
				this.$refs.action.show()
				
				uni.hideKeyboard()
				this.KeyboardHeight= uni.upx2px(505)
				this.pageToBottom()

			},
			//发送
			send(type,data = '',options = {}){
				switch (type){
					case 'text':
						if(this.text.trim() === ''){
							return
						}
						data = this.text
						break;
				}
				// 组织数据格式
				let message = this.chat.formatSendData({
					type,
					data,
					options,
				})
				// 渲染到页面
				let index = this.list.length
				this.list.push(message)
				// 监听上传进度
				let onProgress = false
				if(message.type !== 'text' && message.type !== 'emoticon' && message.type !== 'card' && !message.data.startsWith('http')){
					onProgress = (progress) => {
						console.log('上传进度',progress)
					}
				}
				// 发送到服务端
				this.chat.send(message,onProgress).then(res => {
					console.log(res)
					this.list[index].id = res.id
					this.list[index].sendStatus = 'success'
				}).catch(err => {
					this.list[index].sendStatus = 'fail'
					console.log(err)
				})
				
				//发送文字成功后清空输入框
				if(type === 'text'){
					this.text = ''
				}
				//置于底部		
				this.$nextTick(() => {
					this.pageToBottom()
				})
			},
			//回到底部
			pageToBottom(){
				// #ifdef APP-PLUS-NVUE
				let chatItem = this.$refs.chatItem
				let lastIndex = chatItem.length - 1 > 0 ? chatItem.length -1 : 0
				if(chatItem[lastIndex]){
					var pageToBottomTimer = setTimeout(()=>{
					   dom.scrollToElement(chatItem[lastIndex],{offset:-10})
					   clearTimeout(pageToBottomTimer)
					},100)
				}
				// #endif
				// #ifndef APP-NVUE
				setTimeout(() => {
					let lastIndex = this.list.length -1
					this.scrollIntoView = 'chatItem_'+lastIndex
				},100)
				// #endif
			},
			//长按消息气泡
			long({
				x,
				y,index
			}) {
				//初始化 索引
				this.propIndex = index
				// 组装菜单
				let menus = [
					{
						name:"发送给朋友",
						event:"sendToChatItem"
					},
					{
						name:"收藏",
						event:"fava"
					},
					{
						name:"删除",
						event:"delete"
					},
				]
				let item = this.list[this.propIndex]
				let isSelf = this.user.id === item.from_id
				if(isSelf){
					menus.push({
						name:'撤回',
						event:'removeChatItem'
					})
				}
				// #ifndef H5
				if(item.type === 'text'){
					menus.unshift({
						name:"复制",
						event:"copy"
					})
				}
				// #endif
				this.menusList = menus
				//判断之前是否处于置顶
				this.$refs.extend.show(x, y)
			},	
			//操作菜单方法分发
			clickEvent(event){ 
				let item = this.list[this.propIndex]
				let isSelf = this.user.id === item.from_id
				switch (event){
					case 'removeChatItem':
						//拿到当前被操作的信息
						this.chat.recall(item).then(res => {
							item.isremove = 1
						})
						break;
					case 'sendToChatItem':
						uni.navigateTo({
							url: '/pages/chat/chat-list/chat-list?params='+encodeURIComponent(JSON.stringify(item)),
						});
						break;
					case 'copy':
						uni.setClipboardData({
							data:item.data,
							success: () => {
								uni.showToast({
									title: '复制成功',
									icon:'none'
								});
							}
						})
						break;
					case 'fava':
						uni.showModal({
							content: '是否加入收藏',
							success: (res) => {
								if (res.confirm) {
									$H.post('/fava/create',{
										type:item.type,
										data: item.data,
										options: JSON.stringify(item.options)
									}).then(res => {
										uni.showToast({
											title: '收藏成功',
											icon:'none'
										});
									})
								}
							}
						});
						break;
					case 'delete':
						uni.showModal({
							content: '是否删除该记录',
							success:  (res) => {
								if (!res.confirm) return;
								this.chat.deleteChatDetailItem(item,isSelf)
								// 删除最后一条消息
								if(this.list.length === (this.propIndex + 1)){
									this.chat.updateChatItem({
										id:this.detail.id,
										chat_type:this.detail.chat_type
									},v => {
										let o = this.list[this.propIndex-1]
										let data = ''
										if(o){
											data = this.chat.formatChatItemData(o,isSelf)
										}
										v.data = data
										return v
									})
								}
								
								this.list.splice(this.propIndex,1)
							}
						});
					default:
						break;
				}
				//关闭菜单
				this.$refs.extend.hide()
			},
			actionEvent(e){
				switch (e.event){
					case 'uploadImage':	//选择相册
						uni.chooseImage({
						    success:  (res)=> {
								//发送到服务器
								//渲染到页面
								res.tempFilePaths.forEach(item => {
									this.send('image',item)
								})
						    }
						});
						break;
					case'sendEmoticon': //发送表情包
						this.send('emoticon',e.icon)
						break;
					case 'uploadVideo':
						uni.chooseVideo({
							success:res=>{
								console.log(res)
								this.send('video',res.tempFilePath,{
									// poster:'/static/video/demo.jpg'
									poster:''
								})
							}
						})
					default:
						break;
				}
			},
			//点击页面
			tapPage(){
				uni.hideKeyboard()
				this.KeyboardHeight = 0
				this.mode = 'text'
			},
			//预览图片
			previewImage(url){
				console.log(this.imageList)
				uni.previewImage({
					current:url,
					urls:this.imageList
				})
			},
			//切换音频录制和文本输入
			changeVoiceOrText(){
				this.mode = this.mode !== 'audio' ? 'audio' : 'text'
				this.KeyboardHeight = 0
				uni.hideKeyboard()
			},
			//录音相关
			voiceTouchStart(e){
				this.isRecording = true
				this.RecordingStart = e.changedTouches[0].screenY
				this.unRecord = false
				//开始录音
				this.RECORD.start({
					format:"mp3"
				})
			},
			voiceTouchEnd(){
				this.isRecording = false
				
				//停止录音
				this.RECORD.stop()
			},
			//录音被打断
			voiceTouchCancel(){
				this.isRecording = false
				this.unRecord = true
				
				//停止录音
				this.RECORD.stop()
			},
			voiceTouchMove(e){
				// this.isRecording = true
				let Y =Math.abs(e.changedTouches[0].screenY - this.RecordingStart)
				this.unRecord = (Y >= 60)
			},
			toChatSet(){
				uni.navigateTo({
					url: '/pages/chat/chat-set/chat-set?params='+JSON.stringify({
						id:this.detail.id,
						chat_type:this.detail.chat_type
					}),
				});
			}
			
		}
	}
</script>

<style>

</style>
