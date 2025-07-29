import React, { useState } from 'react';
import './PostForm.css';
import FormInput from '../FormInput/FormInput';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    school: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Hustle Posted! (MVP Simulation)');
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      school: '',
      image: null,
    });
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
      <button type="submit" className="btn post-btn">Post Hustle</button>
    </form>
  );
};

export default PostForm;
