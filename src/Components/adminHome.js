import React, { useEffect, useState } from "react";
//import { faTrash, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactPaginate from "react-paginate";
// import Pagination from "react-bootstrap-4-pagination";
import { useRef } from "react";
import "../CSS/form.css";
import "../CSS/adminForm.css";
export default function AdminHome({ userData }) {
  //setting state
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    // getAllUser();
    getPaginatedUsers();
  }, []);

  //fetching all user
  const getAllUser = () => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

  //logout
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  //update user
  const updateUser = (id, name) => {
    if (window.confirm(`Are you sure you want to Update ${name}`)) {
      fetch("http://localhost:5000/updateUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  //pagination
  function handlePageClick(e) {
    console.log(e);
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  }
  function changeLimit() {
    currentPage.current = 1;
    getPaginatedUsers();
  }

  function getPaginatedUsers() {
    fetch(
      `http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setData(data.result);
      });
  }

  return (
    <div className="auth-wrapper" style={{ height: "auto" }}>
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3 style={{ color: "#198754" }}>Welcom Admin</h3>
        <table style={{ width: 500 }} className="m-4" id="customers">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          {data.map((i) => {
            return (
              <tr>
                <td>{i.fname}</td>
                <td>{i.email}</td>
                <td>{i.userType}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteUser(i._id, i.fname)}
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faWrench}
                    onClick={() => updateUser(i._id, i.fname)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          forcePage={currentPage.current - 1}
        />
        <div className="m-4" style={{ paddingLeft: "72px" }}>
          <input
            placeholder="Limit"
            className="m-4"
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
            onChange={(e) => setLimit(e.target.value)}
          />
          <button
            class="btn btn-outline-success btn-light my-2 my-sm-0"
            onClick={changeLimit}
          >
            Set Limit
          </button>
        </div>
        <div className="m-4" style={{ paddingLeft: "72px" }}>
          <button
            style={{ marginRight: "30px", marginLeft: "50px" }}
            className="btn btn-outline-success btn-light my-2 my-sm-0"
            onClick={logOut}
          >
            Log Out
          </button>

          <button
            style={{ marginLeft: "30px" }}
            className="btn btn-outline-success btn-light my-2 my-sm-0"
            onClick={() => (window.location = "http://localhost:3001")}
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
