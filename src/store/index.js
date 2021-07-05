import { createStore } from 'vuex'

export default createStore({
  state: {
    userName: null,
    fullName: null,
    publicRepos: null,
    location: null,
    followers: null,
    userAvatar: null,
    company: null,
    repositories: [],
    starred: null,
    profileUrl: null
  },
  mutations: {
    setUserName(state, value){
      state.userName = value
    },
    setFullName(state, value){
      state.fullName = value
    },
    setPublicRepos(state, value){
      state.publicRepos = value
    },
    setLocation(state, value){
      state.location = value
    },
    setFollowers(state, value){
      state.followers = value
    },
    setUserAvatar(state, value){
      state.userAvatar = value
    },
    setCompany(state, value){
      state.company = value
    },
    setRepositories(state, value){
      state.repositories = value
    },
    setStarred(state, value){
      state.starred = value
    },
    setProfileUrl(state, value){
      state.profileUrl = value
    }
  },
  actions: {
  },
  modules: {
  }
})
