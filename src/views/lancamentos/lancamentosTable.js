import React from 'react'
import currencyFormater from 'currency-formatter'

export default props => {

    const rows = props.lancamentos.map(lancamento => {
        return (
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{currencyFormater.format(lancamento.valor, {locale: 'pt-BR'})}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button type="button"  
                            title="Efetivar" 
                            className='btn btn-success' 
                            onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')} 
                            disabled={ lancamento.status !== 'PENDENTE' }>
                        <i className="pi pi-check"></i>
                    </button>
                    <button type="button" 
                            title="Cancelar" 
                            className='btn btn-warning' 
                            onClick={e => props.alterarStatus(lancamento, 'CANCELADO')} 
                            disabled={lancamento.status !== 'PENDENTE'}>
                        <i className="pi pi-times"></i>
                    </button>
                    <button type="button" 
                            title="Editar" 
                            className="btn btn-primary" 
                            onClick={e => props.editAction(lancamento.id)}>
                        <i className="pi pi-pencil"></i></button>
                    <button type="button" 
                            title="Excluir" 
                            className="btn btn-danger" 
                            onClick={e => props.deleteAction(lancamento)} >
                        <i className="pi pi-trash"></i></button>
                </td>
            </tr>    
        )
    }

    )
    
    return (

        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Mês</th>
                    <th scope="col">Situação</th>
                    <th scope="col">Ações</th>                    
                </tr>
            </thead>
            <tbody>
                {rows}
             </tbody>   
        </table>    

    )
    
}