import './css/indexLogin.css'


const Login = () => {
    return (
        <>

            <div className="form-bg">
                <div className="container">
                    <div style={{ marginTop: "100px" }} className="row principal">
                        <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8">
                            <div className="form-container">
                                <div className="form-icon">
                                    <i className="fa fa-user-circle"></i>
                                    <span className="signup"><a href="">Bienvenido Querido Usuario</a></span>
                                </div>
                                <form className="form-horizontal">
                                    <h3 className="title">Calendario</h3>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-envelope"></i></span>
                                        <input className="form-control" type="email" placeholder="Correo" />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                                        <input className="form-control" type="password" placeholder="Contraseña" />
                                    </div>
                                    <button className="btn signin">iniciar</button>
                                    <span className="forgot-pass"><a href="#">No tienes Cuenta?/Registrate</a></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default Login;