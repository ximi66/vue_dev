import Mock from 'mockjs';

export default Mock.mock('/api/data', ({
// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'foods|9': [{
    'name': "@ctitle(2,6)",
    "img": "@image('300x300',#0fdede)",
    "time": "@time"
  }],
  "sales|10-50": [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name': "@ctitle(2,6)",
    "img": "@image('600x600',#0fdede)",
    "time": "@time",
  }]
})
);
