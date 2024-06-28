import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/Store";
import { Skeleton } from "./index";

const UsersList = () => {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Skeleton times={8} className="h-10 w-full mt-10" />;
  }

  if (error) {
    return <div>Error......</div>;
  }

  return <div>data</div>;
};

export default UsersList;
