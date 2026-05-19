const BookEventTitle = ({ title, id, date }) => {
  return (
    <option date={date} value={id}>
      {title}
    </option>
  );
};

export default BookEventTitle;
