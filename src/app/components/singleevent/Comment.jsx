const Comment = ({ name, content, date }) => {
  return (
    <div className="flex flex-col gap-2 my-6 max-w-[80ch]">
      <div className="flex gap-1">
        <h3 className="font-bold text-(length:--font-h3)">
          {name} -
        </h3>
        <h3 className="text-(length:--font-p) text-(--pink)">
          {date}
        </h3>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
