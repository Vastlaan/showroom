export default class Category {
    constructor(type) {
        this.type = type;
        this.id = Math.floor(Math.random() * 100);
    }
}

export const categories = [
    new Category("design"),
    new Category("marketing"),
    new Category("development"),
];
