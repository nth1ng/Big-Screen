import Mock from "mockjs";
//处理路径传参
import { parameteUrl } from "@/utils/query-param"

function ArrSet(Arr: any[], id: string): any[] {
    let obj: any = {}
    const arrays = Arr.reduce((setArr, item) => {
        obj[item[id]] ? '' : (obj[item[id]] = true && setArr.push(item))
        return setArr
    }, [])
    return arrays
}
/**
* @description: min ≤ r ≤ max  随机数
* @param {*} Min
* @param {*} Max
* @return {*}
*/
function RandomNumBoth(Min: any, Max: any) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
//左中
export default [
    {
        url: "/bigscreen/countUserNum",
        type: "get",
        response: () => {
            const a = {
                success: true,
                data: {
                    offlineNum: 75,
                    alarmNum: 60,
                    lockNum: 30,
                    newDataNum: 50,
                    totalNum: 368
                }
            }
            return a
        },
    },
    {
        url: "/bigscreen/countDeviceNum",
        type: "get",
        response: () => {
            const a = {
                success: true,
                data: {
                    alarmNum: 500,
                    offlineNum: 25,
                    totalNum: 698
                }
            }
            return a
        }
    },
    //左下
    {
        url: "/bigscreen/leftBottom",
        type: "get",
        response: () => {
            const a = {
                success: true,
                data: {
                    list: [
                        { provinceName: "北京市", cityName: "北京市", countyName: "东城区", createTime: "2024-01-15 08:30:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10000, onlineState: 1 },
                        { provinceName: "上海市", cityName: "上海市", countyName: "黄浦区", createTime: "2024-01-16 09:15:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10001, onlineState: 0 },
                        { provinceName: "广东省", cityName: "广州市", countyName: "天河区", createTime: "2024-01-17 10:20:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10002, onlineState: 1 },
                        { provinceName: "浙江省", cityName: "杭州市", countyName: "西湖区", createTime: "2024-01-18 11:25:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10003, onlineState: 1 },
                        { provinceName: "江苏省", cityName: "南京市", countyName: "鼓楼区", createTime: "2024-01-19 12:30:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10004, onlineState: 0 },
                        { provinceName: "四川省", cityName: "成都市", countyName: "武侯区", createTime: "2024-01-20 13:35:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10005, onlineState: 1 },
                        { provinceName: "湖北省", cityName: "武汉市", countyName: "江汉区", createTime: "2024-01-21 14:40:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10006, onlineState: 0 },
                        { provinceName: "福建省", cityName: "厦门市", countyName: "思明区", createTime: "2024-01-22 15:45:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10007, onlineState: 1 },
                        { provinceName: "山东省", cityName: "青岛市", countyName: "市南区", createTime: "2024-01-23 16:50:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10008, onlineState: 1 },
                        { provinceName: "河南省", cityName: "郑州市", countyName: "金水区", createTime: "2024-01-24 17:55:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10009, onlineState: 0 },
                        { provinceName: "辽宁省", cityName: "大连市", countyName: "中山区", createTime: "2024-01-25 18:00:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10010, onlineState: 1 },
                        { provinceName: "陕西省", cityName: "西安市", countyName: "雁塔区", createTime: "2024-01-26 19:05:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10011, onlineState: 0 },
                        { provinceName: "重庆市", cityName: "重庆市", countyName: "渝中区", createTime: "2024-01-27 20:10:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10012, onlineState: 1 },
                        { provinceName: "天津市", cityName: "天津市", countyName: "和平区", createTime: "2024-01-28 21:15:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10013, onlineState: 1 },
                        { provinceName: "河北省", cityName: "石家庄市", countyName: "长安区", createTime: "2024-01-29 22:20:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10014, onlineState: 0 },
                        { provinceName: "安徽省", cityName: "合肥市", countyName: "蜀山区", createTime: "2024-01-30 23:25:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10015, onlineState: 1 },
                        { provinceName: "江西省", cityName: "南昌市", countyName: "东湖区", createTime: "2024-01-31 00:30:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10016, onlineState: 0 },
                        { provinceName: "湖南省", cityName: "长沙市", countyName: "岳麓区", createTime: "2024-02-01 01:35:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10017, onlineState: 1 },
                        { provinceName: "黑龙江省", cityName: "哈尔滨市", countyName: "南岗区", createTime: "2024-02-02 02:40:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10018, onlineState: 1 },
                        { provinceName: "山西省", cityName: "太原市", countyName: "小店区", createTime: "2024-02-03 03:45:00", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10019, onlineState: 0 }
                    ]
                }
            }
            return a
        }
    },
    //右上
    {
        url: "/bigscreen/alarmNum",
        type: "get",
        response: () => {
            const a = {
                success: true,
                data: {
                    dateList: ['2021-11', '2021-12', '2022-01', '2022-02', '2022-03', "2022-04"],
                    numList: [450, 680, 320, 790, 560, 230],
                    numList2: [320, 450, 280, 510, 680, 350]
                }
            }
            return a
        }
    },
    //右中
    {
        url: "/bigscreen/ranking",
        type: "get",
        response: () => {
            // 使用固定的城市和数值
            const fixedData = [
                { value: 980, name: "上海市" },
                { value: 850, name: "北京市" },
                { value: 720, name: "广州市" },
                { value: 650, name: "深圳市" },
                { value: 580, name: "杭州市" },
                { value: 450, name: "成都市" },
                { value: 380, name: "武汉市" },
                { value: 320, name: "南京市" }
            ];
            
            // 按照数值从大到小排序
            const arr = fixedData.sort((a, b) => {
                return b.value - a.value
            });
            
            return {
                success: true,
                data: arr
            }
        }
    },
    //右下
    {
        url: "/bigscreen/rightBottom",
        type: "get",
        response: () => {
            // 创建固定的告警数据列表
            const alertList = [];
            const alertNames = ["水浸告警", "各种报警"];
            const provinces = ["北京市", "上海市", "广东省", "浙江省", "江苏省", "四川省", "湖北省", "福建省"];
            const cities = ["北京市", "上海市", "广州市", "杭州市", "南京市", "成都市", "武汉市", "厦门市"];
            const counties = ["东城区", "黄浦区", "天河区", "西湖区", "鼓楼区", "武侯区", "江汉区", "思明区"];
            
            for (let i = 0; i < 40; i++) {
                const provinceIndex = i % 8;
                alertList.push({
                    alertdetail: "告警详情" + (i + 1),
                    alertname: alertNames[i % 2],
                    alertvalue: 60 + i * 3.5,
                    createtime: "2022-04-19 08:38:33",
                    deviceid: null,
                    gatewayno: 10000 + i,
                    phase: "A1",
                    sbInfo: "设备信息描述" + (i + 1),
                    terminalno: 100 + i,
                    provinceName: provinces[provinceIndex],
                    cityName: cities[provinceIndex],
                    countyName: counties[provinceIndex]
                });
            }
            
            return {
                success: true,
                data: {
                    list: alertList
                }
            }
        }
    },
    //安装计划
    {
        url: "/bigscreen/installationPlan",
        type: "get",
        response: () => {
            // 使用固定的城市列表
            const category = [
                "北京市", "上海市", "广州市", "深圳市", "杭州市", "南京市", "成都市", "武汉市", 
                "西安市", "重庆市", "天津市", "苏州市", "厦门市", "青岛市", "长沙市", "郑州市", 
                "大连市", "宁波市", "济南市", "哈尔滨市", "沈阳市", "太原市", "合肥市", "福州市", 
                "南昌市", "贵阳市", "昆明市", "南宁市", "石家庄市", "兰州市"
            ];
            
            // 使用固定的数据
            const barData = [
                65, 42, 78, 53, 89, 36, 72, 48, 95, 61, 83, 39, 57, 74, 45, 68, 
                91, 52, 77, 43, 86, 59, 81, 37, 64, 93, 50, 75, 46, 88
            ];
            
            // 计算固定的lineData和rateData
            const lineData = [];
            const rateData = [];
            
            for (let index = 0; index < category.length; index++) {
                const lineNum = 50 + barData[index]; // 固定公式计算
                lineData.push(lineNum);
                const rate = barData[index] / lineNum;
                rateData.push((rate * 100).toFixed(0));
            }
            
            return {
                success: true,
                data: {
                    category: category,
                    barData: barData,
                    lineData: lineData,
                    rateData: rateData
                }
            }
        }
    },
    {
        url: "/bigscreen/centerMap",
        type: "get",
        response: (options: any) => {
            let params = parameteUrl(options.url)
            //不是中国的时候
            if (params.regionCode && !["china"].includes(params.regionCode)) {
                // 固定的城市数据
                const cityData = [];
                const cities = [
                    "北京市", "上海市", "广州市", "深圳市", "杭州市", "南京市", "成都市", "武汉市", "西安市", "重庆市",
                    "天津市", "苏州市", "厦门市", "青岛市", "长沙市", "郑州市", "大连市", "宁波市", "济南市", "哈尔滨市"
                ];
                
                // 为每个城市生成固定的数值
                for (let i = 0; i < 100; i++) {
                    cityData.push({
                        name: cities[i % 20], // 循环使用20个城市
                        value: 100 + i * 9 // 生成固定的数值
                    });
                }
                
                return {
                    success: true,
                    data: {
                        dataList: cityData,
                        regionCode: params.regionCode
                    }
                }
            } else {
                // 固定的省份数据
                const provinceData = [
                    { name: "北京市", value: 980 },
                    { name: "上海市", value: 870 },
                    { name: "广东省", value: 1050 },
                    { name: "浙江省", value: 920 },
                    { name: "江苏省", value: 890 },
                    { name: "四川省", value: 760 },
                    { name: "湖北省", value: 680 },
                    { name: "福建省", value: 630 },
                    { name: "山东省", value: 850 },
                    { name: "河南省", value: 720 },
                    { name: "辽宁省", value: 580 },
                    { name: "陕西省", value: 540 }
                ];
                
                return {
                    success: true,
                    data: {
                        dataList: provinceData,
                        regionCode: 'china'
                    }
                }
            }
        }
    }
];

