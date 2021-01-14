// 随机切帧函数
function randomAd(ad_key, first_imgarr, storage_ad_obj, storage_img, status, obj_current_key){
    // alert(1111111111111111)
    console.log(ad_key, first_imgarr, storage_ad_obj, storage_img, status, obj_current_key);
  if(!first_imgarr || first_imgarr.length == 0) {
    return [];
  }
console.log(first_imgarr);
  if(first_imgarr.length == 1) { //如果1张默认展示一张

    return first_imgarr[0];
    
  } else if(first_imgarr.length == 2) { //如果2张进行切帧
    
    if(storage_img && storage_img[status]) { //缓存已存在进行两帧循环

      let currentIndex = storage_img[obj_current_key];
      if(currentIndex > 0) {
        storage_img[obj_current_key] = 0;
        localStorage.setItem(ad_key, JSON.stringify(storage_img));
        return first_imgarr[0];
      }
      currentIndex ++;
      storage_img[obj_current_key] = currentIndex;
      localStorage.setItem(ad_key, JSON.stringify(storage_img));                                                                                                                                                                                                                                                                        
      return first_imgarr[currentIndex];

    } else { //首次进入页面随机选取一张图片存入缓存
      
      let random_img = first_imgarr[Math.floor((Math.random()*first_imgarr.length))]; //如果等于2张随机选择一张
      let index = first_imgarr.indexOf(random_img); //所选数据下标，保存到缓存中进行切帧使用
      storage_ad_obj[obj_current_key] = index;
      storage_ad_obj[status] = true;
      localStorage.setItem(ad_key, JSON.stringify(storage_ad_obj));
      return first_imgarr[index];

    }

  }
}