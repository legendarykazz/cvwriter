import React from 'react';
import type { CVData } from '../../types';

export const NigerianTemplate: React.FC<{ data: CVData }> = ({ data }) => {
    const { personalInfo, experience, education, skills, languages, hobbies, referees, accomplishments } = data;

    return (
        <div className="h-full flex flex-col text-gray-900 font-sans bg-white">
            {/* Header with Green Bottom Border */}
            <div className="text-center py-4 px-6 border-b-4 border-green-700">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-2 text-gray-900">
                    {personalInfo.fullName || 'YOUR NAME'}
                </h1>
                <div className="text-xs md:text-sm space-y-0.5 text-gray-900">
                    {personalInfo.address && <div>{personalInfo.address}</div>}
                    <div>
                        {personalInfo.email && <span>{personalInfo.email}</span>}
                        {personalInfo.phone && personalInfo.email && <span> • </span>}
                        {personalInfo.phone && <span>{personalInfo.phone}</span>}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6 space-y-5">
                {/* Career Objective */}
                {personalInfo.summary && (
                    <section className="break-inside-avoid">
                        <h2 className="text-sm md:text-base font-bold uppercase mb-2 border-b-2 border-gray-900 pb-1">
                            Career Objective
                        </h2>
                        <p className="text-sm leading-relaxed text-justify">
                            {personalInfo.summary}
                        </p>
                    </section>
                )}

                {/* Personal Data */}
                <section className="break-inside-avoid">
                    <h2 className="text-sm md:text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                        Personal Data
                    </h2>
                    <div className="text-xs md:text-sm space-y-2">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="font-bold">Sex:</div>
                            <div className="col-span-2">{personalInfo.gender || ''}</div>
                        </div>
                        {personalInfo.dateOfBirth && (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="font-bold">Date of Birth:</div>
                                <div className="col-span-2">{personalInfo.dateOfBirth}</div>
                            </div>
                        )}
                        {personalInfo.nationality && (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="font-bold">Nationality:</div>
                                <div className="col-span-2">{personalInfo.nationality}</div>
                            </div>
                        )}
                        {personalInfo.stateOfOrigin && (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="font-bold">State Of Origin:</div>
                                <div className="col-span-2">{personalInfo.stateOfOrigin}</div>
                            </div>
                        )}
                        {personalInfo.localGovernment && (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="font-bold">Local Government:</div>
                                <div className="col-span-2">{personalInfo.localGovernment}</div>
                            </div>
                        )}
                        {personalInfo.maritalStatus && (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="font-bold">Marital Status:</div>
                                <div className="col-span-2">{personalInfo.maritalStatus}</div>
                            </div>
                        )}
                        {personalInfo.religion && (
                            <div className="grid grid-cols-3 gap-4">
                                <div className="font-bold">Religion:</div>
                                <div className="col-span-2">{personalInfo.religion}</div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Education and Certificate Obtained with Date */}
                {education.length > 0 && (
                    <section className="break-inside-avoid">
                        <h2 className="text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                            Education and Certificate Obtained with Date
                        </h2>
                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div key={edu.id} className="break-inside-avoid">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <div>
                                            <div className="font-bold text-sm">{edu.degree}</div>
                                            <div className="text-sm">{edu.school}</div>
                                            {edu.description && (
                                                <div className="text-sm text-gray-700">({edu.description})</div>
                                            )}
                                        </div>
                                        <div className="font-bold text-sm">
                                            {edu.endDate || edu.startDate}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Working Experiences */}
                {experience.length > 0 && (
                    <section className="break-inside-avoid">
                        <h2 className="text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                            Working Experiences
                        </h2>
                        <div className="space-y-4">
                            {experience.map((exp) => (
                                <div key={exp.id} className="break-inside-avoid">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <div className="font-bold text-sm">• {exp.title}, {exp.company}</div>
                                        <div className="font-bold text-sm">
                                            {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                                        </div>
                                    </div>
                                    <div className="text-sm ml-4">{exp.location}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Personal Qualities */}
                {hobbies && hobbies.length > 0 && (
                    <section className="break-inside-avoid">
                        <h2 className="text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                            Personal Qualities
                        </h2>
                        <div className="ml-8 space-y-1 text-sm">
                            {hobbies.map((hobby) => (
                                <div key={hobby.id}>{hobby.name}</div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Competencies */}
                {(skills.length > 0 || accomplishments.length > 0) && (
                    <section className="break-inside-avoid">
                        <h2 className="text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                            Competencies
                        </h2>
                        <div className="ml-8 space-y-1 text-sm">
                            {skills.map((skill) => (
                                <div key={skill.id}>{skill.name}</div>
                            ))}
                            {accomplishments.map((acc) => (
                                <div key={acc.id}>{acc.description}</div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Hobbies */}
                {hobbies && hobbies.length > 0 && (
                    <section className="break-inside-avoid">
                        <h2 className="text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                            Hobbies
                        </h2>
                        <div className="ml-8 text-sm">
                            {hobbies.map((hobby, idx) => (
                                <span key={hobby.id}>
                                    {hobby.name}
                                    {idx < hobbies.length - 1 && ', '}
                                </span>
                            ))}
                            .
                        </div>
                    </section>
                )}

                {/* Language Spoken */}
                {languages.length > 0 && (
                    <section className="break-inside-avoid">
                        <h2 className="text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                            Language Spoken
                        </h2>
                        <ul className="ml-8 space-y-1 text-sm list-disc list-inside">
                            {languages.map((lang) => (
                                <li key={lang.id}>{lang.name}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Referee */}
                {referees && referees.length > 0 && (
                    <section className="break-inside-avoid">
                        <h2 className="text-base font-bold uppercase mb-3 border-b-2 border-gray-900 pb-1">
                            Referee
                        </h2>
                        <div className="space-y-3">
                            {referees.map((ref) => (
                                <div key={ref.id} className="ml-4 break-inside-avoid">
                                    <div className="flex items-start gap-2">
                                        <span className="text-lg">⭘</span>
                                        <div className="text-sm">
                                            <div className="font-bold">{ref.fullName}</div>
                                            {ref.position && <div>{ref.position}</div>}
                                            <div>Tel: {ref.phone}</div>
                                            {ref.email && <div>Email: {ref.email}</div>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
