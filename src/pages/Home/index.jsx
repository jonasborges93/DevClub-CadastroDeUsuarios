import { useEffect, useState, useRef } from 'react'

import './style.css'
import Trash from '../../assets/icon-trash.svg'

import api from '../../services/api'

function Home() {

    const [users, setUsers] = useState([]);

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    async function getUsers(){
        const usersFromApi = await api.get('/usuarios')
        setUsers(usersFromApi.data); 
    }

    async function createUsers(){
        
        await api.post('/usuarios', {
            name: inputName.current.value,
            age: inputAge.current.value,
            email: inputEmail.current.value,
        })

    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
        <>
            <section className="register">
                <div className="container">
                    <form action="" className="form">
                        <h1 className="form__title">Cadastro de Usuários</h1>
                        <div className="form__content">
                            <input type="text" name="name" className="form__input" placeholder='Seu nome...' ref={inputName}/>
                            <input type="number" name="age" className="form__input" placeholder='Sua idade...' ref={inputAge}/>
                            <input type="email" name="email" className="form__input" placeholder='Seu melhor e-mail...' ref={inputEmail}/>
                            <button className="form__button" type='button' onClick={createUsers}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </section>
            
            <section className="results">
                <div className="container">
                    <div className="results__content">
                        {users.map(user => (
                            <div className="item" key={user.id}>
                                <div className="item__content">
                                    <p className="item__label">Nome: <span className="item__text">{user.name}</span></p>
                                    <p className="item__label">Idade: <span className="item__text">{user.age}</span></p>
                                    <p className="item__label">E-mail: <span className="item__text">{user.email}</span></p>
                                </div>
                                <button className="item__button"><img src={Trash} alt="Icone Lixeira" className="item__button-img" /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home