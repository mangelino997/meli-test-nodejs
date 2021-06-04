class Item {
    constructor({ id, title, thumbnail, condition, shipping, currency_id, price, decimals = '00' }, sold_quantity, description ) {
        this.id = id;
        this.title = title;
        this.picture = thumbnail;
        this.condition = condition;
        this.free_shipping = shipping && shipping.free_shipping;
        this.price = {
            'currency': currency_id,
            'amount': price,
            'decimals': decimals
        };
        if (sold_quantity) this.sold_quantity = sold_quantity;
        if (description) this.description = description;
    }
}
module.exports = Item