import ajax from './ajax'
const BASE ='/api';
export const reqAddress=(geohash)=>ajax(`${BASE}/position/${geohash}`);
export const reqCategorys=()=>ajax(BASE+'/index_category');
/*3、根据经纬度获取商铺列表*/
export const reqshops = (latitude,longitude)=>ajax(BASE+'/shops',{latitude,longitude})
/*4、根据经纬度和关键字搜索商铺列表*/
export const reqSearchShops= (geohash,keyword)=>ajax(BASE+'/search_shops',{geohash,keyword});

/*6、用户名密码登陆*/
export const reqLogin_pwd = ({name,pwd,captcha}) =>ajax(BASE+'/login_pwd',{name,pwd,captcha},'POST');
/*7、发送短信验证码*/
export const reqSendcode = (phone) =>ajax(BASE+'/sendcode',{phone});
/*8、手机号验证码登陆*/
export const reqLogin_sms = (phone,code) =>ajax(BASE+'/login_sms',{phone,code},'POST');
/*9、根据会话获取用户信息*/
export const reqUserinfo = ()=> ajax(BASE+'/userinfo');

export const reqLogout = () =>ajax(BASE+'/logout');
export const reqShopGoods = () =>ajax('/goods');
export const reqShopRatings = () =>ajax('/ratings');
export const reqShopInfo = () =>ajax('/info');
