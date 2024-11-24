import CreateFrom from "./components/CreateFrom";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <div className="flex h-screen">
        
        <CreateFrom />
        <UserList />
        <UserDetails />

      </div>
    </>
  );
}

export default App;
