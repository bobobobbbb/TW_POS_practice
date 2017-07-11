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
  for (let i = 0; i < barcode.length; i++) {
    var curObj = new Object()
    curObj['barcode'] = barcode
    curObj['count'] = count
    resArray.push(curOBj)
  }
  return resArray
}

//传入参数：创建好的array对象
//返回值：处理好的优惠array对象
function dealWithPrivilege(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (loadPromotions[0].barcodes.indexOf(inputs[i].barcode) != -1 ) { //如果当前项目存在于优惠列表中
            
        } else {
            
        }
    }

}




function printReceipt(input) {
    itemsList = new Object()
    var expectText = '';
    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index] in itemsList) {itemsList[inputs[index]] += 1;}
        else {itemsList[inputs[index]] = 1;}
    }

    expectText += '***<没钱赚商店>购物清单***\n' 
    var sumPrice = 0;
    var allItems = loadAllItems()
    for (var keyname in itemsList) {
        var index = parseInt(keyname.substring(4))
        var currentObj = allItems[index]
        var totalPrice = itemsList[keyname] * currentObj.price
        console.log(currentObj.unit)
        sumPrice += totalPrice
        expectText += '名称：'+ currentObj.name + '，数量：' + itemsList[keyname] + currentObj.unit + 
        '，单价：' + currentObj.price.toFixed(2) + '(元)，小计：' + totalPrice.toFixed(2) + '(元)\n'
    }
    expectText += "----------------------\n"
    expectText += "总计：" + sumPrice.toFixed(2) + '(元)\n' 
    expectText += '**********************'
    return expectText
}
