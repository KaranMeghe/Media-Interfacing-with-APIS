import { useFetchAlbumsQuery } from "../../Redux/Store";
import { Skeleton, ExpandablePanel, Button } from "../index";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;

      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos in the album
        </ExpandablePanel>
      );
    });
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        Albums for {user.name} <Button>+ Add Album</Button>
      </div>
      <div className="my-5">{content}</div>
    </div>
  );
}
export default AlbumsList;
