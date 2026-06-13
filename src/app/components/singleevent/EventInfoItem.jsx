const EventInfoItem = ({ label, value }) => {
  return (
    <li className="flex flex-wrap gap-2">
      <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
        {label}:
      </p>
      <p className="uppercase text-(length:--font-p)">
        {value}
      </p>
    </li>
  );
};

export default EventInfoItem;
