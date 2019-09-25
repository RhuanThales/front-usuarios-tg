<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        xl12
        lg12
        md12
        sm12
        xs12
      >
        <material-card
          color="primary"
          title="Modelo Pagina"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      nomeUsuario: '',
      idUsuario: '',
      modalDelete: false,
      headers: [
        { text: 'Nome', align: 'left', value: 'nome' },
        { text: 'Login', align: 'left', value: 'login' },
        { text: 'Super', align: 'center', value: 'perfilSuper', sortable: false },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      usuarios: state => state.usuarios.all.items.result
    })
  },
  created () {
    this.getAllUsuarios()
  },
  methods: {
    ...mapActions('usuarios', {
      getAllUsuarios: 'getAll',
      deleteUsuario: 'delete',
      getUsuarioEditar: 'getUsuarioEdit'
    }),
    openModalDelete (nome, id) {
      console.log('Excluindo - Nome: ' + nome + ' Id: ' + id)
      this.nomeUsuario = nome
      this.idUsuario = id
      this.modalDelete = true
    },
    deletarUsuario (id) {
      console.log('Id: ' + id)
      this.deleteUsuario(id)
      this.modalDelete = false
    }
  }
}
</script>
