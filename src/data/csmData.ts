export interface SurveyResponse {
  id: string;
  date: string;
  clientName: string;
  department: string;
  serviceType: string;
  ratings: {
    timeliness: number;
    quality: number;
    professionalism: number;
    communication: number;
    overall: number;
  };
  feedback: string;
}

export interface ServiceCategory {
  name: string;
  count: number;
  avgRating: number;
}

export const surveyResponses: SurveyResponse[] = [
  {
    id: '1',
    date: '2026-02-20',
    clientName: 'John Smith',
    department: 'Administrative Services',
    serviceType: 'Document Processing',
    ratings: {
      timeliness: 5,
      quality: 5,
      professionalism: 5,
      communication: 4,
      overall: 5,
    },
    feedback: 'Excellent service. Documents were processed quickly and accurately.',
  },
  {
    id: '2',
    date: '2026-02-19',
    clientName: 'Maria Garcia',
    department: 'Administrative Services',
    serviceType: 'Permit Application',
    ratings: {
      timeliness: 4,
      quality: 4,
      professionalism: 5,
      communication: 4,
      overall: 4,
    },
    feedback: 'Good service overall. Staff was very helpful and professional.',
  },
  {
    id: '3',
    date: '2026-02-18',
    clientName: 'David Chen',
    department: 'Administrative Services',
    serviceType: 'Records Request',
    ratings: {
      timeliness: 3,
      quality: 4,
      professionalism: 4,
      communication: 3,
      overall: 3,
    },
    feedback: 'Service was okay but took longer than expected.',
  },
  {
    id: '4',
    date: '2026-02-17',
    clientName: 'Sarah Johnson',
    department: 'Administrative Services',
    serviceType: 'Certification',
    ratings: {
      timeliness: 5,
      quality: 5,
      professionalism: 5,
      communication: 5,
      overall: 5,
    },
    feedback: 'Outstanding service! Very satisfied with the entire process.',
  },
  {
    id: '5',
    date: '2026-02-16',
    clientName: 'Michael Brown',
    department: 'Administrative Services',
    serviceType: 'Document Processing',
    ratings: {
      timeliness: 4,
      quality: 5,
      professionalism: 4,
      communication: 4,
      overall: 4,
    },
    feedback: 'Very good service. Staff was knowledgeable and helpful.',
  },
  {
    id: '6',
    date: '2026-02-15',
    clientName: 'Emily Davis',
    department: 'Administrative Services',
    serviceType: 'Permit Application',
    ratings: {
      timeliness: 5,
      quality: 4,
      professionalism: 5,
      communication: 5,
      overall: 5,
    },
    feedback: 'Great experience. Process was smooth and efficient.',
  },
  {
    id: '7',
    date: '2026-02-14',
    clientName: 'James Wilson',
    department: 'Administrative Services',
    serviceType: 'Records Request',
    ratings: {
      timeliness: 4,
      quality: 4,
      professionalism: 4,
      communication: 4,
      overall: 4,
    },
    feedback: 'Satisfied with the service provided.',
  },
  {
    id: '8',
    date: '2026-02-13',
    clientName: 'Lisa Martinez',
    department: 'Administrative Services',
    serviceType: 'Certification',
    ratings: {
      timeliness: 3,
      quality: 3,
      professionalism: 4,
      communication: 3,
      overall: 3,
    },
    feedback: 'Service needs improvement in processing time.',
  },
  {
    id: '9',
    date: '2026-02-12',
    clientName: 'Robert Taylor',
    department: 'Administrative Services',
    serviceType: 'Document Processing',
    ratings: {
      timeliness: 5,
      quality: 5,
      professionalism: 5,
      communication: 5,
      overall: 5,
    },
    feedback: 'Exceptional service. Highly recommend!',
  },
  {
    id: '10',
    date: '2026-02-11',
    clientName: 'Jennifer Lee',
    department: 'Administrative Services',
    serviceType: 'Permit Application',
    ratings: {
      timeliness: 4,
      quality: 4,
      professionalism: 5,
      communication: 4,
      overall: 4,
    },
    feedback: 'Good service. Staff was courteous and professional.',
  },
];

