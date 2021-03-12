<template>
	<view class="page">
		<!-- 导航栏 -->
		<free-nav-bar title="添加标签" showBack :showRight="true" bgColor="bg-white">
			<free-main-button slot="right" name="保存" @click="save"></free-main-button>
		</free-nav-bar>
		
		<view class="border-bottom px-3 pt-2 pb-2 flex align-center flex-wrap">
			<view class="border border-main rounded-circle py-1 px-2 flex align-center justify-center mr-1 mb-1" v-for="(item,index) in list" :key="index" @click="delTag(index)">
				<text class="font main-text-color">{{item}}</text>
			</view>
			
			<input confirm-type="done" v-model="tag" @confirm="addTag" type="text" class="border bg-white font rounded-circle text-center" placeholder="添加标签" style="border-style: dashed;width: 180rpx;" />
		</view>
		
		
		<view class="flex flex-column">
			<text class="font text-secondary px-3 py-2">所有标签</text>
			<view class=" px-3 flex align-center flex-wrap pt-3 pb-2 " >
				<view class="border bg-white rounded-circle px-2 py-1 mr-1 mb-1" v-for="(item,index) in allList" :key="index" @click="fastAddTag(item)">
					<text class="font text-dark">{{item}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import freeNavBar from '@/components/free-ui/free-nav-bar.vue'
	import freeMainButton from '@/components/free-ui/free-main-button.vue'
	export default {
		components:{
			freeNavBar,
			freeMainButton
		},
		data() {
			return {
				tag:"",
				list:[],
				allList:["标签1","好友","朋友"]
			}
		},
		onLoad(e) {
			if(e.detail){
				this.list = JSON.parse(e.detail)
			}
		},
		methods: {
			//添加标签
			addTag(){
				if(this.tag=== "")return
				if(this.list.indexOf(this.tag) !== -1){
					return uni.showToast({
						title:"标签已存在",
						icon:'none'
					})
				}
				this.list.push(this.tag)
				this.tag=""
			},
			//快捷添加标签
			fastAddTag(item){
				if(this.list.indexOf(item) !== -1){
					return uni.showToast({
						title:"标签已存在",
						icon:'none'
					})
				}
				this.list.push(item)
			},
			//删除标签
			delTag(index){
				uni.showModal({
					content:"是否删除该标签",
					success:(res)=>{
						if(res.confirm){
							this.list.splice(index,1)
						}
					}
				})
			},
			save(){
				uni.$emit('updateTag',this.list)
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
