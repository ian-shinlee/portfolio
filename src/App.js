import './App.scss';
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import classNames from 'classnames';
import Skip from "./components/atoms/Quick/Skip";
import Quick from './components/atoms/Quick/Quick';
import Header from "./components/modules/Header/Header";
import Main from "./components/modules/Main/Main";
import Works from "./components/modules/Works/Works";
import Contact from "./components/modules/Contact/Contact";
import Footer from "./components/modules/Footer/Footer";
import useDarkMode from './useDarkMode';

function App() {

  // read work's data
  const [works, setWorks] = useState([]);
  const getWorks = async () => {
    const q = query(collection(db, "works"), orderBy("order", "desc"));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setWorks(data);
  };

  useEffect(() => {
    getWorks();
  }, []);


  // to top
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };


  // dark-mode
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <div className={classNames('App', isDark && 'is-dark')}>
      <Skip />
      <Header />
      <main id="content">
        <Main />
        <Works works={works} />
        <Contact />
      </main>
      <Footer />

      <div className="quick-wrap">
        {showButton && <Quick
          onClick={scrollToTop}
          type="btn-top"
          content="상단으로 이동" />
        }
        <Quick
          onClick={toggleTheme}
          type="btn-mode"
          content="컬러 모드 변경" />
      </div>
    </div>
  );
}

export default App;
