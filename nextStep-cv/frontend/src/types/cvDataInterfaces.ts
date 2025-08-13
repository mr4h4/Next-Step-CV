export interface Image {
    url: string;
    file?: File | null;
    altText?: string
}

export interface PersonalData {
    name: string;
    surname: string;
    address: string;
    email: string;
    phoneNumber: string;
    description: string;
}

export interface Study {
    title: string;
    institution: string;
    startDate: string;
    endDate: string;
}

export interface JobExperience {
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface SocialNetwork {
    name: string;
    link_label: string;
    logo_link: string;
    username_label: string;
}

export interface CvData {
    image: Image;
    personalInfo: PersonalData;
    studies: Study[];
    jobExperience: JobExperience[];
    languages: Language[];
    skills: string[];
    otherActivities: string[];
    socialNetworks: SocialNetwork[];
}
