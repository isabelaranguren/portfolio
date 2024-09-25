import { BlogPosts } from 'app/components/posts'
import Terminal from './components/terminal/Terminal'
import Resume from './components/resume';
import Project from './projects/Project';

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
      <div className="mb-6">
        <Terminal />
      </div>
      <h2 className="mb-8 text-xl font-semibold tracking-tighter">
        My Experience
      </h2>
      <div className="mb-8">
        <Resume />
      </div>
      <h2 className="mb-8 text-xl font-semibold tracking-tighter">
        My Projects
      </h2>
      < Project />

      
    </section>
  );
}
