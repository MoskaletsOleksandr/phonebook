import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
import { Label, Input, FilterContainer } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
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
