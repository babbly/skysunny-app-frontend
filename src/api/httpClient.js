import Axios from 'axios';
import util from 'util';
import Const from '../const';

const makeUrl = (url, params) => {
    // let result = serverUrl + url;
    let result = "https://skysunny-api.mayoube.co.kr" + url;
    if (params != null) params.forEach(param => {
        result = util.format(result, param);
    });
    console.log('url: ' + result);
    return result;
};

const loadingStart = () => {
    global.loadingCount++;
    if (global.loadingCount == 1) {
        this.dlg.show();
    }
};

const naverGetProfile = (token, hideLoading) => {
    if (!hideLoading) loadingStart();
    headers = {
        Accept: 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: 'Bearer ' + token,
    };
    return new Promise((resolve, reject) => {
        Axios({
            method: 'GET',
            url: 'https://openapi.naver.com/v1/nid/me',
            withCredentials: true,
            headers: headers,
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });
    });
};

const loadingEnd = async () => {
    try {
        if (global.loadingCount <= 1) {
            this.dlg.dismiss();
        }
    } catch (e) { }
    global.loadingCount--;
};

const defaultRequestConfig = {
    withCredentials: true,
    headers: {
        Accept: 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
    },
};


const httpGet = (url, params, data, hideLoading) => {
    console.log("++++++++++++++httpGet=" + url)
    if (!hideLoading) loadingStart();
    return new Promise((resolve, reject) => {
        Axios.get(makeUrl(url, params), defaultRequestConfig)
            .then(responseResolve(hideLoading, resolve))
            .catch(errorReject(hideLoading, reject, url));
    });
};

const httpPost = (url, params, data, hideLoading) => {
    console.log('data: ' + JSON.stringify(data));
    if (!hideLoading) loadingStart();
    return new Promise((resolve, reject) => {
        Axios.post(makeUrl(url, params), data, defaultRequestConfig)
            .then(responseResolve(hideLoading, resolve))
            .catch(errorReject(hideLoading, reject, url));
    });
};
const httpPut = (url, params, data, hideLoading) => {
    console.log("++++++++++++++httpPut=" + url)
    if (!hideLoading) loadingStart();
    return new Promise((resolve, reject) => {
        Axios.put(makeUrl(url, params), data, defaultRequestConfig)
            .then(responseResolve(hideLoading, resolve))
            .catch(errorReject(hideLoading, reject, url));
    });
};

const imageUrl = (idx) => {
    return (
        Const.serverProtocol +
        '://' +
        Const.serverIp +
        ':' +
        Const.serverPort +
        Const.serverContext +
        '/file/' +
        idx
    );
};

const serverUrl =
    Const.serverProtocol +
    '://' +
    Const.serverIp +
    ':' +
    Const.serverPort +
    Const.serverContext;

const httpUrl = {
    // login
    login: '/auth/login',
    logout: '/logout',
    userResendEmailSignup: '/user/resend/email/signup/%s',
    snsLogin: '/snslogin',
    tokenRegist: '/push/token',

    // signup
    signup: '/user/create',
    userCheckId: '/user/check/id/%s',

    // findIdPw
    findId: '/user/findId?name=%s&tel=%s',
    findPw: '/user/findPw?id=%s&name=%s&tel=%s',
    changePw: '/user/updatePw',

    favoriteStore: '/favorites?sortType=%s&keyword=%s',
    storeDetail: '/stores/2'



};
export {
    httpGet,
    httpPost,
    httpPut,
    httpUrl, imageUrl,
    naverGetProfile, serverUrl
};

function errorReject(hideLoading, reject, url) {
    if (!hideLoading) loadingEnd();
    return error => {
        console.log('## http error: ' + url + " - " + JSON.stringify(error, null, 4));
        if (error.message.indexOf('401') >= 0) {
            Alert.alert("장기간 미사용하여 자동 로그아웃 되었습니다! 다시 로그인해주세요.");
        } else {
            Alert.alert(
                "서버 요청 오류",
                `서버 요청 중 오류가 발생했습니다. [ ${url} ]`
            );
        }
        reject(error);
    };
}

function responseResolve(hideLoading, resolve) {

    if (!hideLoading) loadingEnd();
    return response => {
        // console.log('response=' + JSON.stringify(response));
        // if (response.data == "E10003") Alert.alert("장기간 미사용하여 자동 로그아웃 되었습니다!");
        resolve(response.data);
    };
}
