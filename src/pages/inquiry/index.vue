<template>
  <i-input v-if="type === 'A'" type="number" title="起运地" placeholder="请输入起运地" />
  <i-input v-else-if="type === 'A'" type="number" title="目的地" placeholder="请输入目的地" />
  <i-input v-else-if="type === 'A'" type="number" title="运输条款" placeholder="请输入运输条款" />
  <i-input v-else-if="type === 'A'" type="number" title="箱型箱量" placeholder="请输入箱型箱量" />
  <i-input v-else-if="type === 'A'" type="number" title="品名" placeholder="请输入品名" />
  <i-input v-else-if="type === 'A'" type="number" title="重量" placeholder="请输入重量" />
  <i-input v-else-if="type === 'A'" type="number" title="特殊说明" placeholder="请输入特殊说明" />
  <i-input v-else-if="type === 'A'" type="number" title="货值" placeholder="请输入货值" />
  <i-input v-else-if="type === 'A'" type="number" title="危险品级别" placeholder="请输入起运地" />
  <i-button v-else-if="type === 'B'" type="success" shape="circle">提交询价</i-button>
</template>

<script>
  export default {
    data: {
    }
  }
</script>

<style>
</style>