import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import { useFilterContext } from "../../context/filterContext";
import "../../css/product.css";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <div >
      <div className="row">
        <div className="col ">
          <div className="col ">
            <div className="row ">
              <div
                className={`${grid_view ? "active" : "deactive"} col`}
                onClick={setGridView}
              >
                <AppsIcon />
              </div>
              <div
                className={`${!grid_view ? "active" : "deactive"} col`}
                onClick={setListView}
              >
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <p>{`There are ${filter_products.length} Products`}</p>
        </div>
        <div className="col ">
          <div className="row">
            <div className="col">
              <form action="#">
                <label htmlFor="sort"></label>
                <select
                  name="sort"
                  id="sort"
                  className="sort-selection--style"
                  onClick={sorting}
                >
                  <option value="relevence">Price(Relevence)</option>
                  <option value="#" disabled></option>
                  <option value="lowest">Price(lowest)</option>
                  <option value="#" disabled></option>
                  <option value="highest">Price(highest)</option>
                  <option value="#" disabled></option>
                  <option value="a-z">Price(a-z)</option>
                  <option value="#" disabled></option>
                  <option value="z-a">Price(z-a)</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
