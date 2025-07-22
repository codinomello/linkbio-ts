import React, { useState } from 'react';
import { Instagram, Twitter, Github, Linkedin, Mail, Globe, Youtube, Music, Heart, Star, Sparkles } from 'lucide-react';

const App = () => {
  const [likes, setLikes] = useState(847);
  const [isLiked, setIsLiked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const profile = {
    name: "Alex Rivera",
    title: "Creative Developer & Digital Artist",
    bio: "Transformando ideias em experiências digitais incríveis ✨",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    location: "São Paulo, Brasil"
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      url: "#", 
      icon: Instagram, 
      color: "bg-gradient-to-r from-pink to-orange",
      hoverColor: "hover:from-orange hover:to-pink",
      followers: "12.5k"
    },
    { 
      name: "GitHub", 
      url: "#", 
      icon: Github, 
      color: "bg-gradient-to-r from-graphite to-slate",
      hoverColor: "hover:from-slate hover:to-purple",
      followers: "2.8k"
    },
    { 
      name: "LinkedIn", 
      url: "#", 
      icon: Linkedin, 
      color: "bg-gradient-to-r from-blue to-teal",
      hoverColor: "hover:from-teal hover:to-blue",
      followers: "5.2k"
    },
    { 
      name: "YouTube", 
      url: "#", 
      icon: Youtube, 
      color: "bg-gradient-to-r from-red to-coral",
      hoverColor: "hover:from-coral hover:to-red",
      followers: "18.9k"
    }
  ];

  const projectLinks = [
    {
      title: "Portfolio Website",
      description: "Meu portfólio completo com projetos recentes",
      url: "#",
      icon: Globe,
      color: "bg-gradient-to-r from-purple to-indigo",
      hoverColor: "hover:from-indigo hover:to-purple"
    },
    {
      title: "Design System",
      description: "Sistema de design open-source para React",
      url: "#",
      icon: Star,
      color: "bg-gradient-to-r from-golden to-amber",
      hoverColor: "hover:from-amber hover:to-golden"
    },
    {
      title: "Music Player App",
      description: "Player de música minimalista e elegante",
      url: "#",
      icon: Music,
      color: "bg-gradient-to-r from-green to-mint",
      hoverColor: "hover:from-mint hover:to-green"
    },
    {
      title: "Contact Me",
      description: "Entre em contato para colaborações",
      url: "#",
      icon: Mail,
      color: "bg-gradient-to-r from-lilac to-lavender",
      hoverColor: "hover:from-lavender hover:to-lilac"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-peach to-lavender p-4 font-sans">
      {/* Background decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-orange/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-md mx-auto">
        {/* Header com foto e info */}
        <div className="text-center mb-8 relative">
          <div className="relative inline-block mb-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto transform hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green to-mint p-1 rounded-full">
              <div className="w-4 h-4 bg-green rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-graphite mb-2">{profile.name}</h1>
          <p className="text-slate mb-2 font-medium">{profile.title}</p>
          <p className="text-brown text-sm mb-3">{profile.bio}</p>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red rounded-full"></div>
            <span className="text-xs text-slate">{profile.location}</span>
          </div>

          {/* Botão de curtir */}
          <button
            onClick={handleLike}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-large transition-all duration-300 ${
              isLiked 
                ? 'bg-gradient-to-r from-red to-pink text-white shadow-lg scale-105' 
                : 'bg-white/80 text-graphite hover:bg-gradient-to-r hover:from-red hover:to-pink hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{likes.toLocaleString()}</span>
          </button>
        </div>

        {/* Links Sociais */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-graphite mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-golden" />
            Redes Sociais
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  className={`${link.color} ${link.hoverColor} text-white p-4 rounded-large shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 block`}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6" />
                      <div>
                        <div className="font-semibold text-sm">{link.name}</div>
                        <div className="text-xs opacity-90">{link.followers}</div>
                      </div>
                    </div>
                    {hoveredLink === link.name && (
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Links de Projetos */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-graphite mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-golden" />
            Projetos & Links
          </h2>
          <div className="space-y-4">
            {projectLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  className={`${link.color} ${link.hoverColor} text-white p-4 rounded-large shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300 block group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-medium group-hover:bg-white/30 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{link.title}</h3>
                      <p className="text-xs opacity-90">{link.description}</p>
                    </div>
                    <div className="transform group-hover:translate-x-1 transition-transform">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-slate/20">
          <p className="text-xs text-slate mb-2">
            Feito com <Heart className="w-3 h-3 inline text-red fill-current" /> em React
          </p>
          <div className="flex justify-center gap-4 text-xs text-slate/60">
            <span>© 2024 {profile.name}</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;