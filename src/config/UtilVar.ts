interface UtilVarType {
    // 静态项目不需要baseUrl
    code:string|number,
    noContentCode:number,
    ENC:boolean,//是否进行加密
}

const UtilVar:UtilVarType = {
    code:401, //登陆过期
    noContentCode:204, //请求成功但没有内容
    ENC:false,
}

export default UtilVar