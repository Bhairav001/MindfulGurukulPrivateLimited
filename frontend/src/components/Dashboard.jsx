import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from '../pages/Form';
//form page
const Crud = () => {
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: '',
    email: '',
    mobile: '',
    _id: '',
  });
  const [dataList, setDataList] = useState([]);
  const [editSection, setEditSection] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate()
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await axios.post('http://localhost:8080/crud/create', formData);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
    }
  }

  const getFetchData = async () => {
    const data = await axios.get('http://localhost:8080/crud');
    if (data.data.success) {
      const filteredData = data.data.data.filter((item) => {
        const searchFields = ['name', 'email', 'mobile'];
        return searchFields.some((field) => item[field].toLowerCase().includes(searchTerm.toLowerCase()));
      });
      setDataList(filteredData);
    }
  };

  useEffect(() => {
    getFetchData();
  }, [searchTerm]);


  const handleDelete = async (id) => {
    const data = await axios.delete(`http://localhost:8080/crud/delete/${id}`);

    if (data.data.success) {
      alert(data.data.message);
      getFetchData();
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('http://localhost:8080/crud/update', formDataEdit);
    console.log('updatedData', data);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = async (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };
function handleLogout(){
  localStorage.removeItem("token")
  navigate("/")
  
}
  return (
    <>
      <div className="container mx-auto p-4">
        <div className='flex justify-between'>
        <input
            type="text"
            placeholder="Search by name, email, or mobile"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        <button
          className="btn btn-add bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          onClick={() => setAddSection(true)}
        >
          ADD
        </button>
        <button
          className="btn btn-add bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          onClick={handleLogout}
        >
          Logout
        </button>
        </div>
        {addSection && (
          <Form
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <Form
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        <div className="tableContainer mt-4">
          <table className="w-full text-center bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="p-2 border-b">Name</th>
                <th className="p-2 border-b">Email</th>
                <th className="p-2 border-b">Mobile</th>
                <th className="p-2 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => {
                  return (
                    <tr key={el._id}>
                      <td className="p-2 border-b">{el.name}</td>
                      <td className="p-2 border-b">{el.email}</td>
                      <td className="p-2 border-b">{el.mobile}</td>
                      <td className="p-2 border-b">
                        <button
                          className="btn bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:ring focus:ring-yellow-200"
                          onClick={() => handleEdit(el)}
                        >
                          Edit
                        </button>{' '}
                        <button
                          className="btn bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200"
                          onClick={() => handleDelete(el._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" className="p-2 border-b">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Crud;
