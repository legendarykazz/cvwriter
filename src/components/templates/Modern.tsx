import React from 'react';
import type { CVData } from '../../types';
import { MapPin, Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';

export const Modern: React.FC<{ data: CVData }> = ({ data }) => {
    const { personalInfo, experience, education, skills, languages, hobbies, referees } = data;

    return (
        <div className="h-full flex flex-col text-gray-800 font-sans">
            {/* Header */}
            <div className="border-b-2 border-gray-800 pb-6 mb-6">
                <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900">
                    {personalInfo.fullName || 'Your Name'}
                </h1>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                    {personalInfo.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            <span>{personalInfo.email}</span>
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            <span>{personalInfo.phone}</span>
                        </div>
                    )}
                    {personalInfo.address && (
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{personalInfo.address}</span>
                        </div>
                    )}
                    {personalInfo.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            <span>{personalInfo.website}</span>
                        </div>
                    )}
                    {personalInfo.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="w-3 h-3" />
                            <span>{personalInfo.linkedin}</span>
                        </div>
                    )}
                    {personalInfo.github && (
                        <div className="flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            <span>{personalInfo.github}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8 flex-1">
                {/* Main Column */}
                <div className="col-span-8 space-y-6">
                    {/* Summary */}
                    {personalInfo.summary && (
                        <section className="mb-6 break-inside-avoid">
                            <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Profile</h3>
                            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
                                {personalInfo.summary}
                            </p>
                        </section>
                    )}

                    {/* Experience */}
                    {experience.length > 0 && (
                        <section className="mb-6 break-inside-avoid">
                            <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Experience</h3>
                            <div className="space-y-5">
                                {experience.map((exp) => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-gray-900">{exp.title}</h4>
                                            <span className="text-xs text-gray-500 font-medium">
                                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-semibold text-gray-700">{exp.company}</span>
                                            <span className="text-xs text-gray-500 italic">{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {education.length > 0 && (
                        <section className="mb-6 break-inside-avoid">
                            <h3 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-4">Education</h3>
                            <div className="space-y-4">
                                {education.map((edu) => (
                                    <div key={edu.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-gray-900">{edu.school}</h4>
                                            <span className="text-xs text-gray-500 font-medium">
                                                {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-700">{edu.degree}</span>
                                            <span className="text-xs text-gray-500 italic">{edu.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar Column */}
                <div className="col-span-4 space-y-8">
                    {/* Skills */}
                    {skills.length > 0 && (
                        <section className="mb-6 break-inside-avoid">
                            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Skills</h3>
                            <div className="space-y-2">
                                {skills.map((skill) => (
                                    <div key={skill.id}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gray-800 rounded-full"
                                                style={{ width: `${(skill.level / 5) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {languages.length > 0 && (
                        <section className="mb-6 break-inside-avoid">
                            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Languages</h3>
                            <div className="space-y-2">
                                {languages.map((lang) => (
                                    <div key={lang.id} className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                                        <span className="text-xs text-gray-500 italic">{lang.proficiency}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Hobbies */}
                    {hobbies && hobbies.length > 0 && (
                        <section className="mb-6 break-inside-avoid">
                            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Hobbies</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                {hobbies.map((hobby) => (
                                    <li key={hobby.id}>{hobby.name}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Referees */}
                    {referees && referees.length > 0 && (
                        <section className="mb-6 break-inside-avoid">
                            <h3 className="text-sm font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Referees</h3>
                            <div className="space-y-3">
                                {referees.map((ref) => (
                                    <div key={ref.id}>
                                        <div className="font-bold text-gray-900 text-sm">{ref.fullName}</div>
                                        <div className="text-xs text-gray-700">{ref.position}</div>
                                        <div className="text-xs text-gray-600">{ref.phone}</div>
                                        {ref.email && <div className="text-xs text-gray-600">{ref.email}</div>}
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
