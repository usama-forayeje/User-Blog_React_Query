
function UserItem() {
  return (
    <div className="p-6 transition-all transform bg-white border border-gray-300 shadow-2xl rounded-xl hover:scale-105 hover:shadow-2xl hover:border-blue-500 hover:translate-y-3 hover:shadow-blue-500/50">
    <div className="flex items-center justify-center mb-6">
      <img
        className="object-cover transition-all transform border-4 border-gray-300 rounded-full w-28 h-28 hover:scale-110 hover:border-blue-500"
        src="https://randomuser.me/api/portraits/women/2.jpg"
        alt="photo"
      />
    </div>
    <p className="mb-2 text-xl font-bold text-center text-gray-800 transition-all transform hover:text-blue-500">
      Anika Tabassum
    </p>
    <p className="mb-2 text-center text-gray-600 transition-all transform hover:text-blue-400">
      Anika404
    </p>
    <p className="mb-3 text-center text-gray-500 transition-all transform hover:text-blue-300">
      anika123@gmail.com
    </p>
    <div className="flex justify-center">
      <button className="px-6 py-3 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50">
        View Details
      </button>
    </div>
  </div>
  )
}

export default UserItem