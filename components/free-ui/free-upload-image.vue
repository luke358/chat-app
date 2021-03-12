<template>
	<view class="flex flex-wrap">
		<view v-for="(item,index) in imageList" :key="index" class="flex align-center justify-center pt-2 position-relative" style="width: 230rpx;">
			<image :src="item" class="bg-light rounded" style="width: 220rpx;height: 220rpx;" @click="preview(item)"></image>
			<view class="flex align-center justify-center rounded-circle position-absolute" style="width: 50rpx;height: 50rpx;top: 10rpx;right: 0;background-color: rgba(0,0,0,.5);" @click="deleteImage(item)">
				<text class="iconfont text-white font-sm">&#xe602;</text>
			</view>
		</view>
		<view v-if="imageList.length < 9" @click="chooseImage" class="flex align-center justify-center pt-2" style="width: 230rpx;">
			<view class="flex align-center justify-center bg-light rounded" style="width: 220rpx;height: 220rpx;">
				<text class="text-light-muted" style="font-size: 100rpx;">+</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			data: {
				type:Array,
				default: ()=>{
					return []
				}
			}
		},
		mounted(){
			this.imageList = this.data
		},
		data(){
			return {
				imageList:[]
			}
		},
		methods:{
			//选择图片
			chooseImage(){
				uni.chooseImage({
					count:9-this.imageList.length,
					sizeType:['compressed'],
					success:res => {
						this.imageList = [...this.imageList,...res.tempFilePaths]
						this.$emit('update',this.imageList)
					}
				})
			},
			//预览图片
			preview(item){
				uni.previewImage({
					current:item,
					urls:this.imageList
				})
			},
			//删除图片
			deleteImage(item){
				uni.showModal({
					content:"是否删除图片",
					success:res=>{
						if(res.confirm){
							let index = this.imageList.findIndex(url=> url === item	)
							if(index!==-1){
								this.imageList.splice(index,1)
								this.$emit('update',this.imageList)	
							}
						}
					}
				})
				
			}
		}
	}
</script>

<style>
</style>
