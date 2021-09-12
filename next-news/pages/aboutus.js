import styles from '../styles/aboutus.module.css'
import { Toolbar } from '../components/toolbar';
import { GiAsianLantern } from "react-icons/gi";
import Link from "next/link";

export const aboutus = ({ employee }) => {
console.log(employee);    
  return (
         <div className='pagecontainer'>
            <div>
      <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
    <Link href="/">
      <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
        <GiAsianLantern className="icon" /> News24
      </a>
    </Link>
    
    </div>
    </div>
           
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
      'https://my-json-server.typicode.com/girik21/newsapp/aboutus',
    );
    const employee = await apiResponse.json();
  
    return {
      props: {
        employee,
      },
    };
  };
  
  export default aboutus;
