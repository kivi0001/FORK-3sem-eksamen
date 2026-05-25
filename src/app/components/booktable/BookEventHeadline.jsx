const BookEventHeadline = ({ title, date }) => {
  const newDate = new Date(date);
  let options = {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
  };
  const actualDate = new Intl.DateTimeFormat(
    "en-UK",
    options,
  ).format(newDate);

  return (
    <div className="col-span-full flex flex-col items-center gap-2 mt-6 mb-10">
      <h2 className="text-center text-(length:--font-h2) font-(--font-weight-h3) tracking-(--letter-spacing-home-h2) uppercase">
        {title}
      </h2>
      <h2 className="text-center text-(--pink) text-(length:--font-h3) font-(--font-weight-h3) tracking-(--letter-spacing-home-h2) uppercase">
        {actualDate}
      </h2>
    </div>
  );
};

export default BookEventHeadline;
