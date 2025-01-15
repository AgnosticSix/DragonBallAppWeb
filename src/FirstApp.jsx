import PropTypes from "prop-types";

export const FirstApp = ({ title , subTitle, name }) => {

  if ( !title ) {
    throw new Error('El title es necesario');
  }
  
  return (
    <>
      <h1>{ title }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string
}

FirstApp.defaultProps = {
  subTitle: 'No hay subtítulo',
  name: 'Mateo Aguilar'
}