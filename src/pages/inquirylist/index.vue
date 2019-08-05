<template>
  <div>
    <InquiryCard :key='book.id' v-for='book in books' :book='book'></InquiryCard>
  </div>
</template>

<script>

//引入工具类
import {get} from '@/utils'
import InquiryCard from '@/components/InquiryCard'

	export default{
       
       components:{
       	InquiryCard
       },

		data(){
			return{
				books:[]
			}
		},

		methods:{

			//加载获取数据
			async getlist(){
				const book = await get('/weapp/inquirylist')
				this.books = books.list
			}
		},

		//加载之后，调用
		mounted(){
			this.getlist()
		}
}
</script>

<style>
</style>