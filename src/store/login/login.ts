import { Module } from "vuex"
import { ILoginState, IAccount } from "./types"
import { IRootState } from "../types"
import { accountLoginRequest } from "@/service/login"

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
    async accountLoginAction({ commit }, payload: IAccount): any {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = commit("changeToken", token)
    }
  }
}

export default loginModule
