import { IoIosArrowDown } from "react-icons/io";

const EventDropdownListItem = ({
  label,
  summaryText,
  items,
  name,
  ariaLabel,
}) => {
  return (
    <li className="relative flex flex-row gap-2 md:justify-center items-center">
      <p className="uppercase text-(--pink) font-bold text-(length:--font-p) shrink-0">
        {label}:
      </p>
      <details
        name={name}
        aria-label={ariaLabel}
        className="grow group"
      >
        <summary className="uppercase text-(length:--font-p) bg-transparent border-none outline-none cursor-pointer flex items-center w-full">
          {summaryText}
          <span
            className="ml-2 transition-transform duration-300 group-open:rotate-180"
            aria-hidden="true"
          >
            <IoIosArrowDown />
          </span>
        </summary>
        <div
          role="listbox"
          className="absolute left-1/2 -translate-x-1/2 top-full w-full bg-background border border-foreground z-10 p-1 m-0"
        >
          {items.map((item, index) => (
            <div
              key={index}
              role="option"
              tabIndex="0"
              className="p-1 hover:bg-(--pink) cursor-pointer text-(length:--event-dropdown-p)"
            >
              {item.time
                ? `${item.time}: ${item.label}`
                : item}
            </div>
          ))}
        </div>
      </details>
    </li>
  );
};

export default EventDropdownListItem;
