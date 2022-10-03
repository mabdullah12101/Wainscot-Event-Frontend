function ListCategory() {
  return (
    <ul className="flex xl:self-auto self-start xl:pl-0 pl-8 gap-x-24 text-main-gray font-bold tracking-wider">
      <li>
        <a href="" className="text-main-blue">
          Music
        </a>
        <hr className="border-t-4 border-main-blue rounded-2xl mx-3 mt-3" />
      </li>
      <li>
        <a href="">Arts</a>
      </li>
      <li>
        <a href="">Outdoors</a>
      </li>
      <li>
        <a href="">Workshop</a>
      </li>
      <li>
        <a href="">Sport</a>
      </li>
      <li>
        <a href="">Festival</a>
      </li>
      <li>
        <a href="">Fashion</a>
      </li>
    </ul>
  );
}

export default ListCategory;
