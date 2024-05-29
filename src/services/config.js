import axios from 'axios'
const api_key = 'cxflk7HCvpK4oiIUnzxj3YhtrSMMZW25'
const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com?api_key=${api_key}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
export default api