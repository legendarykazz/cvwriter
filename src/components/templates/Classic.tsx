import React from 'react';
import type { CVData } from '../../types';

export const Classic: React.FC<{ data: CVData }> = ({ data }) => {
    const { personalInfo, experience, education, skills, languages, hobbies, referees } = data;

    return (
        <div className="h-full flex flex-col text-gray-900 font-serif">
            {/* Header */}
            <div className="text-center mb-8 border-b-2 border-black pb-4">
                <h1 className="text-3xl font-bold uppercase mb-2">
                    {personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="text-sm flex flex-wrap justify-center gap-4 text-gray-700">
                    {personalInfo.address && <span>{personalInfo.address}</span>}
                    {personalInfo.phone && <span>{personalInfo.phone}</span>}
                    {personalInfo.email && <span>{personalInfo.email}</span>}
                    {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
                </div>
            </div>

            <div className="space-y-6">
                {/* Summary */}
                {personalInfo.summary && (
                    <section>
                        <h2 className="text-lg font-bold border-b border-gray-400 mb-2 uppercase">Professional Summary</h2>
                        <p className="text-sm leading-relaxed text-justify">
                            {personalInfo.summary}
                        </p>
                    </section>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold border-b border-gray-400 mb-3 uppercase">Experience</h2>
                        <div className="space-y-4">
                            {experience.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between font-bold text-sm">
                                        <span>{exp.title}</span>
                                        <span>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm italic mb-1">
                                        <span>{exp.company}</span>
                                        <span>{exp.location}</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-justify">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold border-b border-gray-400 mb-3 uppercase">Education</h2>
                        <div className="space-y-3">
                            {education.map((edu) => (
                                <div key={edu.id}>
                                    <div className="flex justify-between font-bold text-sm">
                                        <span>{edu.school}</span>
                                        <span>{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm italic">
                                        <span>{edu.degree}</span>
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-8">
                    {/* Skills */}
                    {skills.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold border-b border-gray-400 mb-2 uppercase">Skills</h2>
                            <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-x-4">
                                {skills.map((skill) => (
                                    <li key={skill.id}>{skill.name}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Languages */}
                    {languages.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold border-b border-gray-400 mb-2 uppercase">Languages</h2>
                            <ul className="list-disc list-inside text-sm">
                                {languages.map((lang) => (
                                    <li key={lang.id}>{lang.name} ({lang.proficiency})</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Hobbies */}
                    {hobbies && hobbies.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold border-b border-gray-400 mb-2 uppercase">Hobbies</h2>
                            <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-x-4">
                                {hobbies.map((hobby) => (
                                    <li key={hobby.id}>{hobby.name}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Referees */}
                    {referees && referees.length > 0 && (
                        <section className="col-span-2">
                            <h2 className="text-lg font-bold border-b border-gray-400 mb-3 uppercase">Referees</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {referees.map((ref) => (
                                    <div key={ref.id}>
                                        <div className="font-bold text-sm">{ref.fullName}</div>
                                        <div className="text-xs italic">{ref.position}</div>
                                        <div className="text-xs">{ref.phone}</div>
                                        {ref.email && <div className="text-xs">{ref.email}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
