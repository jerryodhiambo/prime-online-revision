export interface Exam {
  id?: string;
  document_type?: string;
  category?: string;
  subject?: string;
  name?: string;
  price?: string;
  link?: string;
  created_at?: string;
  updated_at?: string;
  available?: boolean;
}

export interface Order {
  id?: string;
  available?: boolean;
  category?: string;
  created_at?: string;
  delivered?: boolean;
  document_type?: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
  price?: string;
  subject?: string;
  updated_at?: string;
}
