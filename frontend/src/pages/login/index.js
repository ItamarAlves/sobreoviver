import React, { Component } from 'react';
import './index.css';

export default class Login extends Component {
    render() {
        return (
            <div className="col-sm-3 col-6" id="container">
                <form>
                    <i className="far fa-user fa-3x mb-3 mt-2" id="icon-login"></i>
                    <h2 id="text-login">Login</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="label-text">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className="label-text">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite sua senha" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1" class="label-text">Lembrar-me</label>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btnEnviar"><i class="fas fa-check mr-4"></i>Enviar</button>
                </form>
            </div>

        );
    }
}