import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService {

  async getProfileBryProfileId(profileId) {
    const res = await api.get('api/profiles/' + profileId)
    AppState.activeProfile = new Account(res.data)
    logger.log('[CURRENT PROFILE]', res.data)
  }
}

export const profileService = new ProfileService()