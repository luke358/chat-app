<template>
	<!-- <view style="background-color: #e3e3e3;"> -->
	<scroll-view class="page" >
		<!-- 导航栏 -->
		<free-nav-bar :title="true" title="聊天信息" showBack :showRight="false">
		</free-nav-bar>
		
		<view class="flex flex-wrap py-3 bg-white">
			<view v-if="detail.chat_type === 'user'" class="flex flex-column justify-center align-center mb-2" style="width: 150rpx;">
				<free-avater :src="detail.avatar" size="110"></free-avater>
				<text class="font text-muted mt-1">{{detail.name}}</text>
			</view>
			<view v-else class="flex flex-column justify-center align-center mb-2" style="width: 150rpx;" v-for="(item,index) in list" :key="index">
				<free-avater :src="item.avatar" size="110"></free-avater>
				<text class="font text-muted mt-1">{{item.name}}</text>
			</view>
			<view class="flex flex-column justify-start align-center mb-2" style="width: 150rpx;" @click="openMail">
				<view class="border flex align-center justify-center" style="width: 120rpx;height: 120rpx;" hover-class="bg-light">
					<text class="text-light-muted" style="font-size: 100rpx;">+</text>
				</view>
			</view>
		</view>
		<view v-if="detail.chat_type==='group'">
			<free-divider></free-divider>
			<free-list-item title="群聊名称" showRight :showLeftIcon="false" @click="updateName">
				<text slot="right" class="font text-muted">{{detail.name}}</text>
			</free-list-item>
			<free-list-item title="群二维码" showRight :showLeftIcon="false" @click="openCode">
				<text slot="right" class="iconfont font-md text-light-muted">&#xe647;</text>
			</free-list-item>
			<free-list-item title="群公告" showRight :showLeftIcon="false" @click="openGroupRemark"></free-list-item>
		</view>
		<free-divider></free-divider>
		<free-list-item title="查找聊天记录" @click="openHistory" showRight :showLeftIcon="false"></free-list-item>
		<free-divider></free-divider>
		<free-list-item title="消息免打扰" showRight :showLeftIcon="false" :showRightIcon="false">
			<switch slot="right" :checked="detail.nowarn" color="#08C060" @change="updateChatItem($event,'nowarn')" />
		</free-list-item>
		<free-list-item title="置顶聊天" showRight :showLeftIcon="false" :showRightIcon="false">
			<switch slot="right" :checked="detail.istop" color="#08C060" @change="updateChatItem($event,'istop')" />
		</free-list-item>
		<free-list-item title="强提醒" showRight :showLeftIcon="false" :showRightIcon="false">
			<switch slot="right" :checked="detail.strongwarn" color="#08C060" @change="updateChatItem($event,'strongwarn')" />
		</free-list-item>
		<free-divider></free-divider>
		
		<view v-if="detail.chat_type === 'group'">
			<free-list-item title="我在本群的昵称" showRight :showLeftIcon="false" @click="updateNickname"> 
				<text slot="right" class="font text-muted">{{nickname}}</text>
			</free-list-item>
			<free-list-item title="显示群成员昵称" showRight :showLeftIcon="false" :showRightIcon="false">
				<switch slot="right" :checked="detail.shownickname" color="#08C060"  @change="updateChatItem($event,'shownickname')" />
			</free-list-item>
		</view>
		
		<free-divider></free-divider>
		<free-list-item title="清空聊天记录" showRight :showLeftIcon="false" @click="clear"></free-list-item>
		<free-divider></free-divider>
		<free-list-item title="投诉" showRight :showLeftIcon="false"></free-list-item>
		<free-divider></free-divider>
		<view v-if="detail.chat_type === 'group'" class="py-3 flex align-center justify-center bg-white" hover-class="bg-light" @click="quit">
			<text class="font-md text-danger">删除并退出</text>
		</view>
		
		<view style="flex: 1; margin-bottom:100rpx;background-color: #e3e3e3;"></view>
		
		<free-confirm title="修改" ref="confirm">
			<input type="text" value="" class="border-bottom font-md" v-model="confirmText" />
		</free-confirm>
	</scroll-view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeAvater from '@/components/free-ui/free-avater.vue'
	import freeDivider from '@/components/free-ui/free-divider.vue'
	import freeListItem from '@/components/free-ui/free-list-item.vue'
	import freeConfirm from '@/components/free-ui/free-confirm.vue'
	
	import auth from '@/common/mixin/auth.js'
	import $H from '@/common/free-lib/request.js'
	import { mapState } from 'vuex'
	export default {
		mixins:[auth],
		components:{
			freeNavBar,
			freeAvater,
			freeDivider,
			freeListItem,
			freeConfirm
		},
		data() {
			return {
				confirmText:"",
				list:[],
				detail:{
					id: 0, //唯—id，后端生成唯一id, 用户撤回指定消息
					chat_type: "", // 接收类型
					avatar: '', //·发送者头像
					name: '', // 发送者昵称
					istop:false, //是否置顶
					shownickname:false, //是否显示昵称
					nowarn:false, // 消息免打扰
					strongwarn:false, // 是否开启强提醒
					
					user_id:0, //群管理员id
					remark: "", // 群公告
					invite_confirm:0, // 邀请确认
				},
				nickname:'',
			}
		},
		onLoad(e) {
			if(!e.params){
				return this.backToast()
			}
			// 聊天用户数据
			let detail = JSON.parse(e.params)
			// 获取当前会话详细资料
			detail = this.chat.getChatListItem(detail.id,detail.chat_type)
			if(!detail) return this.backToast()
			this.detail = detail
			// console.log(this.detail)
			if(this.detail.chat_type === 'group'){
				$H.get('/group_info/'+this.detail.id).then(res => {
					console.log(res)
					this.list = res.group_users.map(item => {
						if(item.user_id === this.user.id) this.nickname = item.nickname
						return {
							id:item.user_id,
							name:item.nickname || item.user.username || item.user.nickname,
							avatar:item.user.avatar
						}
					})
					this.detail.remark = res.remark
					
				})
			}
		},
		computed:{
			...mapState({
				chat: state => state.user.chat,
				user:state => state.user.user
			})
		},
		methods: {
			openMail(){
				uni.navigateTo({
					url: '/pages/mail/mail/mail?type=createGroup',
				});
			},
			updateName(){
				this.confirmText = this.detail.name
				this.$refs.confirm.show((close) => {
					if(this.confirmText == '') return uni.showToast({
						title:'群昵称不能为空',
						icon:'none'
					})
					$H.post('/group/rename',{
						id:this.detail.id,
						name:this.confirmText
					}).then(res => {
						uni.showToast({
							title: '修改成功',
							icon:'none'
						});
						this.detail.name = this.confirmText
						close()
					})
				})
			},
			openGroupRemark(){
				uni.navigateTo({
					url: '/pages/chat/group-remark/group-remark?params='+encodeURIComponent(JSON.stringify({
						id:this.detail.id,
						remark:this.detail.remark
					})),
				});
			},
			updateNickname(){
				let that = this;
				this.confirmText = this.nickname
				this.$refs.confirm.show((close) => {
					// if(this.confirmText == '') return uni.showToast({
					// 	title:'昵称不能为空',
					// 	icon:'none'
					// })
					$H.post('/group/nickname',{
						id:this.detail.id,
						nickname:this.confirmText
					}).then(res => {
						this.nickname = this.confirmText
						uni.showToast({
							title: '修改成功',
							icon:'none'
						});
						close()
					})
				})
			},
			quit(){
				uni.showModal({
					content: '是否删除或退出该群聊',
					success: (res) => {
						if (res.cancel) return;
						$H.post('/group/quit',{
							id:this.detail.id
						}).then(res => {
							uni.showToast({
								title: '操作成功',
								icon:'none'
							});
							uni.reLaunch({
								url:'/pages/tabbar/index/index'
							})
						})
					}
				});
			},
			updateChatItem(e,k){
				this.detail[k] = e.detail.value;
				this.chat.updateChatItem({id:this.detail.id,chat_type:this.detail.chat_type},this.detail)
			},
			openCode(){
				uni.navigateTo({ 
					url: '/pages/my/code/code?params='+encodeURIComponent(JSON.stringify({
						id:this.detail.id,
						name:this.detail.name,
						avatar:this.detail.avatar
					}))+'&type=group',
				});
			},
			clear(){
				uni.showModal({
					content: '是否要清空聊天记录?',
					success:  (res) =>{
						if (res.confirm) {
							this.chat.clearChatDetail(this.detail.id,this.detail.chat_type)
							uni.showToast({
								title: '清除成功',
								icon:'none'
							});
							uni.$emit('updateHistory')
						} 
					}
				});
			},
			openHistory(){
				uni.navigateTo({
					url: `/pages/chat/chat-history/chat-history?chat_type=${this.detail.chat_type}&id=${this.detail.id}`,
				});
			}
		}
	}
</script>

<style>

</style>
