let wallet_services = '/wallet-services-dev'; //dev
// let wallet_services = '/wallet-services-test'; //test 
let isofhcare_service = '/isofhcare'; //dev 
// let isofhcare_service = '/isofhcare'; //test
let land_service = '/api/v1'

let hotel_service = '/api';

module.exports = {
    key: {
        storage: {
            current_account: "CURRENT_USER"

        }
    },
    action: {
        action_user_login: "ACTION_USER_LOGIN",
        action_user_logout: "ACTION_USER_LOGOUT",
    },
    message: {
        user: {
            create_error: "Tạo mới tài khoản không thành công!",
            update_error: "Cập nhật tài khoản không thành công!",
            error_code_2: "SĐT đã được sử dụng trong hệ thống. Vui lòng sử dụng SĐT khác!",
            error_code_3: "Email đã được sử dụng trong hệ thống. Vui lòng sử dụng Email khác!",
            error_code_4: "Số văn bằng chuyên môn đã tồn tại trên hệ thống. Vui lòng sử dụng Số văn bằng chuyên môn khác!",
            error_code_5: "Username đã tồn tại trên hệ thống. Vui lòng sử dụng Username khác!",
        }, post: {
            approved_success: "Duyệt câu hỏi và gán cho bác sĩ thành công!",
            approved_error: "Duyệt câu hỏi không thành công!",
        },
        hospital: {
            create_error: "Tạo mới tài khoản không thành công!",
            update_error: "Cập nhật tài khoản không thành công!",

        }
    },
    api: {
        user: {
            // search: isofhcare_service + "/user/search",
            // login: land_service + "/auth/login",
            getAll: hotel_service + '/User/get-all',
            getByPage: hotel_service + '/User/page',
            create: hotel_service + '/User/create',
            update: hotel_service + '/User/update',
            delete: hotel_service + '/User/delete-users',
            search: hotel_service + '/User/search'
        }, room :{
            getAll: hotel_service + '/Room/all',
            getByPage: hotel_service + '/Room/page'
        }, typeRoom :{
            getAll: hotel_service + '/RoomType/all',
            getByPage: hotel_service + '/RoomType/page'
        }, role:{
            getAll: hotel_service +'/Role/all'
        }, customer:{
            getByPage: hotel_service + '/Customer/page',
            getAll: hotel_service + '/Customer/all',
            create: hotel_service + '/Customer/create',
            update:hotel_service + '/Customer/update',
            search: hotel_service +'/Customer/search',
            delete: hotel_service + '/Customer/deletes'
        }
        
    }
} 