import { useState } from "react"
import InputForm from "../../form/InputForm"
import Submit from "../../form/Submit"
import styles from "./FormLogin.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

function FormLogin() {
    const [form, setForm] = useState({
        usuario: "",
        senha: ""
    })
    const [erro, setErro] = useState("")

    const navigate = useNavigate()
    const { login } = useAuth()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const tipo = login(form.usuario, form.senha)

        if (!tipo) {
            setErro("Email ou senha incorretos")
            return
        }

        setErro("")
        navigate(tipo === "administrador" ? "/administrador" : "/associados")
    }

    return (
        <section className={styles.page}>
            <div className={styles.card}>
                <div className={styles.title}>
                    <h1>Entrar</h1>
                    <div className={styles.linhadourada}></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <InputForm
                        label="Usuário"
                        name="usuario"
                        type="email"
                        placeholder="Digite seu email:"
                        value={form.usuario}
                        onChange={handleChange}
                        required={true}
                    />

                    <InputForm
                        label="Senha"
                        name="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={form.senha}
                        onChange={handleChange}
                        required={true}
                    />

                    {erro && (
                        <p role="alert" className={styles.erro}>
                            {erro}
                        </p>
                    )}

                    <div className={styles.submitPosition}>
                        <Submit text="Entrar" cor="dourado" />
                    </div>
                </form>

                <p className={styles.cadastroLogin}>
                    Não possui cadastro?{" "}
                    <Link to="/cadastro" className={styles.linkCadastro}>
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default FormLogin