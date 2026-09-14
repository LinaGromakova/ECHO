const InputSearch = ({
  stateValue,
  setStateValue,
}: {
  stateValue: string;
  setStateValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      type='search'
      value={stateValue}
      onChange={(e) => {
        setStateValue(e.target.value);
      }}
      placeholder='Поиск друзей по username...'
      className='bg-white text-black w-full p-2 rounded'
    />
  );
};
export default InputSearch;
