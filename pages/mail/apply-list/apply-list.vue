<template>
	<view class="page">
		<!-- 导航栏 -->
		<free-nav-bar title="好友申请列表" showBack :showRight="false" >
		</free-nav-bar>
		
		<free-list-item v-for="(item,index) in applyList" :key="index" :title="item.user.nickname ?item.user.nickname : item.user.username" :cover="item.user.avatar ?item.user.avatar : '/static/logo.png' " showRight :showRightIcon="false">
			<free-main-button v-if="item.status === 'pending'" name="同意" slot="right" @click="handle(item)"></free-main-button>
			<text slot="right" v-else class="text-muted font-sm">{{ item | formatTitle }}</text>
		</free-list-item>
		<!-- 上拉加载 -->
		<view class="flex align-center justify-center py-5 bg-light" v-if="applyList.length >= 10">
			<text class="text-light-muted font">{{loadMore}}</text>
		</view>
	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeListItem from '@/components/free-ui/free-list-item.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	
	import $H from '@/common/free-lib/request.js';
	import auth from '@/common/mixin/auth.js';
	import { mapState } from 'vuex'
	export default {
		mixins:[auth],
		components:{
			freeNavBar,
			freeListItem,
			freeMainButton,
		},
		data() {
			return {
				page:1,
				loadMore:'上拉加载更多'
			}
		},
		onLoad(e) {
			
		},
		onShow() {
			this.page = 1
			this.$store.dispatch('getApply',this.page)
		},
		computed:{
			...mapState({
				applyList: state => state.user.apply.rows
			})
		},
		filters:{
			formatTitle(value){
				let obj = {
					agree:"已通过",
					refuse:'已拒绝',
					ignore:'已忽略'
				}
				return obj[value.status]
			}
		},
		onPullDownRefresh() {
			this.page = 1
			this.$store.dispatch('getApply',this.page).then(res => {
				uni.showToast({
					title:'刷新成功',
					icon:'none'
				})
				uni.stopPullDownRefresh()
			})
		},
		// 监听触底事件
		onReachBottom(){
			if(this.loadMore !== '上拉加载更多') return;
			this.loadMore = '加载中...'
			this.page = this.page+1
			this.$store.dispatch('getApply',this.page).then(res => {
				this.loadMore = this.applyList.length == this.page*10 ? '上拉加载更多' : '没有更多了'
			}).catch(err => {
				this.page = this.page-1
				this.loadMore = '上拉加载更多'
			})
		},
		methods: {
			handle(item){
				uni.navigateTo({
					url: '/pages/mail/add-friend/add-friend?id='+item.id,
				});
			}
		}
	}
</script>

