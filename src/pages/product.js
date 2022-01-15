import data2 from "../utils/data2";

const ProductPage = {
    render(id) {
        const result = data2.find((post) => post.id === id);
        console.log(result);
        return `
            <div>
                <img src="${result.img}" alt="" />
                <h2>${result.title}</h2>
                <p>${result.desc}</p>
            </div>
        `;
    },
};
export default ProductPage;