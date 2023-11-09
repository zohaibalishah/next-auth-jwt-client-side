import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'; // Add useState import

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState(''); // Add userName state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
    // Get user name from localStorage and set it to userName state
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Welcome Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to our website, {userName?.name}!</h1>
          <button className={'btn btn-danger  btn-sm'} onClick={handleLogout}>
            Logout
          </button>
        </main>
      </div>
    </>
  );
}
