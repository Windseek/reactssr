import axios from 'axios';
import { PAGELIST } from './constants.js'

const homelist = (list) => (
  {
    type: PAGELIST,
    list
  }
)

export const getHomeList = () => (
   (dispatch) => axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
    .then((res) => {
      console.log(res);
      const list = res.data.data;
      dispatch((homelist(list)))
  })
)