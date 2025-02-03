import { Checkbox } from '@mui/material';
import colors from '../../color/color';

const TodoCheckbox = ({ checked, onChange }) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      sx={{
        color: colors.grey,
        '&.Mui-checked': {
          color: colors.green,
        },
      }}
    />
  );
};

export default TodoCheckbox;
