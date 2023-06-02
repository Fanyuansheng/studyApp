<template>
	<view>

		<van-tabs v-model="active"> 
			<task>
				<slot name="left"><van-button square text="上传成果" @click="handleUploadTask()" type="primary"
							class="delete-button" /></slot>
			</task>
		</van-tabs>
	</view>
</template>

<script>
	import {
		Image as VanImage
	} from 'vant';
	import task from '../../componetns/task/task.vue';

	export default {
		components: {
			VanImage: VanImage,task
		},
		data() {
			return {
				title: 'Hello',
				desc: ".求最大公约数时，先找出输入的两个数中小的那一个，从该数开始，依次-1，判断该数是否是两个数字的约数，找到第一个约数即返回，该约数即为最大公约数；",
				active: 0,
				items: [{
					text: '分组 1'
				}, {
					text: '分组 2'
				}],
			}
		},
		methods: {
			handleUploadTask() {
				uni.navigateTo({
					url: '/pages/mytask/uploadTask'
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	
	.goods-card {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
		padding: 6%; 
		margin: 2%;
		
		
		.title{
			color: antiquewhite;
		}
	}

	.delete-button {
		float: left;
		height: 100%;
	}
</style>