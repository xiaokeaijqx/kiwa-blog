import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
const Search = () => {
    return (

            <div className="relative w-[30rem]">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="搜索文章..."
                        className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors">
                        <SearchIcon size={20}/>
                    </button>
                </div>
            </div>

    );
};

export default Search;