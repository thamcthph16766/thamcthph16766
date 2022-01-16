import tintuc from "../utils/data";
import Dashboard from "./dashboard";


const Tintuc = {
    render() {
        return `
        ${Dashboard.render()}
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="/add" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                Thêm tin tức
              </a>
            </div>
        </div>
        ${tintuc.map((post) => `
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="w-28 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Image
                    </th>
                    <th scope="col" class="w-72 flex flex-wrap  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                    </th>
                    <th scope="col" class="2/3  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Desc
                    </th>
                    
                    <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                        </div>
                        <div class="ml-4">
                            
                            <div class="text-sm text-gray-500">
                            
                            </div>
                        </div>
                        </div>
                    </td>
                    <td class="w-72 flex flex-wrap px-6 py-4 whitespace-nowrap">
                        <div class="flex flex-wrap text-sm text-gray-900">${post.title}</div>
                            
                    </td>
                    <td class="w-96 px-6 py-4 whitespace-nowrap">
                        
                            <div class=" text-sm text-gray-500">${post.desc}</div>
                    </td>
                    
                
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/edit/${post.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                    </tr>

                    <!-- More people... -->
                </tbody>
                </table>
            </div>
            </div>
        </div>
        
        </div>
            `).join("")}     
        `;
    },
};
export default Tintuc;