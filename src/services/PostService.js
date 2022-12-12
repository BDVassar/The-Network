import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {

  async getPosts() {
    const page = 1
    const res = await api.get('api/posts?page=' + page)
    AppState.posts = res.data.posts.map(p => new Post(p))
    // logger.log('[GOT POSTS]', res.data)
    // logger.log('AppState Posts', AppState.posts)
    AppState.page = page
    AppState.maxPage = res.data.totalPages
    // logger.log(AppState.maxPage)

  }

  async getPostsById(id) {
    const res = await api.get('api/posts', { params: { creatorId: id } })
    AppState.posts = res.data.posts.map(p => new Post(p))
    // logger.log('[PostById]', res.data)
    AppState.maxPage = res.data.totalPages
    AppState.page = 1
    // logger.log(AppState.maxPage)
  }

  async getPostsByMyId() {
    const myId = AppState.account.id
    const res = await api.get('api/posts', { params: { creatorId: myId } })
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.maxPage = res.data.totalPages
    logger.log(AppState.maxPage)
  }

  async createPost(postData) {
    const res = await api.post('api/posts', postData)
    // logger.log(res.data)
    AppState.posts.push(res.data)
  }

  async likePost(postId) {
    const res = await api.post('api/posts/' + postId + '/like')
    // logger.log('[Liked]', res.data)
  }

  async removePost(postId) {
    const res = await api.delete('api/posts/' + postId)
    // logger.log('deleted', res.data)
    let carLocation = AppState.posts.findIndex(p => p.id == postId)
    if (index > 0) {
      AppState.splice(index, 1)
    }
  }

  async changePage(page, id) {
    if (id != null) {
      const res = await api.get('api/posts', { params: { creatorId: id, page: page } })
      // logger.log('[NEXT/PREVIOUS PAGE]', res.data)
      AppState.posts = res.data.posts.map(p => new Post(p))
      AppState.page = page
    } else {
      const res = await api.get('api/posts?page=' + page)
      // logger.log('[NEXT/PREVIOUS PAGE]', res.data)
      AppState.posts = res.data.posts.map(p => new Post(p))
      AppState.page = page
    }
  }

  async searchPosts(search) {
    const res = await api.get('api/posts', { params: search })
    logger.log('[Posts]', res.data)
    AppState.searchedPosts = res.data.posts.map(p => new Post(p))
    logger.log('AppstateSearchedPosts', AppState.searchedPosts)
  }


}

export const postService = new PostService()