import Card from './components/card/Card';
import './Projects.css';

export const Projects: React.FC = () => {
  return (
    <div>
      <div className="card-container">
        <Card
          image={`../../assets/images/avantiLogo.png`}
          title="Project 1"
          description="Description of Project 1"
          link="https://project1-link.com"
        />
        <Card
          image={`${process.env.PUBLIC_URL}/assets/images/avantiLogo.png`}
          title="Avanti Kollektiv"
          description="Description of Project 2"
          link="https://project2-link.com"
        />
        <Card
          image="path_to_image.jpg"
          title="Software Development"
          description="Description of Project 3"
          link="https://project3-link.com"
        />
      </div>
    </div>
  );
};
