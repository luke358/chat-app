<template>
	<view>
		<!-- 导航栏 -->
		<free-nav-bar :title="true" title="仿微信" :noreadnum="totalNoreadnum" >
			<!-- <block slot="title">微信</block> -->
		</free-nav-bar>

		<!-- 置顶列表 -->
		<block v-for="(item,index) in list" :key="index">
			<free-media-list v-if="item.istop" :item="item" :index="index" @long="long"></free-media-list>
		</block>
		<!-- 非置顶列表 -->
		<block v-for="(item,index) in list" :key="index">
			<free-media-list v-if="!item.istop" :item="item" :index="index" @long="long"></free-media-list>
		</block>

		<!-- 弹出层 -->
		<free-popup ref="extend" :bodyWidth="240" :bodyHeight="getMenusHeight">
			<view style="width: 240rpx;"
			 :style="getMenusStyle" class="flex flex-column">
				<view class="flex-1 flex align-center"
				 hover-class="bg-light" v-for="(item,index) in menus"
				  :key="index"
				  @click="clickEvent(item.event)">
					<text class="font-md pl-3">{{item.name}}</text>
				</view>
			</view>
		</free-popup>

	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeMediaList from '@/components/free-ui/free-media-list.vue'
	import freePopup from '@/components/free-ui/free-popup.vue'

	import auth from '@/common/mixin/auth.js'
	import { mapState } from 'vuex';
	export default {
		mixins:[auth],
		components: {
			freeNavBar,
			freeMediaList,
			freePopup
		},
		data() {
			return {
				propIndex:-1,
				menus:[
					{
						name:"设为置顶",
						event:"setTop"
					},
					{
						name:"删除聊天",
						event:"delChat"
					}
				],
					// {
					// 	avatar: "/static/logo.png",
					// 	nickname: "昵称1",
					// 	update_time: 1567595757,
					// 	data: "大师傅似的",
					// 	noreadnum: 1,
					// 	istop:false
					// },
			}
		},
		onLoad() {
		},
		onShow() {
			this.chat.updateBadge()
		},
		computed:{
			...mapState({
				list: state => state.user.chatList,
				totalNoreadnum: state => state.user.totalNoreadnum,
				chat : state => state.user.chat
			}),
			//获取菜单高度
			getMenusHeight(){
				let H = 100
				return this.menus.length * H
			},
			//获取菜单样式
			getMenusStyle(){
				return `height: ${this.getMenusHeight}rpx`
			}
		},
		methods: {
			long({
				x,
				y,index
			}) {
				//初始化 索引
				this.propIndex = index
				// 拿到当前对象
				let item = this.list[index]
				//判断之前是否处于置顶
				this.menus[0].name = item.istop ? "取消置顶" : '设为置顶'
				this.$refs.extend.show(x, y)
			},	
			//分发菜单事件
			clickEvent(event){
				switch (event){
					case "setTop"://置顶/取消置顶
						this.setTop()
						break;
					case "delChat":	//删除当前会话
						this.delChat()
						break;
				}
				this.$refs.extend.hide()
			},
			//删除当前会话
			delChat(){
				let item = this.list[this.propIndex]
				this.chat.removeChatItem(item.id,item.chat_type)
			},
			//置顶/取消置顶
			setTop(){
				let item = this.list[this.propIndex]
				item.istop = !item.istop
			}
		}
	}
</script>

<style lang="scss">

</style>
