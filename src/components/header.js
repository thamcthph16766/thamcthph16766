const Header = {
    render() {
        return `
        <header>
        <div class="bg-blue-900">
            <img class="mx-auto py-4" src="./img/5EK1lFm.png" alt="">
        </div>
        <div class="grid grid-cols-12 bg-yellow-600">
        <nav class="col-span-7 py-2  mx-auto">
            <ul >
                <li class="inline-block pr-4 text-white "><a href="/">Trang chủ</a></li>
                <li class="inline-block pr-4 text-white "><a href="">Tuyển sinh</a></li>
                <li class="inline-block pr-4 text-white "><a href="">Chương trình đào tạo</a></li>
                <li class="inline-block pr-4 text-white "><a href="">Góc sinh viên</a></li>
                <li class="inline-block pr-4 text-white "><a href="">Tuyển dụng</a></li>
                <li class="inline-block pr-4 text-white "><a href="/dashboard">Admin</a></li>
            </ul>
        </nav>
        <div class="search col-span-5 py-2 pl-8">
            <input class="border border-black bg-white p-1" type="text">
            <button class="border border-cyan-700 bg-blue-900 text-white p-1" type="submit">Tìm kiếm</button>
            <button class="border border-black bg-black text-white p-1" type="submit"><a href="/SignIn">Sign-in</a></li></button>
            <button class="border border-black bg-black text-white p-1" type="submit">Sign-up</button>
        </div>
        </div>
        <div class="pt-1.5">
        <img src="./img/xbanner-trang-lien-he-moi.jpg.pagespeed.ic_.fqvwhe7pcx.jpg" alt="" width="100%">
        </div>
    </header>
    `;
    },
};
export default Header;