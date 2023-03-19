import { Module } from "vuex"
import { ILoginState, IAccount } from "./types"
import { IRootState } from "../types"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userinfo: ""
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: IAccount): any {
      console.log("执行accountLoginAction", payload)
    }
  }
}

export default loginModule