export const monthlyData = [
  { month: 'Aug', score: 4.1, responses: 45 },
  { month: 'Sep', score: 4.3, responses: 52 },
  { month: 'Oct', score: 4.2, responses: 48 },
  { month: 'Nov', score: 4.4, responses: 55 },
  { month: 'Dec', score: 4.3, responses: 50 },
  { month: 'Jan', score: 4.5, responses: 58 },
  { month: 'Feb', score: 4.3, responses: 42 },
];

export const serviceCategories: ServiceCategory[] = [
  { name: 'Document Processing', count: 35, avgRating: 4.6 },
  { name: 'Permit Application', count: 28, avgRating: 4.4 },
  { name: 'Records Request', count: 22, avgRating: 3.8 },
  { name: 'Certification', count: 18, avgRating: 4.2 },
  { name: 'General Inquiry', count: 15, avgRating: 4.5 },
];

// Department and Employee Data
export interface Employee {
  id: string;
  name: string;
  designation: string;
  clearanceLevel: number;
  department: string;
  role: string;
  responsibilities: string[];
  yearsOfService: number;
  specializations: string[];
  status: 'Active' | 'On Assignment' | 'Leave';
}

export interface Department {
  id: string;
  name: string;
  fullName: string;
  description: string;
  mission: string;
  clearanceRequired: number;
  established: string;
  headOfDepartment: string;
  totalStaff: number;
  divisions: string[];
}

export const departmentInfo: Department = {
  id: 'RAISA',
  name: 'RAISA',
  fullName: 'Recordkeeping and Information Security Administration',
  description: 'RAISA is responsible for the maintenance, security, and distribution of all classified Foundation documentation. It serves as the primary authority on information protocols and database management across all Foundation facilities.',
  mission: 'To secure, preserve, and control access to all classified information within the SCP Foundation while maintaining the integrity and availability of critical documentation.',
  clearanceRequired: 4,
  established: '1954',
  headOfDepartment: 'Maria Jones',
  totalStaff: 24,
  divisions: [
    'Records & Archival Office',
    'Technical Office',
    'Engineering Office',
    'Security Office',
    'Surveillance Division',
    'Special Technology Applications Group'
  ]
};

