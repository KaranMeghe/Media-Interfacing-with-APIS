import { Button, ExpandablePanel } from "../../components";
import { GoTrashcan } from "react-icons/go";

function AlbumListItem({ album }) {
  const header = (
    <div className="flex items-center gap-2">
      <Button>
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
