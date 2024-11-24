import CreateFrom from "./components/CreateFrom";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/12">
          <div className="p-2">
            <CreateFrom />
          </div>
        </div>
        <div className="w-6/12  p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">All Users</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* User Card */}
            <UserList/>
            <UserList/>
            <UserList/>
            <UserList/>
            <UserList/>
            <UserList/>
            

            {/* Repeat above block for each user */}
            
          </div>
        </div>

        <div className="w-3/12">
          <div className="p-2 border">
            <h2>user details</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
