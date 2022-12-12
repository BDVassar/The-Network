import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService {

  async getProfileBryProfileId(profileId) {
    const res = await api.get('api/profiles/' + profileId)
    AppState.activeProfile = new Account(res.data)
    // logger.log('[CURRENT PROFILE]', res.data)
  }

  async searchProfiles(search) {
    const res = await api.get('api/profiles', { params: search })
    logger.log('[Profiles]', res.data)
    AppState.searchedProfiles = res.data.map(p => new Account(p))
    logger.log('AppstateSearchedProfiles', AppState.searchedProfiles)
  }
  
}

export const profileService = new ProfileService()