import { CreateApiService } from "./APIService"


const JokesService = CreateApiService({
    baseURL: "/jokes",
  })

  export const getJokes = () =>{
    return JokesService.get("").then((res) => {
      return res.data
    })
  }

  export const createJoke = (data) =>{
    console.log(data)
    return JokesService.post("", data).then((res) => {
      return res
    })
  }

