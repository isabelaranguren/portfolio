import { BlogPosts } from '@/components/Posts'
import Project from '@/components/projects/Project';
import Terminal from '@/components/terminal/Terminal';
import Timeline from '@/components/Timeline';


export default function Page() {
  return (
    <>
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
        <Timeline />
        <h2 className="text-xl font-semibold tracking-tighter">My Projects</h2>
        <Project />
      </div>
    </>
  );
}