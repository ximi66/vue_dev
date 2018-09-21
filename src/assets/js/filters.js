import Vue from "vue";

//日期格式化
Vue.filter("formatDate", (value) =>{
  if (value){
    const date = new Date(value);
    const year = date.getFullYear() ;
    const month = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
    const day = date.getDate();
    return year + "-" + month + "-" + day;
  }
});

//码值转化
const codeObj = {1002:"beijing",2401:"shanghai",M:"男",W:"女"};
Vue.filter("codeChange", (n) => {
  return codeObj[n];
});
