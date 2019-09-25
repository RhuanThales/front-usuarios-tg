import { usuarioService } from '../../../_services'
import { router } from '../../../_helpers'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    usuarioService.getAll().then(
      usuarios => commit('getAllSuccess', usuarios),
      error => commit('getAllFailure', error)
    )
  },

  getUsuarioEdit ({ commit }, usuario) {
    commit('getUsuario', usuario)
  },

  register ({ dispatch, commit }, usuario) {
    commit('registerRequest', usuario)
    // console.log('CADASTRANDO TIPO sistema NOVO' + JSON.stringify(tiposistema))
    usuarioService.register(usuario).then(
      usuario => {
        commit('registerSuccess', usuario)
        router.push('/usuarios')
        setTimeout(() => {
          dispatch('alert/success', 'Registration successful', { root: true })
        })
      },
      error => {
        commit('registerFailure', error)
        dispatch('alert/error', error, { root: true })
      }
    )
  },

  update ({ dispatch, commit }, usuario) {
    commit('updateRequest', usuario)
    // console.log('CADASTRANDO USUARIO NOVO' + user)
    usuarioService.update(usuario).then(
      usuario => {
        commit('updateSuccess', usuario)
        router.push('/usuarios')
        setTimeout(() => {
          dispatch('alert/success', 'Registration successful', { root: true })
        })
      },
      error => {
        commit('updateFailure', error)
        dispatch('alert/error', error, { root: true })
      }
    )
  },

  delete ({ commit }, id) {
    commit('deleteRequest', id)
    usuarioService.delete(id).then(
      sistema => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
