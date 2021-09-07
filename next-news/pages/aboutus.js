import styles from '../styles/aboutus.module.css'
import { Toolbar } from '../components/toolbar';

export const aboutus = ({ employee }) => {
console.log(employee);    
  return (
         <div className='pagecontainer'>
             <Toolbar/> 
         <div className={styles.main}>
             <h1>About us</h1>

             <div className={styles.main}>
             <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} alt="employee" />
            <p>{employee.description}</p>
             </div>
         </div>
         </div>
         
)
  };

  
  
  export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
      'https://my-json-server.typicode.com/girik21/newsv2/db',
    );
    const employee = await apiResponse.json();
  
    return {
      props: {
        employee,
      },
    };
  };
  
  export default aboutus;