export const employees: Employee[] = [
  {
    id: 'EMP-001',
    name: 'Maria Jones',
    designation: 'Director of RAISA',
    clearanceLevel: 5,
    department: 'Administrative',
    role: 'Department Director',
    responsibilities: [
      'Oversee all RAISA operations and personnel',
      'Approve Level 4 and above information requests',
      'Coordinate with O5 Council on information security',
      'Manage inter-departmental information protocols',
      'Set strategic direction for RAISA'
    ],
    yearsOfService: 15,
    specializations: ['Information Security', 'Database Architecture', 'Classified Document Management', 'Strategic Planning'],
    status: 'Active'
  },
  {
    id: 'EMP-002',
    name: 'Chris Aster',
    designation: 'Assistant Director of RAISA',
    clearanceLevel: 4,
    department: 'Administrative',
    role: 'Assistant Director',
    responsibilities: [
      'Support Director in daily operations',
      'Coordinate between divisions',
      'Oversee administrative functions',
      'Manage personnel assignments',
      'Act as Director in their absence'
    ],
    yearsOfService: 10,
    specializations: ['Operations Management', 'Personnel Coordination', 'Administrative Oversight'],
    status: 'Active'
  },
  {
    id: 'EMP-003',
    name: 'R. Kandinsky',
    designation: 'Administrative Coordinator',
    clearanceLevel: 3,
    department: 'Administrative',
    role: 'Office Management',
    responsibilities: [
      'Coordinate administrative schedules and meetings',
      'Manage internal communications',
      'Process personnel documentation',
      'Maintain administrative records'
    ],
    yearsOfService: 5,
    specializations: ['Office Administration', 'Records Management', 'Communication'],
    status: 'Active'
  },
  {
    id: 'EMP-004',
    name: 'G. Utich',
    designation: 'Intake Specialist',
    clearanceLevel: 3,
    department: 'Operators',
    role: 'Document Intake & Processing',
    responsibilities: [
      'Process incoming document requests',
      'Verify clearance levels and authorization',
      'Manage document intake workflow',
      'Coordinate with Records & Archival Office',
      'Track request status and completion'
    ],
    yearsOfService: 6,
    specializations: ['Document Processing', 'Access Control', 'Workflow Management'],
    status: 'Active'
  },
  {
    id: 'EMP-005',
    name: 'L. Rowe',
    designation: 'Records Processing Operator',
    clearanceLevel: 3,
    department: 'Operators',
    role: 'Records Handler',
    responsibilities: [
      'Sort and categorize incoming records',
      'Execute digital archival procedures',
      'Maintain filing systems',
      'Assist with document retrieval requests'
    ],
    yearsOfService: 4,
    specializations: ['Document Handling', 'Filing Systems', 'Data Entry'],
    status: 'Active'
  },
  {
    id: 'EMP-006',
    name: 'T. Morrison',
    designation: 'Database Operator',
    clearanceLevel: 3,
    department: 'Operators',
    role: 'Database Entry Specialist',
    responsibilities: [
      'Input data into Foundation databases',
      'Verify data accuracy and completeness',
      'Run routine database queries',
      'Generate standard reports'
    ],
    yearsOfService: 3,
    specializations: ['Data Entry', 'Database Operations', 'Quality Control'],
    status: 'Active'
  },
  {
    id: 'EMP-007',
    name: 'K. Sullivan',
    designation: 'Chief Archivist',
    clearanceLevel: 4,
    department: 'Records & Archival Office',
    role: 'Archives Director',
    responsibilities: [
      'Oversee all archival operations',
      'Establish archival standards and protocols',
      'Manage preservation of historical documents',
      'Coordinate with other Foundation sites',
      'Supervise archival staff'
    ],
    yearsOfService: 14,
    specializations: ['Archival Science', 'Document Preservation', 'Historical Research'],
    status: 'Active'
  },
  {
    id: 'EMP-008',
    name: 'D. Chen',
    designation: 'Senior Archivist',
    clearanceLevel: 3,
    department: 'Records & Archival Office',
    role: 'Digital Archives Specialist',
    responsibilities: [
      'Digitize physical documents',
      'Maintain digital archive infrastructure',
      'Implement metadata standards',
      'Ensure long-term digital preservation'
    ],
    yearsOfService: 8,
    specializations: ['Digital Archiving', 'Metadata', 'Preservation Technology'],
    status: 'Active'
  },
  {
    id: 'EMP-009',
    name: 'P. Volkov',
    designation: 'Records Classification Specialist',
    clearanceLevel: 4,
    department: 'Records & Archival Office',
    role: 'Classification Authority',
    responsibilities: [
      'Review documents for classification level',
      'Apply appropriate security markings',
      'Process declassification requests',
      'Ensure compliance with information protocols'
    ],
    yearsOfService: 11,
    specializations: ['Document Classification', 'Security Protocols', 'Compliance'],
    status: 'Active'
  },
  {
    id: 'EMP-010',
    name: 'M. Nakamura',
    designation: 'Records Analyst',
    clearanceLevel: 3,
    department: 'Records & Archival Office',
    role: 'Documentation Specialist',
    responsibilities: [
      'Analyze and catalog records',
      'Maintain finding aids and indexes',
      'Assist researchers with document retrieval',
      'Prepare archival reports'
    ],
    yearsOfService: 5,
    specializations: ['Records Analysis', 'Cataloging', 'Research Assistance'],
    status: 'Active'
  },
  {
    id: 'EMP-011',
    name: 'J. Rodriguez',
    designation: 'Technical Systems Manager',
    clearanceLevel: 4,
    department: 'Technical Office',
    role: 'IT Infrastructure Lead',
    responsibilities: [
      'Manage RAISA technical infrastructure',
      'Oversee database systems and networks',
      'Implement technical security measures',
      'Coordinate system upgrades and maintenance'
    ],
    yearsOfService: 12,
    specializations: ['Network Administration', 'Database Management', 'System Security'],
    status: 'Active'
  },
  {
    id: 'EMP-012',
    name: 'S. Ahmed',
    designation: 'Database Administrator',
    clearanceLevel: 3,
    department: 'Technical Office',
    role: 'Database Specialist',
    responsibilities: [
      'Maintain database performance and integrity',
      'Execute backup and recovery procedures',
      'Monitor system health and performance',
      'Optimize database queries'
    ],
    yearsOfService: 7,
    specializations: ['SQL Administration', 'Database Optimization', 'Data Recovery'],
    status: 'Active'
  },
  {
    id: 'EMP-013',
    name: 'A. Kowalski',
    designation: 'Network Administrator',
    clearanceLevel: 3,
    department: 'Technical Office',
    role: 'Network Operations',
    responsibilities: [
      'Maintain secure network infrastructure',
      'Monitor network traffic and security',
      'Configure network devices and protocols',
      'Troubleshoot connectivity issues'
    ],
    yearsOfService: 6,
    specializations: ['Network Security', 'System Configuration', 'Network Monitoring'],
    status: 'Active'
  },
  {
    id: 'EMP-014',
    name: 'H. Bergström',
    designation: 'Systems Engineer',
    clearanceLevel: 4,
    department: 'Engineering Office',
    role: 'Engineering Lead',
    responsibilities: [
      'Design and implement technical solutions',
      'Develop automated systems for document processing',
      'Integrate new technologies',
      'Lead engineering projects'
    ],
    yearsOfService: 10,
    specializations: ['Systems Engineering', 'Automation', 'Software Development'],
    status: 'Active'
  },
  {
    id: 'EMP-015',
    name: 'N. Patel',
    designation: 'Software Engineer',
    clearanceLevel: 3,
    department: 'Engineering Office',
    role: 'Application Developer',
    responsibilities: [
      'Develop internal applications and tools',
      'Maintain existing software systems',
      'Debug and resolve technical issues',
      'Document code and systems'
    ],
    yearsOfService: 5,
    specializations: ['Software Development', 'Python', 'Web Applications'],
    status: 'Active'
  },
  {
    id: 'EMP-016',
    name: 'F. Costa',
    designation: 'Hardware Engineer',
    clearanceLevel: 3,
    department: 'Engineering Office',
    role: 'Hardware Specialist',
    responsibilities: [
      'Maintain server hardware and equipment',
      'Deploy new hardware systems',
      'Perform hardware diagnostics and repairs',
      'Manage equipment inventory'
    ],
    yearsOfService: 8,
    specializations: ['Hardware Maintenance', 'Server Administration', 'Equipment Management'],
    status: 'On Assignment'
  },
  {
    id: 'EMP-017',
    name: 'E. Williams',
    designation: 'Information Security Officer',
    clearanceLevel: 4,
    department: 'Security Office',
    role: 'Security Operations Lead',
    responsibilities: [
      'Oversee information security operations',
      'Conduct security audits and assessments',
      'Respond to security incidents',
      'Develop security policies and procedures',
      'Train personnel on security protocols'
    ],
    yearsOfService: 13,
    specializations: ['Information Security', 'Incident Response', 'Security Policy'],
    status: 'Active'
  },
  {
    id: 'EMP-018',
    name: 'V. Ivanova',
    designation: 'Cybersecurity Analyst',
    clearanceLevel: 3,
    department: 'Security Office',
    role: 'Threat Detection',
    responsibilities: [
      'Monitor systems for security threats',
      'Analyze security logs and alerts',
      'Investigate potential breaches',
      'Implement security countermeasures'
    ],
    yearsOfService: 6,
    specializations: ['Threat Analysis', 'Security Monitoring', 'Penetration Testing'],
    status: 'Active'
  },
  {
    id: 'EMP-019',
    name: 'B. Kim',
    designation: 'Access Control Specialist',
    clearanceLevel: 3,
    department: 'Security Office',
    role: 'Authorization Management',
    responsibilities: [
      'Manage user access permissions',
      'Verify clearance levels',
      'Process access requests',
      'Maintain access control lists'
    ],
    yearsOfService: 4,
    specializations: ['Access Control', 'Identity Management', 'Authorization Protocols'],
    status: 'Active'
  },
  {
    id: 'EMP-020',
    name: 'C. Martinez',
    designation: 'Surveillance Coordinator',
    clearanceLevel: 4,
    department: 'Surveillance Division',
    role: 'Operations Supervisor',
    responsibilities: [
      'Coordinate surveillance operations',
      'Monitor access to sensitive information',
      'Track document access patterns',
      'Investigate anomalous activities',
      'Report security concerns'
    ],
    yearsOfService: 9,
    specializations: ['Surveillance Operations', 'Activity Monitoring', 'Pattern Analysis'],
    status: 'Active'
  },
  {
    id: 'EMP-021',
    name: 'I. Petrova',
    designation: 'Data Analyst',
    clearanceLevel: 3,
    department: 'Surveillance Division',
    role: 'Analytics Specialist',
    responsibilities: [
      'Analyze access logs and usage data',
      'Generate surveillance reports',
      'Identify unusual access patterns',
      'Support investigations'
    ],
    yearsOfService: 5,
    specializations: ['Data Analysis', 'Log Analysis', 'Statistical Analysis'],
    status: 'Active'
  },
  {
    id: 'EMP-022',
    name: 'W. Thompson',
    designation: 'Special Technology Officer',
    clearanceLevel: 4,
    department: 'Special Technology Applications Group',
    role: 'Advanced Systems Lead',
    responsibilities: [
      'Research and develop specialized technologies',
      'Implement anomalous data handling systems',
      'Coordinate with Research Division on tech needs',
      'Evaluate emerging technologies for Foundation use',
      'Oversee classified technology projects'
    ],
    yearsOfService: 11,
    specializations: ['Advanced Technology', 'Research & Development', 'Anomalous Systems'],
    status: 'Active'
  },
  {
    id: 'EMP-023',
    name: 'O. Yamamoto',
    designation: 'Systems Integration Specialist',
    clearanceLevel: 3,
    department: 'Special Technology Applications Group',
    role: 'Integration Engineer',
    responsibilities: [
      'Integrate specialized systems with existing infrastructure',
      'Test new technology implementations',
      'Troubleshoot complex technical issues',
      'Document specialized systems'
    ],
    yearsOfService: 7,
    specializations: ['Systems Integration', 'Technical Testing', 'Complex Systems'],
    status: 'Active'
  },
  {
    id: 'EMP-024',
    name: 'Q. Hassan',
    designation: 'Anomalous Data Specialist',
    clearanceLevel: 4,
    department: 'Special Technology Applications Group',
    role: 'Specialized Data Handler',
    responsibilities: [
      'Handle data from anomalous sources',
      'Develop protocols for unusual information types',
      'Assess risks of anomalous information',
      'Coordinate with containment teams'
    ],
    yearsOfService: 8,
    specializations: ['Anomalous Data', 'Risk Assessment', 'Specialized Protocols'],
    status: 'Active'
  }
];
