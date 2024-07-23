import { GithubRepositoriesCard } from './GithubRepositoriesCard';

export const GithubRepositories: React.FC = () => {
  return (
    <div>
      <div className="card-container">
        <GithubRepositoriesCard
          image="https://avatars.githubusercontent.com/u/53711153?v=4"
          title="Seakuh"
          description="Main Profile for Projects"
          link="https://github.com/Seakuh"
        />
        <GithubRepositoriesCard
          image="https://avatars.githubusercontent.com/u/78036483?v=4"
          title="NapierDanel"
          description="Github Profile from Semester abort"
          link="https://github.com/NapierDanel"
        />
        <GithubRepositoriesCard
          image="https://avatars.githubusercontent.com/u/89012620?v=4"
          title="Dizzle Reply"
          description="Work Profile from Comsysto Reply"
          link="https://github.com/DizzleReply"
        />
      </div>
    </div>
  );
};
