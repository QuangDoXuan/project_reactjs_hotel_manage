import React from 'react'
import roomProvider from '../../../../data-access/room-provider'
import typeRoomProvider from '../../../../data-access/typeroom-provider'
import { withStyles } from '@material-ui/core/styles';
import './style.css'
import moment from 'moment';
import ColumnResizer from "react-column-resizer";

// import {} from '@material-ui/core';

import {
    Table,
    Select,
    Typography,
    Card,
    Row,
    Col,
    Button,
    Input
} from 'antd';

const { Column } = Table;
const { Option } = Select;


class Room extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalAdd: false,
            modalDetailtServiceType: false,
            confirmDialog: false,
            dataUser: {},
            data: [],
            listRoomSelected: [],
            listTypeRoom: [],
            fromDate: new Date(),
            toDate: new Date(),
            page: 0,
            size: 10,
            total: 0,
            progress: false,
        }
    }

    componentDidMount() {
        this.loadPage();
        console.log(this.state.data)
    }

    loadPage() {
        this.getRoomByPage();
        this.getAllTypeRoom();
    }

    getAllRoom() {
        this.setState({ progress: true })
        roomProvider.getAll().then(res => {
            console.log(res)
            if (res.code == 0) {
                this.setState({
                    data: res.data,
                    total: res.data.length
                })
            }
            else {
                this.setState({
                    data: []
                })
            }
            this.setState({ progress: false })
        }).catch(e => {
            console.log(e)
            this.setState({ progress: false })
        })
    }

    getAllTypeRoom() {
        this.setState({ progress: true })
        typeRoomProvider.getAll().then(res => {
            console.log(res)
            if (res.code == 0) {
                this.setState({
                    listTypeRoom: res.data,
                })
            }
            else {
                this.setState({
                    listTypeRoom: []
                })
            }
            this.setState({ progress: false })
        }).catch(e => {
            console.log(e)
            this.setState({ progress: false })
        })
    }

    getRoomByPage() {
        let param = {
            pagesize: this.state.size,
            pagenumber: this.state.page
        }
        roomProvider.getByPage(param).then(res => {
            console.log(res)
            this.setState({
                data: res.data.Results,
                total: res.data.TotalNumberOfRecords,
                // totalPerPage:res.Data.TotalNumberOfRecords
            })
        }).catch(e => {
            console.log(e)
        })
    }

    closeModal() {
        this.loadPage();
        this.setState({ openCreateModal: false });
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

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({ listRoomSelected: selectedRows});
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        const classes = this.props;
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
            total,
            rowsPerPage
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
                        <div className="toolbar-item delete black-tooltip-main" data-toggle="tooltip" data-placement="bottom" title="Ctrl + D">
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
                    <Card>

                        <Row gutter={{ md: 24, lg: 24, xl: 24 }}>
                            <Col md={12} sm={12} xs={24} style={{ display: 'inline-flex' }}>
                                <Typography style={{ margin: '8px 0px', width: 130 }}>Mã phòng</Typography>
                                <Input
                                    allowClear
                                    placeholder="Nhập mã phòng"
                                    style={{ width: '70%' }}
                                />
                            </Col>
                            <Col md={12} sm={12} xs={24} style={{ display: 'inline-flex' }}>
                                <Typography style={{ margin: '8px 0px', width: 130 }}>Loại phòng</Typography>
                                <Select
                                    allowClear
                                    defaultValue=""
                                    style={{ width: '70%' }}
                                    onChange={() => { }}>
                                        {this.state.listTypeRoom.map((item, index) => 
                                        
                                        <Option value={item.TypeRoomID}>{item.TypeRoomName}</Option>
                                    )}
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={{
                            md: 24,
                            lg: 24,
                            xl: 24
                        }}>
                            <Col md={12} sm={12} xs={24} style={{ display: 'inline-flex' }}>
                                <Typography style={{ margin: '8px 0px', width: 130 }}>Trạng thái ở</Typography>
                                <Select
                                    allowClear
                                    defaultValue=""
                                    style={{ width: '70%' }}
                                    onChange={() => { }}>
                                    <Option value="empty">Trống</Option>
                                    <Option value="noempty">Đã có người</Option>
                                </Select>
                            </Col>
                            <Col md={12} sm={24} xs={24} style={{ display: 'inline-flex' }}>
                                <Typography style={{ margin: '8px 0px', width: 130 }}>Tình trạng phòng</Typography>
                                <Select
                                    allowClear
                                    defaultValue=""
                                    style={{ width: '70%' }}
                                    onChange={() => { }}>
                                    <Option value="clear">Sạch</Option>
                                    <Option value="ban">Bẩn</Option>
                                    <Option value="clean">Đang dọn</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row gutter={{
                            md: 8,
                            lg: 24,
                            xl: 24
                        }}>
                            <Col md={12} sm={24} xs={24} >
                                <Button
                                    style={{ margin: '8px 0px' }}
                                >
                                    Tìm kiếm
                                    </Button>
                            </Col>
                        </Row>




                    </Card>
                </div>

                <div className="table-list">
                    <Table
                        rowSelection={rowSelection}
                        dataSource={data}
                        pagination={
                            {
                                showSizeChanger: true,
                                current: page + 1,
                                pageSize: size,
                                total: total,
                                onShowSizeChange: (current, pageSize) => {
                                    this.setState({ size: pageSize, page: current - 1 }, () => this.getRoomByPage())
                                    //   this.setState({ pageSize: pageSize, page: current - 1 }, () => this.getListBrandName())
                                },
                                onChange: (value) => {
                                    console.log(value)
                                    this.setState({ page: value - 1 }, () => this.getRoomByPage())
                                }
                            }
                        }
                        bordered
                        scroll={{ y: 400 }}
                    >
                        <Column title="STT" key="index" width={90} align={'Center'}
                            render={(text, record, index) => (this.state.page) * this.state.size + index + 1}
                        />
                        <Column title="Mã phòng" dataIndex="RoomNo" key="RoomNo" align={'Left'}
                            render={(text, record, index) => text}
                        />
                        <Column title="Tên phòng" dataIndex="RoomName" key="RoomName" align={'Left'}
                            render={(text, record, index) => text}
                        />
                        {/* <Column title="Số người" dataIndex="NoP" key="NoP" align={'Center'}
                            render={(text, record, index) => text}
                        /> */}
                        <Column title="Tầng" dataIndex="Floor" key="Floor" align={'Center'}
                            render={(text, record, index) => text}
                        />
                        {/* <Column title="Giá" dataIndex="Price" key="Price" align={'Center'}
                            render={(text, record, index) => text}
                        /> */}
                        <Column title="Loại phòng" dataIndex="typeRoomName" key="typeRoomName" align={'Center'}
                            render={(text, record, index) => text}
                        />
                        <Column title="Trạng thái ở" dataIndex="Status" key="Status" align={'Center'}
                            render={(text, record, index) => text

                            }
                        />
                        <Column title="Tình trạng phòng" dataIndex="StatusStay" key="StatusStay" align={'Center'}
                            render={(text, record, index) => text

                            }
                        />
                    </Table>
                </div>

            </div >
        )
    }
}

const styles = theme => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});


export default withStyles(styles)(Room)