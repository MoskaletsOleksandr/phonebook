import { LoaderWrap } from './Loader.styled';
import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Grid
        height={120}
        width={120}
        color="green"
        ariaLabel="grid-loading"
        radius={12.5}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrap>
  );
};
