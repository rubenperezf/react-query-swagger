import axios from "axios";

const ApiBaseUrl = "http://localhost:5000/";

const instance = axios.create({
  baseURL: ApiBaseUrl,
});


export function CreateApiService({
    baseURL = "",
  }) {
    const buildURL = (url) => `${baseURL}${url}`
    return {
      get: (url, config) => instance.get(buildURL(url), config),
      post: (url, data, config) => instance.post(buildURL(url), data, config),
      put: (url, data, config) => instance.put(buildURL(url), data, config),
      delete: (url, config) => instance.delete(buildURL(url), config),
      request: (config) => instance.request(config),
    }
  }
  
  const ApiService = instance
  
  export default ApiService