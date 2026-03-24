import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, User, FileText, Cpu, Brain, Database, Layout, Server, Send, Volume2, VolumeX, Cloud } from 'lucide-react';

type Scene = 
  | 'SILENCE' 
  | 'SEARCHING' 
  | 'WONT_FIND' 
  | 'ENTRY_BUTTON' 
  | 'TERMINAL' 
  | 'FAKE_IDENTITY' 
  | 'CASE_FILES' 
  | 'BREAK_EVENT' 
  | 'VIDEO_TRANSITION'
  | 'REVEAL_BUILDUP' 
  | 'NAME_REVEAL' 
  | 'IMAGE_REVEAL' 
  | 'IMPACT_LINE' 
  | 'SKILLS' 
  | 'ACHIEVEMENTS' 
  | 'FINAL_CLIMAX'
  | 'BLACK_BOX_ANIMATION'
  | 'CONTACT_PAGE';

const PROJECTS = [
  {
    title: 'OPERATION KARUNA [SKILL CONNECT]',
    status: 'Deployed',
    type: 'Full-Stack Collab',
    execution: 'Role-based access system via JWT',
    tech: 'React, FastAPI, PostgreSQL',
    impact: 'Institute wide real-time platform'
  },
  {
    title: 'WAAJI SYNDICATE [ACADEMIC MONITOR]',
    status: 'Active',
    type: 'AI Biometric System',
    execution: 'MobileFaceNet + BLE Proximity',
    tech: 'Python, OpenCV, Hardware',
    impact: 'Automated ultra-secure attendance'
  }
];

const SKILLS = [
  { category: 'PROGRAMMING', items: ['Python', 'Java', 'JavaScript', 'SQL'] },
  { category: 'AI & ML', items: ['Machine Learning', 'Computer Vision', 'Prompt Engineering', 'OpenCV'] },
  { category: 'BACKEND', items: ['FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
  { category: 'FRONTEND', items: ['React', 'Tailwind CSS', 'HTML & CSS'] },
  { category: 'DEVOPS & CLOUD', items: ['Git', 'AWS (Basics)', 'Render', 'Vercel'] }
];

const MatrixRain = () => {
  const [chars, setChars] = useState<string[]>([]);
  
  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";
    const interval = setInterval(() => {
      setChars(prev => {
        const newChars = [...prev];
        if (newChars.length > 50) newChars.shift();
        newChars.push(characters[Math.floor(Math.random() * characters.length)]);
        return newChars;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-wrap gap-4 p-4 opacity-[0.15] pointer-events-none overflow-hidden select-none font-mono text-silver text-xs leading-none">
      {chars.map((char, i) => <span key={i}>{char}</span>)}
    </div>
  );
};

const Flash = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-white pointer-events-none"
      />
    )}
  </AnimatePresence>
);

const VaultDoors = ({ onComplete }: { onComplete: () => void, key?: string }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3.5, times: [0, 0.8, 1], ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" />

      {/* Left Door Handle/Gear mechanism */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ duration: 1.5, delay: 1.5, ease: [0.8, 0, 0.2, 1] }}
        className="absolute left-0 w-1/2 h-full bg-[#0a0a0c] border-r-4 border-silver/40 flex items-center justify-end overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 cyber-grid opacity-10" />
        {/* Semi-circle lock core */}
        <div className="relative w-[80vh] h-[80vh] translate-x-1/2 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: [-180, 0] }} 
            transition={{ duration: 1.2, ease: "easeInOut" }} 
            className="w-full h-full rounded-full border-[30px] border-[#151515] flex items-center justify-center shadow-inner"
          >
            <div className="w-[90%] h-[90%] rounded-full border-4 border-dashed border-silver/30" />
            <div className="absolute w-[120%] h-4 bg-[#151515]" />
            <div className="absolute h-[120%] w-4 bg-[#151515]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.5, delay: 1.5, ease: [0.8, 0, 0.2, 1] }}
        className="absolute right-0 w-1/2 h-full bg-[#0a0a0c] border-l-4 border-silver/40 flex items-center justify-start overflow-hidden shadow-[-20px_0_50px_rgba(0,0,0,0.9)]"
      >
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="relative w-[80vh] h-[80vh] -translate-x-1/2 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: [180, 0] }} 
            transition={{ duration: 1.2, ease: "easeInOut" }} 
            className="w-full h-full rounded-full border-[30px] border-[#151515] flex items-center justify-center shadow-inner"
          >
            <div className="w-[90%] h-[90%] rounded-full border-4 border-dashed border-silver/30" />
            <div className="absolute w-[120%] h-4 bg-[#151515]" />
            <div className="absolute h-[120%] w-4 bg-[#151515]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Center unlocking beam */}
      <motion.div
         animate={{ 
           height: ['0%', '100%', '100%', '100%'],
           opacity: [1, 1, 0, 0],
           width: ['4px', '20px', '100vw', '100vw']
         }}
         transition={{ duration: 2, times: [0, 0.3, 0.6, 1], ease: "easeIn", delay: 1 }}
         className="absolute z-10 w-1 h-0 bg-white shadow-[0_0_50px_#fff] mix-blend-screen"
      />
    </motion.div>
  );
};

