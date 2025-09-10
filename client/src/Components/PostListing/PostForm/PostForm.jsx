import React, { useState, useContext } from "react";
import "./PostForm.css";
import FormInput from "../FormInput/FormInput";
import { createListing } from "../../../api/postApi";
import { AuthContext } from "../../../Context/AuthContext";

const PostForm = () => {
  const { token } = useContext(AuthContext); // 👈 get token from context
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    school: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Build FormData for file upload
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("school", formData.school);
      if (formData.image) {
        data.append("imageUrl", formData.image); // backend expects imageUrl
      }

      await createListing(data, token); // ✅ no unused variable
      alert("Hustle posted successfully! ✅");

      // Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        school: "",
        image: null,
      });
    } catch (error) {
      console.error("Error posting hustle:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to post hustle ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <FormInput label="Title" name="title" value={formData.title} onChange={handleChange} />
      <FormInput label="Description" name="description" value={formData.description} onChange={handleChange} textarea />
      <FormInput label="Price (₦)" name="price" value={formData.price} onChange={handleChange} />
      <FormInput label="Category" name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Photography, Makeup" />
      <FormInput label="School" name="school" value={formData.school} onChange={handleChange} />
      <div className="form-group">
        <label>Upload Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
      </div>
      <button type="submit" className="btn post-btn" disabled={loading}>
        {loading ? "Posting..." : "Post Hustle"}
      </button>
    </form>
  );
};

export default PostForm;
