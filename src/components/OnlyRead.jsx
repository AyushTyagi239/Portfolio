import React, { useEffect } from "react";

const OnlyRead = ({ data }) => {
    const { title, intro, advantages, useCases } = data;
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <main className="w-full min-h-screen bg-[#0f172a] text-white overflow-x-hidden overflow-y-auto p-6">
            {/* Title and Intro Section */}
            <section className="max-w-6xl mx-auto mb-12">
                <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
                <div className="bg-gray-800 rounded-lg p-6">
                    <p className="text-lg leading-relaxed">{intro}</p>
                </div>
            </section>

            {/* Advantages Section */}
            {advantages && advantages.length > 0 && (
                <section className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Advantages</h2>
                    <div className="grid gap-4">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
                                <p className="text-lg">{advantage}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Use Cases Section */}
            {useCases && useCases.length > 0 && (
                <section className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Use Cases</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-300">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
};

export default OnlyRead;