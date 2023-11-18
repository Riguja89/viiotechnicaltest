import React, {useState} from "react";
import { useNavigate } from "react-router";
import { useDispatch} from "react-redux";
import { searchProd } from "../redux/actions";
import backArrow from "../images/login/back-arrow.svg";
import lupa from "../images/search/lupa.svg";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const back = () => {
    navigate(-1);
  };
  const search = (e) => {
    e.preventDefault();
    dispatch(searchProd(formData.search));
  };
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };
  return (
    <div className="search-bar_container">
      <div className="back_container" onClick={back}>
        <img src={backArrow} alt="" />
      </div>
      <div className="input-search_container">
        <div className="input_container">
          <div className="lupa_container">
            <img src={lupa} alt="" />
          </div>
          <form action="" onSubmit={search}>
            <input name="search" type="text" placeholder="Search"  onChange={handleChange}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
