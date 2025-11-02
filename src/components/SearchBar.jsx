import React from 'react';
function SearchBar({searchTerm,onSearchChange}){
    return(
        <div className="mb-6">
            <input type="text" placeholder="Search by name..." value={searchTerm} onChange={onSearchChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            
         </div>
    );
}
export default SearchBar;