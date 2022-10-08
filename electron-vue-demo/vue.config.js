/*
 * @Author: Brightness
 * @Date: 2021-02-18 08:32:30
 * @LastEditors: Brightness
 * @LastEditTime: 2021-02-18 09:39:12
 * @Description: file content
 */
const path = require('path');
function resolve (dir) { 
      return path.join(__dirname, dir); 
}
module.exports = {   
    publicPath: './', 
    devServer: {    
     // can be overwritten by process.env.HOST   
    host: '0.0.0.0',      
    port: 8080   },   
    chainWebpack: config => {     
        config.resolve.alias       
        .set('@', resolve('src'))       
        .set('src', resolve('src'))       
        .set('common', resolve('src/common'))       
        .set('components', resolve('src/components'));   
    },
    pluginOptions: {
        electronBuilder: {
          nodeIntegration: true,
          builderOptions: {
            productName: 'AppDemo'
          }
        }
    } 
};