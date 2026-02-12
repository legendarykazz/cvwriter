import React from 'react';
import type { CVData } from '../../types';

export const Minimal: React.FC<{ data: CVData }> = ({ data }) => {
    const { personalInfo, experience, education, skills, languages, hobbies, referees } = data;

    return (
        <div className="h-full flex flex-col text-gray-800 font-sans p-4">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-4">
                    {personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-col text-sm text-gray-500 space-y-1">
                    {personalInfo.email && <a href={`mailto:${personalInfo.email}`} className="hover:text-black transition-colors">{personalInfo.email}</a>}
                    {personalInfo.phone && <span>{personalInfo.phone}</span>}
                    {personalInfo.address && <span>{personalInfo.address}</span>}
                    <div className="flex gap-4 pt-2">
                        {personalInfo.linkedin && <a href={personalInfo.linkedin} className="hover:text-black transition-colors">LinkedIn</a>}
                        {personalInfo.github && <a href={personalInfo.github} className="hover:text-black transition-colors">GitHub</a>}
                        {personalInfo.website && <a href={personalInfo.website} className="hover:text-black transition-colors">Portfolio</a>}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-12">
                {/* Left Column (Main Content) */}
                <div className="col-span-8 space-y-10">
                    {/* Summary */}
                    {personalInfo.summary && (
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Profile</h3>
                            <p className="text-sm leading-relaxed text-gray-800">
                                {personalInfo.summary}
                            </p>
                        </section>
                    )}

                    {/* Experience */}
                    {experience.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Experience</h3>
                            <div className="space-y-8">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative border-l border-gray-200 pl-6 ml-1">
                                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gray-200 rounded-full border-2 border-white"></div>
                                        <div className="mb-2">
                                            <h4 className="font-medium text-gray-900">{exp.title}</h4>
                                            <div className="text-sm text-gray-500">{exp.company} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
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
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Education</h3>
                            <div className="space-y-6">
                                {education.map((edu) => (
                                    <div key={edu.id}>
                                        <h4 className="font-medium text-gray-900">{edu.school}</h4>
                                        <div className="text-sm text-gray-500">{edu.degree}</div>
                                        <div className="text-xs text-gray-400 mt-1">{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Column (Sidebar) */}
                <div className="col-span-4 space-y-10 pt-2">
                    {/* Skills */}
                    {skills.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill.id} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {languages.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Languages</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {languages.map((lang) => (
                                    <li key={lang.id} className="flex justify-between">
                                        <span>{lang.name}</span>
                                        <span className="text-gray-400 lowercase">{lang.proficiency}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Hobbies */}
                    {hobbies && hobbies.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Hobbies</h3>
                            <ul className="space-y-1 text-sm text-gray-600">
                                {hobbies.map((hobby) => (
                                    <li key={hobby.id}>{hobby.name}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Referees */}
                    {referees && referees.length > 0 && (
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Referees</h3>
                            <div className="space-y-4">
                                {referees.map((ref) => (
                                    <div key={ref.id}>
                                        <div className="font-medium text-sm text-gray-900">{ref.fullName}</div>
                                        <div className="text-xs text-gray-500 italic">{ref.position}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{ref.phone}</div>
                                        {ref.email && <div className="text-xs text-gray-500">{ref.email}</div>}
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
