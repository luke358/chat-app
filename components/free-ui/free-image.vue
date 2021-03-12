<template>
	<!-- 表情包 图片 -->
	<image  :src="src" lazy-load  :style="imageStyle" :class="imageClass" @click="$emit('click')" @load="loadImage"></image>
</template>

<script>
	export default {
		props:{
			src:{
				type:String,
				default:""
			},
			imageClass:{
				type:String,
				default:""
			},
			maxWidth:{  //rpx
				type:Number,
				default:500
			},
			maxHeight:{  //rpx
				type:Number,
				default:350
			},
		},
		data(){
			return {
				h: 100,
				w:100
			}
		},
		computed:{
			imageStyle(){
				return `width:${this.w}px;height:${this.h}px;`
			}
		},
		methods:{
			//加载图片
			loadImage(e){
				let w = e.detail.width
				let h = e.detail.height
				
				//最大高度
				let maxW = uni.upx2px(this.maxWidth)
				let maxH = uni.upx2px(this.maxHeight)
				// let maxW = maxH * (w / h)
				if(h <= maxH){
					this.w = w <= maxW ? w :maxW
					this.h = h
					// maxh/maxw = h/w
					this.$emit('load',{
						w:this.w,
						h:this.h
					})
					return
				}
				this.h = maxH
				//有
				let w2 = maxH * (w / h)
				this.w = maxH * (w/h)
				//有
				this.w = w2 <= maxW ? w2 :maxW
				this.$emit('load',{
					w:this.w,
					h:this.h
				})
			},
		}
	}
</script>

<style>
</style>
