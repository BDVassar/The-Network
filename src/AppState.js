import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Account} */
  activeProfile: {},
  /** @type {import('./models/Account.js').Account[]|null} */
  searchedProfiles: null,
  /** @type {import('./models/Com.js').Comm[]|null} */
  coms: null,
  /**@type {import('.models/Post.js').Post[]|null} */
  posts: null,
  /**@type {import('.models/Post.js').Post[]|null} */
  activePosts: null,
  /**@type {import('.models/Post.js').Post[]|null} */
  searchedPosts: null,
  page: 1,
  profilePage: 1,
  maxPage: 0

})
