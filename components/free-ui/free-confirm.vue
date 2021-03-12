<template>
	<free-popup ref="confirm" maskColor center transformOrigin="center center">
				  <view class="bg-white rounded" style="width: 600rpx;">
					  <!-- 头部 -->
					  <view class="p-4 flex flex-column">
					  	<text class="font-md font-weight-bold mb-3">{{title}}</text>
						<slot></slot>
					  </view>
					  <!-- 底部 -->
				  	<view class="border-top flex align-stretch"  style="height: 100rpx;">
				  		<view class="flex-1 border-right flex align-center justify-center" @click="cancle">
				  			<text class="font-md text-muted">取消</text>
				  		</view>
						<view class="flex-1 flex align-center justify-center" @click="confirm">
							<text class="font-md main-text-color">确定</text>
						</view>
				  	</view>
				  </view>
	</free-popup>
</template>

<script>
	import freePopup from '@/components/free-ui/free-popup.vue'
	export default {
		components:{
			freePopup
		},
		props:{
			title:{
				type:String,
				default:"提示"
			}
		},
		data(){
			return {
				callback: false
			}
		},
		methods:{
			show(callback = false){
				this.callback = callback
				this.$refs.confirm.show()
			},
			cancle(){
				this.$refs.confirm.hide()
			},
			confirm(){
				if(typeof this.callback === 'function'){
					this.callback(()=>{
						this.cancle()
					})
				}
				// this.$emit('click')
			}
		}
	}
</script>

<style>
</style>
