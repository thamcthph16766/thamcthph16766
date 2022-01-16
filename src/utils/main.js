import Navigo from "navigo";
import HomePage from "../pages/homepage";
import DetailPage from "../pages/detail";
import ProductPage from "../pages/product";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";
import Dashboard from "../pages/dashboard";
import Tintuc from "../pages/Tintuc";
import Add from "../pages/add";
import Edit from "../pages/edit";
// import Header from "./components/header";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    // document.querySelector("#header").innerHTML = Header.render();
    // document.querySelector("#banner").innerHTML = Banner.render();
    document.querySelector("#app").innerHTML = content;
    // document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/header": () => {
        print(AboutPage.render());
    },
    "/SignIn": () => {
        print(SignIn.render());
    },
    "/SignUp": () => {
        print(SignUp.render());
    },
    "/news/:id": ({ data }) => { 
        const { id } = data;
        print(DetailPage.render(+id));
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(ProductPage.render(+id));
    },
    "/dashboard": () => {
        print(Dashboard.render());
    },
    "/tintuc": () => {
        print(Tintuc.render());
    },
    "/add": () => {
        print(Add.render());
    },
    "/edit/:id": ({ data }) => {
        const { id } = data;
        print(Edit.render(+id));
    },
});

router.resolve();