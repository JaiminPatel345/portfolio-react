import {CardBody, CardContainer, CardItem} from '../components/ui/3d-card';
import getSkillIcon from '../utils/getSkillIcon';

const skills = {
  advanced: [
    {name: 'React'},
    {name: 'Express.js'},
    {name: 'JavaScript'},
    {name: 'TypeScript'},
    {name: 'Node.js'},
    {name: 'MongoDB'},
    {name: 'Java'},

    {name: 'Docker'},
    {name: 'Tailwind'},
    {name: 'CSS'},
    {name: 'HTML'},
    {name: 'Git'},
  ],
  intermediate: [
    {name: 'Spring Boot'},
    {name: 'React Native'},
    {name: 'Nativewind'},
    {name: 'Linux'},
    {name: 'PostgreSQL'},
    {name: 'Socket.io'},
    {name: 'Azure'},
    {name: 'Peer js'},
  ],
  familiar: [
    {name: 'Firebase'},
    {name: 'GCP'},
    {name: 'Kubernetes'},
    {name: 'GraphQL'},
    {name: 'ONDC'},
    {name: 'Python'},
    {name: 'C'},
  ],
};

const SkillCard = ({name}) => {
  return (
      <CardContainer className="inter-var">
        <CardBody
            className="relative group/card border-0 h-12 w-full rounded-lg backdrop-blur-sm backdrop-filter bg-black/10 hover:bg-black/20 transition-all duration-200">
          <CardItem
              translateZ="20"
              className="w-full h-full flex items-center gap-3 px-4"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {getSkillIcon(name)}
            </div>
            <span className="text-sm font-medium text-neutral-200">
            {name}
          </span>
          </CardItem>
        </CardBody>
      </CardContainer>
  );
};

const SkillCategory = ({title, skills, bgColor}) => {
  return (
      <div className={`p-6 rounded-lg ${bgColor}`}>
        <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
              <SkillCard
                  key={`${title}-${index}`}
                  name={skill.name}
              />
          ))}
        </div>
      </div>
  );
};

const SkillSet = () => {
  return (
      <div className="w-full font-sans px-3 md:px-10" id="skills">
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Skill Set
          </h2>
          <p className="text-neutral-300 text-sm mb-12">
            Technologies I work with, categorized by proficiency level
          </p>
          <div className="space-y-4">
            <SkillCategory
                title="Advanced"
                skills={skills.advanced}
                bgColor="bg-gradient-to-r from-purple-900/50 to-indigo-900/50"
            />
            <SkillCategory
                title="Intermediate"
                skills={skills.intermediate}
                bgColor="bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
            />
            <SkillCategory
                title="Familiar"
                skills={skills.familiar}
                bgColor="bg-gradient-to-r from-teal-900/50 to-emerald-900/50"
            />
          </div>
        </div>
      </div>
  );
};

export default SkillSet;