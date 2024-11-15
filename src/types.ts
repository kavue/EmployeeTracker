// Type for a Department
export interface Department {
    id: number;             
    name: string;           
  }
  
  // Type for a Role
  export interface Role {
    id: number;              
    title: string;           
    salary: number;          
    departmentId: number;    
  }
  
  // Type for an Employee
  export interface Employee {
    id: number;              
    firstName: string;       
    lastName: string;        
    roleId: number;          
    managerId: number | null; 
  }
  
  // Type for Employee Role Update
  export interface EmployeeRoleUpdate {
    employeeId: number;     
    newRoleId: number;      
  }
  
  // Type for a Manager (Optional, depends on your needs)
  export interface Manager {
    id: number;              
    firstName: string;      
    lastName: string;        
  }
  