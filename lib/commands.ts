import { About } from "@/app/data/user";

export interface Command {
  cmd: string;
  desc: string;
  execute: (args: string[]) => String | null;
}
export const commands: Record<string, Command> = {
  clear: {
    cmd: "clear",
    desc: "Clear the terminal",
    execute: () => null,
  },
  echo: {
    cmd: "echo",
    desc: "Print out anything",
    execute: (args: string[]) => args.join(" "), // Echo back the arguments
  },
  help: {
    cmd: "help",
    desc: "List available commands",
    execute: () => {
      return Object.values(commands)
        .map((command) => `${command.cmd}: ${command.desc}`)
        .join("\n");
    },
  },
  about: {
    cmd: "about",
    desc: "Display detailed information about the user",
    execute: () => {
      const width = 70; // Adjust this number for your desired width
      const line = "═".repeat(width);
      return `
  ╔${line}╗
  ║                       About Me                       ║
  ╠${line}╣
  ║ Location: ${About.currentLocation.padEnd(width - 20)}║
  ║ Interests: ${About.interests.join(", ").padEnd(width - 20)}║
  ║ Education: ${About.education.padEnd(width - 20)}║
  ║ Skills: ${About.skills.join(", ").padEnd(width - 20)}║
  ╚${line}╝
`;
    },
  },
  date: {
    cmd: "date",
    desc: "Displays the current date and time",
    execute: () => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };
      return currentDate.toLocaleString("en-US", options);
    },
  },
};
