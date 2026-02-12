export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    jobTitle: string;
    website: string;
    linkedin: string;
    github: string;
    summary: string;
    gender: string;
    maritalStatus: string;
    nationality: string;
    dateOfBirth: string;
    stateOfOrigin: string;
    localGovernment: string;
    religion: string;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

export interface Education {
    id: string;
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

export interface Skill {
    id: string;
    name: string;
    level: number; // 1-5 or percentage
}

export interface Hobby {
    id: string;
    name: string;
}

export interface Language {
    id: string;
    name: string;
    proficiency: string; // Native, Fluent, Intermediate, etc.
}

export interface Referee {
    id: string;
    fullName: string;
    position: string;
    phone: string;
    email?: string;
}

export interface Accomplishment {
    id: string;
    description: string;
}

export interface CVData {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
    hobbies: Hobby[];
    referees: Referee[];
    accomplishments: Accomplishment[];
    template: 'modern' | 'classic' | 'minimal' | 'sidebar' | 'professional' | 'nigerian';
}

export const initialCVData: CVData = {
    personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        jobTitle: '',
        website: '',
        linkedin: '',
        github: '',
        summary: '',
        gender: '',
        maritalStatus: '',
        nationality: '',
        dateOfBirth: '',
        stateOfOrigin: '',
        localGovernment: '',
        religion: '',
    },
    experience: [],
    education: [],
    skills: [],
    languages: [],
    hobbies: [],
    referees: [],
    accomplishments: [],
    template: 'nigerian',
};
