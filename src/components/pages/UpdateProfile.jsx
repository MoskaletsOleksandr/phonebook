import { SectionTitle } from 'components/common/SectionTitle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatarThunk } from 'redux/auth/thunks';

const UpdateProfile = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(file);
    dispatch(updateAvatarThunk(file));
  };

  return (
    <>
      <SectionTitle title="Updating profile" />
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={handleUpload}>
        Upload photo
      </button>
    </>
  );
};

export default UpdateProfile;
