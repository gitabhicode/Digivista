
import './App.css';
import Container1 from './Components/Container1/Container1';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Service from './Components/Servic/Service';
import Free from './Components/Freeproposal/Free';
import Casestudy from './Components/Casestudy/Casestudy';
import Working from './Components/Working/Working';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Fotter from './Components/Footer/Fotter';
function App() {
  let working=[
    { sno: 1,heading:"Consultation",para:"Our process begins with a comprehensive consultation to understand your business goals, challenges, and target audience. We listen carefully to your needs, gather insights, and evaluate your current marketing efforts. This collaborative discussion helps us tailor a digital marketing strategy that aligns with your objectives, ensuring a clear roadmap for success. Through this initial consultation, we lay the foundation for a strong, results-driven partnership."},
    { sno: 2 ,heading:"Research",para:" In the research phase, we dive deep into understanding your industry, competitors, and target market. By analyzing trends, customer behavior, and key performance metrics, we uncover valuable insights that drive informed decision-making. This research enables us to identify opportunities and challenges, ensuring that the strategies we develop are data-driven and tailored to your specific needs, setting you up for sustainable growth in a competitive digital landscape."},
    { sno: 3,heading:"Implimentation",para:"Once the strategy is finalized, we move to the implementation phase, where we put the plan into action. Our team ensures seamless execution across all channels—whether it's SEO, PPC, content marketing, or social media. We monitor progress in real time, making adjustments as needed to ensure optimal performance. With a focus on efficiency and attention to detail, we bring your vision to life and start driving measurable results for your business."},
    { sno: 4,heading:"Optimisation",para:"After the initial implementation, we continuously monitor and optimize your campaigns to ensure they’re delivering the best possible results. Through A/B testing, performance analysis, and data-driven adjustments, we refine every aspect of your digital strategy. Our goal is to maximize ROI by fine-tuning ad spend, content, targeting, and user experience, ensuring that your marketing efforts stay ahead of the curve and continue to drive growth over time."},
    { sno: 5,heading:"Improvement",para:"We believe in the power of continuous improvement. After optimization, we assess the long-term impact of our strategies, identifying areas for further growth. By analyzing key metrics and staying updated with industry trends, we refine and evolve your marketing approach to adapt to changing market conditions. Our commitment to ongoing improvement ensures that your business remains competitive, relevant, and positioned for sustained success in the ever-evolving digital landscape."},
  ]
  return (
    <div className="App">
      <Navbar/>
      <Container1/>
      <Logo/>
      <Service/>
      <Free/>
      <Casestudy/>
      <Working working={working}/>
      <Team/>
      <Contact/>
      <Fotter/>
    </div>
  );
}

export default App;
