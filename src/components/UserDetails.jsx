import { ChevronLeft, ChevronRight } from "lucide-react";

function UserDetails() {
  return (
    <div className="flex flex-col justify-between w-3/12 h-full p-4 bg-gray-100 rounded-lg shadow-md">
      {/* User Details */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">User Details</h2>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">Name:</p>
          <p className="text-gray-900">John Doe</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">Email:</p>
          <p className="text-gray-900">john.doe@example.com</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-700">Bio:</p>
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula tincidunt nisl.
          </p>
        </div>
      </div>

      {/* Prev and Next Buttons */}
      <div className="flex justify-between mt-6">
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">
          <ChevronLeft size={20} />
          Prev
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700">
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
