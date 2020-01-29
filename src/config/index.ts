import {isDev} from '../utils/isDev'

export const BASE_NAME = isDev ? '/' : '/'

export const apiHost = isDev ? 'http://localhost:3001' 
: 'http://localhost:3001'