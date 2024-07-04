import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUsers } from "../Redux/Store";
import { Skeleton, Button } from "./index";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersErrors] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((error) => setLoadingUsersErrors(error))
      .finally(() => setIsLoadingUsers(false));
  }, []);

  const dataCount = data.length;

  if (isLoadingUsers) {
    return <Skeleton times={dataCount} className="h-10 w-full mt-10" />;
  }

  if (loadingUsersError) {
    return <div>{loadingUsersError.message}</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded h-10 w-full mt-10">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUsers())
      .unwrap()
      .catch((error) => setCreatingUserError(error))
      .finally(() => setIsCreatingUser(false));
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating Users..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && "Error Creating User...."}
        {console.log(creatingUserError)}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
