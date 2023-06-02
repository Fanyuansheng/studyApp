<!-- 登录页面 -->
<template>
	<view class="flex-col flex-auto group">
		<text class="self-center text_2" v-if="type==1000">手机号登录</text>
		<text class="self-center text_2" v-if="type==2000">账号登录</text>
		<!-- 手机号登录 -->
		<view class="" v-if="type==1000">
			<view class="flex-col justify-start items-start text-wrapper">
				<input type="text" class="font_1" @input="onInput" placeholder="请输入学号" v-model="phoneNumber">
			</view>
			<!-- svg画线 -->
			<view style="height: 1px;">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<line x1="0" y1="0" x2="400" y2="0" style="stroke:rgb(0,0,0);stroke-width:0.2" />
				</svg>
			</view>

			<view class="flex-col justify-start items-start text-wrapper_2">
				<input type="text" password="true" class="font_1" @input="onInput" placeholder="请输入姓名"
					v-model="phonePassword">
			</view>

			<!-- svg画线 -->
			<view style="height: 1px;">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<line x1="0" y1="0" x2="400" y2="0" style="stroke:rgb(0,0,0);stroke-width:0.2" />
				</svg>
			</view>
		</view>
		<!-- 账号登录 -->
		<view class="" v-if="type==2000">
			<view class="flex-col justify-start items-start text-wrapper">
				<input type="text" class="font_1" @input="onInput" placeholder="请输入用户名" v-model="idNumber">
			</view>
			<!-- svg画线 -->
			<view style="height: 1px;">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<line x1="0" y1="0" x2="400" y2="0" style="stroke:rgb(0,0,0);stroke-width:0.2" />
				</svg>
			</view>
			<view class="flex-col justify-start items-start text-wrapper_2">
				<input type="text" password="true" class="font_1" @input="onInput" placeholder="请输入用户密码"
					v-model="idPassword">
			</view>
			<!-- svg画线 -->
			<view style="height: 1px;">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<line x1="0" y1="0" x2="400" y2="0" style="stroke:rgb(0,0,0);stroke-width:0.2" />
				</svg>
			</view>
		</view>

		<view class="self-start font_1 text_3" @click="type=2000" v-if="type==1000">用账号登录</view>
		<view class="self-start font_1 text_3" @click="type=1000" v-if="type==2000">用手机号登录</view>
		<!-- 登录按钮1 -->
		<view class="flex-col justify-start items-center button" v-if="btnShow">
			<button class="font_1 text_4" @click="onSubmit">登 录</button>
		</view>
		<!-- 登录按钮2 -->
		<view class="flex-col justify-start items-center button2" v-else>
			<button class="font_1 text_66">登 录</button>
		</view>


		<view class="flex-row justify-between group_2" v-if="type==1000">
			<text class="font_2" @click="onPageJump('/pages/login/phoneVerify')">短信验证码登录</text>
			<text class="font_2" @click="onPageJump('/pages/login/findBack')">找回密码</text>
		</view>
		<view class="flex-row justify-between group_3" v-else>
			<text class="font_2" @click="onPageJump('/pages/login/findBack')">找回密码</text>
		</view>
	</view>

</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				type: 1000, //判断登录类型手机登录或账号登录
				phoneNumber: '', //手机账号
				phonePassword: '', //手机密码
				idNumber: '', //账号
				idPassword: '', //账号密码
				btnShow: false, //判断登录按钮显示隐藏
				timeOut: null, //添加定时器
			}
		},
		onLoad() {

		},
		created() {

		},
		// 方法
		methods: {
			// 找回密码跳转页面
			onPageJump(url) {
				uni.navigateTo({
					url: url
				});
			},
			// 判断显示登录按钮
			onInput() {
				this.timeOut && clearTimeout(this.timeOut)
				this.timeOut = setTimeout(() => {
					if (this.type == 1000) {
						if (this.phoneNumber && this.phonePassword) {
							this.btnShow = true;
						} else {
							this.btnShow = false;
						}
					} else {
						if (this.idNumber && this.idPassword) {
							this.btnShow = true;
						} else {
							this.btnShow = false;
						}
					}
				}, 100);
			},
			// 点击登录
			onSubmit() {
				// 判断登录方式为手机号登录
				if (this.type == 1000) {
					// 判断验证手机号
					if (!this.phoneNumber) {
						uni.showToast({
							title: '请输入手机号',
							icon: 'none',
						});
						return;
					}
					const phoneNumber = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
					if (!phoneNumber.test(this.phoneNumber)) {
						uni.showToast({
							title: '手机号输入不正确',
							icon: 'none',
						});
						return;
					}
					// 判断验证手机密码
					if (!this.phonePassword) {
						uni.showToast({
							title: '请输入密码',
							icon: 'none',
						});
						return;
					}
					uni.showToast({
						title: '正在登录',
						icon: 'loading',
					});
				} else {
					// 判断验证账号
					if (!this.idNumber) {
						uni.showToast({
							title: '请输入账号',
							icon: 'none',
						});
						return;
					}
					// 判断验证账号密码
					if (!this.idPassword) {
						uni.showToast({
							title: '请输入账号密码',
							icon: 'none',
						});
						return;
					}
					uni.showToast({
						title: '正在登录',
						icon: 'loading',
					});
				}
			},




		}
	}
