import React from 'react'
import { Container } from 'react-bootstrap'
import MainFooter from '../components/MainFooter'
import WhyChoose from '../components/WhyChoose';
import AboutKashmir from '../components/AboutKashmir';
import FAQ from '../components/FAQ';
import ThingsToDo from '../components/ThingsToDo';
import TourGallery from '../components/TourGallery';
import Testimonial from '../components/Testimonial';
import BestTravel from '../components/BestTravel';
import TravelDestination from '../components/TravelDestination';
import Banner from '../components/Banner';
import TrekkingPackage from '../components/TrekkingPackage';
import TourPackage from '../components/TourPackage';
import MainHeader from '../components/MainHeader';

function HomePage() {
  return (
    <Container fluid>
    {/* <MainHeader /> */}
    <Banner />
    {/* <BestTravel /> */}
    
        <TourPackage />
       
        <WhyChoose />
        {/* <TrekkingPackage /> */}
    <TravelDestination />
      
        {/* <AboutKashmir /> */}
        
        <ThingsToDo />
        <BestTravel />
        <TourGallery />
        <Testimonial />
        <FAQ />
        <MainFooter />
    </Container>
  )
}

export default HomePage;