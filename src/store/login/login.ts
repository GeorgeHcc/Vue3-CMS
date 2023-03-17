import { Module } from "vuex"
import { ILoginState } from "./types"
import { IRootState } from "../types"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userinfo: ""
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log("执行accountLoginAction", payload)
    }
  }
}

export default loginModule
