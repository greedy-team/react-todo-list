const TodoButton = ({
  text,
  type,
  disabled = false,
  size = 'medium',
  color = 'primary',
  onClick,
}) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default TodoButton;
