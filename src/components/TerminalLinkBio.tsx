import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Globe, Coffee, Monitor } from 'lucide-react';

const TerminalLinkBio = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = 'welcome to gabriel.dev';

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const typeTimer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);
    return () => clearTimeout(typeTimer);
  }, [typedText, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const links = [
    { name: 'github', url: '#', icon: Github, color: 'text-green' },
    { name: 'linkedin', url: '#', icon: Linkedin, color: 'text-blue' },
    { name: 'portfolio', url: '#', icon: Globe, color: 'text-purple' },
    { name: 'email', url: '#', icon: Mail, color: 'text-red' },
    { name: 'blog', url: '#', icon: Coffee, color: 'text-orange' }
  ];

  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS'];

  return (
    <div className="min-h-screen bg-black text-green font-mono p-4">
      <div className="max-w-2xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-graphite rounded-t-lg p-3 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red rounded-full"></div>
            <div className="w-3 h-3 bg-yellow rounded-full"></div>
            <div className="w-3 h-3 bg-green rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-silver text-sm">gabriel@dev:~</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-black border-2 border-graphite rounded-b-lg p-6 min-h-[500px]">
          {/* Header */}
          <div className="mb-6">
            <div className="text-golden mb-2">
              ┌─[gabriel@dev]─[~]
            </div>
            <div className="text-golden mb-4">
              └─$ cat /home/gabriel/info.txt
            </div>
            
            <div className="border border-teal p-4 mb-4">
              <div className="text-center mb-4">
                <div className="text-2xl text-lilac mb-2">
                  ╔═══════════════════════════════╗
                </div>
                <div className="text-xl text-pink">
                  ║      GABRIEL MELLO DEV       ║
                </div>
                <div className="text-2xl text-lilac">
                  ╚═══════════════════════════════╝
                </div>
              </div>
              
              <div className="text-amber">
                {typedText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
              </div>
            </div>
          </div>

          {/* System Info */}
          <div className="mb-6">
            <div className="text-teal mb-2">$ whoami</div>
            <div className="text-white ml-4 mb-4">
              Full Stack Developer | Tech Enthusiast | Problem Solver
            </div>
            
            <div className="text-teal mb-2">$ date</div>
            <div className="text-white ml-4 mb-4">
              {currentTime.toLocaleString('pt-BR')}
            </div>
            
            <div className="text-teal mb-2">$ cat skills.txt</div>
            <div className="ml-4 mb-4">
              {skills.map((skill, index) => (
                <span key={skill} className="text-mint">
                  {skill}
                  {index < skills.length - 1 && <span className="text-silver"> | </span>}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mb-6">
            <div className="text-teal mb-2">$ ls -la links/</div>
            <div className="ml-4 space-y-2">
              {links.map((link, index) => (
                <div key={link.name} className="flex items-center space-x-3 group hover:bg-graphite p-2 rounded transition-colors cursor-pointer">
                  <link.icon className={`w-5 h-5 ${link.color}`} />
                  <span className="text-silver">drwxr-xr-x</span>
                  <span className="text-white">1</span>
                  <span className="text-golden">gabriel</span>
                  <span className="text-golden">dev</span>
                  <span className="text-white">
                    <a href={link.url} className={`${link.color} hover:underline`}>
                      ./{link.name}
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="mb-6">
            <div className="text-teal mb-2">$ status</div>
            <div className="ml-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
                <span className="text-green">Online</span>
                <span className="text-silver">- Always ready to code!</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-graphite pt-4">
            <div className="text-teal mb-2">$ echo "Let's build something amazing together!"</div>
            <div className="text-white ml-4 mb-4">
              Let's build something amazing together!
            </div>
            
            <div className="flex items-center text-golden">
              <Monitor className="w-4 h-4 mr-2" />
              <span>gabriel@dev:~$ </span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLinkBio;