import React from 'react';
import type { CVData } from '../../types';
import { Mail, Phone, MapPin } from 'lucide-react';

export const SidebarTemplate: React.FC<{ data: CVData }> = ({ data }) => {
    const { personalInfo, experience, education, skills, languages, hobbies, referees } = data;

    return (
        <div className="h-full flex text-gray-900 font-sans">
            {/* Teal Sidebar */}
            <div className="w-1/4 bg-teal-600 text-white p-6 flex flex-col justify-start space-y-12">
                <div className="text-sm font-bold uppercase tracking-widest">
                    {experience.length > 0 && <div className="mb-8">Employment</div>}
                    {(skills.length > 0 || languages.length > 0) && <div className="mb-8">Qualifications</div>}
                    {education.length > 0 && <div className="mb-8">Education</div>}
                    {(hobbies.length > 0 || referees.length > 0) && <div className="mb-8">Attributes</div>}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-3/4 p-8 space-y-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-1">
                        {personalInfo.fullName || 'Your Name'}
                    </h1>
                    {personalInfo.jobTitle && (
                        <div className="text-sm font-semibold text-gray-700 mb-3">
                            {personalInfo.jobTitle}
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className="flex items-center gap-6 text-xs text-gray-600 mb-4">
                        {personalInfo.phone && (
                            <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                {personalInfo.phone}
                            </div>
                        )}
                        {personalInfo.email && (
                            <div className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {personalInfo.email}
                            </div>
                        )}
                    </div>
                    {personalInfo.address && (
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                            <MapPin className="w-3 h-3" />
                            {personalInfo.address}
                        </div>
                    )}

                    {/* Summary */}
                    {personalInfo.summary && (
                        <p className="text-sm leading-relaxed text-gray-700 mt-4 text-justify">
                            {personalInfo.summary}
                        </p>
                    )}
                </div>

                {/* Experience */}
                {experience.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 border-b border-gray-300 pb-1 mb-4">
                            Private Tutorial Practice
                        </h2>
                        {experience.map((exp) => (
                            <div key={exp.id} className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-sm">{exp.company}</h3>
                                    <span className="text-xs text-gray-500">
                                        {exp.startDate} - {exp.current ? 'to date' : exp.endDate}
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-gray-700 mb-2">{exp.title}</div>
                                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                                    {exp.description.split('\n').map((line, idx) => (
                                        line.trim() && <li key={idx}>{line.trim()}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                )}

                {/* Qualifications */}
                {(skills.length > 0 || languages.length > 0) && (
                    <section className="mb-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 border-b border-gray-300 pb-1 mb-4">
                            Professional Membership and Certifications
                        </h2>
                        <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                            {skills.map((skill) => (
                                <li key={skill.id}>{skill.name}</li>
                            ))}
                            {languages.map((lang) => (
                                <li key={lang.id}>{lang.name} - {lang.proficiency}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 border-b border-gray-300 pb-1 mb-4">
                            Education
                        </h2>
                        {education.map((edu) => (
                            <div key={edu.id} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-sm uppercase">{edu.degree}</h3>
                                    <span className="text-xs text-gray-500">
                                        {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-700">{edu.school}, {edu.location}</div>
                            </div>
                        ))}
                    </section>
                )}

                {/* Hobbies */}
                {hobbies && hobbies.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 border-b border-gray-300 pb-1 mb-4">
                            Personal Attributes
                        </h2>
                        <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                            {hobbies.map((hobby) => (
                                <li key={hobby.id}>{hobby.name}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Referees */}
                {referees && referees.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 border-b border-gray-300 pb-1 mb-4">
                            Referees
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {referees.map((ref) => (
                                <div key={ref.id} className="text-xs">
                                    <div className="font-bold text-gray-900">{ref.fullName}</div>
                                    <div className="text-gray-700">{ref.position}</div>
                                    <div className="text-gray-600">{ref.phone}</div>
                                    {ref.email && <div className="text-gray-600">{ref.email}</div>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
