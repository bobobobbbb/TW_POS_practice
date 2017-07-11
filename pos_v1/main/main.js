'use strict';

//TODO: 请在该文件中实现练习要求并删除此注释
//main.js
var fixturesJsFileObj = require('../test/fixtures')   //导入loadAllItems与loadPromotions
const loadAllItems = fixturesJsFileObj.loadAllItems()
const loadPromotions = fixturesJsFileObj.loadPromotions()

const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

function printReceipt(tags) {
   var itemsArray = createItemsList(tags) 
   var itemsArrayPrivilege = dealWithPrivilege(itemsArray)
   showTable(itemsArrayPrivilege)
}

function showTable(itemsArrayPrivilege){
}

function createItemsList(inputs){
  var goodsInformation = loadAllItems;
  var array = loadPromotions;
  var goodsPromotion = array[0]
  var t = 0;  var shoppingGoodsInformation = new Array();
  var barcode = new Array();
  var count = new Array();
  barcode[0] = inputs[0];
  count[0] = 0
  for (var i = 0; i<inputs.length; i++) {
    if (inputs[i].length == 10) {
      if (barcode[t] == inputs[i]) {
        count[t]++;
      }
      else {
        barcode[++t] = inputs[i];
        count[t] = 1;
      }
    }
    else {
      var barArray = inputs[i].split('-');
      if (barcode[t] == barArray[0]) {
        count[t] += parseFloat(barArray[1]);
      }
      else {
        count[++t] = parseFloat(barArray[1]);
        barcode[t] = barArray[0];
      }
    }
  }

  var resArray = new Array()
  if (barcode.length !== count.length) {
      throw new Error("barcode的长度与count的长度不相等")
  }
  for (let i = 0; i < count.length; i++) {
    let curObj = new Object()
    curObj.barcode = barcode[i]
    curObj.count = count[i]
    resArray.push(curObj)
  }
  return resArray
}

//传入参数：创建好的array对象
//返回值：处理好的优惠array对象
function dealWithPrivilege(inputs) {
    var resArray = new Array()
    for (let i = 0; i < inputs.length; i++) {
        let curBarcode = inputs[i].barcode      
        let curCount = inputs[i].count                     //当前遍历到的barcode
        if (loadPromotions[0].barcodes.indexOf(curBarcode) != -1 ) { //如果当前barcodes存在于优惠列表中
            inputs[i].less = calculateLess(curCount)
        } else { //如果当前barcodes存在于优惠列表中
            inputs[i].less = 0
        }
    }
    return inputs
}

function calculateLess(count) {
    var less = parseInt(count / 3)
    return less
}

function showTable(inputs) {
    console.log(`***<没钱赚商店>收据***\n`)
    var totalPrice = 0
    var saveMoney = 0
    for (let i = 0; i < inputs.length; i++) {
        let indexOfLoadAllItem = findIndexFromLoadAllItem(inputs[i].barcode)
        let curItem = loadAllItems[indexOfLoadAllItem]
        let curItemTotalPrice = curItem.price * (inputs[i].count - inputs[i].less)
        totalPrice += curItemTotalPrice
        saveMoney += curItem.price * inputs[i].less
        console.log(`名称：${curItem['name']}，数量：${inputs[i].count}${curItem['unit']}，单价：${curItem['price'].toFixed(2)}(元)，小计：${curItemTotalPrice.toFixed(2)}(元)\n`)
    }
    console.log('----------------------\n')
    console.log(`总计：${totalPrice.toFixed(2)}\n`)
    console.log(`节省：${saveMoney.toFixed(2)}\n`)
    
}

function findIndexFromLoadAllItem(barcode) {
    for (let i = 0; i < loadAllItems.length; i++) {
        if (loadAllItems[i].barcode == barcode) {
            return i
        }
    }
    return null
}

//单一脚本运行
printReceipt(tags)