import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
} from "../../Redux/Store/index";
import { Skeleton, Button, AlbumListItem } from "../index";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  console.log(results);

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-bold"> Albums for {user.name}</p>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div className="my-5">{content}</div>
    </div>
  );
}
export default AlbumsList;
