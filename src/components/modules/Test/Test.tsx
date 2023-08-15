type TestProps = { text: string };

export const Test = (props: TestProps) => {
  const { text } = props;
  return (
    <>
      <div className="bg-red-500">{text}</div>
    </>
  );
};
