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
        }, room :{
            getAll: hotel_service + '/Room/all',
            getByPage: hotel_service + '/Room/page',
            create: hotel_service + '/Room/create',
            delete: hotel_service + '/Room/deletes'
        }, typeRoom :{
            getAll: hotel_service + '/RoomType/all',
            getByPage: hotel_service + '/RoomType/page',
            getDetail: hotel_service + '/RoomType/detail'
        }
        , image: {
            upload: isofhcare_service + "/upload/image"
        }, specialist: {
            getAll: isofhcare_service + "/specialist/get-all",
            search: isofhcare_service + "/specialist/search",
            create: isofhcare_service + "/specialist/create",
            delete: isofhcare_service + "/specialist/delete",
            update: isofhcare_service + "/specialist/update",
        }, serviceType: {
            getAll: isofhcare_service + "/service-type/get-all",
            search: isofhcare_service + "/service-type/search",
            create: isofhcare_service + "/service-type/create",
            delete: isofhcare_service + "/service-type/delete",
            update: isofhcare_service + "/service-type/update",
        }, service: {
            getByHospital: isofhcare_service + "/service/get-all/"
        }, post: {
            search: isofhcare_service + "/post/search",
            assign: isofhcare_service + "/post/assign",
            approved: isofhcare_service + "/post/approved-post",
            approvedList: isofhcare_service + "/post/assign-list-post",
        }, role: {
            search: isofhcare_service + "/roles/search",
            create: isofhcare_service + "/roles/create",
            delete: isofhcare_service + "/roles/delete",
            block: isofhcare_service + "/roles/block",
            getDetail: isofhcare_service + "/roles/get-detail",
            update: isofhcare_service + "/roles/update",
        }, permission: {
            search: isofhcare_service + "/permission/search",
            create: isofhcare_service + "/permission/create",
            delete: isofhcare_service + "/permission/delete",
            update: isofhcare_service + "/permission/update",
        }, comment: {
            search: isofhcare_service + "/comment/search",
            create: isofhcare_service + "/comment/create",
            delete: isofhcare_service + "/comment/delete",
            update: isofhcare_service + "/comment/update",
            acceptAsSolution: isofhcare_service + "/comment/accept-as-solution",
        }, hospital: {
            getAll: isofhcare_service + "/hospital/get-all",
            create: isofhcare_service + "/hospital/create",
            delete: isofhcare_service + "/hospital/delete",
            getDetail: isofhcare_service + "/hospital/get-detail",
            search: isofhcare_service + "/hospital/search",
            update: isofhcare_service + "/hospital/update",
            active: isofhcare_service + "/hospital/set-active",

        },
        wallet: {
            detail: wallet_services + "/partners"
        },
        doctorInf: {
            active: isofhcare_service + "/doctorInf/active",
            create: isofhcare_service + "/doctorInf/create",
            reject: isofhcare_service + "/doctorInf/reject",
            search: isofhcare_service + "/doctorInf/search",
        },
        booking: {
            search: isofhcare_service + "/booking/search",
            approved: isofhcare_service + "/booking/approved-booking",
            getPatientHis: isofhcare_service + "/booking/get-group-patient-history",
            getDetail: isofhcare_service + '/booking/get-detail-patient-history'
        },
        zone: {
            getAll: isofhcare_service + "/zone/get-by-district"
        },
        province: {
            getAll: isofhcare_service + "/province/get-all"
        },
        district: {
            getAll: isofhcare_service + "/district/get-all",
            getProvince: isofhcare_service + "/district/get-by-province"
        },
        medicine_category: {
            getAll: isofhcare_service + "/medicine/list-medicine-top",
            search: isofhcare_service + "/medicine-category/search",
            create: isofhcare_service + "/medicine-category/create",
            delete: isofhcare_service + "/medicine-category/delete",
            update: isofhcare_service + "/medicine-category/update",
        },
        userTracking: {
            search: isofhcare_service + "/user-tracking/search",
            total: isofhcare_service + "/user/total-user"
        },
        medical_record: {
            getByUser: isofhcare_service + "/medical-records/get-by-user/",
        },
        hospital_profile: {
            getByProfile: isofhcare_service + "/hospital-profile/get-hospital-by-profile/"
        }
    }
} 