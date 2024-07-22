import { GoTrashcan } from "react-icons/go";
import { Button } from "../index";
import { useRemovePhotosMutation } from "../../Redux/Store";
const PhotosListItem = ({ photo }) => {
  const [removePhoto, result] = useRemovePhotosMutation();
  console.log(removePhoto);

  const handleRemovePhoto = () => {
    return removePhoto(photo);
  };
  return (
    <div className="flex gap-2">
      <Button onClick={handleRemovePhoto}>
        <GoTrashcan />
      </Button>
      <img className="h-20 w-20" src={`${photo.url}`} alt="random pic" />
    </div>
  );
};

export default PhotosListItem;
