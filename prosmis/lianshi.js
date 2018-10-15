window.onload=function () {
    
    function china() {
        console.log("china中国")
        var p =new Promise(function (resolve,reject ) {
            setTimeout(function(){
                console.log('中国  国家')
                // resolve('教育大省份')
                reject('教育大省份')
            },1000)
        })
        return p;
    }
    
    
    function jiangsu(data) {
        console.log("江苏"+data)
        var p =  new Promise(function (resolve,reject) {

            if(data==="教育大省份1"){
                reject('1')
            }else {
                setTimeout(function (){
                    console.log('江苏 省份')
                    resolve('地级市');
                },2000)
            }
        })
        return p;
    }
    
    
    function xian(data) {
        console.log("安阳县"+data)
        var p = new Promise(function (resolve,reject) {
            setTimeout(function(){
                console.log('盱眙县');
                resolve ('淮河镇')
            },2000)
        })
        return p;
    }
    
    china().then(jiangsu).then(xian).then(function (data) {
        console.log(data)
    })
        .catch(function (data) {
            console.log(data)
        })
    // china()
    //     .then(function (data) {
    //         return jiangsu(data)
    //     })
    //     .then(function (data) {
    //         return xian(data)
    //     })
    //     .then(function (data) {
    //         console.log(data)
    //     })
    //     .catch(function (data) {
    //         console.log(data)
    //     })
    
    
}