<template>
	<view class="page">
		<van-search v-model="value" placeholder="请输入学生姓名" />
		<view class="list">
			<view class="efferCard">
				<text class="name"><b>李丝丝</b></text>
				<van-tag type="primary" style="margin-left: 10rpx;">技能大赛获奖</van-tag>
				
				<text style="float: right;" class="time">2020年9月14日</text>
				<view class="remake"> 今天,我获奖了。我能站在这个美丽的舞台上,来倾诉我的获奖感言,我感到很荣幸,在这里,我要感谢我的老师、家长..</view>
				<view class="opt">
					<van-button type="info">查看</van-button>
					<van-button type="info" @click="showScore">评分</van-button>

				</view>
			</view>
			<view class="efferCard">
				

				<text class="name"><b>张三</b></text>
				<van-tag type="primary" style="margin-left: 10rpx;">1+x证书</van-tag>
				<text style="float: right;" class="time">2020年9月14日</text>
				<view class="remake"> 今天,我获奖了。我能站在这个美丽的舞台上,来倾诉我的获奖感言,我感到很荣幸,在这里,我要感谢我的老师、家长..</view>
				<view class="opt">
					<van-button type="info">查看</van-button>
					<van-button type="info" @click="showScore">评分</van-button>
			
				</view>
			</view>
		</view>
		<van-popup v-model="scoreShow" @close="close" style="width: 80%;height: 40%;" closeable>
			<van-cell-group>
			  <van-field v-model="stuinfo.name" label="学生" disabled="true" placeholder="请输入用户名" />
			  <van-field v-model="stuinfo.effectType" label="获奖类型" disabled="true" placeholder="请输入用户名" />
			  <van-field v-model="stuinfo.score" label="评分" type="number" placeholder="请输入评分" />
			  <van-field v-model="stuinfo.remake" label="备注" type="textarea" placeholder="请输入备注" />
			  
			</van-cell-group>
			<view>
				<van-button @click="handleScore" style="width: 80%;margin-left: 10%" type="primary">确认评分</van-button>
			</view>
		</van-popup>
		
		<van-popup v-model="show"  >
			
		</van-popup>
		<van-pagination  class="pagination" v-model="currentPage" :total-items="10" :items-per-page="5" />
		
	</view>
</template>

<script>
	
	export default({
		data(){
			return{
				show:false,
				currentPage:1,
				scoreShow:false,
				stuinfo:{
					name:'张三',
					effectType:'1+x中级证书'
				}
			}
		},
		methods:{
			handleScore(){
				this.scoreShow=false;
			},	
			close(){
				this.scoreShow=false;
			},
			showScore(){
				this.scoreShow=true;
			}
		}
	})
</script>

<style lang="scss" scoped>
	.page{
		width: 100%;
		.list{
			margin: 1%;
			.efferCard{
				position: relative;
				width: 95%;
				background-color: #fff;
				border-radius: 2px;
				box-shadow: 0 10px 4px rgba(0, 0, 0, 0.2);
				height: 250rpx;
				padding: 5%;
				margin-top: 2%;
				.name{
					font-weight: 200;
					color: #000000;
					font-size: 20px;
				}
				.time{
					color: #847564;
				}
				.remake{
					text-indent: 2em;
				}
				.opt{					
					position: absolute;
					bottom: 10rpx;
					right: 1%;
				}
				
			}
		}
		.pagination{
			position: absolute;
			bottom: 10px;
			width: 100%;
			 
		}
	}
	
	
	
</style>