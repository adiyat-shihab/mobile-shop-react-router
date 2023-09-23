// eslint-disable-next-line react/prop-types
export const Heading = ({ content, fontSize }) => {
  return (
    <>
      <h1 className={`font-bold ${fontSize}`}>{content}</h1>
    </>
  );
};
