import React from "react";
import "./Feed.scss";

class NewUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      avatar: "",
      username: "",
      email: "",
      submit: false, 
    }
  }

  setName(event) {
    const { value } = event.target;

    this.setState({ name: value });
  }

  setAvatar(event) {
    const { value } = event.target;

    this.setState({ avatar: value });
  }

  setUsername(event) {
    const { value } = event.target;

    this.setState({ username: value });
  }

  setEmail(event) {
    const { value } = event.target;

    this.setState({ email: value });
  }

  cadastraUsuario(event) {
    event.preventDefault();

    const { name, username, email, avatar} = this.state;
    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email,
    })

    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postObject,
    }).then(() => this.setState({ submit: true })); 
  }

  render() {
    const { name, username, avatar, submit } = this.state;

    return (
      <div className="container">
        <section className="feed">
          <article className="post new-user">
            <header className="post__header">
              <h1>Novo usuário:</h1>
            </header>

            {submit && window.alert('Cadastrado com sucesso')}

            <div className="user">
              <div className="user__thumb">
              { avatar.length > 0
                ? <img src={avatar} alt="" />
                : <img src="http://placehold.it/200x200" alt="" />
              }         
              </div>
              <p className="user__name">{name} - @{username}</p>
            </div>

            <div className="post__form">
              <label>Nome</label>
              <input 
                type="text" 
                placeholder="Ex: Fulano da Silva"
                onChange={(event) => this.setName(event)}
              />

              <label>Usuário</label>
              <input 
                type="text" 
                placeholder="Ex: fulano_da_silva"
                onChange={(event) => this.setUsername(event)}
              />

              <label>E-mail</label>
              <input 
                type="email" 
                placeholder="Ex: fulano@provedor.com"
                onChange={(event) => this.setEmail(event)}
              />

              <label>Url da Imagem de Perfil</label>
              <input 
                type="text" 
                placeholder="http:// ..."
                onChange={(event) => this.setAvatar(event)} 
              />

              <button type="button"
              onClick={(event) => this.cadastraUsuario(event)}
              >
                Cadastrar
              </button>

            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default NewUser;
