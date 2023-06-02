<script>
	export default {
		globalData: {
			tabBarList: [{
					"pagePath": "pages/study/study",
					"iconPath": "static/icon/study.png",
					"selectedIconPath": "static/icon/study.png",
					"text": "学情"
				},
				{
					"pagePath": "pages/mytask/index",
					"iconPath": "static/icon/task.png",
					"selectedIconPath": "static/icon/task.png",
					"text": "任务"
				},
				{
					"pagePath": "pages/effect/effect",
					"iconPath": "static/icon/effect.png",
					"selectedIconPath": "static/icon/effect.png",
					"text": "成效"
				},
				{
					"pagePath": "pages/myinfo/myinfo",
					"iconPath": "static/icon/myinfo.png",
					"selectedIconPath": "static/icon/myinfo.png",
					"text": "我的"
				}
			],
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	@import url("vant/lib/index.css");
</style>