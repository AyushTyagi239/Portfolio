const ProjectShowcase = ({ title, projects }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-10">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-xl overflow-hidden border border-white/10"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex gap-4">
                {project.linkedin && (
                  <a
                    href={project.linkedin}
                    target="_blank"
                    className="px-4 py-2 border rounded-lg"
                  >
                    LinkedIn
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 rounded-lg"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
