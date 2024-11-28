import "./css/Menu.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <header>
      <nav className="search">
        <ul>
          <li className="logo">
            <NavLink to="/">
              <img src="/images/logo.png" alt="로고" width="80" />
            </NavLink>
          </li>
          <li>
            <form className="search_form" onSubmit={handleSearch}>
              <TextField
                sx={{
                  width: "500px",

                  fontSize: "18px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: "25px",
                  "& .MuiInputBase-input": {
                    height: "20px",
                    textAlign: "center",
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px", // 테두리 둥글기 설정
                  },
                }}
                id="outlined-basic"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="도시 검색"
                variant="outlined"
              />
            </form>
          </li>
          <li>
            <NavLink to="/login">로그인</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="Menu">
        <ul>
          <li>
            <NavLink to="/today">오늘 날씨</NavLink>
          </li>
          <li>
            <NavLink to="/location">지역 날씨</NavLink>
          </li>
          <li>
            <NavLink to="/5day">5일간 날씨</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
