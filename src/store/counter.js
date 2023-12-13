     import { defineStore } from 'pinia'

    // 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
    // 第一个参数是你的应用中 Store 的唯一 ID。
    export const useCounterStore = defineStore('counter', () => {
        const data = [
          {name:'罗技鼠标G705',price:99,number:1,image:require('@/assets/img/g705-gallery-1.webp'),id:1,Introduction:'来自 Aurora 系列的 G705 无线游戏鼠标的曲线造型可提高舒适度和控制力，专为较小的手掌而设计'},
          {name:'华为mate60pro',price:5999,number:2,image:require('@/assets/img/428_428_D5053BB8A6FECB4906EC5869E78CEEC5mp.webp'),id:2,Introduction:'双卫星通信，超可靠玄武架构，全焦段超清影像，静谧通话'},
          {name:'华为matepad11',price:2999,number:2,image:require('@/assets/img/Huawei-matepad-11-inch-2023-display@2x.webp'),id:3,Introduction:'华为matepad11拥有一块10.95英寸屏幕,机身中框采用微弧设计 在机身顶部和底部采用中轴对称开孔,放置了4个哈曼卡顿调音扬声器。'},
          {name:'拯救者Y7000P',price:6999,number:1,image:require('@/assets/img/v2-fad11c7ad6e92f516116c4343d5efacb_720w.png'),id:4,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:5,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 6,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
          {name:'DJI Mavic Air 2',price:2500,number:8,image:require('@/assets/img/mavic-air-2.jpg'),id: 7,Introduction: 'DJI Mavic Air 2 是一款便携式无人机，具有卓越的飞行性能、高清摄像和智能飞行模式，适合航拍爱好者'},
          {name:'Samsung 4K QLED TV',price:5000,number:2,image:require('@/assets/img/samsung-qled-tv.jpg'),id: 8,Introduction: 'Samsung 4K QLED TV 是一款高分辨率、高动态范围的智能电视，提供逼真的图像和出色的视觉体验'},
          {name:'Bose QuietComfort 35 II',price:1200,number:1,image:require('@/assets/img/bose-qc35.jpg'),id: 9,Introduction: 'Bose QuietComfort 35 II 是一款无线降噪耳机，提供卓越的音质和舒适的佩戴体验，适合音乐和娱乐爱好者'}]
        
        const purchase = [
          {name:'罗技鼠标G705',price:99,number:1,image:require('@/assets/img/g705-gallery-1.webp'),id:1,Introduction:'来自 Aurora 系列的 G705 无线游戏鼠标的曲线造型可提高舒适度和控制力，专为较小的手掌而设计'},
          {name:'Bose QuietComfort 35 II',price:1200,number:1,image:require('@/assets/img/bose-qc35.jpg'),id: 9,Introduction: 'Bose QuietComfort 35 II 是一款无线降噪耳机，提供卓越的音质和舒适的佩戴体验，适合音乐和娱乐爱好者'},
          {name:'Samsung 4K QLED TV',price:5000,number:2,image:require('@/assets/img/samsung-qled-tv.jpg'),id: 8,Introduction: 'Samsung 4K QLED TV 是一款高分辨率、高动态范围的智能电视，提供逼真的图像和出色的视觉体验'},
          {name:'华为mate60pro',price:5999,number:2,image:require('@/assets/img/428_428_D5053BB8A6FECB4906EC5869E78CEEC5mp.webp'),id:2,Introduction:'双卫星通信，超可靠玄武架构，全焦段超清影像，静谧通话'},
          {name:'华为matepad11',price:2999,number:2,image:require('@/assets/img/Huawei-matepad-11-inch-2023-display@2x.webp'),id:3,Introduction:'华为matepad11拥有一块10.95英寸屏幕,机身中框采用微弧设计 在机身顶部和底部采用中轴对称开孔,放置了4个哈曼卡顿调音扬声器。'},
          {name:'拯救者Y7000P',price:6999,number:1,image:require('@/assets/img/v2-fad11c7ad6e92f516116c4343d5efacb_720w.png'),id:4,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:5,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 6,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
          {name:'华为matepad11',price:2999,number:2,image:require('@/assets/img/Huawei-matepad-11-inch-2023-display@2x.webp'),id:3,Introduction:'华为matepad11拥有一块10.95英寸屏幕,机身中框采用微弧设计 在机身顶部和底部采用中轴对称开孔,放置了4个哈曼卡顿调音扬声器。'},
          {name:'拯救者Y7000P',price:6999,number:1,image:require('@/assets/img/v2-fad11c7ad6e92f516116c4343d5efacb_720w.png'),id:4,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:5,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 6,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
        ]
        const myfabu = [
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 6,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
          {name:'华为matepad11',price:2999,number:2,image:require('@/assets/img/Huawei-matepad-11-inch-2023-display@2x.webp'),id:3,Introduction:'华为matepad11拥有一块10.95英寸屏幕,机身中框采用微弧设计 在机身顶部和底部采用中轴对称开孔,放置了4个哈曼卡顿调音扬声器。'},
          {name:'拯救者Y7000P',price:6999,number:1,image:require('@/assets/img/v2-fad11c7ad6e92f516116c4343d5efacb_720w.png'),id:4,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:5,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 6,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
          {name:'Samsung 4K QLED TV',price:5000,number:2,image:require('@/assets/img/samsung-qled-tv.jpg'),id: 8,Introduction: 'Samsung 4K QLED TV 是一款高分辨率、高动态范围的智能电视，提供逼真的图像和出色的视觉体验'},
          {name:'华为mate60pro',price:5999,number:2,image:require('@/assets/img/428_428_D5053BB8A6FECB4906EC5869E78CEEC5mp.webp'),id:2,Introduction:'双卫星通信，超可靠玄武架构，全焦段超清影像，静谧通话'},
          {name:'华为matepad11',price:2999,number:2,image:require('@/assets/img/Huawei-matepad-11-inch-2023-display@2x.webp'),id:3,Introduction:'华为matepad11拥有一块10.95英寸屏幕,机身中框采用微弧设计 在机身顶部和底部采用中轴对称开孔,放置了4个哈曼卡顿调音扬声器。'},
          {name:'拯救者Y7000P',price:6999,number:1,image:require('@/assets/img/v2-fad11c7ad6e92f516116c4343d5efacb_720w.png'),id:4,Introduction:'第13代智能英特尔酷睿 i5-13500H/Windows 11 家庭中文版'},
          {name:'iPhone X',price:2500,number:5,image:require('@/assets/img/ihpone-x.jpg'),id:5,Introduction: 'iPhone X 是一款由 Apple 公司推出的旗舰智能手机。它拥有先进的面部识别技术、强大的性能和出色的摄像能力'},
          {name:'Sony PlayStation 5',price:400,number:1, image:require('@/assets/img/ps5.jpg'),id: 6,Introduction: 'Sony PlayStation 5 是一款次世代游戏主机，支持高清图形、超快加载时间和沉浸式的游戏体验'},
        ]
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

        return {data,purchase,myfabu,adddata,deldata,addfabu,delfabu,buy}
        })




