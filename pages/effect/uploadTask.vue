<template>
	<van-form @submit="onSubmit">
		<van-field v-model="taskInfo.title" name="" label="任务描述" placeholder="任务描述" />
		<van-field name="uploader" label="上传附件">
			<template #input>
				<van-uploader upload-icon="eye" accept=".doc" v-model="taskInfo.file" />
			</template>
		</van-field>
		<van-field v-model="taskInfo.remake" rows="4" autosize label="任务成果" type="textarea" placeholder="任务成果" />
		<div style="margin: 16px;">
			<van-button round block type="info" native-type="submit">提交</van-button>
		</div>
	</van-form>
</template>

<script>
	export default({
		data(){
			return{
				taskInfo:{},
				title:''
			}
		},
		methods:{
			onSubmit(){
				
			}
		},
		onLoad(e){
			this.taskInfo.title=e.title
		}
	})
</script>

<style>
</style>