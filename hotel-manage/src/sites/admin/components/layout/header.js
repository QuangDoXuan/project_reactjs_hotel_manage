import React from 'react'
import { connect } from 'react-redux';
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    renderHeader(){
        if(this.props.userApp.currentUser){
            return(
                <header className="header-admin">
                header
                </header>
            )
        }
        return (
            <header className="header-admin">
                {this.props.userApp.currentUser.name}
            </header>
        )
    }
    render(){
        return(
            <header className="header-admin">
                header
            </header>
        )
    }
}
function mapStateToProps(state) {
    return {
      userApp: state.userApp
    };
  }
  
  export default connect(mapStateToProps)(Header);