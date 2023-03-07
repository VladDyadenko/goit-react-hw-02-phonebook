import PropTypes from 'prop-types';
import {H2} from './Tirtle.styled'

const Title =({title})=>{
  return(
    <>
        <H2>{title}</H2>
    </>
  )  
    
    

};

Title.propTypes ={
  info: PropTypes.string.isRequired
}

export  default Title;