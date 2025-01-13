import Card from "../components/Elements/Card";
import GoalsFragment from "../components/Fragments/Goals";
import MainLayout from "../components/Layouts/MainLayout";

const GoalPage = () => {
  return (
    <MainLayout type="goals">
      <GoalsFragment />
    </MainLayout>
  );
};

export default GoalPage;