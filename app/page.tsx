import { BlogPosts } from '@/components/Posts'
import Terminal from '../components/terminal/Terminal'
import Resume from '../components/resume';
import Project from './projects/Project';
import Footer from '../components/Footer';
import { Navbar } from '../components/Nav';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        &gt; Hey I'm Isabel.
        <span className="blinking-cursor"> | </span>
      </h1>
      <p className="mb-8">
        {`I'm aim to make technology accessible to everyone—because why should tech be scary? 
        I’m here to make coding fun, one bug fix at a time!`}
      </p>
      <div className="mb-8">
        <Terminal />
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-semibold tracking-tighter">
          My Experience
        </h2>
        <Resume />
        <h2 className="text-xl font-semibold tracking-tighter">My Projects</h2>
        <Project />
      </div>
    </section>
  );
}
