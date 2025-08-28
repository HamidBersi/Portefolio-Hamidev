import type React from "react";

interface CompetenceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CompetenceCard = ({ title, description, icon }: CompetenceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="mb-4">
          <span className="text-3xl">{icon}</span>
        </div>
        <div>
          <h4 className="font-bold text-xl text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompetenceCard;
