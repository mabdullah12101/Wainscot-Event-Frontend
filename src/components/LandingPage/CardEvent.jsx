// eslint-disable-next-line react/prop-types
function CardEvent({
  bgCardEvent,
  dateCardEvent,
  titleCardEvent,
  key,
  handleNavigateDetailEvent,
  idEvent,
}) {
  return (
    <button
      className={`w-72 h-96 rounded-[40px] flex-none flex flex-col justify-end text-white px-7 pb-7 relative overflow-hidden`}
      key={key}
      onClick={() => handleNavigateDetailEvent(idEvent)}
    >
      <img
        src={process.env.REACT_APP_CLOUDINARY_URL_IMAGE + bgCardEvent}
        className="w-full h-full absolute right-0 -z-10 -mb-7 object-fill"
        alt=""
      />
      <span className="font-medium text-sm tracking-wider mb-3">
        {dateCardEvent}
      </span>
      <h3 className="font-bold text-2xl tracking-widest mb-5 text-left">
        {titleCardEvent}
      </h3>
      <div className="flex">
        <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar1.png')] bg-cover -mr-2"></div>
        <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar2.png')] bg-cover -mr-2"></div>
        <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar3.png')] bg-cover -mr-2"></div>
        <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar4.png')] bg-cover -mr-2 text-[10px] flex justify-center items-center">
          62+
        </div>
      </div>
    </button>
  );
}

export default CardEvent;
