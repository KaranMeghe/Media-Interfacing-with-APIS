import { useFetchPhotosQuery, useAddPhotosMutation } from "../../Redux/Store";
import { PhotosListItem, Button, Skeleton } from "../index";

const PhotosList = ({ album }) => {
  const [addPhoto, result] = useAddPhotosMutation();
  const { data, error, isLoading } = useFetchPhotosQuery(album);
  console.log(data);

  const handleAddPhoto = () => {
    return addPhoto(album);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading Photos</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold">Photos for {album.title}</p>
        <Button onClick={handleAddPhoto}>+ Add Photos</Button>
      </div>

      <div className="flex gap-4 flex-wrap my-10">{content}</div>
    </div>
  );
};

export default PhotosList;
