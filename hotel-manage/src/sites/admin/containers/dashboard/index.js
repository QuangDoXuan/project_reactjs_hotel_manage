import React from 'react'
import userProvider from '../../../../data-access/user-provider'

import axios from 'axios';
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    login= ()=>{
        // axios.post("http://27.72.147.222:5010/api/v1/auth/login").then(res=>{
        //     console.log(res)
        // }).catch(e=>{
        //     console.log(e)
        // })

        // userProvider.login(this.state.email,this.state.password).then(res=>{
        //     console.log(res);
        // }).catch(e=>{
        //     console.log(e)
        // })
    }

    render(){
        return(
            <div className="content-area">
            {/* <form>
                <input type="text" onChange={(event)=>this.setState({email:event.target.value})}/>
                <input type="password" onChange={(event)=>this.setState({password:event.target.value})}/>
            </form>
            <button onClick={this.login}>
                Đăng nhập
            </button> */}
            </div>
        )
    }
}
export default Dashboard