import request from '@/utils/request'
import { getToken } from '@/utils/auth'

const token = getToken()

export function getList() {
  return request({
    headers: { 'token': token },
    url: 'sr/getData',
    method: 'get'
  })
}
