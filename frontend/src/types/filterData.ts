// types/filterData.ts
export interface Qualification {
    id: string;
    label: string;
}

export interface SubjectArea {
    id: string;
    name: string;
}

export interface FilterData {
    qualifications: Qualification[];
    subjectAreas: SubjectArea[];
    pricingRange: { min: number; max: number };
    specialisedLearningStyles: { id: string; label: string }[];
}

export const filterData: FilterData = {
    qualifications: [
        { id: 'degree', label: 'Degree' },
        { id: 'teaching_pro', label: 'Teaching Professional' },
    ],
    subjectAreas: [
        { id: 'math', name: 'Math' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
    ],
    pricingRange: { min: 10, max: 100 },

    specialisedLearningStyles: [
        { id: 'adhd', label: 'ADHD' },
        { id: 'autism', label: 'Autism' },
        { id: 'dyslexia', label: 'Dyslexia' },
        { id: 'interactive', label: 'Interactive' },
        { id: 'visual', label: 'Visual Learner' },
        { id: 'kinaesthetic', label: 'Kinaesthetic Learner' },
    ],
};

