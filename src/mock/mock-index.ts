import Mock from "mockjs";
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
* @description: 固定值替代随机数
* @param {*} Min
* @param {*} Max
* @return {*}
*/
function RandomNumBoth(Min: any, Max: any) {
    // 返回固定值，取中间值
    return Math.floor((Min + Max) / 2);
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
                    newDataNum: 55,
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
                    alarmNum: 550,
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
                        { provinceName: "北京市", cityName: "北京市", countyName: "东城区", createTime: "2024-03-15 10:30:45", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10000, onlineState: 1 },
                        { provinceName: "上海市", cityName: "上海市", countyName: "黄浦区", createTime: "2024-03-15 11:20:15", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10001, onlineState: 0 },
                        { provinceName: "广东省", cityName: "广州市", countyName: "天河区", createTime: "2024-03-15 12:15:30", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10002, onlineState: 1 },
                        { provinceName: "浙江省", cityName: "杭州市", countyName: "西湖区", createTime: "2024-03-15 13:45:22", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10003, onlineState: 1 },
                        { provinceName: "江苏省", cityName: "南京市", countyName: "鼓楼区", createTime: "2024-03-15 14:10:18", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10004, onlineState: 0 },
                        { provinceName: "四川省", cityName: "成都市", countyName: "武侯区", createTime: "2024-03-15 15:25:33", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10005, onlineState: 1 },
                        { provinceName: "湖北省", cityName: "武汉市", countyName: "江汉区", createTime: "2024-03-15 16:05:42", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10006, onlineState: 1 },
                        { provinceName: "福建省", cityName: "厦门市", countyName: "思明区", createTime: "2024-03-15 17:30:11", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10007, onlineState: 0 },
                        { provinceName: "山东省", cityName: "青岛市", countyName: "市南区", createTime: "2024-03-15 18:20:25", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10008, onlineState: 1 },
                        { provinceName: "河南省", cityName: "郑州市", countyName: "金水区", createTime: "2024-03-15 19:15:37", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10009, onlineState: 0 },
                        { provinceName: "辽宁省", cityName: "大连市", countyName: "中山区", createTime: "2024-03-16 08:40:55", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10010, onlineState: 1 },
                        { provinceName: "陕西省", cityName: "西安市", countyName: "雁塔区", createTime: "2024-03-16 09:25:18", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10011, onlineState: 1 },
                        { provinceName: "重庆市", cityName: "重庆市", countyName: "渝中区", createTime: "2024-03-16 10:35:29", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10012, onlineState: 0 },
                        { provinceName: "安徽省", cityName: "合肥市", countyName: "蜀山区", createTime: "2024-03-16 11:50:33", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10013, onlineState: 1 },
                        { provinceName: "湖南省", cityName: "长沙市", countyName: "岳麓区", createTime: "2024-03-16 12:40:47", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10014, onlineState: 0 },
                        { provinceName: "河北省", cityName: "石家庄市", countyName: "长安区", createTime: "2024-03-16 13:55:21", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10015, onlineState: 1 },
                        { provinceName: "江西省", cityName: "南昌市", countyName: "东湖区", createTime: "2024-03-16 14:30:38", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10016, onlineState: 1 },
                        { provinceName: "黑龙江省", cityName: "哈尔滨市", countyName: "南岗区", createTime: "2024-03-16 15:20:42", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10017, onlineState: 0 },
                        { provinceName: "云南省", cityName: "昆明市", countyName: "盘龙区", createTime: "2024-03-16 16:10:19", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10018, onlineState: 1 },
                        { provinceName: "贵州省", cityName: "贵阳市", countyName: "云岩区", createTime: "2024-03-16 17:05:27", deviceId: "6c512d754bbcd6d7cd86abce0e0cac58", gatewayno: 10019, onlineState: 0 }
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
                    numList: [450, 680, 320, 540, 780, 620],
                    numList2: [380, 520, 280, 490, 650, 420]
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
            // 使用固定数据替代随机生成
            const fixedData = [
                { value: 950, name: "上海市" },
                { value: 880, name: "北京市" },
                { value: 820, name: "广州市" },
                { value: 760, name: "深圳市" },
                { value: 680, name: "杭州市" },
                { value: 620, name: "成都市" },
                { value: 580, name: "武汉市" },
                { value: 520, name: "南京市" }
            ]
            // 按照值从大到小排序
            let arr = fixedData.sort((a: any, b: any) => {
                return b.value - a.value
            })
            let a = {
                success: true,
                data: arr
            }
            return a
        }
    },
    //右下
    {
        url: "/bigscreen/rightBottom",
        type: "get",
        response: () => {
            const a = {
                success: true,
                data: {
                    list: [
                        { alertdetail: "设备温度过高", alertname: "水浸告警", alertvalue: 125.5, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10000, phase: "A1", sbInfo: "请立即检查设备运行状态并进行维护", terminalno: 100, provinceName: "北京市", cityName: "北京市", countyName: "朝阳区" },
                        { alertdetail: "电压不稳定", alertname: "各种报警", alertvalue: 180.2, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10001, phase: "A1", sbInfo: "电压波动较大需要进行稳压处理", terminalno: 101, provinceName: "上海市", cityName: "上海市", countyName: "浦东新区" },
                        { alertdetail: "信号中断", alertname: "水浸告警", alertvalue: 95.8, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10002, phase: "A1", sbInfo: "网络连接异常请检查网络设备", terminalno: 102, provinceName: "广东省", cityName: "广州市", countyName: "天河区" },
                        { alertdetail: "设备离线", alertname: "各种报警", alertvalue: 75.3, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10003, phase: "A1", sbInfo: "设备已离线请检查电源和网络连接", terminalno: 103, provinceName: "浙江省", cityName: "杭州市", countyName: "西湖区" },
                        { alertdetail: "数据异常", alertname: "水浸告警", alertvalue: 150.6, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10004, phase: "A1", sbInfo: "数据采集异常需要重新校准设备", terminalno: 104, provinceName: "江苏省", cityName: "南京市", countyName: "鼓楼区" },
                        { alertdetail: "电流过大", alertname: "各种报警", alertvalue: 185.9, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10005, phase: "A1", sbInfo: "电流超过安全阈值请立即处理", terminalno: 105, provinceName: "四川省", cityName: "成都市", countyName: "武侯区" },
                        { alertdetail: "系统故障", alertname: "水浸告警", alertvalue: 110.2, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10006, phase: "A1", sbInfo: "系统运行异常需要重启或维修", terminalno: 106, provinceName: "湖北省", cityName: "武汉市", countyName: "江汉区" },
                        { alertdetail: "传感器损坏", alertname: "各种报警", alertvalue: 65.7, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10007, phase: "A1", sbInfo: "传感器数据不准确需要更换新的传感器", terminalno: 107, provinceName: "福建省", cityName: "厦门市", countyName: "思明区" },
                        { alertdetail: "电池电量低", alertname: "水浸告警", alertvalue: 72.4, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10008, phase: "A1", sbInfo: "备用电池电量不足请及时充电或更换", terminalno: 108, provinceName: "山东省", cityName: "青岛市", countyName: "市南区" },
                        { alertdetail: "通信延迟", alertname: "各种报警", alertvalue: 88.3, createtime: "2022-04-19 08:38:33", deviceid: null, gatewayno: 10009, phase: "A1", sbInfo: "数据传输延迟严重请检查网络质量", terminalno: 109, provinceName: "河南省", cityName: "郑州市", countyName: "金水区" }
                    ]
                }
            }
            return a
        }
    },
    //安装计划
    {
        url: "/bigscreen/installationPlan",
        type: "get",
        response: () => {
            // 使用固定数据替代随机生成
            const a = {
                category: ["北京市", "上海市", "广州市", "深圳市", "杭州市", "南京市", "成都市", "武汉市", "西安市", "重庆市", 
                          "天津市", "苏州市", "长沙市", "郑州市", "青岛市", "大连市", "宁波市", "厦门市", "福州市", "哈尔滨市", 
                          "济南市", "合肥市", "昆明市", "贵阳市", "南宁市", "太原市", "石家庄市", "沈阳市"],
                barData: [65, 78, 45, 92, 55, 72, 38, 84, 63, 50, 75, 42, 88, 59, 70, 48, 82, 67, 53, 79, 61, 74, 56, 85, 69, 47, 80, 58],
                lineData: [120, 150, 90, 180, 110, 140, 80, 160, 130, 100, 145, 85, 170, 115, 135, 95, 155, 125, 105, 150, 120, 140, 110, 165, 130, 95, 155, 115],
                rateData: [54, 52, 50, 51, 50, 51, 48, 53, 48, 50, 52, 49, 52, 51, 52, 51, 53, 54, 50, 53, 51, 53, 51, 52, 53, 49, 52, 50]
            }
            return {
                success: true,
                data: a
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
                // 使用固定城市数据
                const a = {
                    success: true,
                    data: {
                        dataList: [
                            { name: "北京市", value: 850 },
                            { name: "上海市", value: 920 },
                            { name: "广州市", value: 780 },
                            { name: "深圳市", value: 830 },
                            { name: "杭州市", value: 650 },
                            { name: "南京市", value: 580 },
                            { name: "成都市", value: 720 },
                            { name: "武汉市", value: 630 },
                            { name: "西安市", value: 540 },
                            { name: "重庆市", value: 690 },
                            { name: "天津市", value: 480 },
                            { name: "苏州市", value: 520 },
                            { name: "长沙市", value: 450 },
                            { name: "郑州市", value: 420 },
                            { name: "青岛市", value: 380 },
                            { name: "大连市", value: 350 },
                            { name: "宁波市", value: 320 },
                            { name: "厦门市", value: 290 },
                            { name: "福州市", value: 260 },
                            { name: "哈尔滨市", value: 230 }
                        ],
                        regionCode: params.regionCode,//-代表中国
                    }
                }
                return a
            } else {
                // 使用固定省份数据
                const a = {
                    success: true,
                    data: {
                        dataList: [
                            { name: "北京市", value: 950 },
                            { name: "上海市", value: 1050 },
                            { name: "广东省", value: 980 },
                            { name: "浙江省", value: 850 },
                            { name: "江苏省", value: 820 },
                            { name: "四川省", value: 750 },
                            { name: "湖北省", value: 680 },
                            { name: "福建省", value: 620 },
                            { name: "山东省", value: 580 },
                            { name: "河南省", value: 520 },
                            { name: "陕西省", value: 480 },
                            { name: "重庆市", value: 450 }
                        ],
                        regionCode: 'china',
                    }
                }
                return a
            }
        }
    }
];

