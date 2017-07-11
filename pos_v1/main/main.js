'use strict';

//TODO: 请在该文件中实现练习要求并删除此注释
const loadAllItems = require('../test/fixtures.js')   //导入loadAllItems
const loadPromotions = require('../test/fixtures.js') //导入loadPromotions

function printReceipt(input) {
    itemsList = new Object()
    for (let i = 0; i < input.length; i++) {
        
    }
}

function 


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
