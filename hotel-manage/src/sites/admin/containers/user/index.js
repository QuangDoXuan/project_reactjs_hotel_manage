import React from 'react'
import './style.css'
import TableToolbar from '../../components/common/toolbar-top'
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from 'moment';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';FirstPage
import MomentUtils from '@date-io/moment';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from '../../components/pagination/pagination';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import ModalAddUpdate from './create-update-user'
import ConfirmDialog from '../../components/confirm';
import ColumnResizer from "react-column-resizer";
import userProvider from "../../../../data-access/user-provider"
import { toast } from 'react-toastify';
import CircularProgress from '@material-ui/core/CircularProgress';



class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalAdd: false,
            modalDetailtServiceType: false,
            confirmDialog: false,
            dataUser: {},
            data: [],
            fromDate: new Date(),
            toDate: new Date(),
            page: 0,
            size: 10,
            total: 0,
            progress: false,
            activeIndex:0
        }
    }

    componentDidMount() {
        this.loadPage()
    }

    loadPage() {
        this.getAllUser()
    }

    closeModal() {
        this.loadPage();
        this.setState({ openCreateModal: false });
    }

    getAllUser(){
        this.setState({
            progress:true
        })
        userProvider.getAll().then(res=>{
            console.log(res)
            switch(res.code){
                case 0: 
                    this.setState({
                        data:res.data
                    })
                    this.setState({
                        progress:false
                    })
                    break;
                default:

            }
            if(res.status==401){
                toast.error("Bạn không có quyền, vui lòng liên hệ admin!",{
                    position:toast.POSITION.TOP_RIGHT
                })
                this.setState({
                    progress:false
                })
            }
        }).catch(e=>{
            console.log(e)
            this.setState({
                progress:false
            })
        })
    }

    modalCreateUpdate(item) {
        if (item) {
            this.setState({
                openCreateModal: true,
                dataUser: item
            })
        }
        else {
            this.setState({
                openCreateModal: true,
                dataUser: {}
            })
        }
    }

    handleChangeFilter(event, action) {
        if (action == 1) {
            this.setState({
                page: 0,
                name: event.target.value
            }, () => {
                if (this.clearTimeOutAffterRequest) {
                    try {
                        clearTimeout(this.clearTimeOutAffterRequest);

                    } catch (error) {

                    }
                }
                this.clearTimeOutAffterRequest = setTimeout(() => {
                    this.loadPage()
                }, 500)
            })
        }

        if (action == 2) {
            this.setState({
                page: 0,
                intervalTime: event.target.value
            }, () => {
                if (this.clearTimeOutAffterRequest) {
                    try {
                        clearTimeout(this.clearTimeOutAffterRequest);

                    } catch (error) {

                    }
                }
                this.clearTimeOutAffterRequest = setTimeout(() => {
                    this.loadPage()
                }, 500)
            })
        }

        if (action == 3) {
            this.setState({
                page: 0,
                createdUser: event.target.value
            }, () => {
                if (this.clearTimeOutAffterRequest) {
                    try {
                        clearTimeout(this.clearTimeOutAffterRequest);

                    } catch (error) {

                    }
                }
                this.clearTimeOutAffterRequest = setTimeout(() => {
                    this.loadPage()
                }, 500)
            })
        }
        if (action == 4) {
            this.setState({
                page: 0,
                fromDate: moment(event._d).format('YYYY-MM-DD')
            }, () => {
                if (this.clearTimeOutAffterRequest) {
                    try {
                        clearTimeout(this.clearTimeOutAffterRequest);

                    } catch (error) {

                    }
                }
                this.clearTimeOutAffterRequest = setTimeout(() => {
                    this.loadPage()
                }, 500)
            })
        }
        if (action == 5) {
            this.setState({
                page: 0,
                toDate: moment(event._d).format('YYYY-MM-DD')
            }, () => {
                if (this.clearTimeOutAffterRequest) {
                    try {
                        clearTimeout(this.clearTimeOutAffterRequest);

                    } catch (error) {

                    }
                }
                this.clearTimeOutAffterRequest = setTimeout(() => {
                    this.loadPage()
                }, 500)
            })
        }
    }

    showModalDelete(item) {
        this.setState({
            confirmDialog: true,
            tempDelete: item
        })
    }

    render() {
        const { modalAdd,
            modalDetailtServiceType,
            confirmDialog,
            dataUser,
            fromDate,
            toDate,
            data,
            progress,
            page,
            size,
            total
        } = this.state
        return (
            <div className="content-area">

                <div className="panel-top">
                    <div className="toolbar">
                        <div className="toolbar-item add black-tooltip-main " data-toggle="tooltip" data-placement="bottom" title="Ctrl + 1" id="sub-open">
                            <span className="toolbar-icon icon-add" />
                            <span className="toolbar-text">Thêm mới</span>

                        </div>
                        <div className="toolbar-item double black-tooltip-main" data-toggle="tooltip" data-placement="bottom" title="Ctrl + 2">
                            <span className="toolbar-icon icon-double" />
                            <span>Nhân bản</span>
                        </div>
                        <div className="toolbar-item view black-tooltip-main" data-toggle="tooltip" data-placement="bottom" title="Ctrl + 3">
                            <span className="toolbar-icon icon-view" />
                            <span>Xem</span>
                        </div>
                        <div className="toolbar-item edit black-tooltip-main" data-toggle="tooltip" data-placement="bottom" title="Ctrl + E">
                            <span className="toolbar-icon icon-edit" />
                            <span>Sửa</span>
                        </div>
                        <div className="toolbar-item delete black-tooltip-main disable-toolbar" data-toggle="tooltip" data-placement="bottom" title="Ctrl + D">
                            <span className="toolbar-icon icon-delete" />
                            <span>Xóa</span>
                        </div>
                        <div className="toolbar-item f5 black-tooltip-main" data-toggle="tooltip" data-placement="bottom" title="Ctrl + R">
                            <span className="toolbar-icon icon-refresh" />
                            <span>Nạp</span>
                        </div>
                    </div>
                </div>

                <div className="filter-data">
                    <div></div>
                    {/* Lọc */}
                </div>

                <div style={{position:'relative'}} className="content-table resize vertical ">
                   
                    <table>
                        <tbody>
                        <tr className="header-table">
                            <th>STT</th>
                            <ColumnResizer className="columnResizer" minWidth={0} />
                            <th>UserName</th>
                            <ColumnResizer className="columnResizer" minWidth={0} />
                            <th>Email</th>
                            <ColumnResizer className="columnResizer" minWidth={0} />
                            <th>Xác nhận Email</th>
                            <ColumnResizer className="columnResizer" minWidth={0} />
                            <th>Ngày tạo</th>
                              <ColumnResizer className="columnResizer" minWidth={0} />
                            <th>Quyền</th>
                        </tr>
                        </tbody>
                        <tbody className="table-scroll">
                        {this.state.progress?<CircularProgress />:''}
                        {/* {this.state.progress?<img className="loading-data-component" src="/images/loading.gif"/>:''} */}
                        {this.state.data&&this.state.data.length&&this.state.data.map((item,index)=>{
                            return(
                            <tr onClick={()=>this.setState({activeIndex:index})} className={this.state.activeIndex==index?"active-row":''} key={index}>
                                <td>{index}</td>
                                <ColumnResizer className="columnResizer" minWidth={0} />
                                <td>{item.UserName}</td>
                                <ColumnResizer className="columnResizer" minWidth={0} />
                                <td>{item.Email}</td>
                                <ColumnResizer className="columnResizer" minWidth={0} />
                                <td>{item.EmailConfirmed?"Đã xác nhận":"Chưa xác nhận"}</td>
                                <ColumnResizer className="columnResizer" minWidth={0} />
                                <td className="text-center">27-12-2019</td>
                                  <ColumnResizer className="columnResizer" minWidth={0} />
                                <td>Admin</td>
                            </tr>
                            )
                        })}
                      </tbody>
                    
                    </table>
                      
                </div>

            </div >
        )
    }
}
export default User