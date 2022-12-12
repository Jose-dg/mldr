import { connect } from 'react-redux';
import React from 'react';
import Alert from 'components/alert'
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
  
const FullWidthLayouts = ({children}) => {
    return (
        <div>
          <Navbar/>
          <div classname='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
            <div classname='max-w-full mx-auto'>
              {children}
            </div>
          </div>
          
          <Footer/>
          <Alert/>
        </div>
    )
}

const mapStateToProps = state => ({

})
  
export default connect(mapStateToProps,{

}) (FullWidthLayouts);


