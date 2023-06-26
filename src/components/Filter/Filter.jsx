import { useDispatch } from 'react-redux';
import { getFilteredContactThunk } from 'redux/contacts/thunks';
import { Label, Input, FilterContainer } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(getFilteredContactThunk(event.currentTarget.value));
  };

  return (
    <FilterContainer>
      <Label>
        Find contact by name
        <Input onChange={handleFilterChange} />
      </Label>
    </FilterContainer>
  );
};
