import React, { useState } from 'react';
import SearchBar from '../Components/BrowseListings/SearchBar/SearchBar';
import FilterPanel from '../Components/BrowseListings/FilterPanel/FilterPanel';
import ListingsGrid from '../Components/BrowseListings/ListingsGrid/ListingsGrid';
import NoResults from '../Components/BrowseListings/NoResults/NoResults';

const mockListings = [
  {
    _id: '1',
    title: 'Professional Photographer',
    image: 'https://source.unsplash.com/300x180/?photography,student',
    price: 5000,
    school: 'UNILAG',
    whatsapp: '2348012345678',
    category: 'Photography'
  },
  {
    _id: '2',
    title: 'Affordable Printing',
    image: 'https://source.unsplash.com/300x180/?printer,flyers',
    price: 300,
    school: 'UNIBEN',
    whatsapp: '2348098765432',
    category: 'Printing'
  },
  {
    _id: '3',
    title: 'Makeup Artist for Events',
    image: 'https://source.unsplash.com/300x180/?makeup,artist',
    price: 3500,
    school: 'UI',
    whatsapp: '2348023456789',
    category: 'Makeup'
  },
  {
    _id: '4',
    title: 'Custom T-Shirt Design',
    image: 'https://source.unsplash.com/300x180/?tshirt,design',
    price: 2500,
    school: 'OAU',
    whatsapp: '2348076543210',
    category: 'Fashion'
  },
  {
    _id: '5',
    title: 'Freelance Web Developer',
    image: 'https://source.unsplash.com/300x180/?laptop,developer',
    price: 7000,
    school: 'UNILORIN',
    whatsapp: '2348123456789',
    category: 'Tech'
  },
  {
    _id: '6',
    title: 'Handmade Beaded Jewelry',
    image: 'https://source.unsplash.com/300x180/?beads,jewelry',
    price: 1500,
    school: 'FUTA',
    whatsapp: '2348054321987',
    category: 'Crafts'
  },
  {
    _id: '7',
    title: 'Cake for Birthdays',
    image: 'https://source.unsplash.com/300x180/?cake,birthday',
    price: 4000,
    school: 'UNIPORT',
    whatsapp: '2348087654321',
    category: 'Food'
  },
  {
    _id: '8',
    title: 'Hair Braiding Services',
    image: 'https://source.unsplash.com/300x180/?hair,braiding',
    price: 2000,
    school: 'LASU',
    whatsapp: '2348034567890',
    category: 'Hair'
  },
  {
    _id: '9',
    title: 'Tutoring for JAMB',
    image: 'https://source.unsplash.com/300x180/?books,study',
    price: 2500,
    school: 'ABU',
    whatsapp: '2348099998888',
    category: 'Tutoring'
  },
  {
    _id: '10',
    title: 'Mobile Phone Repairs',
    image: 'https://source.unsplash.com/300x180/?phone,repair',
    price: 3000,
    school: 'UNN',
    whatsapp: '2348011122233',
    category: 'Tech'
  },
  {
    _id: '11',
    title: 'Graphic Design (Logos, Flyers)',
    image: 'https://source.unsplash.com/300x180/?design,graphics',
    price: 4500,
    school: 'COVENANT',
    whatsapp: '2348088888888',
    category: 'Design'
  },
  {
    _id: '12',
    title: 'Laundry & Ironing Services',
    image: 'https://source.unsplash.com/300x180/?laundry,washing',
    price: 1200,
    school: 'UNIOSUN',
    whatsapp: '2348000001111',
    category: 'Laundry'
  },
  {
    _id: '13',
    title: 'Event Decorator',
    image: 'https://source.unsplash.com/300x180/?decor,events',
    price: 6000,
    school: 'FUTA',
    whatsapp: '2348055555555',
    category: 'Crafts'
  },
  {
    _id: '14',
    title: 'Digital Marketing Help',
    image: 'https://source.unsplash.com/300x180/?digital,marketing',
    price: 5500,
    school: 'UNIBADAN',
    whatsapp: '2348022222222',
    category: 'Tech'
  },
  {
    _id: '15',
    title: 'Custom Ankara Outfits',
    image: 'https://source.unsplash.com/300x180/?ankara,fashion',
    price: 4500,
    school: 'LASU',
    whatsapp: '2348091234567',
    category: 'Fashion'
  }
];


const BrowseListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

const filteredListings = mockListings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '40px' }}>
      <h2 style={{ margin: '0 16px 16px' }}>Browse Services Near You</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterPanel selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      {filteredListings.length > 0 ? (
        <ListingsGrid listings={filteredListings} />
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default BrowseListings;