</script>

<style>
	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
			'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	view,
	image,
	text {
		box-sizing: border-box;
		flex-shrink: 0;
	}

	#app {
		width: 100vw;
		height: 100vh;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
	}

	.justify-start {
		justify-content: flex-start;
	}

	.justify-end {
		justify-content: flex-end;
	}

	.justify-center {
		justify-content: center;
	}

	.justify-between {
		justify-content: space-between;
	}

	.justify-around {
		justify-content: space-around;
	}

	.justify-evenly {
		justify-content: space-evenly;
	}

	.items-start {
		align-items: flex-start;
	}

	.items-end {
		align-items: flex-end;
	}

	.items-center {
		align-items: center;
	}

	.items-baseline {
		align-items: baseline;
	}

	.items-stretch {
		align-items: stretch;
	}

	.self-start {
		align-self: flex-start;
	}

	.self-end {
		align-self: flex-end;
	}

	.self-center {
		align-self: center;
	}

	.self-baseline {
		align-self: baseline;
	}

	.self-stretch {
		align-self: stretch;
	}

	.flex-1 {
		flex: 1 1 0%;
	}

	.flex-auto {
		flex: 1 1 auto;
	}

	.grow {
		flex-grow: 1;
	}

	.grow-0 {
		flex-grow: 0;
	}

	.shrink {
		flex-shrink: 1;
	}

	.shrink-0 {
		flex-shrink: 0;
	}

	.relative {
		position: relative;
	}

	/* ---------------------------------------------------------------------- */

	.group {
		padding: 20px 40px 10px;
		overflow-y: auto;
	}

	.text_2 {
		color: #020202;
		font-size: 20px;
		font-family: 'PingFang SC';
		line-height: 28px;
		text-align: center;
	}

	.text-wrapper {
		margin-top: 42px;
		padding-bottom: 12px;
		/* border-bottom: solid 1px #888888; */
	}

	.font_1 {
		width: 100%;
		font-size: 15px;
		font-family: 'PingFang SC';
		line-height: 21px;
		color: #00000;
	}

	.text-wrapper_2 {
		padding: 20px 0 12px;
		/* border-bottom: solid 1px #888888; */
	}

	.text_3 {
		margin-top: 22px;
		color: #166bf8;
	}

	/* 登录按钮1 */
	.button button {
		margin-top: 324px;
		padding: 8px 0 11px;
		/* background-color: #166bf880; */
		/*  background-image: url('。。。。。。。。。。。。。。。。。。。。') */
		;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		border-radius: 5px;
		width: 100%;
	}

	.text_4 {
		color: #ffffff;
	}

	.group_2 {
		padding: 50px 62px;
	}

	.group_3 {
		padding: 50px 42%;
	}

	.font_2 {
		font-size: 12px;
		font-family: 'PingFang SC';
		line-height: 17px;
		color: #555555;
	}

	/*  登录按钮2*/
	.button2 button {
		width: 100%;
		margin-top: 324px;
		padding: 8px 0 11px;
		background-color: #166bf880;
		border-radius: 5px;
		line-height: 21px;
		font-size: 15px;
	}

	.text_66 {
		color: #ffffff;
	}
</style>