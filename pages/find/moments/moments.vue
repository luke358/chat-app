<template>
	<view>
		<freeTransparentBar :scrollTop="scrollTop" @clickRight="clickRight"></freeTransparentBar>
		<view class="position-relative" style="height: 620rpx;">
			<image src="/static/beijing.png" mode="aspectFill" style="height: 590rpx;" class="bg-secondary w-100"></image>
			<image src="/static/logo.png" style="width: 120rpx;height: 120rpx;right: 30rpx;" class="bg-secondary rounded position-absolute bottom-0"></image>
			<text class="text-white font-md position-absolute" style="bottom: 45rpx;right: 180rpx;">summer</text>
		</view>
		
		<!-- 朋友圈列表样式 -->
		<free-moment-list @action="doAction" :item="item" :index="index" v-for="(item,index) in list" :key="index"></free-moment-list>
		
		<!-- 评论框 -->
		<!-- 操作菜单 -->
		<free-popup ref="action" bottom transformOrigin="center bottom">
			<view class="bg-light border-top flex align-center px-3" style="height: 105rpx;">
				<textarea fixed :focus="true" class="bg-white rounded p-2 font-md" style="height: 75rpx;width: 520rpx;" v-model="content" />
				<free-icon-button @click="changeFaceModal" :icon="'\ue605'"></free-icon-button>
				<free-main-button @click="send" name="发送" :disabled="content.length === 0"></free-main-button>
			</view>
			<scroll-view v-if="faceModal" scroll-y="true"  style="height: 350rpx;" class="bg-light flex flex-wrap">
				<view style="width: 107rpx;height: 107rpx;" class="flex align-center justify-center" hover-class="bg-white" v-for="(item,index) in faceList" :key="index" @click="addFace(item)">
					<text>{{item}}</text>
				</view>
			</scroll-view>
		</free-popup>
		
	</view>
</template>

<script>
	import freeTransparentBar from '@/components/free-ui/free-transparent-bar.vue'
	import freeMomentList from '@/components/free-ui/free-moment-list.vue'
	import freePopup from '@/components/free-ui/free-popup.vue'
	import freeIconButton from '@/components/free-ui/free-icon-button.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	import $T from '@/common/free-lib/time.js'
	export default {
		components:{
			freeTransparentBar ,
			freeMomentList,
			freePopup,
			freeIconButton,
			freeMainButton
		},
		data() {
			return {
				content:"",
				scrollTop:0,
				faceModal:false,
				faceList:['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','🙂','🤗','🤔','😐','😑','😏','😛','😜','😝','🤤'], 
				list:[
					{
						id:2,
						avatar:"/static/logo.png",
						username:"昵称",
						context:"靓仔，你这条说说质量很不错，我们可以合作合作，我们可以合作合作，我们可以合作合作",
						image:[{
							src:"/static/beijing.png",
						},{
							src:"/static/beijing.png"
							}
						],
						video:false,
						create_time:1567481668,
						supports:[],
						comments:[]
					},
					{
						id:2,
						avatar:"/static/logo.png",
						username:"昵称",
						context:"靓仔，你这条说说质量很不错，我们可以合作合作，我们可以合作合作，我们可以合作合作",
						image:[{
							src:"/static/beijing.png"
						}],
						video:false,
						create_time:1567481668,
						supports:[],
						comments:[]
					},
					{
						id:2,
						avatar:"/static/logo.png",
						username:"昵称",
						context:"靓仔，你这条说说质量很不错，我们可以合作合作，我们可以合作合作，我们可以合作合作",
						image:[],
						video:false,
						create_time:1567481668,
						supports:[
							{
								id:1,
								username:"昵称",
								avatar:"/static/logo.png"
							}
						],
						comments:[
								{
									id:1,
									username:"昵称",
									content:"评论内容"
								}
						]
					},
					{
						id:2,
						avatar:"/static/logo.png",
						username:"昵称",
						context:"靓仔，你这条说说质量很不错，我们可以合作合作，我们可以合作合作，我们可以合作合作",
						image:[],
						video:{
							poster:"/static/video/demo.jpg",
							src:"/static/video/demo.mp4"
						},
						create_time:1567481668,
						supports:[],
						comments:[]
					},
				],
				//评论的对象
				commentIndex:-1
			}
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop
		},
		methods: {
			//点击操作菜单
			doAction(e){
				uni.showActionSheet({
					itemList: ['点赞','评论'],
					success: res => {
						if(res.tapIndex===0){
							this.doSupport(e)
						}else{
							// this.doComment(e)
							this.content = ""
							this.faceModal = false
							this.commentIndex = e.index
							this.$refs.action.show()
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//点赞
			doSupport(e){
				e.item.supports.push({
						id:1,
						username:"昵称",
						avatar:"/static/logo.png"
				})
			},
			addFace(item){
				this.content +=item
			},
			//关闭或开启表情包
			changeFaceModal(){
				uni.hideKeyboard()
				setTimeout(()=>{
					this.faceModal = !this.faceModal
				},100)
			},
			//发送事件
			send(){
				this.list[this.commentIndex].comments.push({
					id:1,
					username:"昵称",
					content:this.content
				})
				this.$refs.action.hide()
			},
			//选择发表朋友圈类型
			clickRight(){
				let list = [{
					name:"图文",
					key:'image'
				},{
					name:"短视频",
					key:'video'
				},{
					name:"文字",
					key:'text'
				}]
				uni.showActionSheet({
					itemList:list.map(v=>v.name),
					success:res=>{
						uni.navigateTo({
							url: '/pages/find/add-moment/add-moment?type='+list[res.tapIndex].key,
						});
					}
				})
			}
		}
	}
</script>

<style>

</style>
