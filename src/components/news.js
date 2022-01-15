import news from "../utils/data";

const News = {
    render() {
        return `
            ${news.map((post) => `
            <div class="border p-3">
                <a href="/news/${post.id}"><img src="${post.img}" alt="" width="500px"/></a>
                <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p class="text-slate-600">${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        
        `;
    },
};
export default News;