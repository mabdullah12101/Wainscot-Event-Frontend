// eslint-disable-next-line react/prop-types
function ButtonSeeAll({ borderColor, bgColor }) {
  return (
    <button
      className={`mt-8 border ${bgColor} ${borderColor} rounded-xl py-2 px-24 text-main-blue font-bold`}
    >
      See All
    </button>
  );
}

export default ButtonSeeAll;
