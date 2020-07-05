(function () {
    'use strict';

    //************************ MODULE ****************************
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    //************************ Controler ****************************
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ctrl1 = this;
        ctrl1.items = ShoppingListCheckOffService.getItemsToBuy();

        ctrl1.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
            console.log(ctrl1.items);
        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var ctrl2 = this;
        ctrl2.items = ShoppingListCheckOffService.getItemsBought();

    }

    //************************ ServiceShopp ****************************

    function ShoppingListCheckOffService() {
        var service = this;
        var itemsToBuy = [
            {
                itemName : "Cookies",
                itemQuantity : "10"
            },
            {
                itemName : "Milk",
                itemQuantity : "2"
            },
            {
                itemName : "Donuts",
                itemQuantity : "3"
            },
            {
                itemName : "Chocolate",
                itemQuantity : "6"
            }
        ];
        var itemsBought = [];

        service.buyItem = function (index) {
            itemsBought.push({
                itemName : itemsToBuy[index].itemName,
                itemQuantity :  itemsToBuy[index].itemQuantity
            })
            itemsToBuy.splice(index, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };
        service.getItemsBought = function () {
            console.log(itemsToBuy);
            return itemsBought;
        };
    }


})();
