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
                    onlineNum: 14256,
                    offlineNum: 63742,
                    alarmNum: 9970,
                    lockNum: 8390,
                    newDataNum: 4508,
                    totalNum: 100868
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
                { value: 7613, name: "山东" }, { value: 7202, name: "河北" }, { value: 6164, name: "江苏" }, 
                { value: 5345, name: "新疆" }, { value: 4810, name: "内蒙古" }, { value: 4727, name: "浙江" }, 
                { value: 4349, name: "河南" }, { value: 4311, name: "安徽" }, { value: 4115, name: "广东" }, 
                { value: 3723, name: "云南" }, { value: 3642, name: "青海" }, { value: 3510, name: "湖北" },
                 { value: 3476, name: "山西" }, { value: 3433, name: "陕西" }, { value: 3138, name: "甘肃" },
                  { value: 2624, name: "宁夏" }, { value: 2563, name: "江西" }, { value: 2052, name: "广西" },
                   { value: 1985, name: "贵州" }, { value: 1873, name: "湖南" }, { value: 1258, name: "福建" },
                    { value: 1213, name: "辽宁" }, { value: 1082, name: "四川" }, { value: 740, name: "海南" }, 
                    { value: 724, name: "天津" }, { value: 717, name: "黑龙江" }, { value: 583, name: "吉林" },
                     { value: 411, name: "上海" }, { value: 403, name: "西藏" }, { value: 309, name: "重庆" }, 
                     { value: 130, name: "北京" } 
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
       //右下
       {
        url: "/bigscreen/rightBottom",
        type: "get",
        response: () => {
            /**
             * @description: 提供右下角省份发电量数据
             * @return {Object} 包含省份名称和对应发电量值的数据列表
             */
            // 创建固定的省份发电量数据列表
            const provinceData = [
                {provinceName: "新疆", alertvalue: 380},
                { provinceName: "内蒙古", alertvalue: 310 },
                { provinceName: "河北省", alertvalue: 303 },
                { provinceName: "青海省", alertvalue: 287 },
                { provinceName: "云南省", alertvalue: 281 },
                { provinceName: "宁夏", alertvalue: 278 },
                { provinceName: "甘肃省", alertvalue: 239 },
                { provinceName: "山东省", alertvalue: 212 },
                { provinceName: "山西省", alertvalue: 191 },
                { provinceName: "湖北省", alertvalue: 180 },
                { provinceName: "浙江省", alertvalue: 160 },
                { provinceName: "贵州省", alertvalue: 147 },
                { provinceName: "江苏省", alertvalue: 145 },
                { provinceName: "广东省", alertvalue: 140 },
                { provinceName: "陕西省", alertvalue: 134 },
                { provinceName: "安徽省", alertvalue: 134 },
                { provinceName: "广西", alertvalue: 91 },
                { provinceName: "江西省", alertvalue: 91 },
                { provinceName: "四川省", alertvalue: 81 },
                { provinceName: "河南省", alertvalue: 68 },
                { provinceName: "黑龙江省", alertvalue: 62 },
                { provinceName: "辽宁省", alertvalue: 57 },
                { provinceName: "湖南省", alertvalue: 48 },
                { provinceName: "吉林省", alertvalue: 44 },
                { provinceName: "天津市", alertvalue: 41 },
                { provinceName: "海南省", alertvalue: 36 },
                { provinceName: "西藏", alertvalue: 11 },
                { provinceName: "福建省", alertvalue: 10 },
                { provinceName: "上海市", alertvalue: 8 },
                { provinceName: "重庆市", alertvalue: 6 },
                { provinceName: "北京市", alertvalue: 1 }
            ];
            
            return {
                success: true,
                data: {
                    list: provinceData
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
               "北京", "天津", "河北", "山西", 
                "山东", "内蒙古", "辽宁", "吉林",
                "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西",
                 "河南", "湖北", "湖南",  
                "重庆", "四川", "陕西", "甘肃", 
                "青海", "宁夏", "新疆" , "西藏", "广东", "广西"
                ,"海南", "贵州", "云南"
            ];
            
            // 使用固定的数据
            const barData = [
                18,182,515,309,921,
                134,235,81,77,122,1797,1204,932,
                351,177,617,624,534,122,142,437,
                80,18,49,8,9,1115,638,108,93,156
            ];
            
            // 计算固定的lineData和rateData
            const lineData = [3,52,1270,677,999,2321,20,41,75,0,39,166,
                156,32,393,0,398,86,30,366,704,
                540,1083,437,2659,149,478,
                281,159,315,1495];
            
            
            
            
            return {
                success: true,
                data: {
                    category: category,
                    barData: barData,
                    lineData: lineData,
                    
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
           // ... existing code ...
        } else {
            // 固定的省份数据 (根据图片修正)
            const provinceData = [
                { name: "内蒙古自治区", value: 8179 },
                { name: "广东省", value: 6955 },
                { name: "江苏省", value: 6330 },
                { name: "山东省", value: 6055 },
                { name: "新疆维吾尔自治区", value: 5313 }, 
                { name: "四川省", value: 5053 },
                { name: "浙江省", value: 4645 },
                { name: "山西省", value: 4386 },
                { name: "云南省", value: 4362 },
                { name: "河北省", value: 3881 },
                { name: "安徽省", value: 3524 },
                { name: "河南省", value: 3388 }, 
                { name: "福建省", value: 3270 },
                { name: "湖北省", value: 3259 },
                { name: "陕西省", value: 3173 },
                { name: "贵州省", value: 2440 },
                { name: "广西壮族自治区", value: 2439 },
                { name: "宁夏回族自治区", value: 2290 }, 
                { name: "辽宁省", value: 2203 },
                { name: "甘肃省", value: 2075 },
                { name: "湖南省", value: 1758 },
                { name: "江西省", value: 1717 },
                { name: "黑龙江省", value: 1285 },
                { name: "重庆市", value: 1149 },
                { name: "吉林省", value: 1109 },
                { name: "青海省", value: 1035 },
                { name: "上海市", value: 1017 },
                { name: "天津市", value: 833 },
                { name: "海南省", value: 468 },
                { name: "北京市", value: 432 },
                { name: "西藏自治区", value: 144 }
                
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
