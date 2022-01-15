import data from "../utils/data";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
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
export default DetailPage;