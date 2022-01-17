import React from 'react'
import styled from '@emotion/styled'
import { primeraMayuscula } from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #a22375;
    color: fff;
    margin-top: 1rem;
`;


const Resumen = ({datos}) => {
   
   //extraemos de datos
   const {marca, year, plan } = datos 
    
   if(marca === '' || year === '' || plan === '' ) return null
       
   
   
    return (
       <ContenedorResumen>
            <h2> Resumen de tu Cotización </h2>
            <ul>
                    <li>Marca: {primeraMayuscula (marca)} </li>
                    <li>Año del Auto: { primeraMayuscula (year)} </li>
                    <li>Plan del Seguro: { primeraMayuscula ( plan)} </li>
            </ul>
       </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen
