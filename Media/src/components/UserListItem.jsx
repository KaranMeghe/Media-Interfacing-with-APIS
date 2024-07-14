import { GoTrashcan } from "react-icons/go";
import { Button, ExpandablePanel } from "../components";
import { deleteUsers } from "../Redux/Thunks";
import { useThunk } from "../hooks";

const UserListItem = ({ user }) => {
  const [isLoading, error, doDeleteUser] = useThunk(deleteUsers);

  const handleDelete = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleDelete}>
        <GoTrashcan />
      </Button>
      {error && <p>Error Deleting User...</p>}
      {user.name}
    </>
  );
  return <ExpandablePanel header={header}> CONTENT !!!</ExpandablePanel>;
};

export default UserListItem;
