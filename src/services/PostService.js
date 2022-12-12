import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {

  async getPosts() {
    const page = AppState.page
    const res = await api.get('api/posts?page=' + page)
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log('[GOT POSTS]', res.data)
    AppState.page = page

  }

  async getPostsById(id) {
    const res = await api.get('api/posts', { params: { creatorId: id } })
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log('[PostById]', res.data)
  }

  async getPostsByMyId() {
    const myId = AppState.account.id
    const res = await api.get('api/posts', { params: { creatorId: myId } })
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async changePage(page) {
    const res = await api.get('api/posts?page=' + page)
    logger.log('[NEXT/PREVIOUS PAGE]', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    if (AppState.posts.creatorId == AppState.activeProfile.id) {
      AppState.profilePage = page
      AppState.page = 1
    } else {
      AppState.page = page
    }
  }
}

export const postService = new PostService()