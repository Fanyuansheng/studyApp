<template>
	<view>

		<van-grid clickable :border="true" :column-num="2">
			<van-grid-item @click="gotoEfferInfo">
				<van-badge :content="5" >
					<van-grid-item icon="../../static/zs.png" text="1+x职业技能等级证书" />
				</van-badge>
			</van-grid-item>

			<van-grid-item>
				<van-grid-item icon="../../static/bs.png" text="学生技能大赛" />
			</van-grid-item>
			<van-grid-item @click="gotoEfferInfo">
				<van-badge :content="1" >
					<van-grid-item  icon="../../static/cxcy.png" text="创新创业比赛" />
				</van-badge>
			</van-grid-item>
			<van-grid-item>
				<van-grid-item icon="../../static/ndjn.png" text="劳动教育" />
			</van-grid-item>
			<van-grid-item>
				<van-grid-item icon="../../static/shfw.png" text="社会服务" />
			</van-grid-item>
		</van-grid>

	</view>
</template>

<script>
	export default({
		methods:{
			gotoEfferInfo(){
				uni.navigateTo({
					url:'/pages/teacher/effect/effermanager'
				})
			}
		}
	})
</script>

<style lang="scss">
	card {
		background-color: #555500;
		width: 40%;
		height: 10%;
	}
</style>