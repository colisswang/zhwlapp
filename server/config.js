const CONF = {
    //搭建小程序本地开发环境
    serverHost: 'localhost',
    tunnelServerUrl: '',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    //腾讯云相关配置Api密钥控制台
    qcloudAppId: '1259412493',
    qcloudSecretId: 'AKID71lIYDfkcDVfcI6uEI8jMjpeDcnixlZT',
    qcloudSecretKey: 'B7mhfMktvgBQVJtEI6gz283hDSR8YijU',
    wxMessageToken: '',
    networkTimeout: 3000,

    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: '',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'zhwlapplet',
        pass: 'root',
        char: 'utf8mb4'
    },


    /**
    * SQL Server 配置，用户存储sesion和用户信息
    */
    /*SQL Server: {
        host:'localhost',
        port: 1433,
        user: sa,
        db: 'zhihuiwuliu',
        pass: '',
        char: 'utf8mb4'
    },*/

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
