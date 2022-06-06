import { Header } from './components/Header.jsx';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';
import { Post } from './Post.jsx';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Amós Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            similique reiciendis minima ipsa explicabo eaque distinctio nam
            soluta quis voluptatum est, accusamus sapiente fugit labore tempore
            voluptates incidunt. Vel, consequatur?"
          />
          <Post
            author="Amós Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            similique reiciendis minima ipsa explicabo eaque distinctio nam
            soluta quis voluptatum est, accusamus sapiente fugit labore tempore
            voluptates incidunt. Vel, consequatur?"
          />
        </main>
      </div>
    </div>
  );
}
