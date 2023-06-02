<template>
	<view>
		<van-popup v-model="showPicker" round  position="bottom"> 
			<van-picker   @confirm="onConfirm"
						  @cancel="onCancel"
						  @change="onChange" 
						  show-toolbar
						  title="生源类别"  
						  :columns="columns" />
			</van-popup>
		<van-tabs v-model="active">
			<van-tab title="课前画像">
				<van-form @submit="onSubmit">
					<van-field v-model="taskInfo.age" type="number" name="" label="学生年龄" placeholder="学生年龄" />
					<van-field v-model="taskInfo.stuType" @click="showPicker=true" type="number" name="" label="生源类别" placeholder="生源类别" />

					<van-field v-model="taskInfo.remake" type="number" name="" label="学习特点" placeholder="学习特点" />

					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">提交</van-button>
					</div>
				</van-form>

			</van-tab>
			<van-tab title="课后画像">
				<van-form @submit="onSubmit">
					<van-field v-model="taskInfo.age" type="number" name="" label="学生年龄" placeholder="学生年龄" />
					<van-field v-model="taskInfo.stuType" @click="showPicker=true" type="number" name="" label="生源类别" placeholder="生源类别" />
				
					<van-field v-model="taskInfo.remake" type="number" name="" label="学习特点" placeholder="学习特点" />
				
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">提交</van-button>
					</div>
				</van-form>
			</van-tab>

		</van-tabs>
	</view>
</template>

<script>
	export default ({
		data() {
			return {
				showPicker:false,
				active: 0,
				columns: ['普高生', '三校生', '兵役退伍', '百万扩招'],
				taskInfo: {},
				title: ''
			}
		},
		methods:{
			onConfirm(value){
				console.log(value)
				this.taskInfo.stuType=value
				this.showPicker=false
			},
			onChange(e){
			
			},
			onCancel(){
				this.showPicker=false
			}
			
		},
		onLoad(e) {
			this.taskInfo.title = e.title
		}
	})
</script>

<style lang="scss">
</style>