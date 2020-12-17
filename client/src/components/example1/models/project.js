import { categories } from "./category";
import Img1 from "../../../img/portfolio-1.jpg";
import Img2 from "../../../img/portfolio-2.jpg";
import Img3 from "../../../img/portfolio-3.jpg";

export default class Project {
    constructor(name, description, category, img) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.img = img;
        this.id = Math.floor(Math.random() * 100);
    }
}

export const projects = [
    new Project(
        "Minimalistic Design",
        "Omschrijving van de project. Here",
        categories[0],
        Img1
    ),
    new Project(
        "Sukcesvole Marketing",
        "Omschrijving van de project. Here",
        categories[1],
        Img2
    ),
    new Project(
        "Development",
        "Omschrijving van de project. Here",
        categories[2],
        Img3
    ),
    new Project(
        "Surrealism",
        "Omschrijving van de project. Here",
        categories[0],
        Img1
    ),
    new Project(
        "Market Analyse",
        "Omschrijving van de project. Here",
        categories[1],
        Img3
    ),
    new Project(
        "Creative",
        "Omschrijving van de project. Here",
        categories[2],
        Img2
    ),
];
