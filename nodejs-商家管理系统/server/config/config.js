exports.databaseOptions = {
  //数据库名称
  database: 'business',

  //数据库用户名
  user: 'root',

  //数据库密码
  password: 'password',

  //数据地址
  host: 'localhost',

  //连接数据库类型
  dialect: 'mysql',

  //时区
  timezone: '+08:00',

  //设置连接池
  pool: {

    //最大连接数
    max: 10,

    //最小连接数
    min: 0,

    //连接超时30s,自动释放
    acquire: 30000,

    //闲置时间10s,自动释放
    idle: 10000
  }

}
//数据库配置

exports.requestBodyOptions = {
  limit: '3072kb'
}
//请求体配置

exports.serverOptions = {
  host: 'http://127.0.0.1',
  port: 8002
}
//服务器配置

exports.saltOptions = {
  //密码加盐
  pssWordSalt: '_pw'
}
//加盐配置

exports.emailOptions = {
  //主机
  host: 'smtp.163.com',

  //端口, 25端口在阿里云服务器禁用，建议统一使用465端口
  port: 465,

  //当端口为465，需要设置为true
  secure: true, 

  //身份验证
  auth: {
    //发邮件地址，即开通授权码的邮箱地址
    user: 'call_me2020@163.com',
    pass: 'YXYJTYSCSPQBXJNH'
  }
}
//发邮件配置

exports.emailCodeInvalid = 50
// 单位: 分钟

exports.tokenOptions = {
  expires: '5d',
  // 即5天
  tokenSalt: '_tk',
  //token加盐
  cookieName: "_abc"
}
//token的过期时间
