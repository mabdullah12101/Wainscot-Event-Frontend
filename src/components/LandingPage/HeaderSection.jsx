/* eslint-disable react/prop-types */
function HeaderSection({
  colorSection,
  bgOpacity,
  sectionTitle,
  sectionCaption,
  borderColor,
  bgColor,
}) {
  return (
    <>
      <div
        className={`flex items-center py-1 px-8 rounded-3xl mb-8 text-${colorSection} ${bgOpacity} ${bgColor}`}
      >
        <div className={`border-t ${borderColor} xl:w-9 w-5 mr-2`}></div>
        <span className="font-medium tracking-[3px] xl:text-base text-xs">
          {sectionTitle}
        </span>
      </div>
      <h2 className="font-bold xl:text-4xl text-2xl xl:mb-10 mb-16">
        {sectionCaption}
      </h2>
    </>
  );
}

export default HeaderSection;
