import Navigo from "navigo"
import { fromJSON } from "postcss"

import Navigo from "navigo";
import AboutPage from "./src/pages/about";

const router = new Navigo("/", { linkSelector: "a"});

const print = (content) => {
    document.querySelector("#app").innerHTML = content
};
const HomePage = {
    render(){
        return `Home Page`;
    },
};

router.on({
    "/":() =>{
        print("Home page");
    },
    "/about": () => {
        print("About page");
    },
    "/product": () => {
        print("Product page");
    },
});