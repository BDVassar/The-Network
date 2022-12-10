import { AppState } from "../AppState.js"
import { Com } from "../models/Com.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ComService {
  async getComs() {
    const res = await api.get('api/ads')
    AppState.coms = res.data.map(c => new Com(c))
  }
}

export const comService = new ComService()