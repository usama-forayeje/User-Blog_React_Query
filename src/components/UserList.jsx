import UserItem from "./UserItem"

function UserList() {
  return (
    <div className="w-6/12 p-6">
    <h2 className="mb-6 text-3xl font-semibold text-center">All Users</h2>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* User Card */}
      <UserItem/>
      

      {/* Repeat above block for each user */}
      
    </div>
  </div>
    
  )
}

export default UserList