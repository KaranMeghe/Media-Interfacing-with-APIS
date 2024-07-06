import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUsers } from "../Redux/Store";
import { Skeleton, Button } from "./index";
import { useThunk } from "../hooks";

const UsersList = () => {
  const { data } = useSelector((state) => state.users);

  const [isLoadingFetch, errorFetch, runFetchThunk] = useThunk(fetchUsers);
  const [isLoadingAdd, errorAdd, runAddThunk] = useThunk(addUsers);

  useEffect(() => {
    runFetchThunk();
  }, [runFetchThunk]);

  let content;
  if (isLoadingFetch) {
    content = <Skeleton times={10} className="h-10 w-full mt-10" />;
  } else if (errorFetch) {
    content = <div>{errorFetch.message}</div>;
  } else {
    content = data.map((user) => {
      return (
        <div key={user.id} className="mb-2 border rounded h-10 w-full mt-10">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
    });
  }

  const handleUserAdd = () => {
    runAddThunk();
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isLoadingAdd} onClick={handleUserAdd}>
          + Add User
        </Button>

        {errorAdd && "Error Creating User...."}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
