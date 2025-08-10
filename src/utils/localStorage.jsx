const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCount: {
      isActive: 2,
      isCompleted: 2,
      isFailed: 0,
      isNew: 1
    },
    tasks: [
      {
        taskTitle: "Prepare Report",
        taskDescription: "Compile the monthly sales data and prepare a presentation.",
        taskDate: "2025-07-25",
        category: "Reports",
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team sync meeting.",
        taskDate: "2025-07-24",
        category: "Meetings",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Client Feedback Review",
        taskDescription: "Analyze client feedback and report key pain points.",
        taskDate: "2025-07-22",
        category: "Client",
        isActive: true,
        isNew: false,
        isCompleted: true,
        isFailed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      isActive: 1,
      isCompleted: 2,
      isFailed: 1,
      isNew: 1
    },
    tasks: [
      {
        taskTitle: "Bug Fix",
        taskDescription: "Fix login page redirect bug.",
        taskDate: "2025-07-26",
        category: "Development",
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false
      },
      {
        taskTitle: "Documentation",
        taskDescription: "Update user documentation with new feature set.",
        taskDate: "2025-07-23",
        category: "Docs",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review pull requests for the recent sprint.",
        taskDate: "2025-07-24",
        category: "Development",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Security Audit",
        taskDescription: "Audit server-side scripts for vulnerabilities.",
        taskDate: "2025-07-20",
        category: "Security",
        isActive: false,
        isNew: false,
        isCompleted: false,
        isFailed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      isActive: 2,
      isCompleted: 2,
      isFailed: 1,
      isNew: 2
    },
    tasks: [
      {
        taskTitle: "Design Mockups",
        taskDescription: "Create wireframes for upcoming dashboard UI.",
        taskDate: "2025-07-25",
        category: "Design",
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false
      },
      {
        taskTitle: "Style Guide Update",
        taskDescription: "Refactor component styles to match design system.",
        taskDate: "2025-07-22",
        category: "Design",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Asset Collection",
        taskDescription: "Gather all media assets required for release.",
        taskDate: "2025-07-21",
        category: "Assets",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Design QA",
        taskDescription: "Verify UI matches mockups on staging.",
        taskDate: "2025-07-23",
        category: "QA",
        isActive: false,
        isNew: false,
        isCompleted: false,
        isFailed: true
      },
      {
        taskTitle: "Feedback Meeting",
        taskDescription: "Present design review feedback to the team.",
        taskDate: "2025-07-26",
        category: "Meetings",
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Riya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      isActive: 1,
      isCompleted: 2,
      isFailed: 0,
      isNew: 1
    },
    tasks: [
      {
        taskTitle: "Testing Plan",
        taskDescription: "Draft end-to-end testing scenarios.",
        taskDate: "2025-07-25",
        category: "QA",
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false
      },
      {
        taskTitle: "Feature Testing",
        taskDescription: "Test new signup flow and report bugs.",
        taskDate: "2025-07-24",
        category: "QA",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Regression Testing",
        taskDescription: "Run regression test suite on staging.",
        taskDate: "2025-07-23",
        category: "QA",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Meera",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      isActive: 1,
      isCompleted: 2,
      isFailed: 2,
      isNew: 1
    },
    tasks: [
      {
        taskTitle: "Market Research",
        taskDescription: "Research competitor product offerings.",
        taskDate: "2025-07-26",
        category: "Marketing",
        isActive: true,
        isNew: true,
        isCompleted: false,
        isFailed: false
      },
      {
        taskTitle: "Ad Copywriting",
        taskDescription: "Write ad copy for Google Ads campaign.",
        taskDate: "2025-07-24",
        category: "Marketing",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Campaign Report",
        taskDescription: "Analyze and summarize results from latest ad campaign.",
        taskDate: "2025-07-23",
        category: "Analytics",
        isActive: false,
        isNew: false,
        isCompleted: true,
        isFailed: false
      },
      {
        taskTitle: "Social Media Post",
        taskDescription: "Schedule a weekend post for Instagram.",
        taskDate: "2025-07-22",
        category: "Social Media",
        isActive: false,
        isNew: false,
        isCompleted: false,
        isFailed: true
      },
      {
        taskTitle: "Newsletter Draft",
        taskDescription: "Draft the monthly company newsletter.",
        taskDate: "2025-07-21",
        category: "Email",
        isActive: false,
        isNew: false,
        isCompleted: false,
        isFailed: true
      }
    ]
  }
];

const admin = [{
    id: 1,
    email: "admin@example.com",
    password: "123"
}];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  // Get the raw data from localStorage
  const employeesString = localStorage.getItem('employees');
  const adminString = localStorage.getItem('admin');

  // If the data exists, parse it. Otherwise, use an empty array.
  const employees = employeesString ? JSON.parse(employeesString) : [];
  const admin = adminString ? JSON.parse(adminString) : [];

  // return the data
  return { employees, admin };
};