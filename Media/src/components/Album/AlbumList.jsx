import { Button } from "../index";
function AlbumsList({ user }) {
  return (
    <div className="flex justify-between items-center">
      Albums for {user.name} <Button>+ Add Album</Button>
    </div>
  );
}
export default AlbumsList;
