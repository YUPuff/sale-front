import request from '@/utils/request'
import { getToken } from '@/utils/auth'

const token = getToken()

export function getList() {
  return request({
    headers: { 'token': token },
    url: 'yzy/getData',
    method: 'get'
  })
}

export function edit(data) {
  return request({
    headers: { 'token': token },
    url: '/yzy/edit',
    method: 'post',
    data
  })
}
