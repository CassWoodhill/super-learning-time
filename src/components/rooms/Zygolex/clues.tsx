const clueLabels = ["means", "rhymes with", "letter changed from"];

export const staticClues = [
  {
    label: "Slate",
    inputMatch: "Rate",
    type: "rhyme",
    isInput: false,
    inputIndex: 4,
  },
  {
    label: "Grade",
    inputMatch: "Rate",
    type: "means",
    isInput: false,
    inputIndex: 4,
  },
  {
    label: "Gory",
    inputMatch: "Story",
    type: "rhyme",
    isInput: false,
    inputIndex: 5,
  },
  {
    label: "Storm",
    inputMatch: "Story",
    type: "letter",
    isInput: false,
    inputIndex: 5,
  },
  {
    label: "Rate",
    inputMatch: "Rite",
    type: "letter",
    isInput: false,
    showLines: true,
    hint: "Means price, rhymes with slate",
    inputIndex: 7,
    clueMatch: [
      {
        label: clueLabels[1],
        index: 0,
      },
      {
        label: clueLabels[0],
        index: 1,
      },
    ],
  },
  {
    label: "Story",
    inputMatch: "Tale",
    type: "means",
    isInput: true,
    hint: "Letter change from storm, rhymes with gory",
    inputIndex: 8,
    clueMatch: [
      {
        label: clueLabels[1],
        index: 2,
      },
      {
        label: clueLabels[2],
        index: 3,
      },
    ],
  },
  {
    label: "Ritual",
    inputMatch: "Rite",
    type: "means",
    isInput: false,
    inputIndex: 7,
  },
  {
    label: "Rite",
    inputMatch: "Flight",
    type: "rhyme",
    isInput: true,
    hint: "Means ritual, letter change from",
    inputIndex: 10,
    clueMatch: [
      {
        label: clueLabels[2],
        index: 4,
      },
      {
        label: clueLabels[0],
        index: 6,
      },
    ],
  },
  {
    label: "Tale",
    inputMatch: "Tape",
    type: "letter",
    isInput: true,
    inputIndex: 12,
    clueMatch: [
      {
        label: clueLabels[0],
        index: 5,
      },
      {
        label: clueLabels[1],
        index: 9,
      },
    ],
  },
  {
    label: "Rail",
    inputMatch: "Tale",
    type: "rhyme",
    isInput: false,
    inputIndex: 8,
  },
  {
    label: "Flight",
    inputMatch: "Escape",
    type: "means",
    isInput: true,
    inputIndex: 11,
    updateIndex: 4,
    clueMatch: [
      {
        label: clueLabels[1],
        index: 7,
      },
      {
        label: clueLabels[2],
        index: 14,
      },
    ],
  },
  {
    label: "Escape",
    inputMatch: "Escape",
    type: "rhyme",
    isInput: true,
    inputIndex: 11,
    clueMatch: [
      {
        label: clueLabels[0],
        index: 10,
      },
      {
        label: clueLabels[1],
        index: 12,
      },
    ],
  },
  {
    label: "Tape",
    inputMatch: "Escape",
    type: "rhyme",
    isInput: true,
    inputIndex: 11,
    clueMatch: [
      {
        label: clueLabels[2],
        index: 8,
      },
      {
        label: clueLabels[0],
        index: 15,
      },
    ],
  },
  {
    label: "Site",
    inputMatch: "Blight",
    type: "rhyme",
    isInput: false,
    inputIndex: 14,
  },
  {
    label: "Blight",
    inputMatch: "Flight",
    type: "letter",
    isInput: true,
    inputIndex: 10,
    clueMatch: [
      {
        label: clueLabels[1],
        index: 13,
      },
      {
        label: clueLabels[0],
        index: 17,
      },
    ],
  },
  {
    label: "String",
    inputMatch: "Tape",
    type: "means",
    isInput: true,
    inputIndex: 12,
    clueMatch: [
      {
        label: clueLabels[2],
        index: 16,
      },
      {
        label: clueLabels[1],
        index: 18,
      },
    ],
  },
  {
    label: "Sting",
    inputMatch: "String",
    type: "letter",
    isInput: false,
    inputIndex: 15,
  },
  {
    label: "Decay",
    inputMatch: "Blight",
    type: "means",
    isInput: true,
    inputIndex: 14,
    clueMatch: [
      {
        label: clueLabels[1],
        index: 19,
      },
      {
        label: clueLabels[2],
        index: 20,
      },
    ],
  },
  {
    label: "Wring",
    inputMatch: "String",
    type: "rhyme",
    showLines: true,
    inputIndex: 15,
    clueMatch: [
      {
        label: clueLabels[0],
        index: 22,
      },
      {
        label: clueLabels[2],
        index: 21,
      },
    ],
  },
  {
    label: "Delay",
    inputMatch: "Decay",
    type: "letter",
    isInput: false,
    inputIndex: 17,
  },
  {
    label: "Okay",
    inputMatch: "Decay",
    type: "rhyme",
    isInput: false,
    inputIndex: 17,
  },
  {
    label: "Sing",
    inputMatch: "Wring",
    type: "letter",
    isInput: false,
    inputIndex: 18,
  },
  {
    label: "Squeeze",
    inputMatch: "Wring",
    type: "means",
    isInput: false,
    inputIndex: 18,
  },
];
