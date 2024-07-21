import { Button, ExpandablePanel } from "../../components";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../../Redux/Store";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <div className="flex items-center gap-2">
      <Button onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      <p>{album.title}</p>
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}
export default AlbumListItem;
