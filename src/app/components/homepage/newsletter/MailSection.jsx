import MailForm from "./MailForm";

const MailSection = () => {
  return (
    <section className="flex flex-col relative items-center gap-1 my-large">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-(length:--font-home-form-h2) uppercase font-(--font-weight-h3) tracking-(--letter-spacing-h3)">
          want the latest night club news?
        </h3>
        <p className="text-(length:--small-p) px-10 leading-[1.8]">
          Subscribe to our newsletter and never
          miss an
          <span className="text-info text-(length:--small-p) font-home-p">
            {" "}
            Event
          </span>
        </p>
      </div>
      <div className="items-center mt-medium">
        <MailForm />
      </div>
    </section>
  );
};

export default MailSection;
