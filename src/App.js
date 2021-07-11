import React, { Component } from "react";
import Users from "./Components/Users/Users";
import Userform from "./Components/Userforms/Userform";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                // {
                //   name : "Prince",
                //   email: "amexoprince@gmail",
                //   gen: 18,
                // },
                // {
                //   name : "Bella",
                //   email: "bella@gmail",
                //   gen: 13,
                // },
                // {
                //   name : "Kafui",
                //   email: "kafui@gmail.com",
                //   gen: 16,
                // },
            ],
        };
    }

    handleAddUser = (newUser) => {
        this.setState({
            users: [...this.state.users, newUser],
        });
    };

    render() {
        return ( <
            div >
            <
            Userform addUser = { this.handleAddUser }
            /> {
                this.state.users.map((item, index) => {
                    return ( <
                        div >
                        <
                        Users name = { item.name }
                        email = { item.email }
                        gen = { item.gen }
                        /> <
                        /div>
                    );
                })
            } <
            /div>
        );
    }
}

export default App;