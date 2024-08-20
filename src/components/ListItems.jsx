import React from 'react'

function ListItems() {
    const categories = [
        "All",
        "Music",
        "React routers",
        "Computer programming",
        "Reverberation",
        "Movie musicals",
        "India national cricket team",
        "News",
        "Mixes",
        "1990s",
        "Telugu cinema",
        "Live",
        "Dramedy",
        "Dubbing",
        "Indian soap opera",
        "Cricket",
        "Football",
        "Coding",
      ];
  return (
        <div className='flex px-4 overflow-y-auto scrollbar-hidden hover-scrollbar-visible'>
            <div className='flex space-x-3 flex-nowrap '>
            {categories.map((category) => {
                return (
                    <div key={category} className=' mb-4 flex-none tracking-tighter bg-gray-100 hover:bg-gray-200 duration-300 rounded-xl px-3 py-1 font-medium text-gray-700 cursor-pointer'>{category}</div>
                )
            })}
            </div>
        </div> 
  )
}

export default ListItems