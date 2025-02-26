import { Terminal, GitFork, Puzzle, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  // {
  //   icon: <Terminal className="h-10 w-10 text-primary" />,
  //   title: "Quick Install",
  //   description: "Get started with a single command using your favorite package manager.",
  //   command: "npm create bebop-app@latest",
  //   action: "Copy Command",
  // },
  {
    icon: <GitFork className="h-10 w-10 text-primary" />,
    title: "Clone & Configure",
    description: "Fork the repository and customize Bebop for your needs.",
    command: "git clone https://github.com/ddri/bebop",
    action: "Fork Repo",
  },
  // {
  //   icon: <Puzzle className="h-10 w-10 text-primary" />,
  //   title: "Add Plugins",
  //   description: "Extend functionality with our growing ecosystem of plugins.",
  //   command: "npm install @bebop/plugins-*",
  //   action: "Browse Plugins",
  // },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Deploy",
    description: "Deploy to your preferred hosting platform in minutes.",
    command: "npm run deploy",
    action: "Read Deploy Guide",
  },
];

export default function GettingStarted() {
  return (
    <section id="start" className="w-full py-20 bg-light-grey text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          How to Get Started
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-dark-grey p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/4"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{step.description}</p>
              <div className="space-y-3 w-full">
                <div className="bg-black/30 p-2 rounded-md font-mono text-sm w-full">
                  {step.command}
                </div>
                <Button
                  variant="secondary"
                  className="w-full bg-white/10 hover:bg-white/20 border-0"
                >
                  {step.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}