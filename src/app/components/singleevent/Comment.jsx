const Comment = ({ name, content, date }) => {
  return (
    <div>
      <div className="flex">
        <h3>{name}</h3>
        <h3>{date}</h3>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