export default function App() {
  const [scene, setScene] = useState<Scene>('SILENCE');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [breachLines, setBreachLines] = useState<string[]>([]);
  const [isGlitched, setIsGlitched] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showVault, setShowVault] = useState(false);

  const playRevealSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Dramatic low-frequency impact
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.8);
      
      gain.gain.setValueAtTime(0.6, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.8);

      // High-frequency "shimmer"
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(800, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.4);
      gain2.gain.setValueAtTime(0.1, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start();
      osc2.stop(ctx.currentTime + 0.4);
    } catch (e) {
      console.error("Audio synthesis failed", e);
    }
  };
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    const sequence = async () => {
      // Scene 1: Silence
      await new Promise(r => setTimeout(r, 500));
      setScene('SEARCHING');

      // Scene 2: Searching
      await new Promise(r => setTimeout(r, 3000));
      setScene('WONT_FIND');

      // Scene 3: Won't Find
      await new Promise(r => setTimeout(r, 2800));
      setScene('ENTRY_BUTTON');
    };

    sequence();
  }, []);

  const handleEnterSystem = () => {
    setScene('TERMINAL');
    runTerminalSequence();
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }
  };

  const runTerminalSequence = async () => {
    const lines = [
      '> initializing waaji.sys...',
      '> bypassing roy_group_firewalls...',
      '> decrypting karuna_shield_protocol...',
      '> accessing secure_vault_database...',
      '> verifying cult_credentials...',
      '> access granted // it\'s showtime'
    ];
    const delays = [800, 600, 1000, 800, 700, 1000];

    for (let i = 0; i < lines.length; i++) {
      await new Promise(r => setTimeout(r, delays[i]));
      setTerminalLines(prev => [...prev, lines[i]]);
    }

    await new Promise(r => setTimeout(r, 1000));
    setScene('FAKE_IDENTITY');
  };

  const handleAccessCore = () => {
    console.log("Initiating System Breach...");
    setScene('BREAK_EVENT');
    setIsGlitched(true);
    
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }

    // Rapid breach terminal simulation
    const breachMessages = [
      "BYPASSING WAAJI CITY SECURITY...",
      "INJECTING ROY_GROUP_PAYLOAD...",
      "EXTRACTING KARUNA_SHIELD_KEY...",
      "DECRYPTING BLACK_BOX_RSA_4096...",
      "IDENTITY_MASK_REMOVED",
      "CORE_ACCESS_ESTABLISHED // SHOWTIME"
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < breachMessages.length) {
        setBreachLines(prev => [...prev, breachMessages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    
    // Sequence the video transition after the breach
    setTimeout(() => {
      setIsGlitched(false);
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 300);
      setScene('VIDEO_TRANSITION');
      
      // Trim the duration: only show this atmospheric transition for 4.5 seconds
      setTimeout(() => {
        setShowFlash(true);
        setTimeout(() => setShowFlash(false), 300);
        setScene('NAME_REVEAL');
        
        setTimeout(() => {
          setShowFlash(true);
          setTimeout(() => setShowFlash(false), 300);
          setScene('IMAGE_REVEAL');
          
          setTimeout(() => {
            setScene('IMPACT_LINE');
            
            setTimeout(() => {
              setScene('SKILLS');
            }, 3000);
          }, 3000);
        }, 3000);
      }, 4500);
    }, 4000);
  };

  const nextFromSkills = () => {
    startAudio();
    setScene('ACHIEVEMENTS');
  };
  const nextFromAchievements = () => {
    startAudio();
    setScene('FINAL_CLIMAX');
  };

  const renderScene = () => {
    switch (scene) {
      case 'SEARCHING':
      case 'WONT_FIND':
        return (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-full gap-8 px-4 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2 }}
              className="text-xl md:text-2xl tracking-[0.4em] font-tech text-silver uppercase drop-shadow-[0_0_10px_rgba(192,192,192,0.5)]"
            >
              They are searching for a developer.
            </motion.h2>
            
            {scene === 'WONT_FIND' && (
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl md:text-2xl tracking-[0.4em] font-tech text-silver uppercase drop-shadow-[0_0_15px_rgba(192,192,192,0.8)]"
              >
                <span className="glitch-once">BUT HE IS THE SYSTEM.</span>
              </motion.h2>
            )}
          </motion.div>
        );

      case 'ENTRY_BUTTON':
        return (
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            className="flex items-center justify-center h-full"
          >
            <motion.button
              onClick={handleEnterSystem}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 text-sm tracking-[0.3em] uppercase border border-silver/30 text-silver font-tech transition-all duration-500 hover:border-silver cursor-pointer bg-black"
            >
              [ INITIATE UNDERCOVER PROTOCOL ]
            </motion.button>
          </motion.div>
        );

      case 'TERMINAL':
        return (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'flicker(1)' }}
            className="flex flex-col h-full p-8 font-mono text-soft-grey md:p-16"
          >
            <div className="flex-1 space-y-2">
              {terminalLines.map((line, i) => (
                <div key={i} className="text-lg">{line}</div>
              ))}
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-3 h-6 bg-silver"
              />
            </div>
          </motion.div>
        );

      case 'FAKE_IDENTITY':
      case 'CASE_FILES':
        return (
          <motion.div
            key="fake-id"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full p-8 md:p-16 overflow-y-auto"
          >
            <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-silver/60">
                  <Shield size={18} />
                  <span className="text-xs tracking-widest uppercase font-tech">PROJECT DECOY: ACTIVE // ID: ASHOK CHAKRAVARTHY</span>
                </div>
                <div className="space-y-2">
                  <p className="text-soft-grey font-mono text-sm uppercase tracking-tighter opacity-50">Identity_01</p>
                  <h1 className="text-4xl font-tech text-silver md:text-6xl uppercase tracking-tight">Ashok Chakravarthy</h1>
                  <p className="text-lg tracking-widest text-soft-grey uppercase">Software Developer</p>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 font-mono text-sm">
                  <div>
                    <p className="text-silver/40 text-[10px] mb-1">STATUS</p>
                    <p className="text-silver">ACTIVE</p>
                  </div>
                  <div>
                    <p className="text-silver/40 text-[10px] mb-1">LOCATION</p>
                    <p className="text-silver">WAAJI CITY / CLASSIFIED</p>
                  </div>
                  <div>
                    <p className="text-silver/40 text-[10px] mb-1">ACCESS LEVEL</p>
                    <p className="text-silver">KARUNA SHIELD (OMEGA)</p>
                  </div>
                  <div>
                    <p className="text-silver/40 text-[10px] mb-1">TRACKING</p>
                    <p className="text-silver">ENABLED</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-silver/40 text-[10px] mb-1">CLEARANCE</p>
                    <p className="text-silver">LEVEL 7</p>
                  </div>
                </div>
              </div>
              
              <div className="relative w-64 h-80 bg-steel border border-silver/10 overflow-hidden group">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img 
                  src="/fake.jpg" 
                  alt="Identity Silhouette" 
                  className="object-cover w-full h-full opacity-40 grayscale blur-[2px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 w-full h-1 bg-silver/20 animate-scanline" />
              </div>
            </div>

            <div className="mt-16 space-y-8">
              <h3 className="text-xs tracking-[0.5em] text-silver/40 uppercase font-tech">CASE FILES</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {PROJECTS.map((project, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, borderColor: 'rgba(192, 192, 192, 0.4)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                    className="p-6 border bg-steel/30 border-silver/10 space-y-4 transition-all duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-widest text-silver/40 font-mono">CASE: {project.title}</span>
                      <span className="text-[10px] px-2 py-0.5 border border-silver/20 text-silver/60">{project.status}</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl text-silver font-tech">{project.title}</h4>
                      <p className="text-xs text-soft-grey uppercase tracking-widest">{project.type}</p>
                    </div>
                    <div className="pt-4 space-y-2 text-xs font-mono text-soft-grey">
                      <p><span className="text-silver/30">EXECUTION:</span> {project.execution}</p>
                      <p><span className="text-silver/30">CORE_TECH:</span> {project.tech}</p>
                      <p><span className="text-silver/30">IMPACT:</span> {project.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-16 pb-16">
              <motion.button
                onClick={handleAccessCore}
                whileHover={{ scale: 1.05, letterSpacing: '0.5em' }}
                className="px-10 py-3 text-xs tracking-[0.3em] uppercase border border-silver/20 text-silver font-tech hover:bg-silver hover:text-black transition-all duration-500 cursor-pointer"
              >
                [ ACCESS CORE SYSTEM ]
              </motion.button>
            </div>
          </motion.div>
        );

      case 'BREAK_EVENT':
        return (
          <motion.div
            key="break"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col items-center justify-center h-full gap-4 text-center font-mono overflow-hidden"
          >
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            <MatrixRain />
            
            <div className="z-10 space-y-2 mb-8">
              {breachLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-silver/60 text-xs tracking-widest uppercase"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
              animate={{ 
                opacity: [0, 1, 0.8, 1],
                scale: [0.9, 1.05, 1],
                filter: ['blur(10px)', 'blur(0px)', 'blur(2px)', 'blur(0px)']
              }}
              transition={{ duration: 0.5, times: [0, 0.2, 0.5, 1] }}
              className="text-3xl md:text-5xl text-silver font-tech tracking-[0.4em] glitch-text animate-glitch-skew"
            >
              [ SYSTEM BREACH ]
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-[2px] bg-silver/40 mt-4 max-w-md w-full shadow-[0_0_15px_rgba(192,192,192,0.3)]"
            />
          </motion.div>
        );

      case 'REVEAL_BUILDUP':
        return null; // Merged with VIDEO_TRANSITION

      case 'VIDEO_TRANSITION':
        return (
          <motion.div
            key="video-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
          >
            {/* Trimmed & Background-formatted Video */}
            <video
              src="/transition.mp4"
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen scale-105 pointer-events-none"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
            
            {/* Foreground Buildup Text */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 space-y-12 text-center"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl tracking-[0.6em] font-tech text-red-500/80 uppercase glitch-text"
              >
                THIS PROFILE IS FAKE
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-xl md:text-2xl tracking-[0.4em] font-tech text-silver uppercase drop-shadow-[0_0_15px_rgba(192,192,192,0.3)]"
              >
                REAL IDENTITY DETECTED
              </motion.h2>
            </motion.div>
          </motion.div>
        );

      case 'NAME_REVEAL':
      case 'IMAGE_REVEAL':
      case 'IMPACT_LINE':
        return (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col items-center justify-center h-full text-center"
          >
            <div className="absolute inset-0 vignette pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {scene === 'NAME_REVEAL' && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, scale: 0.8, filter: 'blur(30px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  onViewportEnter={playRevealSound}
                  className="z-10 animate-light-sweep px-12 py-6"
                >
                  <h1 className="text-7xl md:text-9xl font-display tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white via-silver to-soft-grey">
                    NITISH RAJ
                  </h1>
                </motion.div>
              )}

              {scene === 'IMAGE_REVEAL' && (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 1.1, filter: 'grayscale(100%) blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%) blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="z-10 w-64 h-80 md:w-80 md:h-96 border border-silver/20 overflow-hidden shadow-[0_0_60px_rgba(192,192,192,0.2)]"
                >
                  <img 
                    src="/main.png" 
                    alt="Nitish Raj" 
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              )}

              {scene === 'IMPACT_LINE' && (
                <motion.div
                  key="impact"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="z-10 space-y-6 px-6"
                >
                  <p className="text-base md:text-xl tracking-widest text-silver/60 font-mono italic">
                    "Gully lo evadaina kodatadu... ground lo digitey telustundi."
                  </p>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl tracking-[0.2em] text-silver font-tech">
                      You were looking at a developer.
                    </p>
                    <p className="text-3xl md:text-5xl tracking-[0.3em] text-white font-tech font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                      NOW IT'S SHOWTIME.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );

      case 'SKILLS':
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full p-8 md:p-16 overflow-y-auto relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-no-repeat bg-contain bg-center opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url(/black_box.png)' }} />
            <div className="relative z-10 flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-4xl tracking-[0.4em] text-silver font-tech uppercase drop-shadow-[0_0_10px_rgba(192,192,192,0.3)]">THE BLACK BOX ARCHITECTURE</h2>
              <motion.button
                onClick={nextFromSkills}
                className="text-xs tracking-widest text-silver/40 hover:text-silver transition-colors font-mono cursor-pointer"
              >
                ACCESS_ARCHIVES //
              </motion.button>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="skill-card p-8 border border-silver/10 bg-white/5 backdrop-blur-sm group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-40 transition-opacity duration-300">
                    {skill.category === 'FRONTEND' && <Layout className="w-6 h-6" />}
                    {skill.category === 'BACKEND' && <Server className="w-6 h-6" />}
                    {skill.category === 'DEPLOYMENT' && <Cloud className="w-6 h-6" />}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-4 bg-silver group-hover:h-6 transition-all duration-300" />
                    <h3 className="text-xs tracking-[0.3em] text-silver font-tech uppercase">{skill.category}</h3>
                  </div>
                  <ul className="space-y-3 font-mono text-sm text-soft-grey">
                    {skill.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 group/item">
                        <span className="text-silver/20 group-hover/item:text-silver/60 transition-colors">0{j+1}</span>
                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'ACHIEVEMENTS':
        return (
          <motion.div
            key="achievements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-full p-8 text-center"
          >
            <h2 className="mb-16 text-2xl md:text-4xl tracking-[0.5em] text-silver font-tech uppercase drop-shadow-[0_0_10px_rgba(192,192,192,0.3)]">THE ARCHITECT'S LEGACY</h2>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 border border-silver/10 bg-steel/20"
              >
                <p className="text-4xl font-display text-silver mb-2">TOP 61</p>
                <p className="text-[10px] tracking-widest text-soft-grey uppercase">IIT Bombay NEC / 4000+</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-8 border border-silver/10 bg-steel/20"
              >
                <p className="text-4xl font-display text-silver mb-2">2⭐</p>
                <p className="text-[10px] tracking-widest text-soft-grey uppercase">CodeChef / 400+ Problems</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-8 border border-silver/10 bg-steel/20"
              >
                <p className="text-4xl font-display text-silver mb-2">LEAD</p>
                <p className="text-[10px] tracking-widest text-soft-grey uppercase">Web Dev / EDCELL VIIT</p>
              </motion.div>
            </div>

            <motion.button
              onClick={nextFromAchievements}
              className="mt-20 px-12 py-4 text-sm tracking-[0.4em] border border-silver/30 text-silver font-tech hover:bg-silver hover:text-black transition-all duration-500 cursor-pointer shadow-[0_0_15px_rgba(192,192,192,0.1)] hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]"
            >
              [ OPEN KARUNA SHIELD ]
            </motion.button>
          </motion.div>
        );

      case 'FINAL_CLIMAX':
        return (
          <motion.div
            key="final"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-full gap-16 text-center px-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/waaji_city.png)', filter: 'grayscale(80%)' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-12 w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-sm md:text-xl tracking-widest text-silver/60 font-mono italic">
                  "Waaji ela untundo nuvvela oohinchukunnavo naku teliyadu..."
                </p>
                <p className="text-base md:text-2xl tracking-widest text-silver font-tech uppercase">
                  "Kani ippatinunchi waaji nenu yela chepithe alaa untundi."
                </p>
              </motion.div>
              
              <div className="space-y-6 pt-8">
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                  className="text-2xl md:text-4xl tracking-[0.4em] text-silver font-tech uppercase"
                >
                  Anyone can write code.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ delay: 3.5, duration: 1.5 }}
                  className="text-4xl md:text-7xl tracking-[0.4em] text-white font-tech font-bold uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                >
                  Only an Architect builds an Empire.
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 5.5, duration: 1 }}
              className="relative z-10 mt-16 flex flex-col items-center gap-12"
            >
              <div
                onClick={() => {
                  startAudio();
                  setScene('BLACK_BOX_ANIMATION');
                  setTimeout(() => {
                    setShowVault(true);
                    setScene('CONTACT_PAGE');
                  }, 3000);
                }}
                className="relative cursor-pointer group"
                style={{ perspective: 1000 }}
              >
                {/* 3D Hovering Box */}
                <motion.div
                  animate={{ 
                    y: [-15, 10, -15],
                    rotateX: [5, -5, 5],
                    rotateY: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ scale: 1.1, rotateY: 15, rotateX: 10 }}
                  whileTap={{ scale: 0.9, rotateY: 0, rotateX: 0 }}
                  className="relative z-10"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img 
                    src="/black_box.png" 
                    alt="Black Box" 
                    className="w-48 h-48 md:w-64 md:h-64 object-contain mix-blend-screen filter drop-shadow-[0_20px_30px_rgba(192,192,192,0.3)] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-silver/20 blur-[60px] rounded-full scale-50 group-hover:scale-100 transition-all duration-700 opacity-30 group-hover:opacity-80 mix-blend-lighten pointer-events-none" />
                </motion.div>
                
                {/* Dynamic Floor Shadow */}
                <motion.div
                  animate={{ 
                    scale: [0.7, 1.1, 0.7],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-6 bg-black blur-xl rounded-[100%] z-0"
                />
              </div>
              <span className="relative text-sm tracking-[0.5em] text-silver/60 font-tech uppercase font-bold animate-pulse pointer-events-none">
                [ UNLOCK THE BLACK BOX ]
              </span>
            </motion.div>
          </motion.div>
        );

      case 'BLACK_BOX_ANIMATION':
        return (
          <motion.div
            key="box_anim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-full bg-black relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/waaji_city.png)', filter: 'grayscale(100%) blur(5px)' }} />
            
            <motion.div
               animate={{ 
                 scale: [1, 1.2, 8],
                 opacity: [1, 1, 0],
                 rotateY: [0, 180, 540]
               }}
               transition={{ duration: 2.8, ease: "easeInOut", times: [0, 0.6, 1] }}
               className="relative z-10 w-64 h-64 md:w-96 md:h-96 flex items-center justify-center"
               style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            >
              <img src="/black_box.png" alt="Black Box Opening" className="w-full h-full object-contain mix-blend-screen filter drop-shadow-[0_0_50px_rgba(255,255,255,0.8)]" />
              <motion.div 
                animate={{ opacity: [0, 1, 1], scale: [0.5, 2, 5] }}
                transition={{ duration: 2.5, ease: "easeIn", delay: 0.5 }}
                className="absolute inset-0 bg-white blur-3xl rounded-full mix-blend-screen"
              />
            </motion.div>
          </motion.div>
        );

      case 'CONTACT_PAGE':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-full p-6 md:p-16 relative overflow-y-auto overflow-x-hidden bg-black"
          >
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'url(/waaji_city.png)', filter: 'grayscale(50%)' }} />
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, type: 'spring', damping: 20 }}
              className="relative z-10 flex flex-col items-center w-full max-w-3xl border border-silver/20 bg-steel/60 backdrop-blur-xl p-8 md:p-16 shadow-[0_0_50px_rgba(192,192,192,0.05)] group my-auto"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-silver shadow-[0_0_20px_rgba(192,192,192,0.8)]" />
              
              <div className="mb-10 relative w-48 h-56 md:w-64 md:h-80 transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-[-2px] bg-gradient-to-br from-silver/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-full h-full border border-silver/40 overflow-hidden relative z-10 bg-black">
                  <img src="/prof2.png" alt="Nitish Raj Profile" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Tech targeting corners */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-silver z-20" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-silver z-20" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-silver z-20" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-silver z-20" />
              </div>

              <div className="space-y-3 text-center mb-10">
                <h3 className="text-silver/60 font-mono text-[10px] tracking-[0.5em] uppercase">IDENTITY_VERIFIED // THE ARCHITECT</h3>
                <h1 className="text-2xl md:text-5xl text-white font-display tracking-[0.1em] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] uppercase">
                  Vellanki Nitish Bala Souri Raj
                </h1>
              </div>

              <div className="w-full space-y-4">
                <a href="mailto:nitishvraj17042006@gmail.com" className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 border border-silver/20 hover:border-silver/80 hover:bg-silver/10 transition-all group/item cursor-pointer">
                  <span className="text-silver/40 font-mono text-xs tracking-widest group-hover/item:text-silver flex items-center gap-2 mb-2 md:mb-0">
                    <span className="w-2 h-2 bg-silver/40 group-hover/item:bg-silver animate-pulse" />
                    COMM_LINK
                  </span>
                  <span className="text-silver font-tech tracking-wider text-sm md:text-lg">nitishvraj17042006@gmail.com</span>
                </a>
                
                <a href="tel:+917013300517" className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 border border-silver/20 hover:border-silver/80 hover:bg-silver/10 transition-all group/item cursor-pointer">
                  <span className="text-silver/40 font-mono text-xs tracking-widest group-hover/item:text-silver flex items-center gap-2 mb-2 md:mb-0">
                    <span className="w-2 h-2 bg-silver/40 group-hover/item:bg-silver animate-pulse" />
                    SECURE_LINE
                  </span>
                  <span className="text-silver font-tech tracking-wider text-sm md:text-lg">+91 7013300517</span>
                </a>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex justify-center p-4 md:p-5 border border-silver/20 hover:border-silver hover:bg-silver hover:text-black text-silver transition-all group/link font-tech tracking-[0.3em] uppercase text-xs md:text-sm cursor-pointer shadow-[0_0_10px_rgba(192,192,192,0)] hover:shadow-[0_0_20px_rgba(192,192,192,0.4)]">
                    LINKEDIN 
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="flex justify-center p-4 md:p-5 border border-silver/20 hover:border-silver hover:bg-silver hover:text-black text-silver transition-all group/link font-tech tracking-[0.3em] uppercase text-xs md:text-sm cursor-pointer shadow-[0_0_10px_rgba(192,192,192,0)] hover:shadow-[0_0_20px_rgba(192,192,192,0.4)]">
                    GITHUB
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    }
  };

  return (
    <main 
      onClick={startAudio}
      className="relative w-full h-screen overflow-hidden bg-black font-sans selection:bg-silver selection:text-black"
    >
      {/* Background Particles (Scene 3+) */}
      {(scene !== 'SILENCE' && scene !== 'SEARCHING') && (
        <div className="particles-bg">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* Glitch Overlay */}
      {isGlitched && (
        <div className="fixed inset-0 z-50 pointer-events-none transition-colors duration-500">
          <div className="absolute inset-0 bg-white/5 backdrop-invert-[0.05] mix-blend-difference animate-flash" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-silver/10 to-transparent animate-scanline" />
          <div className="noise-overlay" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <div className="text-[12vw] font-tech text-silver select-none pointer-events-none tracking-widest uppercase">BREACH</div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {renderScene()}
      </AnimatePresence>

      <Flash active={showFlash} />

      <AnimatePresence>
        {showVault && <VaultDoors onComplete={() => setShowVault(false)} key="vault" />}
      </AnimatePresence>

      {/* Global Vignette */}
      <div className="fixed inset-0 pointer-events-none vignette opacity-60" />

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/Saaho%20Bgm.mp3"
        loop
        preload="auto"
        onPlay={() => console.log("Audio started playing")}
        onError={(e) => console.error("Audio error:", e)}
      />

      {/* Audio Control */}
      {scene !== 'SILENCE' && scene !== 'SEARCHING' && scene !== 'WONT_FIND' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={toggleMute}
          className="fixed bottom-8 right-8 z-[60] p-3 border border-silver/20 bg-black/40 text-silver hover:bg-silver hover:text-black transition-all duration-300 cursor-pointer"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </motion.button>
      )}
    </main>
  );
}
