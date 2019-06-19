import { PAGELIST } from './constants.js';

const homelist = (list) => (
  {
    type: PAGELIST,
    list
  }
)

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        const list = res.data.data;
        dispatch((homelist(list)))
    })
  }
}