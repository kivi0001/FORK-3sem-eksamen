const Comment = ({ name, content, date }) => {
  const newDate = new Date(date);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const actualDate = new Intl.DateTimeFormat(
    "en-UK",
    options,
  ).format(newDate);

  return (
    <div className="flex flex-col gap-2 my-6 max-w-[80ch]">
      <div className="flex gap-2 items-center">
        <h3 className="font-bold md:text-(length:--font-h3)">
          {name} -
        </h3>
        <h3 className="text-(length:--font-p) text-(--pink)">
          Posted {actualDate}
        </h3>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
