import request from '@/utils/request'
import { getToken } from '@/utils/auth'

const token = getToken()

export function getList() {
  return request({
    headers: { 'token': token },
    url: 'sv/getData',
    method: 'get'
  })
}

export function info(id) {
  return request({
    headers: { 'token': token },
    url: 'sv/info/' + id,
    method: 'get'
  })
}

export function edit(data) {
  return request({
    headers: { 'token': token },
    url: '/sv/edit',
    method: 'post',
    data
  })
}
