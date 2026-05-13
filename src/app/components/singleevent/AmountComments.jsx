const AmountComments = ({ amount }) => {
  return (
    <div className="flex gap-1 text-(length:--font-h2) font-bold">
      <h2>{amount}</h2>
      <h2 className="uppercase">comments</h2>
    </div>
  );
};

export default AmountComments;
