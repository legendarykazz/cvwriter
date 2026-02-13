import { Document, Paragraph, TextRun, BorderStyle, AlignmentType, HeadingLevel, Packer } from 'docx';
import { saveAs } from 'file-saver';
import type { CVData } from '../types';

export const exportToWord = async (data: CVData) => {
    const { personalInfo, experience, education, skills, languages, hobbies, referees, accomplishments } = data;

    const doc = new Document({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 1134, // 2cm in twips
                        right: 1134,
                        bottom: 1134,
                        left: 1134,
                    },
                },
            },
            children: [
                // Header with green bottom border
                new Paragraph({
                    text: personalInfo.fullName || 'YOUR NAME',
                    heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER,
                    run: { size: 56, bold: true },
                    spacing: { after: 100 },
                    border: {
                        bottom: {
                            color: "047857", // green-700
                            space: 1,
                            style: BorderStyle.SINGLE,
                            size: 24,
                        },
                    },
                }),

                // Contact Info
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 },
                    children: [
                        new TextRun({
                            text: [
                                personalInfo.address,
                                personalInfo.email,
                                personalInfo.phone
                            ].filter(Boolean).join(' • '),
                            size: 22,
                        }),
                    ],
                }),

                // Career Objective
                ...(personalInfo.summary ? [
                    new Paragraph({
                        text: 'CAREER OBJECTIVE',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        run: { size: 24, bold: true },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    new Paragraph({
                        text: personalInfo.summary,
                        spacing: { after: 200 },
                        alignment: AlignmentType.JUSTIFIED,
                        run: { size: 22 },
                    }),
                ] : []),

                // Personal Data
                new Paragraph({
                    text: 'PERSONAL DATA',
                    heading: HeadingLevel.HEADING_2,
                    spacing: { before: 200, after: 100 },
                    run: { size: 24, bold: true },
                    border: {
                        bottom: {
                            color: "000000",
                            space: 1,
                            style: BorderStyle.SINGLE,
                            size: 12,
                        },
                    },
                }),


                ...(personalInfo.gender ? [new Paragraph({
                    spacing: { after: 50 },
                    children: [
                        new TextRun({ text: 'Sex:\t\t\t\t', bold: true, size: 22 }),
                        new TextRun({ text: personalInfo.gender, size: 22 }),
                    ],
                })] : []),
                ...(personalInfo.dateOfBirth ? [new Paragraph({
                    spacing: { after: 50 },
                    children: [
                        new TextRun({ text: 'Date of Birth:\t\t\t', bold: true, size: 22 }),
                        new TextRun({ text: personalInfo.dateOfBirth, size: 22 }),
                    ],
                })] : []),
                ...(personalInfo.nationality ? [new Paragraph({
                    spacing: { after: 50 },
                    children: [
                        new TextRun({ text: 'Nationality:\t\t\t', bold: true, size: 22 }),
                        new TextRun({ text: personalInfo.nationality, size: 22 }),
                    ],
                })] : []),
                ...(personalInfo.stateOfOrigin ? [new Paragraph({
                    spacing: { after: 50 },
                    children: [
                        new TextRun({ text: 'State Of Origin:\t\t', bold: true, size: 22 }),
                        new TextRun({ text: personalInfo.stateOfOrigin, size: 22 }),
                    ],
                })] : []),
                ...(personalInfo.localGovernment ? [new Paragraph({
                    spacing: { after: 50 },
                    children: [
                        new TextRun({ text: 'Local Government:\t\t', bold: true, size: 22 }),
                        new TextRun({ text: personalInfo.localGovernment, size: 22 }),
                    ],
                })] : []),
                ...(personalInfo.maritalStatus ? [new Paragraph({
                    spacing: { after: 50 },
                    children: [
                        new TextRun({ text: 'Marital Status:\t\t\t', bold: true, size: 22 }),
                        new TextRun({ text: personalInfo.maritalStatus, size: 22 }),
                    ],
                })] : []),
                ...(personalInfo.religion ? [new Paragraph({
                    spacing: { after: 100 },
                    children: [
                        new TextRun({ text: 'Religion:\t\t\t', bold: true, size: 22 }),
                        new TextRun({ text: personalInfo.religion, size: 22 }),
                    ],
                })] : []),

                // Education
                ...(education.length > 0 ? [
                    new Paragraph({
                        text: 'EDUCATION AND CERTIFICATE OBTAINED WITH DATE',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        run: { size: 24, bold: true },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    ...education.flatMap(edu => [
                        new Paragraph({
                            spacing: { after: 50 },
                            children: [
                                new TextRun({ text: edu.degree, bold: true, size: 22 }),
                                new TextRun({ text: '\t\t\t\t' }),
                                new TextRun({ text: edu.endDate || edu.startDate, bold: true, size: 22 }),
                            ],
                        }),
                        new Paragraph({
                            text: edu.school,
                            spacing: { after: 100 },
                            run: { size: 22 },
                        }),
                        ...(edu.description ? [new Paragraph({
                            text: `(${edu.description})`,
                            spacing: { after: 100 },
                            run: { size: 44 },
                        })] : []),
                    ]),
                ] : []),

                // Working Experiences
                ...(experience.length > 0 ? [
                    new Paragraph({
                        text: 'WORKING EXPERIENCES',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    ...experience.flatMap(exp => [
                        new Paragraph({
                            spacing: { after: 50 },
                            children: [
                                new TextRun({ text: `• ${exp.title}, ${exp.company}`, bold: true }),
                                new TextRun({ text: '\t\t\t\t' }),
                                new TextRun({ text: `${exp.startDate} – ${exp.current ? 'Present' : exp.endDate}`, bold: true }),
                            ],
                        }),
                        new Paragraph({
                            text: exp.location,
                            spacing: { after: 100, left: 240 },
                        }),
                    ]),
                ] : []),

                // Personal Qualities
                ...(hobbies && hobbies.length > 0 ? [
                    new Paragraph({
                        text: 'PERSONAL QUALITIES',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    ...hobbies.map(hobby => new Paragraph({
                        text: hobby.name,
                        spacing: { after: 50, left: 360 },
                    })),
                ] : []),

                // Competencies
                ...((skills.length > 0 || accomplishments.length > 0) ? [
                    new Paragraph({
                        text: 'COMPETENCIES',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    ...skills.map(skill => new Paragraph({
                        text: skill.name,
                        spacing: { after: 50, left: 360 },
                    })),
                    ...accomplishments.map(acc => new Paragraph({
                        text: acc.description,
                        spacing: { after: 50, left: 360 },
                    })),
                ] : []),

                // Hobbies
                ...(hobbies && hobbies.length > 0 ? [
                    new Paragraph({
                        text: 'HOBBIES',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    new Paragraph({
                        text: hobbies.map(h => h.name).join(', ') + '.',
                        spacing: { after: 100, left: 360 },
                    }),
                ] : []),

                // Language Spoken
                ...(languages.length > 0 ? [
                    new Paragraph({
                        text: 'LANGUAGE SPOKEN',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    ...languages.map(lang => new Paragraph({
                        text: `• ${lang.name}`,
                        spacing: { after: 50, left: 360 },
                    })),
                ] : []),

                // Referee
                ...(referees && referees.length > 0 ? [
                    new Paragraph({
                        text: 'REFEREE',
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 100 },
                        border: {
                            bottom: {
                                color: "000000",
                                space: 1,
                                style: BorderStyle.SINGLE,
                                size: 12,
                            },
                        },
                    }),
                    ...referees.flatMap(ref => [
                        new Paragraph({
                            spacing: { after: 50, left: 240 },
                            children: [
                                new TextRun({ text: '⭘ ' }),
                                new TextRun({ text: ref.fullName, bold: true }),
                            ],
                        }),
                        ...(ref.position ? [new Paragraph({
                            text: ref.position,
                            spacing: { after: 50, left: 360 },
                        })] : []),
                        new Paragraph({
                            text: `Tel: ${ref.phone}`,
                            spacing: { after: 50, left: 360 },
                        }),
                        ...(ref.email ? [new Paragraph({
                            text: `Email: ${ref.email}`,
                            spacing: { after: 100, left: 360 },
                        })] : []),
                    ]),
                ] : []),
            ],
        }],
    });

    // Generate and download using Packer
    try {
        const blob = await Packer.toBlob(doc);
        const fileName = `${personalInfo.fullName || 'CV'}_CV.docx`;
        saveAs(blob, fileName);
    } catch (error) {
        console.error('Error generating Word document:', error);
        alert('Failed to generate Word document. Please try again.');
    }
};
