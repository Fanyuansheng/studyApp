<template>
	<view>
		<!-- 顶部话题榜 -->
		<view class="items">
			<view class="item">
				<navigator url="../index/index">
					<view class="item-x">追踪</view>
				</navigator>
				<navigator url="../index/index">
					<view class="item-x"><text class="item-xx">话题榜</text></view>
				</navigator>
				<navigator url="../index/index">
					<view class="item-x">观点榜</view>
				</navigator>
				<image class="item-y" style="width: 35rpx; height: 35rpx;" src="../../../static/fangdajing.png" mode="">
				</image>
			</view>
		</view>
		<view class="bt"></view>

		<!-- 话题-1 -->
		<view class="ht" @click="GotoPage">
			<view>
				<image class="a" src="../../../static/jiaobiao.png" mode=""></image>
			</view>
			<view class="hts">
				<view class="b"><text class="item-xx">曼联客场不败场次在英雄超排名第二，阿森纳27次客场不败</text></view>
				<view class="c">曼联客场对阵阿斯顿维拉，这场比赛的结果对于现阶段的曼联来说影响并不是很大.
				</view>
				<view class="d">
					<view class="hotimage">
						<image class="img1" src="../../../static/nan1.png"></image>
						<image class="img2" src="../../../static/nvhai.png"></image>
						<image class="img3" src="../../../static/nanhai.png"></image>
						<image class="img4" src="../../../static/nan2.png"></image>
					</view>
					<!-- 新闻-1 -->
					<view class="hotimage-x">
						119观点
					</view>
					<view class="hotimage-z">
						2020-7-17
					</view>
					<view class="">
						<image class="img8" src="../../../static/消息.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<!-- 话题-2 -->
		<view class="ht">
			<view>
				<image class="a" style="width: 30rpx;height: 30rpx;" src="../../../static/jiaobiao2.png" mode="">
				</image>
			</view>
			<view class="hts">
				<view class="b"><text class="item-xx">#司机为救婴儿闯红灯#</text></view>
				<view class="c">网红司机为救婴儿连闯3红灯，警察查实后取消处罚</view>
				<view class="d">
					<view class="hotimage">
						<image class="img1" src="../../../static/nan2.png"></image>
						<image class="img2" src="../../../static/nan1.png"></image>
						<image class="img3" src="../../../static/nanhai.png"></image>
						<image class="img4" src="../../../static/nvhai.png"></image>
					</view>
					<!-- 新闻-1 -->
					<view class="hotimage-x">
						1419观点
					</view>
					<view class="hotimage-z">
						2020-7-17
					</view>
					<view class="">
						<image class="img9" src="../../../static/消息.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>


		<!-- 话题-3 -->
		<view class="ht">
			<view>
				<image class="a" style="width: 30rpx;height: 30rpx;" src="../../../static/jiaobiao2.png" mode="">
				</image>
			</view>
			<view class="hts">
				<view class="b"><text class="item-xx">#司机为救婴儿闯红灯#</text></view>
				<view class="c">网红司机为救婴儿连闯4红灯，警察查实后取消处罚</view>
				<view class="d">
					<view class="hotimage">
						<image class="img1" src="../../../static/nan2.png"></image>
						<image class="img2" src="../../../static/nan1.png"></image>
						<image class="img3" src="../../../static/nanhai.png"></image>
						<image class="img4" src="../../../static/nvhai.png"></image>
					</view>
					<!-- 新闻-1 -->
					<view class="hotimage-x">
						1419观点
					</view>
					<view class="hotimage-z">
						2020-7-17
					</view>
					<view class="">
						<image class="img10" src="../../../static/消息.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>


		<!-- 话题-4 -->
		<view class="ht">
			<view>
				<image class="a" style="width: 30rpx;height: 30rpx;" src="../../../static/jiaobiao2.png" mode="">
				</image>
			</view>
			<view class="hts">
				<view class="b"><text class="item-xx">#司机为救婴儿闯红灯#</text></view>
				<view class="c">网红司机为救婴儿连闯5红灯，警察查实后取消处罚</view>
				<view class="d">
					<view class="hotimage">
						<image class="img1" src="../../../static/nan2.png"></image>
						<image class="img2" src="../../../static/nan1.png"></image>
						<image class="img3" src="../../../static/nanhai.png"></image>
						<image class="img4" src="../../../static/nvhai.png"></image>
					</view>
					<!-- 新闻-1 -->
					<view class="hotimage-x">
						1419观点
					</view>
					<view class="hotimage-z">
						2020-7-17
					</view>
					<view class="">
						<image class="img11" src="../../../static/消息.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>


		<!-- 话题-5 -->
		<view class="ht">
			<view>
				<image class="a" style="width: 30rpx;height: 30rpx;" src="../../../static/jiaobiao2.png" mode="">
				</image>
			</view>
			<view class="hts">
				<view class="b"><text class="item-xx">#司机为救婴儿闯红灯#</text></view>
				<view class="c">网红司机为救婴儿连闯6红灯，警察查实后取消处罚</view>
				<view class="d">
					<view class="hotimage">
						<image class="img1" src="../../../static/nan2.png"></image>
						<image class="img2" src="../../../static/nan1.png"></image>
						<image class="img3" src="../../../static/nanhai.png"></image>
						<image class="img4" src="../../../static/nvhai.png"></image>
					</view>
					<!-- 新闻-1 -->
					<view class="hotimage-x">
						1419观点
					</view>
					<view class="hotimage-z">
						2020-7-17
					</view>
					<view class="">
						<image class="img12" src="../../../static/消息.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			GotoPage() {
				uni.navigateTo({
					url: '/pages/newsinfo/newsinfo'
				})
			}
		}
	}
