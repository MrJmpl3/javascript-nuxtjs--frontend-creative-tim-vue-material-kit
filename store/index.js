export const state = () => ({
  navbar: false
})

export const mutations = {
  toggleNavbar(state) {
    state.navbar = !state.navbar
  }
}
