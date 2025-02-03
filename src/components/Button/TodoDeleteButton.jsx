import DeleteIcon from '@mui/icons-material/Delete';

const TodoDeleteButton = ({ onDelete }) => {
  return <DeleteIcon onClick={onDelete} style={{ cursor: 'pointer' }} />;
};

export default TodoDeleteButton;
