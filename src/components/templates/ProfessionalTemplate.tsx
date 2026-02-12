import React from 'react';
import type { CVData } from '../../types';

export const ProfessionalTemplate: React.FC<{ data: CVData }> = ({ data }) => {
    const { personalInfo, experience, education, skills, languages, hobbies, referees, accomplishments } = data;

    return (
        <div className="h-full flex flex-col text-gray-900 font-sans p-8">
            {/* Header - Centered */}
            <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
                <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName || 'Your Name'}</h1>
                <div className="text-xs text-gray-600 space-y-0.5">
                    {personalInfo.address && <div>{personalInfo.address}</div>}
                    {personalInfo.email && <div>{personalInfo.email}</div>}
                    {personalInfo.phone && <div>{personalInfo.phone}</div>}
                </div>
            </div>

            {/* Professional Summary */}
            {personalInfo.summary && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                        Professional Summary
                    </h2>
                    <p className="text-xs leading-relaxed text-gray-800 text-justify">
                        {personalInfo.summary}
                    </p>
                </section>
            )}

            {/* Personal Details & Core Competencies - Two Column */}
            <div className="grid grid-cols-2 gap-6 mb-5">
                {/* Personal Details */}
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                        Personal Details
                    </h2>
                    <div className="text-xs space-y-1">
                        {personalInfo.jobTitle && (
                            <div className="grid grid-cols-2">
                                <span className="font-semibold">Position:</span>
                                <span>{personalInfo.jobTitle}</span>
                            </div>
                        )}
                        <div className="grid grid-cols-2">
                            <span className="font-semibold">Gender:</span>
                            <span>{personalInfo.gender || '-'}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="font-semibold">Marital Status:</span>
                            <span>{personalInfo.maritalStatus || '-'}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="font-semibold">Nationality:</span>
                            <span>{personalInfo.nationality || '-'}</span>
                        </div>
                    </div>
                </section>

                {/* Core Competencies */}
                {skills.length > 0 && (
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                            Core Competencies
                        </h2>
                        <ul className="text-xs space-y-0.5 list-disc list-inside">
                            {skills.map((skill) => (
                                <li key={skill.id}>{skill.name}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>

            {/* Accomplishments */}
            {accomplishments && accomplishments.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                        Accomplishments
                    </h2>
                    <ul className="text-xs space-y-1 list-disc list-inside">
                        {accomplishments.map((acc) => (
                            <li key={acc.id}>{acc.description}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Professional Experience */}
            {experience.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">
                        Professional Experience
                    </h2>
                    {experience.map((exp) => (
                        <div key={exp.id} className="mb-4">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-xs font-bold uppercase">{exp.company}</h3>
                                <span className="text-xs text-gray-600">
                                    {exp.startDate} - {exp.current ? 'Current' : exp.endDate}
                                </span>
                            </div>
                            <div className="text-xs italic mb-1">{exp.title}</div>
                            <ul className="text-xs space-y-0.5 list-disc list-inside text-gray-700">
                                {exp.description.split('\n').map((line, idx) => (
                                    line.trim() && <li key={idx}>{line.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">
                        Educational Qualification
                    </h2>
                    {education.map((edu) => (
                        <div key={edu.id} className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-xs font-bold">{edu.degree}</h3>
                                <span className="text-xs text-gray-600">
                                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                                </span>
                            </div>
                            <div className="text-xs text-gray-700">{edu.school}, {edu.location}</div>
                        </div>
                    ))}
                </section>
            )}

            {/* Languages */}
            {languages.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                        Languages
                    </h2>
                    <ul className="text-xs space-y-0.5 list-disc list-inside">
                        {languages.map((lang) => (
                            <li key={lang.id}>{lang.name} - {lang.proficiency}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Hobbies */}
            {hobbies && hobbies.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
                        Hobbies & Interests
                    </h2>
                    <ul className="text-xs space-y-0.5 list-disc list-inside">
                        {hobbies.map((hobby) => (
                            <li key={hobby.id}>{hobby.name}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Referees */}
            {referees && referees.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">
                        Referees
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {referees.map((ref) => (
                            <div key={ref.id} className="text-xs">
                                <div className="font-bold">{ref.fullName}</div>
                                <div className="text-gray-700">{ref.position}</div>
                                <div className="text-gray-600">{ref.phone}</div>
                                {ref.email && <div className="text-gray-600">{ref.email}</div>}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};
