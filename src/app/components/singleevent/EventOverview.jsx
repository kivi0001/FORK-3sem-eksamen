import EventDropdownListItem from "./EventDropdownListItem";
import EventInfoItem from "./EventInfoItem";
import EventContent from "./EventContent";

const EventOverview = ({
  imagesrc,
  alt,
  date,
  doorsOpen,
  startTime,
  location,
  category,
  price,
  ageRestriction,
  lineUp,
  schedule,
  content,
  id,
  title,
}) => {
  const newDate = new Date(date);
  let options = {
    month: "long",
    day: "numeric",
  };
  const actualDate = new Intl.DateTimeFormat(
    "en-UK",
    options,
  ).format(newDate);

  const newDoors = new Date(doorsOpen);
  let openOptions = {
    hour: "numeric",
    minute: "numeric",
  };
  const actualDoorsOpen = new Intl.DateTimeFormat(
    "en-UK",
    openOptions,
  ).format(newDoors);

  return (
    <section className="mt-small-medium singleview-section">
      <ul
        aria-label="Event details"
        className="singleview-info flex md:justify-center md:my-4 my-2 flex-wrap gap-small items-center"
      >
        <EventInfoItem
          label="date"
          value={actualDate}
        />
        <span className="text-divider text-(length:--font-p) md:ml-1">
          |
        </span>
        <EventInfoItem
          label="doors open"
          value={actualDoorsOpen}
        />
        <span className="text-divider text-(length:--font-p) md:ml-1">
          |
        </span>
        <EventInfoItem
          label="event start"
          value={startTime}
        />
        <span className="text-divider text-(length:--font-p) md:ml-1">
          |
        </span>
        <EventInfoItem
          label="place"
          value={location}
        />
      </ul>
      <ul
        aria-label="Event details"
        className="singleview-info flex md:justify-center md:my-4 my-2 flex-wrap gap-small items-center"
      >
        <EventInfoItem
          label="category"
          value={category}
        />
        <span className="text-divider text-(length:--font-p) md:ml-1">
          |
        </span>
        <EventInfoItem
          label="price"
          value={price}
        />
        <span className="text-divider text-(length:--font-p) md:ml-1">
          |
        </span>
        <EventInfoItem
          label="age"
          value={ageRestriction}
        />
        <span className="text-divider text-(length:--font-p) md:ml-1">
          |
        </span>
        <EventDropdownListItem
          label="Schedule"
          summaryText="View schedule"
          items={schedule}
          name="event-dropdown"
          ariaLabel="schedule dropdown list"
        />
        <span className="text-divider text-(length:--font-p) md:ml-1">
          |
        </span>
        <EventDropdownListItem
          label="Line-up"
          summaryText="View acts"
          items={lineUp}
          name="event-dropdown"
          ariaLabel="line-up dropdown list"
        />
      </ul>
      <EventContent
        imagesrc={imagesrc}
        alt={alt}
        title={title}
        content={content}
        id={id}
      />
    </section>
  );
};

export default EventOverview;