</script>

<style>
	.hotimage {
		margin-right: 120rpx;
	}

	.hotimage-x {
		margin-right: 15rpx;
		font-size: 25rpx;
	}

	.hotimage-z {
		margin-right: 15rpx;
		font-size: 25rpx;
	}

	.hotimage image {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
	}

	.hotimage .img1 {
		left: 20rpx;
	}

	.hotimage .img2 {
		left: 40rpx;
	}

	.hotimage .img3 {
		left: 60rpx;
	}

	.hotimage .img4 {
		left: 80rpx;
	}

	.hotimage .imgs {
		margin-left: 1000rpx;
	}

	.hotimage .img6 {
		margin-left: 700rpx;
	}

	.img8 {
		display: flex;
		position: absolute;
		right: 0px;
		top: 160px;
		max-width: 25px;
		max-height: 25px;
	}

	.img9 {
		display: flex;
		position: absolute;
		right: 0px;
		top: 260px;
		max-width: 25px;
		max-height: 25px;
	}

	.img10 {
		display: flex;
		position: absolute;
		right: 0px;
		top: 360px;
		max-width: 25px;
		max-height: 25px;
	}

	.img11 {
		display: flex;
		position: absolute;
		right: 0px;
		top: 460px;
		max-width: 25px;
		max-height: 25px;
	}

	.img12 {
		display: flex;
		position: absolute;
		right: 0px;
		top: 560px;
		max-width: 25px;
		max-height: 25px;
	}

	.items {
		position: fixed;
		z-index: 1;
		background-color: #FFFFFF;
		width: 100%;
	}

	.bt {
		width: 100%;
		height: 70rpx;
	}

	.item {
		display: flex;
		flex-direction: row;
		margin: 5rpx 10rpx 20rpx 10rpx;
		font-size: 40rpx;
		color: #333333;
		background-color: #FFFFFF;
	}

	.item-x {
		margin-right: 45rpx;
	}

	.item-y {
		margin-top: 10rpx;
		margin-left: 180rpx;
	}

	.hotimage-y {
		border: 1rpx solid #DD524D;
		width: 30rpx;
		text-align: center;
		color: #DD524D;
		border-radius: 10rpx;
		font-size: 17rpx;
		height: 32rpx;
	}

	.item-xx {
		font-weight: bold;
	}

	.ht {
		border-bottom: 1rpx solid #CCD0D9;
		margin-bottom: -12rpx;
	}

	.checkbox-item {
		color: #DD524D;
		width: 20rpx;
		height: 20rpx;
	}

	.hts {
		margin-left: 20rpx;
	}

	.c {
		margin-top: 13rpx;
	}

	.a {
		width: 30rpx;
		height: 30rpx;
		margin-top: 13rpx;
	}

	.d {
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		margin-top: 13rpx;
	}
</style>