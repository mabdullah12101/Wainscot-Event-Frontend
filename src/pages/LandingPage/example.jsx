// import image from "../../assets/img/event1-opacity.png";
// import CardEvent from "../../components/LandingPage/CardEvent";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function Landing() {
  const navigate = useNavigate();
  // const data = [
  //   { id: 1, name: "Tea", category: "Drink" },
  //   { id: 2, name: "Milk", category: "Drink" },
  //   { id: 3, name: "Cofee", category: "Drink" },
  // ];

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    getDataProduct();
  }, [page]);

  const getDataProduct = async () => {
    try {
      const result = await axios.get(
        `/event?page=${page}&limit=2&search=&column=&asc=`
      );
      setData(result.data.data);
      console.log(result);
      setPagination(result.data.pagination);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetaiProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {/* START MAIN */}
      <main className="container d-flex gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.eventId}>
              <Card
                data={item}
                newData="Data Baru nih"
                handleDetail={handleDetaiProduct}
              />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </main>
      <div className="d-flex gap-2 justify-content-center w-100 my-5">
        <button
          className="btn btn-primary"
          onClick={handlePrevPage}
          disabled={page === 1 ? true : false}
        >
          &lt;
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={page === pagination.totalPage ? true : false}
        >
          &gt;
        </button>
      </div>

      {/* END MAIN */}
    </>
  );
}

export default Landing;
