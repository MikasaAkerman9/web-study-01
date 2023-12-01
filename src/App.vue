<template id="app">
  <avue-crud
      :data="dataList"
      :option="option">
  </avue-crud>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      dataList:[
        {
          name:'张远方',
          sex:0
        },
        {
          name:'周晴鹤',
          sex:1
        }
      ],
      option:{
        addBtn:true,
        delBtn:true,
        searchBtn:true,
        menu:true,
        column:[
          {label:'姓名',prop:'name',search:true,type:'input'},
          {label:'性别',prop:'sex',search:true,type:'select',
            dicData:[
                {label:'男',value:1},
              {label: '女',value:0}
            ]
          },
        ]
      }
    }
  }
}
</script>

