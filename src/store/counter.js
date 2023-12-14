     import { defineStore } from 'pinia'

    // 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
    // 第一个参数是你的应用中 Store 的唯一 ID。
    export const useCounterStore = defineStore('counter', () => {
        const data = [
          {name:'口笛',price:9,number:1,image:require('@/assets/img/fabu/kodi.jpg'),id: 1,Introduction: '将吹嘴含在口中,用噪子哼哼曲调,用声带的振动发出的声音带动口笛气鸣腔和笛膜腔的振动共鸣从而发出动听的音色'},
          {name:'罗技鼠标G705',price:99,number:1,image:require('@/assets/img/g705-gallery-1.webp'),id:2,Introduction:'来自 Aurora 系列的 G705 无线游戏鼠标的曲线造型可提高舒适度和控制力，专为较小的手掌而设计'},
          {name:'华为mate60pro',price:5999,number:2,image:require('@/assets/img/428_428_D5053BB8A6FECB4906EC5869E78CEEC5mp.webp'),id:3,Introduction:'双卫星通信，超可靠玄武架构，全焦段超清影像，静谧通话'},
          {name:'Kingston DataTraveler 70',price:129,number:1, image:require('@/assets/img/fabu/upan.jpg'),id: 4,Introduction: 'Kingston’s DataTraveler 70® 是 USB 3.2 Gen 1 标准的便携式、轻便型 USB-C1 闪存盘。它设计用于兼容的 USB-C 设备，例如笔记本电脑、便携式计算机、平板电脑和手机'},
          {name:'博锐剃须刀',price:99,number:1,image:require('@/assets/img/fabu/tixudao.jpg'),id:5,Introduction:'全能净剃，浮动贴面剃须。 上下左右灵动刀头，360度贴合面部轮廓，USB充电，Type-c 接口，充电1小时，超长续航60分钟，即插即用'},
          {name:'华为matepad11',price:2999,number:2,image:require('@/assets/img/Huawei-matepad-11-inch-2023-display@2x.webp'),id:6,Introduction:'华为matepad11拥有一块10.95英寸屏幕,机身中框采用微弧设计 在机身顶部和底部采用中轴对称开孔,放置了4个哈曼卡顿调音扬声器。'},
          {name:'拯救者Y7000P',price:6999,number:1,image:require('@/assets/img/v2-fad11c7ad6e92f516116c4343d5efacb_720w.png'),id:7,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:8,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 9,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
          {name:'TECSUN收音机',price:329,number:1,image:require('@/assets/img/fabu/shouyinji.jpg'),id: 10,Introduction: '德生收音机的人机界面友好，操作简便，可接收调频立体声、中波、长波、短波、单边带（SSB）通信信号，中短波采用了模拟高中电路、多次变频及现代DSP数字解调技术，提高接收灵敏度、选择性和抗镜像干扰的能力，调频接收范围64-108MHz，适合全球调频广播接收。'},
          {name:'北欧海盗肌酸',price:99,number:1,image:require('@/assets/img/fabu/jisuan.jpg'),id: 11,Introduction: '北欧海盗肌酸粉300g一水肌酸粉耐力爆发力健身增肌非氮泵bcaa'},
          {name:'组装键盘-达尔优A840',price:229,number:1,image:require('@/assets/img/fabu/jianpan.jpg'),id: 12,Introduction: '达尔优A840樱桃cherry轴PBT键帽A87机械键盘青轴电脑游戏电竞黑轴'},
          {name:'DJI Mavic Air 2',price:2500,number:8,image:require('@/assets/img/mavic-air-2.jpg'),id: 13,Introduction: 'DJI Mavic Air 2 是一款便携式无人机，具有卓越的飞行性能、高清摄像和智能飞行模式，适合航拍爱好者'},
          {name:'Samsung 4K QLED TV',price:5000,number:2,image:require('@/assets/img/samsung-qled-tv.jpg'),id: 14,Introduction: 'Samsung 4K QLED TV 是一款高分辨率、高动态范围的智能电视，提供逼真的图像和出色的视觉体验'},
          {name:'Bose QuietComfort 35 II',price:1200,number:1,image:require('@/assets/img/bose-qc35.jpg'),id: 15,Introduction: 'Bose QuietComfort 35 II 是一款无线降噪耳机，提供卓越的音质和舒适的佩戴体验，适合音乐和娱乐爱好者'},
          {name:'富光商务保温杯',price:39,number:1,image:require('@/assets/img/fabu/baowenbei.jpg'),id:16,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'Cruciar X6',price:256,number:1,image:require('@/assets/img/fabu/yinpan.jpg'),id:17,Introduction: 'Crucial® 英睿达™ X6 移动固态硬盘，速度比大多数传统 HDD 快 5.6 倍，可使您快速加载和传输文件，更快返回日常事务。从此告别缓慢、脆弱的硬盘，无需再等待漫长的加载时间'},
          {name:'《塞尔达传说王国之泪》Switch OLED限定主机',price:1999,number:1, image:require('@/assets/img/fabu/switch.jpg'),id: 18,Introduction: '采用《塞尔达传说:王国之泪》的特殊设计,包括在底座前面的熟悉的 Hylian Crest 。 Nintendo Switch — OLED 型号具有充满活力的 7 英寸 OLED 屏幕、宽可调节支架、带有有线局域网端口的底座 (单独销售)、64 GB 内部存储 (其中一部分为系统使用),以及手持和桌面模式下的增强音频'},
        ]
        
        const purchase = [
          {name:'罗技鼠标G705',price:99,number:1,image:require('@/assets/img/g705-gallery-1.webp'),id:1,Introduction:'来自 Aurora 系列的 G705 无线游戏鼠标的曲线造型可提高舒适度和控制力，专为较小的手掌而设计'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:2,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 3,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
          {name:'华为matepad11',price:2999,number:2,image:require('@/assets/img/Huawei-matepad-11-inch-2023-display@2x.webp'),id:4,Introduction:'华为matepad11拥有一块10.95英寸屏幕,机身中框采用微弧设计 在机身顶部和底部采用中轴对称开孔,放置了4个哈曼卡顿调音扬声器。'},
          {name:'拯救者Y7000P',price:6999,number:1,image:require('@/assets/img/v2-fad11c7ad6e92f516116c4343d5efacb_720w.png'),id:5,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:6,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 7,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
        ]
        const myfabu = [
          {name:'Kingston DataTraveler 70',price:129,number:1, image:require('@/assets/img/fabu/upan.jpg'),id: 1,Introduction: 'Kingston’s DataTraveler 70® 是 USB 3.2 Gen 1 标准的便携式、轻便型 USB-C1 闪存盘。它设计用于兼容的 USB-C 设备，例如笔记本电脑、便携式计算机、平板电脑和手机'},
          {name:'博锐剃须刀',price:99,number:1,image:require('@/assets/img/fabu/tixudao.jpg'),id:2,Introduction:'全能净剃，浮动贴面剃须。 上下左右灵动刀头，360度贴合面部轮廓，USB充电，Type-c 接口，充电1小时，超长续航60分钟，即插即用'},
          {name:'富光商务保温杯',price:39,number:1,image:require('@/assets/img/fabu/baowenbei.jpg'),id:3,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'Cruciar X6',price:256,number:1,image:require('@/assets/img/fabu/yinpan.jpg'),id:4,Introduction: 'Crucial® 英睿达™ X6 移动固态硬盘，速度比大多数传统 HDD 快 5.6 倍，可使您快速加载和传输文件，更快返回日常事务。从此告别缓慢、脆弱的硬盘，无需再等待漫长的加载时间'},
          {name:'《塞尔达传说王国之泪》Switch OLED限定主机',price:1999,number:1, image:require('@/assets/img/fabu/switch.jpg'),id: 5,Introduction: '采用《塞尔达传说:王国之泪》的特殊设计,包括在底座前面的熟悉的 Hylian Crest 。 Nintendo Switch — OLED 型号具有充满活力的 7 英寸 OLED 屏幕、宽可调节支架、带有有线局域网端口的底座 (单独销售)、64 GB 内部存储 (其中一部分为系统使用),以及手持和桌面模式下的增强音频'},
          {name:'TECSUN收音机',price:329,number:1,image:require('@/assets/img/fabu/shouyinji.jpg'),id: 6,Introduction: '德生收音机的人机界面友好，操作简便，可接收调频立体声、中波、长波、短波、单边带（SSB）通信信号，中短波采用了模拟高中电路、多次变频及现代DSP数字解调技术，提高接收灵敏度、选择性和抗镜像干扰的能力，调频接收范围64-108MHz，适合全球调频广播接收。'},
          {name:'北欧海盗肌酸',price:99,number:1,image:require('@/assets/img/fabu/jisuan.jpg'),id: 7,Introduction: '北欧海盗肌酸粉300g一水肌酸粉耐力爆发力健身增肌非氮泵bcaa'},
          {name:'组装键盘-达尔优A840',price:229,number:1,image:require('@/assets/img/fabu/jianpan.jpg'),id: 8,Introduction: '达尔优A840樱桃cherry轴PBT键帽A87机械键盘青轴电脑游戏电竞黑轴'},
          {name:'口笛',price:9,number:1,image:require('@/assets/img/fabu/kodi.jpg'),id: 9,Introduction: '将吹嘴含在口中,用噪子哼哼曲调,用声带的振动发出的声音带动口笛气鸣腔和笛膜腔的振动共鸣从而发出动听的音色'},
        ]

        const info ={username:"2101080102",password:"031023",Telephone:"18100000000",Place:"Hunan Xiangtan",Address:"No. 1188, Yuhu District, Xiangtan City, Hunan Province, China"}
          
      
        const adddata = (newdata) => {
          data.unshift({
            id: 1,
            ...(newdata.value || newdata),
          });
          // 重新给 ID 赋值
          data.forEach((item, index) => {
            item.id = index + 1;
          });
        };
        
        const deldata = (id)=>{
          const indexToDelete = data.findIndex((item) => item.id === id);
          if (indexToDelete !== -1) {
           data.splice(indexToDelete, 1);
          // 重新给 ID 赋值
          data.forEach((item, index) => {
          item.id = index + 1;
          });
          }
        };

        const addfabu = (newdata)=>{
          myfabu.unshift({
            id: 1,
            ...(newdata.value || newdata),
          });
          // 重新给 ID 赋值
          myfabu.forEach((item, index) => {
            item.id = index + 1;
          });
        }
        
        const delfabu = (name)=>{
          const indexToDelete = myfabu.findIndex((item) => item.name === name);
          if (indexToDelete !== -1) {
            myfabu.splice(indexToDelete, 1);
          }
          myfabu.forEach((item, index) => {
            item.id = index + 1;
          });
        }

        const buy = (id)=>{
          // 从 data 中找到对应的商品
          const selectedProduct = data.find((item) => item.id === id);

          // 将找到的商品添加到 purchase 的前面
          purchase.unshift({
            id: 1,
            ...(selectedProduct || {}),
          });

          // 重新给 purchase 的 id 赋值
          purchase.forEach((item, index) => {
            item.id = index + 1;
            });
         }

        return {data,purchase,myfabu,info,adddata,deldata,addfabu,delfabu,buy}
        })




