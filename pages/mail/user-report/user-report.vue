<template>
	<view class="page">
		<!-- 导航栏 -->
		<free-nav-bar title="用户投诉" showBack :showRight="true" bgColor="bg-white">
			<free-main-button slot="right" name="投诉" @click="submit"></free-main-button>
		</free-nav-bar>
		
		<picker mode="selector" :range="range" @change="change">
			<freeListItem :title="form.category ? form.category: '请选择分类'" showRight :showLeftIcon="false"></freeListItem>
		</picker>
		
		<textarea placeholder="请填写投诉内容" class="bg-white p-2 font-md" v-model="form.content" />
	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	import freeListItem from '@/components/free-ui/free-list-item.vue'
	
	import auth from '@/common/mixin/auth.js'
	import $H from '@/common/free-lib/request.js'
	export default {
		mixins:[auth],
		components:{
			freeNavBar,
			freeMainButton,
			freeListItem
		},
		data() {
			return {
				range:["分类1","分类2","分类3","分类4","分类5"],
				form:{
					reported_id:0,
					reported_type:'user',
					category:"",
					content:""
				}
			}
		},
		onLoad(e) {
			if(!e.params){
				return this.backToast()
			}
			let params = JSON.parse(e.params)
			
			this.form.reported_id = params.user_id
			this.form.reported_type= params.type
		},
		methods: {
			change(e){
				this.form.category = this.range[e.detail.value]
			},
			submit(){
				if(!this.form.category){
					return uni.showToast({
						title:"请选择分类",
						icon:"none"
					})
				}
				if(!this.form.content){
					return uni.showToast({
						title:"请填写投诉内容",
						icon:"none"
					})
				}
				//请求服务器
				$H.post('/report/save',this.form).then(res => {
					uni.navigateBack({
						delta:1
					})
					uni.showToast({
						title:"投诉成功",
						icon:"none"
					})
				})
				
			}
		}
	}
</script>

<style>

</style>
