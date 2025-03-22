
const colleges = [
    // IITs (India)
    { name: "IIT Bombay", min_inter_marks: 85, min_btech_cgpa: 8.0, min_gate_score: 750, branch: "CSE" },
    { name: "IIT Bombay", min_inter_marks: 80, min_btech_cgpa: 7.8, min_gate_score: 700, branch: "Mechanical" },
    { name: "IIT Delhi", min_inter_marks: 82, min_btech_cgpa: 7.8, min_gate_score: 720, branch: "CSE" },
    { name: "IIT Delhi", min_inter_marks: 78, min_btech_cgpa: 7.5, min_gate_score: 680, branch: "Electrical" },
    { name: "IIT Madras", min_inter_marks: 80, min_btech_cgpa: 7.7, min_gate_score: 730, branch: "CSE" },
    { name: "IIT Kharagpur", min_inter_marks: 78, min_btech_cgpa: 7.5, min_gate_score: 700, branch: "ECE" },
    { name: "IIT Kanpur", min_inter_marks: 80, min_btech_cgpa: 7.6, min_gate_score: 710, branch: "CSE" },
    { name: "IIT Roorkee", min_inter_marks: 77, min_btech_cgpa: 7.4, min_gate_score: 690, branch: "Civil" },
    { name: "IIT Guwahati", min_inter_marks: 76, min_btech_cgpa: 7.3, min_gate_score: 670, branch: "Mechanical" },
    { name: "IIT Hyderabad", min_inter_marks: 79, min_btech_cgpa: 7.5, min_gate_score: 700, branch: "CSE" },

    // NITs (India)
    { name: "NIT Trichy", min_inter_marks: 75, min_btech_cgpa: 7.2, min_gate_score: 650, branch: "CSE" },
    { name: "NIT Warangal", min_inter_marks: 74, min_btech_cgpa: 7.1, min_gate_score: 640, branch: "CSE" },
    { name: "NIT Surathkal", min_inter_marks: 73, min_btech_cgpa: 7.0, min_gate_score: 630, branch: "ECE" },
    { name: "NIT Rourkela", min_inter_marks: 73, min_btech_cgpa: 7.1, min_gate_score: 630, branch: "CSE" },

    // IIITs (India)
    { name: "IIIT Hyderabad", min_inter_marks: 80, min_btech_cgpa: 7.8, min_gate_score: 700, branch: "CSE" },
    { name: "IIIT Bangalore", min_inter_marks: 78, min_btech_cgpa: 7.5, min_gate_score: 680, branch: "ECE" },

    // USA
    { name: "MIT", min_inter_marks: 90, min_btech_cgpa: 9.0, min_gate_score: 850, branch: "CSE" }, // GRE ~320
    { name: "Stanford University", min_inter_marks: 88, min_btech_cgpa: 8.8, min_gate_score: 830, branch: "ECE" }, // GRE ~318
    { name: "UC Berkeley", min_inter_marks: 87, min_btech_cgpa: 8.7, min_gate_score: 820, branch: "Mechanical" }, // GRE ~316
    { name: "Carnegie Mellon University", min_inter_marks: 86, min_btech_cgpa: 8.5, min_gate_score: 810, branch: "CSE" }, // GRE ~314
    { name: "Caltech", min_inter_marks: 89, min_btech_cgpa: 8.9, min_gate_score: 840, branch: "Electrical" }, // GRE ~320
    { name: "Georgia Tech", min_inter_marks: 85, min_btech_cgpa: 8.3, min_gate_score: 790, branch: "CSE" }, // GRE ~310
    { name: "University of Texas at Austin", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "Mechanical" }, // GRE ~308
    { name: "UCLA", min_inter_marks: 84, min_btech_cgpa: 8.2, min_gate_score: 780, branch: "ECE" }, // GRE ~309
    { name: "University of Illinois Urbana-Champaign", min_inter_marks: 85, min_btech_cgpa: 8.3, min_gate_score: 790, branch: "CSE" }, // GRE ~310
    { name: "University of Southern California", min_inter_marks: 82, min_btech_cgpa: 8.0, min_gate_score: 760, branch: "Electrical" }, // GRE ~306
    { name: "Princeton University", min_inter_marks: 89, min_btech_cgpa: 8.9, min_gate_score: 840, branch: "CSE" }, // GRE ~320
    { name: "Cornell University", min_inter_marks: 86, min_btech_cgpa: 8.5, min_gate_score: 810, branch: "Mechanical" }, // GRE ~314
    { name: "University of Michigan", min_inter_marks: 85, min_btech_cgpa: 8.3, min_gate_score: 790, branch: "ECE" }, // GRE ~310
    { name: "Purdue University", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "CSE" }, // GRE ~308

    // UK
    { name: "University of Cambridge", min_inter_marks: 88, min_btech_cgpa: 8.7, min_gate_score: 820, branch: "CSE" },
    { name: "University of Oxford", min_inter_marks: 87, min_btech_cgpa: 8.6, min_gate_score: 810, branch: "Mechanical" },
    { name: "Imperial College London", min_inter_marks: 85, min_btech_cgpa: 8.4, min_gate_score: 800, branch: "Electrical" },
    { name: "University College London", min_inter_marks: 83, min_btech_cgpa: 8.2, min_gate_score: 780, branch: "CSE" },
    { name: "University of Edinburgh", min_inter_marks: 82, min_btech_cgpa: 8.0, min_gate_score: 760, branch: "ECE" },
    { name: "University of Manchester", min_inter_marks: 81, min_btech_cgpa: 7.9, min_gate_score: 750, branch: "Mechanical" },
    { name: "King's College London", min_inter_marks: 80, min_btech_cgpa: 7.8, min_gate_score: 740, branch: "CSE" },

    // Canada
    { name: "University of Toronto", min_inter_marks: 85, min_btech_cgpa: 8.3, min_gate_score: 790, branch: "CSE" }, // GRE ~310
    { name: "University of British Columbia", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "Mechanical" }, // GRE ~308
    { name: "McGill University", min_inter_marks: 82, min_btech_cgpa: 8.0, min_gate_score: 760, branch: "ECE" }, // GRE ~306
    { name: "University of Waterloo", min_inter_marks: 84, min_btech_cgpa: 8.2, min_gate_score: 780, branch: "CSE" }, // GRE ~309
    { name: "University of Alberta", min_inter_marks: 81, min_btech_cgpa: 7.9, min_gate_score: 750, branch: "Electrical" }, // GRE ~305
    { name: "McMaster University", min_inter_marks: 80, min_btech_cgpa: 7.8, min_gate_score: 740, branch: "Mechanical" },

    // Australia
    { name: "Australian National University", min_inter_marks: 84, min_btech_cgpa: 8.2, min_gate_score: 780, branch: "CSE" }, // GRE ~309
    { name: "University of Melbourne", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "Electrical" }, // GRE ~308
    { name: "University of Sydney", min_inter_marks: 82, min_btech_cgpa: 8.0, min_gate_score: 760, branch: "Mechanical" }, // GRE ~306
    { name: "UNSW Sydney", min_inter_marks: 81, min_btech_cgpa: 7.9, min_gate_score: 750, branch: "CSE" }, // GRE ~305
    { name: "University of Queensland", min_inter_marks: 80, min_btech_cgpa: 7.8, min_gate_score: 740, branch: "ECE" },

    // Germany
    { name: "TU Munich", min_inter_marks: 85, min_btech_cgpa: 8.3, min_gate_score: 790, branch: "CSE" }, // GRE ~310
    { name: "RWTH Aachen", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "Mechanical" }, // GRE ~308
    { name: "TU Berlin", min_inter_marks: 82, min_btech_cgpa: 8.0, min_gate_score: 760, branch: "ECE" }, // GRE ~306
    { name: "University of Stuttgart", min_inter_marks: 81, min_btech_cgpa: 7.9, min_gate_score: 750, branch: "CSE" },
    { name: "TU Darmstadt", min_inter_marks: 80, min_btech_cgpa: 7.8, min_gate_score: 740, branch: "Electrical" },

    // Singapore
    { name: "National University of Singapore", min_inter_marks: 86, min_btech_cgpa: 8.5, min_gate_score: 810, branch: "CSE" }, // GRE ~314
    { name: "Nanyang Technological University", min_inter_marks: 85, min_btech_cgpa: 8.3, min_gate_score: 790, branch: "ECE" }, // GRE ~310

    // Japan
    { name: "University of Tokyo", min_inter_marks: 85, min_btech_cgpa: 8.3, min_gate_score: 790, branch: "CSE" }, // GRE ~310
    { name: "Kyoto University", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "Mechanical" }, // GRE ~308
    { name: "Osaka University", min_inter_marks: 81, min_btech_cgpa: 7.9, min_gate_score: 750, branch: "ECE" },

    // Switzerland
    { name: "ETH Zurich", min_inter_marks: 88, min_btech_cgpa: 8.7, min_gate_score: 820, branch: "CSE" }, // GRE ~316
    { name: "EPFL Lausanne", min_inter_marks: 87, min_btech_cgpa: 8.6, min_gate_score: 810, branch: "Electrical" }, // GRE ~314

    // France
    { name: "École Polytechnique", min_inter_marks: 84, min_btech_cgpa: 8.2, min_gate_score: 780, branch: "CSE" },
    { name: "CentraleSupélec", min_inter_marks: 82, min_btech_cgpa: 8.0, min_gate_score: 760, branch: "Mechanical" },

    // Netherlands
    { name: "Delft University of Technology", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "CSE" }, // GRE ~308
    { name: "University of Amsterdam", min_inter_marks: 81, min_btech_cgpa: 7.9, min_gate_score: 750, branch: "ECE" },

    // Sweden
    { name: "KTH Royal Institute of Technology", min_inter_marks: 82, min_btech_cgpa: 8.0, min_gate_score: 760, branch: "CSE" },
    { name: "Chalmers University of Technology", min_inter_marks: 80, min_btech_cgpa: 7.8, min_gate_score: 740, branch: "Mechanical" },

    // South Korea
    { name: "KAIST", min_inter_marks: 84, min_btech_cgpa: 8.2, min_gate_score: 780, branch: "CSE" }, // GRE ~309
    { name: "Seoul National University", min_inter_marks: 83, min_btech_cgpa: 8.1, min_gate_score: 770, branch: "ECE" },

    // Additional Indian Institutes (to balance)
    { name: "IIT BHU", min_inter_marks: 76, min_btech_cgpa: 7.3, min_gate_score: 670, branch: "CSE" },
    { name: "IIT Indore", min_inter_marks: 75, min_btech_cgpa: 7.2, min_gate_score: 660, branch: "Mechanical" },
    { name: "BITS Pilani", min_inter_marks: 80, min_btech_cgpa: 7.5, min_gate_score: 680, branch: "CSE" },
];

module.exports = colleges;