import axios from 'axios'
import { FormatString } from '../utils'

export class APIService {
    static getUserDetails(name) {
        return new Promise((resolve, reject) => {
            try {
                const { data } = axios.get('')
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    }
}
