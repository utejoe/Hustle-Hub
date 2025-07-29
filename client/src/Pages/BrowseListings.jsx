import React, { useState } from 'react';
import SearchBar from '../Components/BrowseListings/SearchBar/SearchBar';
import FilterPanel from '../Components/BrowseListings/FilterPanel/FilterPanel';
import ListingsGrid from '../Components/BrowseListings/ListingsGrid/ListingsGrid';
import NoResults from '../Components/BrowseListings/NoResults/NoResults';
import Photographer from '../Assets/BwLst/photgrapher.jpeg';
import Beads from '../Assets/BwLst/beads.jpeg';
import Cake from '../Assets/BwLst/cake.jpg';
import CustomAnkara from '../Assets/BwLst/custom-ankara.jpeg';
import DigitalMarketting from '../Assets/BwLst/digital-marketting.jpeg';
import EventDecoration from '../Assets/BwLst/event-decorator.jpeg';
import Graphics from '../Assets/BwLst/graphics.jpeg';
import HairBraid from '../Assets/BwLst/hair-braid.jpeg';
import Laundry from '../Assets/BwLst/laundry.jpeg';
import MakeupArtist from '../Assets/BwLst/makeup-artist.jpg';
import PhoneRepair from '../Assets/BwLst/phone-repair.jpeg';
import Printing from '../Assets/BwLst/printing.jpeg';
import TshirtDesign from '../Assets/BwLst/t-shirt-design.jpeg';
import Tutor from '../Assets/BwLst/tutor.jpeg';
import WebDev from '../Assets/BwLst/web-dev.jpeg';

const mockListings = [
  {
    _id: '1',
    title: 'Professional Photographer',
    image: Photographer,
    price: 5000,
    school: 'UNILAG',
    category: 'Photography'
  },
  {
    _id: '2',
    title: 'Affordable Printing',
    image: Printing,
    price: 300,
    school: 'UNIBEN',
    category: 'Printing'
  },
  {
    _id: '3',
    title: 'Makeup Artist for Events',
    image: MakeupArtist,
    price: 3500,
    school: 'UI',
    category: 'Makeup'
  },
  {
    _id: '4',
    title: 'Custom T-Shirt Design',
    image: TshirtDesign,
    price: 2500,
    school: 'OAU',
    category: 'Fashion'
  },
  {
    _id: '5',
    title: 'Freelance Web Developer',
    image: WebDev,
    price: 7000,
    school: 'UNILORIN',
    category: 'Tech'
  },
  {
    _id: '6',
    title: 'Handmade Beaded Jewelry',
    image: Beads,
    price: 1500,
    school: 'FUTA',
    category: 'Crafts'
  },
  {
    _id: '7',
    title: 'Cake for Birthdays',
    image: Cake,
    price: 4000,
    school: 'UNIPORT',
    category: 'Food'
  },
  {
    _id: '8',
    title: 'Hair Braiding Services',
    image: HairBraid,
    price: 2000,
    school: 'LASU',
    category: 'Hair'
  },
  {
    _id: '9',
    title: 'Tutoring for JAMB',
    image: Tutor,
    price: 2500,
    school: 'ABU',
    category: 'Tutoring'
  },
  {
    _id: '10',
    title: 'Mobile Phone Repairs',
    image: PhoneRepair,
    price: 3000,
    school: 'UNN',
    category: 'Tech'
  },
  {
    _id: '11',
    title: 'Graphic Design (Logos, Flyers)',
    image: Graphics,
    price: 4500,
    school: 'COVENANT',
    category: 'Design'
  },
  {
    _id: '12',
    title: 'Laundry & Ironing Services',
    image: Laundry,
    price: 1200,
    school: 'UNIOSUN',
    category: 'Laundry'
  },
  {
    _id: '13',
    title: 'Event Decorator',
    image: EventDecoration,
    price: 6000,
    school: 'FUTA',
    category: 'Crafts'
  },
  {
    _id: '14',
    title: 'Digital Marketing Help',
    image: DigitalMarketting,
    price: 5500,
    school: 'UNIBADAN',
    category: 'Tech'
  },
  {
    _id: '15',
    title: 'Custom Ankara Outfits',
    image: CustomAnkara,
    price: 4500,
    school: 'LASU',
    category: 'Fashion'
  }
];

const BrowseListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('All Schools');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredListings = mockListings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSchool = selectedSchool === 'All Schools' || item.school === selectedSchool;

    return matchesSearch && matchesCategory && matchesSchool;
  });

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '40px' }}>
      <h2 style={{ margin: '0 16px 16px' }}>Browse Services Near You</h2>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
      />
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