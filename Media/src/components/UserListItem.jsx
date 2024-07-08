import { GoTrashcan } from "react-icons/go";
import { Button } from "../components";
import { deleteUsers } from "../Redux/Thunks";
import { useThunk } from "../hooks";

const UserListItem = ({ user }) => {
  const [isLoading, error, doDeleteUser] = useThunk(deleteUsers);

  const handleDelete = () => {
    doDeleteUser(user);
  };
  return (
    <div className="mb-2 border rounded h-10 w-full mt-10">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleDelete}>
          <GoTrashcan />
        </Button>
        {error && <p>Error Deleting User...</p>}
        {user.name}
      </div>
    </div>
  );
};

export default UserListItem;
