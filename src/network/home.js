import {request} from "./requset";

export function getIndexData(pageNum,pageSize) {
  return request({
    url: '/getIndexData',
    params: {
      pageNum,
      pageSize
    }
  })
}
