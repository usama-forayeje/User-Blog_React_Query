
function UserList() {
  return (
    <div className="bg-white p-6 border border-gray-300 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-2xl hover:border-blue-500 hover:translate-y-3 hover:shadow-blue-500/50">
    <div className="flex justify-center items-center mb-6">
      <img
        className="object-cover rounded-full w-28 h-28 border-4 border-gray-300 transition-all transform hover:scale-110 hover:border-blue-500"
        src="https://randomuser.me/api/portraits/women/2.jpg"
        alt="photo"
      />
    </div>
    <p className="text-xl font-bold text-center text-gray-800 mb-2 transform transition-all hover:text-blue-500">
      Anika Tabassum
    </p>
    <p className="text-center text-gray-600 mb-2 transform transition-all hover:text-blue-400">
      Anika404
    </p>
    <p className="text-center text-gray-500 mb-3 transform transition-all hover:text-blue-300">
      anika123@gmail.com
    </p>
    <div className="flex justify-center">
      <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50">
        View Details
      </button>
    </div>
  </div>
  )
}

export default UserList