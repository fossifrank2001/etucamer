export const progressionLessons = [
  {
    id: 1,
    lesson: 'Physique',
    beginDate: undefined,
    progression: 0,
    hours: 50,
    ccIsProgramated: {
      statut: false,
      date: undefined,
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 2,
    lesson: 'Mathématiques',
    beginDate: '12/09/2023',
    hours: 50,
    progression: 65,
    ccIsProgramated: {
      statut: true,
      date: '12/11/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 3,
    lesson: 'Chimie',
    beginDate: '15/09/2023',
    hours: 12,
    progression: 25,
    ccIsProgramated: {
      statut: true,
      date: '20/10/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 4,
    lesson: 'Biologie',
    beginDate: '18/09/2023',
    hours: 35,
    progression: 40,
    ccIsProgramated: {
      statut: true,
      date: '25/10/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 5,
    lesson: 'Histoire',
    beginDate: '21/09/2023',
    hours: 20,
    progression: 100,
    ccIsProgramated: {
      statut: true,
      date: '15/11/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 6,
    lesson: 'Géographie',
    beginDate: '24/09/2023',
    hours: 50,
    progression: 60,
    ccIsProgramated: {
      statut: true,
      date: '18/11/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 7,
    lesson: 'Langue étrangère',
    beginDate: undefined,
    hours: 50,
    progression: 50,
    ccIsProgramated: {
      statut: true,
      date: '22/11/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 8,
    lesson: 'Arts plastiques',
    beginDate: '30/09/2023',
    hours: 50,
    progression: 0,
    ccIsProgramated: {
      statut: true,
      date: '28/11/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 9,
    lesson: 'Informatique',
    beginDate: '03/10/2023',
    hours: 5,
    progression: 45,
    ccIsProgramated: {
      statut: true,
      date: '05/12/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
  {
    id: 10,
    lesson: 'Éducation physique',
    beginDate: undefined,
    hours: 18,
    progression: 0,
    ccIsProgramated: {
      statut: true,
      date: '10/12/2023',
    },
    examIsProgramated: {
      statut: false,
      date: undefined,
    },
  },
];

export const levels =[
    {
      level: 1,
      semesters: [
        {
          number: 1,
          subjects: [
            {
              id: 1,
              lesson: 'Mathematique',
              beginDate: "12/09/2023",
              progression: 100,
              hours: 15,
              teacher: "NOZAKAP FOSSI frank",
              ccIsProgramated: {
                statut: false,
                date: undefined,
                weight: 0.4,
                max_score: 20
              },
              examIsProgramated: {
                statut: false,
                date: undefined,
                weight: 0.6,
                max_score: 20
              },
            },
            {
              id: 2,
              lesson: 'Physics',
              beginDate: '06/01/2023',
              progression: 90,
              hours: 8,
              teacher: "TINKEU DYRAN frank",
              ccIsProgramated: {
                statut: false,
                date: undefined,
                weight: 0.4,
                max_score: 20
              },
              examIsProgramated: {
                statut: false,
                date: undefined,
                weight: 0.6,
                max_score: 20
              },
            },
            {
              id: 3,
              lesson: 'Chimie',
              beginDate: '12/09/2023',
              progression: 82,
              hours: 12,
              teacher: "NGUETSA CHEBOU frank",
              ccIsProgramated: {
                statut: true,
                date: '23/11/2023',
                weight: 0.4,
                max_score: 20
              },
              examIsProgramated: {
                statut: false,
                date: undefined,
                weight: 0.6,
                max_score: 20
              },
            }
          ]
        },
        {
          number: 2,
          subjects: [
            {
              id: 1,
              lesson: 'Biologie',
              beginDate: '18/09/2023',
              hours: 35,
              teacher: "TALLA KAZI Yvan",
              progression: 40,
              ccIsProgramated: {
                statut: true,
                date: '25/10/2023',
                weight: 0.4,
                max_score: 20
              },
              examIsProgramated: {
                statut: false,
                date: undefined,
                "weight": 0.6,
                "max_score": 20
              },
            },
            {
              id: 2,
              lesson: 'Histoire',
              beginDate: '21/09/2023',
              hours: 20,
              progression: 100,
              teacher: "NANA KOFEKOU Alain",
              ccIsProgramated: {
                statut: true,
                date: '15/11/2023',
                weight: 0.4,
                max_score: 20
              },
              examIsProgramated: {
                statut: false,
                date: undefined,
                "weight": 0.6,
                "max_score": 20
              },
            }
          ]
        }
      ]
    }
]


