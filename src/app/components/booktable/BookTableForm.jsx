import Image from "next/image";

const BookTableForm = () => {
  return (
    <section>
      <form>
        <div>
          <Image
            src="/assets/table/table_1.png"
            alt="an illustration of a table"
            width={100}
            height={100}
          ></Image>
        </div>
        <h1 className="text-(length:--font-h1) uppercase font-bold">
          book a table
        </h1>
        <div></div>
      </form>
    </section>
  );
};

export default BookTableForm;
