import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async updateProfile(profileData) {
    const res = await api.put('/account', profileData)
    // logger.log('[UPDATING]', res.data);
    AppState.account = res.data
  }
}

export const accountService = new AccountService()
