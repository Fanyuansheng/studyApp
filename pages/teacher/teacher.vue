<template>
	<view>
		<van-dropdown-menu>
			<van-dropdown-item v-model="student" :options="stuList" />
		</van-dropdown-menu>
		<van-tabs v-model="active"> 

			<van-tab title="课前画像">
				<van-form @submit="onSubmit">
					<van-field name="uploader" label="能力测评分数">
						<template #input>
							<van-uploader upload-icon="add" v-model="uploader" />
						</template>
					</van-field>
				</van-form>
				<view class="study">
					<image class="image" src="../../static/747.jpg">
						
					</image>
					<view class="centent">
						<view class="item">学生年龄 18</view>
						<view class="item">生源类别: 三校生</view>
						<view class="item">学习特点: 认真听讲 </view>
						<view class="item">能力测评分数:18</view>
					</view>
				</view>

			</van-tab>
			<van-tab title="课后画像">
				<van-form @submit="onSubmit">
					<van-field name="uploader" label="能力测评分数">
						<template #input>
							<van-uploader upload-icon="add" v-model="uploader" />
						</template>
					</van-field>
				</van-form>
				<view class="study">
					<image class="image" src="../../static/747.jpg">
					</image>
					<view class="centent">
						<view>学生年龄 18</view>
						<view>生源类别: 三校生</view>
						<view>学习特点: 认真听讲 </view>
						<view>能力测评分数:18</view>
					</view>
				</view>
			</van-tab>

		</van-tabs>
	</view>
</template>

<script>
	export default ({
		data() {
			return {
				student: 0,
				uploader: [],
				stuList: [{
						text: '张三',
						value: 0
					},
					{
						text: '李四',
						value: 1
					},
					{
						text: '王五',
						value: 2
					},

				],
				showPicker: false,
				active: 0,
				taskInfo: {},
				title: ''
			}
		},
		methods: {
			onSubmit() {

			},
			onConfirm(value) {
				console.log(value)
				this.taskInfo.stuType = value
				this.showPicker = false
			},
			onChange(e) {

			},
			onCancel() {
				this.showPicker = false
			}

		},
		onLoad(e) {
			this.taskInfo.title = e.title
		}
	})
</script>

<style lang="scss">
	.study{
		display: flex;
		flex-direction: row;
		align-items:center;
		
		.content{
			width: 100%;
			background-color: #fff;
			.item{
				
			}
		}
		.image{
			width:150px;
			height: 150px;
		}
	}
</style>