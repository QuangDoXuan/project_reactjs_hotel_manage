import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import userProvider from '../../data-access/user-provider';
import { BrowserRouter, Router, NavLink } from "react-router-dom";

import Header from './components/layout/header'

// routes config
import routes from './configs/routes';

import WithRoot from './WithRoot';
// import './App.scss';
// import Login from '../user/containners/account/Login';
import Login from '../admin/components/account/login';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        }
    }  


    getMenu() {
        let allMenus = [
            // {
            //     role: [],
            //     name: "Dashboard",
            //     url: '/admin/dashboard',
            //     imgUrl: '/images/icon/dashboard_normal-bold.svg',
            //     classActiveStyle: 'dashboard',
            // },
            {
                role: [128],
                name: "Tài khoản bác sĩ",
                url: '/admin/doctor',
                imgUrl: '/images/icon/ic-doctor-bold.svg',
                classActiveStyle: 'doctor',
            }, {
                role: [1],
                name: "Tài khoản nhân viên",
                url: '/admin/mgr-admin',
                imgUrl: '/images/icon/ic-profile-bold.svg',
                classActiveStyle: 'info-member',
            }, {
                role: [16],
                name: "Tài khoản bệnh nhân",
                url: '/admin/user',
                imgUrl: '/images/icon/sickness_d.svg',
                classActiveStyle: 'sickness',
            }, {
                role: [16384],
                name: "Quản lý câu hỏi",
                url: '/admin/post',
                imgUrl: '/images/icon/ic-service-bold.svg',
                classActiveStyle: 'service',
            }, {
                role: [1024],
                name: "Quản lý Role",
                url: '/admin/role',
                imgUrl: '/images/icon/ic-role.svg',
                classActiveStyle: 'role',
            },
            {
                role: [65536],
                name: "Quản lý Cơ sở y tế",
                url: '/admin/hospital',
                imgUrl: '/images/icon/ic-hospital-bold.svg',
                classActiveStyle: 'calenda-hospital',
            },
            {
                role: [128],
                name: "Quản lý BS đăng kí",
                url: '/admin/doctor-inf',
                imgUrl: '/images/icon/ic-doctor-bold.svg',
                classActiveStyle: 'doctor',
            },
            {
                role: [524288],
                name: "Quản lý Chuyên khoa",
                url: '/admin/specialist',
                imgUrl: '/images/icon/ic-special.svg',
                classActiveStyle: 'special',
            },
            {
                role: [4194304],
                name: "Quản lý Loại DV",
                url: '/admin/service-type',
                imgUrl: '/images/icon/ic-drug-bold.svg',
                classActiveStyle: 'booking',
            },
            {
                role: [536870912],
                name: "Quản lý đặt khám",
                url: '/admin/booking',
                imgUrl: '/images/icon/ic-calendar-bold.svg',
                classActiveStyle: 'calendar-working',
            },
            {
                // role: [3],
                name: "Quản lý user",
                url: '/admin/user-tracking',
                imgUrl: '/images/icon/ic-calendar-bold.svg',
                classActiveStyle: 'calendar-working',
            },
            {
                // role: [536870912],
                name: "Quản lý Role",
                url: '/admin/medicine',
                imgUrl: '/images/icon/ic-drug-bold.svg',
                classActiveStyle: 'calendar-working',
                subMenu: [
                    {
                        role: [128],
                        name: "Danh mục loại thuốc",
                        url: '/admin/medicine-category',
                        imgUrl: '/images/icon/ic-doctor-bold.svg',
                        classActiveStyle: 'doctor',
                    },
                    {
                        role: [128],
                        name: "Danh mục  thuốc",
                        url: '/admin/doctor',
                        imgUrl: '/images/icon/ic-doctor-bold.svg',
                        classActiveStyle: 'doctor',
                    }
                ]
            },
        ]
        return allMenus.filter(item => {
            if (!(item.role || []).length)
                return true;
            for (let i = 0; i < item.role.length; i++) {
                for (let j = 0; j < ((this.props.userApp.currentUser || {}).permission || {}).length; j++) {
                    if (item.role == (this.props.userApp.currentUser || {}).permission[j].value)
                        return true;
                }
            }
        })
    }
    openMenu(item) {
        item.open = !item.open;
        this.setState({ menus: [...this.state.menus] })
    }

    componentDidMount() {
        this.setState({ menus: this.getMenu() })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="app">
               <Header/>
                {/* <AppHeader fixed>
                    <DefaultHeader />
                </AppHeader> */}
                <div className="app-body">
                    <div className="sidebar">
                    {/* <AppSidebar fixed display="lg"> */}
                        {/* <AppSidebarHeader />
                        <AppSidebarForm /> */}
                        <div className="scrollbar-container Home-sidebar-1 sidebar-nav ps ps--active-y ps-container">
                            <ul className="nav">
                                {
                                    this.state.menus.map(item => {

                                        if (!(item.subMenu && item.subMenu.length)) {
                                            return <li className="nav-item"><NavLink className={'nav-link ' + `${item.classActiveStyle}`} activeclassname="active" to={item.url}><img src={item.imgUrl} alt="" />{item.name}</NavLink></li>
                                        }
                                        return <li className="nav-item"><a  className={'nav-link ' + `${item.classActiveStyle}`} activeclassname="active" onClick={this.openMenu.bind(this, item)}><img src={item.imgUrl} alt="" />{item.name}</a>
                                            {
                                                item.open &&
                                                <ul className="list-sub-menu">
                                                    {
                                                        item.subMenu.map((item2, index) => <li className="sub-menu-item" key={index}>
                                                            <NavLink className={'nav-link ' + `${item2.classActiveStyle}`} activeclassname="active" to={item2.url}><img src={item.imgUrl} alt="" />{item2.name}</NavLink>
                                                        </li>)
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        {/* <AppSidebarNav className={classes.sidebar} navConfig={{
                            items: menus
                        }} {...this.props} /> */}
                        {/* <AppSidebarNav className={classes.sidebar} children={
              <div>
                Lorem data is sum
              </div>
            } /> */}
                        {/* <AppSidebarFooter />
                        <AppSidebarMinimizer /> */}
                    {/* </AppSidebar> */}
                    </div>
                    <main className="main">
                        {/* <AppBreadcrumb appRoutes={routes} /> */}
                        <Container fluid>
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )} />)
                                        : (null);
                                },
                                )}
                            </Switch>
                            {/* {
                                (!this.props.userApp.isLogin) &&
                                <Redirect to="/dang-nhap" component={Login} />
                            } */}

                            {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
                        </Container>
                    </main>
                </div>
                {/* <AppFooter>
          <DefaultFooter />
        </AppFooter> */}
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    sidebar: {
        textAlign: 'left',
    }
})

function mapStateToProps(state) {
    return {
        userApp: state.userApp
    };
}
export default connect(mapStateToProps)(WithRoot(withStyles(styles)(Home)));