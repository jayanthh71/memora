export interface Pod {
  id: string;
  email: string;
  name: string;
  description: string;
  dateCreated: string;
  dateDue: string;
  content: string;
}

export interface FormFields {
  name: string;
  description: string;
  dueDate: string;
  content: string;
}
