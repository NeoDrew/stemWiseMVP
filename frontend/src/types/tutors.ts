export type Gender = 'any' | 'male' | 'female';

export interface Tutor {
    id: string;
    name: string;
    rate: number;
    profileHighlight: string;
    bio: string;
    imageUrl: string;
    gender: Gender;
    isDBSCertified?: boolean;
    badges?: string[];
}

export const sampleTutors: Tutor[] = [
    {
        id: '1',
        name: 'Emma Johnson',
        rate: 40,
        profileHighlight: 'Experienced in IB Math and Physics',
        bio: 'I have over 6 years of experience tutoring high school and college students in mathematics and physics...',
        imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        gender: 'female',
        isDBSCertified: true,
        badges: ['Tutor for 6 years', 'Professional Teacher', '4.9-Star Review'],
    },
    {
        id: '2',
        name: 'Daniel Kim',
        rate: 35,
        profileHighlight: 'SAT Verbal and Writing Specialist',
        bio: 'Helping students excel in SAT reading and writing for over 5 years...',
        imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        gender: 'male',
        badges: ['Tutor for 5 years', '4.8-Star Review'],
    },
    {
        id: '3',
        name: 'Ayesha Patel',
        rate: 30,
        profileHighlight: 'Primary School Maths and Reading Support',
        bio: 'Passionate about helping young learners gain confidence in foundational subjects. DBS Certified and trained in special needs education.',
        imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
        gender: 'female',
        isDBSCertified: true,
        badges: ['Tutor for 3 years', 'DBS Certified', 'Early Education Focus'],
    },
    {
        id: '4',
        name: 'Liam O’Connor',
        rate: 45,
        profileHighlight: 'A-Level Economics & Business Tutor',
        bio: 'With a background in business consultancy and a teaching qualification, I help students understand core economic concepts with real-world examples.',
        imageUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
        gender: 'male',
        isDBSCertified: false,
        badges: ['Tutor for 4 years', 'Qualified Business Analyst'],
    },
    {
        id: '5',
        name: 'Chen Wei',
        rate: 50,
        profileHighlight: 'Mandarin and Chinese Literature Expert',
        bio: 'Native Mandarin speaker with a PhD in Chinese literature. I tutor GCSE, A-Level and university-level students in language, poetry and philosophy.',
        imageUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
        gender: 'male',
        isDBSCertified: true,
        badges: ['Tutor for 8 years', 'PhD Holder', '5-Star Rated'],
    },
    {
        id: '6',
        name: 'Sofia García',
        rate: 38,
        profileHighlight: 'Spanish Language Tutor (GCSE to University)',
        bio: 'I’m a native Spanish speaker and certified language instructor. My sessions are tailored to your goals—whether conversational fluency or exam prep.',
        imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
        gender: 'female',
        isDBSCertified: false,
        badges: ['Tutor for 4 years', 'Language Specialist', 'Bilingual Instruction'],
    },
];
