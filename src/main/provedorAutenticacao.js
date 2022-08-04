import React from 'react'

import AuthService from '../App/service/authService'

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer
const AuthProvider = AuthContext.Provider

class ProvedorAutenticacao extends React.Component {
    
    state = {
        usuarioAutenticado: null, 
        isAutenticado: false
    }

    iniciarSessao = (usuario) => {
        AuthService.logar(usuario)
        this.setState({isAutenticado: true, usuarioAutenticado: usuario})                
    }
    
    encerrarSessao = () => {
        AuthService.removerUsuarioAutenticado()
        this.setState({ isAutenticado: false, usuarioAutenticado: null })
    }

    render() {

        const contexto = {
            usuarioAutenticado: this.state.usuarioAutenticado,
            isAutenticado: this.state.isAutenticado,
            iniciarSessao: this.iniciarSessao,
            encerrarSessao: this.encerrarSessao
        }

        console.log('usuarioAutenticado: ', this.state.usuarioAutenticado)
        console.log('isAutenticado: ', this.state.isAutenticado)

        return (
            <AuthProvider value={contexto}>
                {this.props.children}
            </AuthProvider>
        )
    }
}

export default ProvedorAutenticacao