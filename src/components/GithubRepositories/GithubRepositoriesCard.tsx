import Card from '../card/Card';
import './GithubRepositoriesCard.css';

interface GithubRepositoriesProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const GithubRepositoriesCard: React.FC<GithubRepositoriesProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div>
      <div className="githubRepositoriesCard-container">
        <Card
          image={image}
          title={title}
          description={description}
          link={link}
          buttonText="View Repository"
        />
      </div>
    </div>
  );
};
