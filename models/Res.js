
class Res {
    constructor(author, categories, items) {
        this.author = author;
        this.items = items || [];
        if (categories) this.categories = categories || [];
    }
}
module.exports = Res
