import styles from '../styles/aboutus.module.css'
import { Toolbar } from '../components/toolbar';
import { GiAsianLantern } from "react-icons/gi";
import Link from "next/link";

export const aboutus = ({ employee }) => {
console.log(employee);    
  return (
         <div className='pagecontainer'>
            
           
             <Toolbar/> 
         <div className={styles.main}>
             <h1>About us</h1>

             <div className={styles.aboutus}>
             <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} alt="aboutus" />
            <p>{employee.description}</p>
             </div>
         </div>
         </div>
        
         
)
  };

  
  
  export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
      'https://my-json-server.typicode.com/girik21/newsv2/employeeOfTheMonth',
    );
    const employee = await apiResponse.json();
  
    return {
      props: {
        employee,
      },
    };
  };
  
  export default aboutus;
