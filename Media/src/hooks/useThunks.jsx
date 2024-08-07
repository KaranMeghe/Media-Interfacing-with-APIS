import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

function useThunk(thunk) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);

  const runThunk = useCallback(
    (user) => {
      setIsLoading(true);
      dispatch(thunk(user))
        .unwrap()
        .catch((error) => setIsError(error))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [isLoading, error, runThunk];
}

export default useThunk;
