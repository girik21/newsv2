import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css'
import Link from "next/link";
import { GiAsianLantern } from "react-icons/gi";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      
      <div onClick={() => router.push('/')}>
      <Link href="/">
      <a>
        <GiAsianLantern className="inline text-xl mr-4"/> [News24]
      </a>
    </Link>


      </div>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>Feed</div>
      <div onClick={() => router.push('/aboutus')}>About us</div>
      <div onClick={() => (window.location.href = 'https://twitter.com/kaustuv_giri')}>Twitter</div>
    </div>
  );
};