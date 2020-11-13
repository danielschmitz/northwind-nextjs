

export const fetcher = (...args) => fetch(...args).then(res => res.json())

import axios from 'axios'
export const http = axios.create({
    timeout: 1000000,
    headers: { 'Content-Type': 'application/json' }
})

export const METHOD = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

export const HTTP_STATUS = {
    OK: '200',
    NOT_FOUND: '404',
    CONFLICT: '409',
    NOT_ALLOWED: '405',

}
