import Header from "../components/header";
import Footer from "../components/footer";
import News from "../components/news";
import New2 from "../components/new2";
const HomePage = {
    render(){
        return `
        ${Header.render()}
        <h1 class="pb-8"><strong>TIN TỨC HỌC TẬP</strong></h1>
        <div class="grid grid-cols-3 gap-3">
        ${News.render()}
        </div>
        <h1 class="py-8"><strong>HOẠT ĐỘNG SINH VIÊN</strong></h1>
        <div class=" grid grid-cols-3 gap-3">
        ${New2.render()}
        </div>
        ${Footer.render()}
        `
    },
};
export default HomePage;