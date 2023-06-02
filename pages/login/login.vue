<template>
	<view class="page">
		 
		<view class="login">
			<view style="position: absolute;right: 2%;">快速注册</view>
			<text style="float: left;width: 100%;margin:10%;font-weight: 1000;font-size:20px;">账号密码登录</text>
			<van-form @submit="handleLogin">
				<van-field v-model="userinfo.userName" name="" label="用户名" placeholder=""
					:rules="[{ required: true, message: '请填写用户名' }]" />
				<van-field v-model="userinfo.passWord" type="password" name="" label="密码" placeholder=""
					:rules="[{ required: true, message: '请填写密码' }]" />
				<van-field readonly clickable name="picker" :value="userinfo.role" label="身份" placeholder="点击选择身份"
					@click="showPicker = true" />
				<div style="padding: 20px;">
					<van-button round block type="info"  native-type="submit">登录</van-button>
				</div>
			</van-form>

			<van-popup v-model="showPicker" position="bottom">
				<van-picker show-toolbar :columns="roles" @confirm="onConfirm" @cancel="showPicker = false" />
			</van-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {
					userName:undefined,
					passWord:undefined,
					role:undefined,
				},
				showPicker:false,
				roles:['教师','学生']
			}
		},
		methods: {
			onConfirm(value) {
				this.userinfo.role = value;
				this.showPicker = false;
			},
			handleLogin() {
				console.log(this.userinfo)
				 let {role}=this.userinfo
				 if(role='学生'){
					 uni.switchTab({
					 	url:'/pages/study/study'
					 })
				 }else if(role=='教师'){
					 uni.navigateTo({
					 	url:'/pages/study/study'
					 })
				 }
				 
			}
		},
		onLoad() {
			 uni.setNavigationBarColor({
			      frontColor: '#ffffff',
			      backgroundColor: '#ffffff',
			      animation: {
			        duration: 0,
			        timingFunc: 'easeIn'
			      }
			 })
		}
	}
</script>

<style>
	.page{
		width: 100%;
		height: 100%;
	}
	.login {
		display: flex;
		flex-direction: column;
		padding-top: 20%;
		align-items: center;
	}
</style>