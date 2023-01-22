import { Header } from './components/header';
import { Post } from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="lorem loremlorem  loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem"
      />
      <Post 
        author="Gabriel" 
        content="Novo post"
      />
    </div>
  )
}